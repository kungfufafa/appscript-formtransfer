import importlib.util
import unittest
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
MODULE_PATH = ROOT / "sync-mechanism.py"


spec = importlib.util.spec_from_file_location("sync_mechanism", MODULE_PATH)
sync_mechanism = importlib.util.module_from_spec(spec)
spec.loader.exec_module(sync_mechanism)


class SyncMechanismTest(unittest.TestCase):
    def test_split_at_mechanism_preserves_prefix(self):
        content = "const FLOWS = {}\n\nfunction App() {}\n"

        prefix, mechanism = sync_mechanism.split_at_mechanism(content, "sample.gs")

        self.assertEqual(prefix, "const FLOWS = {}\n\n")
        self.assertEqual(mechanism, "function App() {}\n")

    def test_expected_content_preserves_flows_and_replaces_mechanism(self):
        current = "const FLOWS = {\n  Weird: []\n}\n\nfunction App() {}\n"
        form_config = {
            "url": "https://example.com/exec",
            "sheetname": "Form Responses 1",
            "uidPrefix": "XX-",
        }

        expected = sync_mechanism.expected_form_content(current, form_config, "sample.gs")

        self.assertTrue(expected.startswith("const FLOWS = {\n  Weird: []\n}\n\n"))
        self.assertIn('this.url = "https://example.com/exec"', expected)
        self.assertIn('this.sheetname = "Form Responses 1"', expected)
        self.assertIn('this.uidPrefix = "XX-"', expected)
        self.assertNotIn("{{URL}}", expected)
        self.assertNotIn("{{SHEETNAME}}", expected)
        self.assertNotIn("{{UID_PREFIX}}", expected)

    def test_rendered_mechanism_does_not_include_top_level_test_functions(self):
        form_config = {
            "url": "https://example.com/exec",
            "sheetname": "Form Responses 1",
            "uidPrefix": "XX-",
        }

        mechanism = sync_mechanism.render_template_mechanism(form_config)

        self.assertNotIn("function testWhatsAppSend", mechanism)
        self.assertNotIn("function testWahaSend", mechanism)

    def test_rendered_mechanism_includes_bulk_resend_helper(self):
        form_config = {
            "url": "https://example.com/exec",
            "sheetname": "Form Responses 1",
            "uidPrefix": "XX-",
        }

        mechanism = sync_mechanism.render_template_mechanism(form_config)

        self.assertIn("function resendBulkUID()", mechanism)
        self.assertIn('const uids = [\n    "UID1",\n    "UID2"\n  ]', mechanism)
        self.assertIn("result: resendEmailsByUid(uid)", mechanism)

    def test_unknown_only_file_is_rejected(self):
        config = {"forms": {"online.gs": {}}}

        with self.assertRaises(sync_mechanism.MechanismError):
            sync_mechanism.iter_form_files(config, ["missing.gs"])


if __name__ == "__main__":
    unittest.main()
