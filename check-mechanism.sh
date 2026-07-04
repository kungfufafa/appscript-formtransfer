#!/usr/bin/env bash
# Quick CI/local check: fail if any form .gs drifted from _mechanism.template.gs
set -euo pipefail
cd "$(dirname "$0")"
python3 sync-mechanism.py --check
