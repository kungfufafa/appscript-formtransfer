#!/usr/bin/env python3
"""Sync Apps Script approval mechanism while preserving per-form FLOWS.

Each form file owns its `const FLOWS = { ... }` block. The shared approval
mechanism starts at `function App()` and is rendered from `_mechanism.template.gs`
using values from `forms.config.json`.
"""

from __future__ import annotations

import argparse
import difflib
import json
import sys
from pathlib import Path


ROOT = Path(__file__).resolve().parent
CONFIG_FILE = ROOT / "forms.config.json"
TEMPLATE_FILE = ROOT / "_mechanism.template.gs"
MECHANISM_MARKER = "function App()"


class MechanismError(RuntimeError):
    """Raised when a file cannot be checked or synced safely."""


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def write_text(path: Path, content: str) -> None:
    path.write_text(content, encoding="utf-8")


def split_at_mechanism(content: str, label: str) -> tuple[str, str]:
    index = content.find(MECHANISM_MARKER)
    if index == -1:
        raise MechanismError(f"{label}: marker `{MECHANISM_MARKER}` tidak ditemukan")
    return content[:index], content[index:]


def load_config(config_path: Path = CONFIG_FILE) -> dict:
    try:
        config = json.loads(read_text(config_path))
    except FileNotFoundError as exc:
        raise MechanismError(f"Config tidak ditemukan: {config_path}") from exc
    except json.JSONDecodeError as exc:
        raise MechanismError(f"Config JSON tidak valid: {config_path}: {exc}") from exc

    forms = config.get("forms")
    if not isinstance(forms, dict) or not forms:
        raise MechanismError("forms.config.json harus punya object `forms`")

    return config


def render_template_mechanism(form_config: dict, template_path: Path = TEMPLATE_FILE) -> str:
    try:
        template = read_text(template_path)
    except FileNotFoundError as exc:
        raise MechanismError(f"Template tidak ditemukan: {template_path}") from exc

    _, mechanism = split_at_mechanism(template, str(template_path))

    replacements = {
        "{{URL}}": form_config.get("url"),
        "{{SHEETNAME}}": form_config.get("sheetname"),
        "{{UID_PREFIX}}": form_config.get("uidPrefix"),
    }

    missing = [key for key, value in replacements.items() if not isinstance(value, str)]
    if missing:
        raise MechanismError(
            "Config form belum lengkap untuk placeholder: " + ", ".join(missing)
        )

    for placeholder, value in replacements.items():
        mechanism = mechanism.replace(placeholder, value)

    leftovers = [placeholder for placeholder in replacements if placeholder in mechanism]
    if leftovers:
        raise MechanismError("Placeholder belum terganti: " + ", ".join(leftovers))

    return mechanism


def expected_form_content(current_content: str, form_config: dict, label: str) -> str:
    flows_prefix, _ = split_at_mechanism(current_content, label)
    mechanism = render_template_mechanism(form_config)
    return flows_prefix.rstrip() + "\n\n" + mechanism.rstrip() + "\n"


def unified_diff(path: Path, current: str, expected: str) -> str:
    return "".join(
        difflib.unified_diff(
            current.splitlines(keepends=True),
            expected.splitlines(keepends=True),
            fromfile=str(path),
            tofile=f"{path} (expected)",
        )
    )


def iter_form_files(config: dict, only: list[str] | None = None) -> list[tuple[Path, dict]]:
    selected = set(only or [])
    forms = []

    for filename, form_config in config["forms"].items():
        if selected and filename not in selected:
            continue
        forms.append((ROOT / filename, form_config))

    unknown = selected - set(config["forms"])
    if unknown:
        raise MechanismError(
            "File tidak ada di forms.config.json: " + ", ".join(sorted(unknown))
        )

    return forms


def check_or_sync(
    *,
    check: bool,
    dry_run: bool,
    show_diff: bool,
    only: list[str] | None,
) -> int:
    config = load_config()
    changed: list[Path] = []
    clean: list[Path] = []

    for path, form_config in iter_form_files(config, only):
        if not path.exists():
            raise MechanismError(f"File form tidak ditemukan: {path}")

        current = read_text(path)
        expected = expected_form_content(current, form_config, str(path))

        if current == expected:
            clean.append(path)
            continue

        changed.append(path)
        if show_diff:
            sys.stdout.write(unified_diff(path, current, expected))

        if not check and not dry_run:
            write_text(path, expected)

    if changed:
        names = ", ".join(path.name for path in changed)
        if check:
            print(f"DRIFT: mechanism berbeda di {names}")
            return 1
        if dry_run:
            print(f"DRY RUN: akan sync mechanism di {names}")
            return 1
        print(f"SYNCED: mechanism disamakan di {names}")
        return 0

    print(
        "OK: semua mechanism sama dengan template; FLOWS dibiarkan per file "
        f"({len(clean)} file dicek)"
    )
    return 0


def parse_args(argv: list[str]) -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description="Check/sync shared Apps Script mechanism and preserve FLOWS."
    )
    parser.add_argument(
        "--check",
        action="store_true",
        help="Cek drift saja. Exit 1 kalau ada file yang perlu disync.",
    )
    parser.add_argument(
        "--dry-run",
        action="store_true",
        help="Tampilkan file yang akan berubah tanpa menulis perubahan.",
    )
    parser.add_argument(
        "--diff",
        action="store_true",
        help="Tampilkan unified diff untuk drift mechanism.",
    )
    parser.add_argument(
        "--only",
        nargs="+",
        help="Batasi ke file tertentu, misalnya: --only online.gs msi.gs",
    )
    return parser.parse_args(argv)


def main(argv: list[str] | None = None) -> int:
    args = parse_args(argv or sys.argv[1:])
    try:
        return check_or_sync(
            check=args.check,
            dry_run=args.dry_run,
            show_diff=args.diff,
            only=args.only,
        )
    except MechanismError as exc:
        print(f"ERROR: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
