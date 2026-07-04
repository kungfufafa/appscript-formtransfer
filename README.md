# Complete Selular Apps Script Approval

Repository ini berisi script approval untuk beberapa Google Form. Setiap form punya
file `.gs` sendiri untuk daftar alur approval (`FLOWS`), sedangkan logic approval
utama disimpan di satu template agar mudah disamakan ke semua form.

Versi mechanism saat ini: `2.7.0`.

## Ringkasan Cara Pakai

1. Edit approver di bagian `const FLOWS = { ... }` pada file form yang sesuai.
2. Kalau mengubah logic approval bersama, edit `_mechanism.template.gs`.
3. Jalankan pengecekan:

   ```bash
   python3 sync-mechanism.py --check
   ```

4. Kalau ada drift dan ingin menyamakan mechanism semua form:

   ```bash
   python3 sync-mechanism.py
   ```

5. Salin isi file `.gs` yang sudah benar ke project Google Apps Script form terkait.
6. Di Apps Script, pastikan trigger form submit aktif dengan menjalankan
   `reinstallFormSubmitTrigger()`.

## Isi Repository

| File | Fungsi |
| --- | --- |
| `_mechanism.template.gs` | Template logic approval bersama. Edit file ini kalau ingin mengubah behavior approval untuk semua form. |
| `forms.config.json` | Konfigurasi tiap form: Web App URL, nama sheet response, dan prefix UID. |
| `sync-mechanism.py` | Tool untuk render template ke file form dan menjaga `FLOWS` tetap aman. |
| `check-mechanism.sh` | Shortcut untuk menjalankan `python3 sync-mechanism.py --check`. |
| `online.gs`, `rism.gs`, `cvtop.gs`, `smi.gs`, `msi.gs`, `cvcs.gs` | Script per form. Bagian `FLOWS` di awal file boleh berbeda-beda. |
| `tests/test_sync_mechanism.py` | Test untuk memastikan proses sync aman. |

## Konsep Penting

### File Form

Setiap file form punya struktur seperti ini:

```javascript
const FLOWS = {
  defaultFlow: [
    {
      email: "approver@example.com",
      name: "Nama Approver",
      title: "Jabatan",
      phone: "6281234567890"
    }
  ],
  IT: [
    {
      email: "it@example.com",
      name: "Approver IT",
      title: "IT Manager",
      phone: "6281234567890"
    }
  ]
}

function App() {
  // logic approval hasil sync dari template
}
```

Bagian sebelum `function App()` akan dipertahankan oleh `sync-mechanism.py`.
Artinya `FLOWS` aman diedit per file.

### Pemilihan Flow

Mechanism membaca jawaban dari field Google Form bernama `Divisi`.

- Jika jawaban `Divisi` cocok dengan key di `FLOWS`, flow tersebut dipakai.
- Jika tidak cocok, system memakai `defaultFlow`.
- Urutan approver di array menentukan urutan approval.
- Field `phone` opsional. Kalau kosong atau tidak valid, WhatsApp akan dilewati,
  tetapi email tetap dikirim.

Contoh: jika user memilih `IT`, system akan memakai `FLOWS.IT`.

### Kolom Otomatis di Sheet

Saat form submit, script akan menambahkan kolom internal:

- `_uid`
- `_status`
- `_response_id`
- `_approver_1`, `_approver_2`, dan seterusnya

Jangan rename kolom internal ini secara manual.

## Syarat di Google Form

Pastikan form memenuhi hal berikut:

- Email collection aktif, sehingga response sheet punya kolom `Email Address`.
- Ada field bernama `Divisi`.
- Nilai pilihan `Divisi` sebaiknya sama dengan key di `FLOWS`, misalnya `IT`,
  `HCM`, `Purchase`, dan lainnya.
- Form terhubung ke Google Sheet response.
- Project Apps Script punya file HTML template yang dipakai mechanism, seperti
  `index`, `approval_email.html`, `notification_email.html`,
  `approval_progress.html`, dan `404.html`.

## Perintah Lokal

### Cek Apakah Semua File Sudah Sama Dengan Template

```bash
python3 sync-mechanism.py --check
```

Atau:

```bash
./check-mechanism.sh
```

Hasil sukses:

```text
OK: semua mechanism sama dengan template; FLOWS dibiarkan per file
```

### Lihat Perubahan Tanpa Menulis File

```bash
python3 sync-mechanism.py --dry-run --diff
```

### Sync Semua File Form

```bash
python3 sync-mechanism.py
```

Perintah ini akan mengganti bagian mulai dari `function App()` dengan hasil render
dari `_mechanism.template.gs`, tetapi tetap mempertahankan `FLOWS` di awal file.

### Sync File Tertentu

```bash
python3 sync-mechanism.py --only online.gs msi.gs
```

### Jalankan Test

```bash
python3 -m unittest discover -s tests
```

Tidak perlu install package tambahan karena script memakai Python standard library.

## Cara Edit Approver

1. Buka file form yang ingin diubah, misalnya `online.gs`.
2. Edit bagian `const FLOWS = { ... }`.
3. Simpan file.
4. Jalankan check:

   ```bash
   python3 sync-mechanism.py --check
   ```

5. Salin isi file `.gs` tersebut ke project Apps Script form terkait.

Contoh tambah approver baru:

```javascript
IT: [
  {
    email: "manager@example.com",
    name: "Manager IT",
    title: "IT Manager",
    phone: "6281234567890"
  },
  {
    email: "finance@example.com",
    name: "Finance",
    title: "Finance Manager",
    phone: "6289876543210"
  }
]
```

## Cara Edit Logic Approval Bersama

Gunakan cara ini kalau perubahan berlaku untuk semua form, misalnya mengubah email,
attachment, WhatsApp, trigger, atau helper function.

1. Edit `_mechanism.template.gs`.
2. Pastikan placeholder ini tetap ada:

   ```text
   {{URL}}
   {{SHEETNAME}}
   {{UID_PREFIX}}
   ```

3. Cek perubahan:

   ```bash
   python3 sync-mechanism.py --dry-run --diff
   ```

4. Kalau sudah benar, sync:

   ```bash
   python3 sync-mechanism.py
   ```

5. Jalankan test:

   ```bash
   python3 -m unittest discover -s tests
   ```

6. Salin file `.gs` hasil sync ke project Apps Script masing-masing form.

## Cara Menambah Form Baru

1. Copy file form yang paling mirip, misalnya:

   ```bash
   cp online.gs nama-form-baru.gs
   ```

2. Edit `FLOWS` di file baru.
3. Tambahkan entry baru di `forms.config.json`:

   ```json
   "nama-form-baru.gs": {
     "url": "https://script.google.com/macros/s/WEB_APP_ID/exec",
     "sheetname": "Form Responses 1",
     "uidPrefix": "ABC-"
   }
   ```

4. Jalankan:

   ```bash
   python3 sync-mechanism.py --only nama-form-baru.gs
   ```

5. Buat atau buka project Apps Script untuk form tersebut.
6. Salin isi `nama-form-baru.gs` ke Apps Script.
7. Deploy sebagai Web App.
8. Copy Web App URL hasil deploy ke `forms.config.json`.
9. Jalankan sync lagi agar URL terbaru masuk ke file `.gs`.

## Deploy di Google Apps Script

Untuk setiap form:

1. Buka Google Form.
2. Pilih `Extensions` -> `Apps Script`.
3. Salin isi file `.gs` yang sesuai ke editor Apps Script.
4. Pastikan file HTML template yang dibutuhkan tersedia di project Apps Script.
5. Klik `Deploy` -> `New deployment`.
6. Pilih type `Web app`.
7. Gunakan setting umum:
   - Execute as: `Me`
   - Who has access: sesuaikan kebutuhan approval link
8. Deploy dan copy Web App URL.
9. Update URL tersebut di `forms.config.json`.
10. Jalankan `python3 sync-mechanism.py --only nama-file.gs`.
11. Salin ulang hasil sync ke Apps Script.
12. Jalankan `reinstallFormSubmitTrigger()` dari Apps Script editor.

## Trigger

Script membutuhkan installable trigger untuk form submit.

Handler yang dipakai:

```text
_onFormSubmit
```

Cara paling aman:

1. Buka Apps Script editor.
2. Pilih function `reinstallFormSubmitTrigger`.
3. Klik `Run`.
4. Berikan authorization jika diminta.
5. Cek log untuk memastikan trigger aktif.

Menu `Approval` juga akan muncul ketika form dibuka, dengan opsi seperti `Reset UID`
dan `Create trigger`.

## WhatsApp

WhatsApp bisa dikirim lewat WAHA, Fonnte, atau keduanya.

Routing otomatis:

| Kondisi | Provider |
| --- | --- |
| Hanya `WAHA_BASE_URL` terisi | WAHA |
| Hanya `FONNTE_TOKEN` terisi | Fonnte |
| WAHA dan Fonnte terisi | WAHA primary, Fonnte backup |
| `WHATSAPP_PROVIDER=waha` | Paksa WAHA |
| `WHATSAPP_PROVIDER=fonnte` | Paksa Fonnte |
| `WHATSAPP_ENABLED=false` | WhatsApp mati |

### Setup WAHA

Buat function sementara di Apps Script:

```javascript
function setupOnce() {
  setupWahaProperties("https://waha.example.com", "API_KEY", "default")
}
```

Lalu jalankan `setupOnce`.

### Setup Fonnte

```javascript
function setupOnce() {
  setupFonnteProperties("FONNTE_TOKEN")
}
```

### Setup WAHA + Fonnte

```javascript
function setupOnce() {
  setupWhatsAppDualProperties(
    "https://waha.example.com",
    "API_KEY",
    "default",
    "FONNTE_TOKEN"
  )
}
```

Setelah berhasil, function sementara boleh dihapus dari Apps Script.

## Helper Operasional

Function berikut bisa dijalankan dari Apps Script editor saat dibutuhkan:

| Function | Kegunaan |
| --- | --- |
| `reinstallFormSubmitTrigger()` | Hapus trigger lama dan pasang ulang trigger form submit. |
| `createTrigger()` | Membuat trigger jika belum ada. |
| `resetUid()` | Reset counter UID. Pakai hati-hati karena UID berikutnya mulai lagi dari awal. |
| `resendEmailsByUid("UID-00001")` | Kirim ulang email sesuai status UID. |
| `resendPendingApprovalByUid("UID-00001")` | Alias untuk resend approval pending by UID. |
| `repairResponseIdByUid("UID-00001")` | Perbaiki `_response_id` berdasarkan UID jika progress link bermasalah. |
| `auditAttachmentByUid("UID-00001")` | Cek file upload/lampiran yang akan ikut dikirim. |

Untuk `resendBulkUID()`, edit daftar UID di function tersebut dulu:

```javascript
const uids = [
  "UID1",
  "UID2"
]
```

## Attachment Email

Script akan mencoba melampirkan file upload dari Google Form ke email.

Batas aman yang dipakai:

- Maksimum 5 MB per file.
- Maksimum 8 MB total attachment.

Jika file terlalu besar, email tetap dikirim dengan link Google Drive, bukan
attachment langsung.

## Troubleshooting

### `marker function App() tidak ditemukan`

File form harus punya marker:

```javascript
function App() {
```

`sync-mechanism.py` memakai marker ini untuk memisahkan `FLOWS` dan mechanism.

### Email Tidak Terkirim ke Pengaju

Cek hal berikut:

- Google Form sudah collect email.
- Response sheet punya kolom `Email Address`.
- Apps Script sudah diberi authorization Gmail.
- Trigger `_onFormSubmit` sudah aktif.

### Flow Salah atau Masuk `defaultFlow`

Cek nilai field `Divisi` di form. Nilainya harus sama persis dengan key di
`FLOWS`, termasuk spasi dan huruf besar/kecil.

### WhatsApp Tidak Terkirim

Cek hal berikut:

- Approver punya field `phone`.
- Nomor bisa dinormalisasi ke format Indonesia, misalnya `6281234567890`.
- Script Properties untuk WAHA atau Fonnte sudah diisi.
- `WHATSAPP_ENABLED` tidak bernilai `false`.

### Approval Link Error atau Progress Link Kosong

Coba jalankan:

```javascript
repairResponseIdByUid("UID-00001")
```

Lalu resend:

```javascript
resendEmailsByUid("UID-00001")
```

### Ada Drift Saat Check

Jalankan:

```bash
python3 sync-mechanism.py --dry-run --diff
```

Kalau diff sudah sesuai, jalankan:

```bash
python3 sync-mechanism.py
```

## Aturan Aman

- Edit approver di `FLOWS` masing-masing file form.
- Edit logic bersama hanya di `_mechanism.template.gs`.
- Jangan edit manual bagian setelah `function App()` di file form, karena akan
  tertimpa saat sync.
- Setelah deploy ulang Web App, update URL di `forms.config.json`, lalu sync.
- Jalankan test sebelum membagikan perubahan ke semua form.
