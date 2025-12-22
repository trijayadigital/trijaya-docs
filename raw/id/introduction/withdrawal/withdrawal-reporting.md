# Pelaporan

> Panduan laporan penarikan dan settlement di TriPay

TriPay menyediakan **laporan penarikan (withdrawal)** yang lengkap melalui Dashboard untuk membantu Mitra dalam monitoring pencairan dana dan rekonsiliasi keuangan. Halaman ini menjelaskan jenis laporan, cara akses, dan best practices.

---

## Akses Laporan Penarikan

### Melalui Dashboard

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Laporan** atau **Reports**
3. Pilih tab **Settlement** atau **Penarikan**
4. Atur filter yang diinginkan
5. Klik **Tampilkan** atau **Generate**
6. **Download** dalam format yang tersedia

---

## Jenis Laporan Penarikan

### 1. Riwayat Settlement

Daftar lengkap semua settlement yang telah diproses.

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Tanggal Settlement
    </td>
    
    <td>
      Waktu pencairan dilakukan
    </td>
  </tr>
  
  <tr>
    <td>
      Periode Transaksi
    </td>
    
    <td>
      Rentang transaksi yang dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      Jumlah Transaksi
    </td>
    
    <td>
      Berapa transaksi dalam batch
    </td>
  </tr>
  
  <tr>
    <td>
      Total Gross
    </td>
    
    <td>
      Nilai total sebelum potongan
    </td>
  </tr>
  
  <tr>
    <td>
      Total Fee
    </td>
    
    <td>
      Total biaya (channel + settlement)
    </td>
  </tr>
  
  <tr>
    <td>
      Total Net
    </td>
    
    <td>
      Nilai bersih yang dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      Status
    </td>
    
    <td>
      Berhasil, Pending, Gagal
    </td>
  </tr>
  
  <tr>
    <td>
      Rekening Tujuan
    </td>
    
    <td>
      Nomor rekening penerima
    </td>
  </tr>
</tbody>
</table>

### 2. Detail per Settlement

Breakdown transaksi dalam satu batch settlement.

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Reference
    </td>
    
    <td>
      Nomor referensi TriPay
    </td>
  </tr>
  
  <tr>
    <td>
      Merchant Ref
    </td>
    
    <td>
      Order ID dari Mitra
    </td>
  </tr>
  
  <tr>
    <td>
      Channel
    </td>
    
    <td>
      Metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      Gross Amount
    </td>
    
    <td>
      Nilai transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      Channel Fee
    </td>
    
    <td>
      Biaya channel
    </td>
  </tr>
  
  <tr>
    <td>
      Net Amount
    </td>
    
    <td>
      Nilai bersih per transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      Tanggal Transaksi
    </td>
    
    <td>
      Waktu transaksi sukses
    </td>
  </tr>
</tbody>
</table>

### 3. Ringkasan per Periode

Rekap settlement berdasarkan periode waktu.

<table>
<thead>
  <tr>
    <th>
      Periode
    </th>
    
    <th>
      Jumlah Settlement
    </th>
    
    <th>
      Total Gross
    </th>
    
    <th>
      Total Fee
    </th>
    
    <th>
      Total Net
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Jan 2024
    </td>
    
    <td>
      20
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
  </tr>
  
  <tr>
    <td>
      Feb 2024
    </td>
    
    <td>
      22
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
  </tr>
  
  <tr>
    <td>
      Mar 2024
    </td>
    
    <td>
      18
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
    
    <td>
      Rp xxx
    </td>
  </tr>
</tbody>
</table>

### 4. Rekonsiliasi Bank

Laporan untuk mencocokkan dengan mutasi rekening bank.

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Tanggal Transfer
    </td>
    
    <td>
      Waktu transfer ke bank
    </td>
  </tr>
  
  <tr>
    <td>
      Nominal Transfer
    </td>
    
    <td>
      Jumlah yang ditransfer
    </td>
  </tr>
  
  <tr>
    <td>
      Rekening Tujuan
    </td>
    
    <td>
      Nomor rekening
    </td>
  </tr>
  
  <tr>
    <td>
      Berita Transfer
    </td>
    
    <td>
      Keterangan di mutasi bank
    </td>
  </tr>
  
  <tr>
    <td>
      Status Bank
    </td>
    
    <td>
      Sukses, Pending, Gagal
    </td>
  </tr>
</tbody>
</table>

---

## Filter Laporan

### Filter yang Tersedia

<table>
<thead>
  <tr>
    <th>
      Filter
    </th>
    
    <th>
      Fungsi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Tanggal Settlement
      </strong>
    </td>
    
    <td>
      Rentang tanggal pencairan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Periode Transaksi
      </strong>
    </td>
    
    <td>
      Rentang tanggal transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Status
      </strong>
    </td>
    
    <td>
      Berhasil, Pending, Gagal
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Merchant
      </strong>
    </td>
    
    <td>
      Filter per merchant (multi-merchant)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Channel
      </strong>
    </td>
    
    <td>
      Filter per metode pembayaran
    </td>
  </tr>
</tbody>
</table>

### Contoh Penggunaan

**Skenario: Rekonsiliasi settlement bulan ini**

- Tanggal Settlement: 1 - 31 Jan 2024
- Status: Berhasil
- Merchant: Semua

---

## Format Export

### Format yang Tersedia

<table>
<thead>
  <tr>
    <th>
      Format
    </th>
    
    <th>
      Kegunaan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Excel (.xlsx)
      </strong>
    </td>
    
    <td>
      Analisis dan pembukuan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        CSV (.csv)
      </strong>
    </td>
    
    <td>
      Import ke software akuntansi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        PDF
      </strong>
    </td>
    
    <td>
      Arsip dan dokumentasi
    </td>
  </tr>
</tbody>
</table>

### Cara Export

1. Generate laporan dengan filter yang diinginkan
2. Klik tombol **Export** atau **Download**
3. Pilih format (Excel, CSV, PDF)
4. File akan terdownload

---

## Rekonsiliasi Settlement

### Proses Rekonsiliasi

#### 1. Download Laporan Settlement TriPay

```text
Dashboard → Laporan → Settlement → Filter → Export Excel
```

#### 2. Download Mutasi Rekening Bank

Akses internet/mobile banking → Mutasi → Export

#### 3. Cocokkan Data

<table>
<thead>
  <tr>
    <th>
      Field TriPay
    </th>
    
    <th>
      Field Bank
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Tanggal Settlement
    </td>
    
    <td>
      Tanggal Transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      Total Net
    </td>
    
    <td>
      Nominal Kredit
    </td>
  </tr>
  
  <tr>
    <td>
      Berita Transfer
    </td>
    
    <td>
      Keterangan
    </td>
  </tr>
</tbody>
</table>

#### 4. Identifikasi Selisih

Jika ada perbedaan, catat:

- Settlement TriPay tidak ada di mutasi bank
- Mutasi bank tidak ada di laporan TriPay
- Perbedaan nominal

#### 5. Laporkan ke TriPay

Jika ada selisih, laporkan **paling lambat H+7 Hari Kalender**.

---

## Kewajiban Penyimpanan

### Berdasarkan PKS

<callout color="amber" icon="i-lucide-alert-triangle">

**Kewajiban**: Mitra wajib menyimpan bukti transaksi dan dokumen pendukung selama **minimal 12 (dua belas) bulan** sejak tanggal transaksi.

</callout>

### Dokumen yang Harus Disimpan

<table>
<thead>
  <tr>
    <th>
      Dokumen
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Laporan Settlement
    </td>
    
    <td>
      Export dari Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      Mutasi Rekening
    </td>
    
    <td>
      Bukti dari bank
    </td>
  </tr>
  
  <tr>
    <td>
      Bukti Transfer
    </td>
    
    <td>
      Screenshot/slip
    </td>
  </tr>
  
  <tr>
    <td>
      Laporan Rekonsiliasi
    </td>
    
    <td>
      Hasil pencocokan
    </td>
  </tr>
</tbody>
</table>

---

## Notifikasi Settlement

### Jenis Notifikasi

<table>
<thead>
  <tr>
    <th>
      Notifikasi
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Settlement Diproses
      </strong>
    </td>
    
    <td>
      Saat pencairan dimulai
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Berhasil
      </strong>
    </td>
    
    <td>
      Dana sudah ditransfer
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Gagal
      </strong>
    </td>
    
    <td>
      Jika ada masalah transfer
    </td>
  </tr>
</tbody>
</table>

### Channel Notifikasi

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Email
      </strong>
    </td>
    
    <td>
      Ke email terdaftar
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        WhatsApp
      </strong>
    </td>
    
    <td>
      Ke nomor terdaftar
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Dashboard
      </strong>
    </td>
    
    <td>
      Notifikasi in-app
    </td>
  </tr>
</tbody>
</table>

### Mengatur Notifikasi

1. Login ke Dashboard
2. Masuk ke **Pengaturan** → **Notifikasi**
3. Aktifkan/nonaktifkan channel yang diinginkan
4. Simpan pengaturan

---

## Status Settlement

### Daftar Status

<table>
<thead>
  <tr>
    <th>
      Status
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Pending
      </strong>
    </td>
    
    <td>
      Menunggu proses settlement
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Processing
      </strong>
    </td>
    
    <td>
      Sedang diproses
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Success
      </strong>
    </td>
    
    <td>
      Settlement berhasil, dana sudah ditransfer
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Failed
      </strong>
    </td>
    
    <td>
      Gagal, perlu investigasi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Retry
      </strong>
    </td>
    
    <td>
      Dicoba ulang transfer
    </td>
  </tr>
</tbody>
</table>

### Penanganan Status Failed

<table>
<thead>
  <tr>
    <th>
      Penyebab
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Rekening tidak aktif
    </td>
    
    <td>
      Update rekening → minta retry
    </td>
  </tr>
  
  <tr>
    <td>
      Nama tidak sesuai
    </td>
    
    <td>
      Perbaiki nama rekening
    </td>
  </tr>
  
  <tr>
    <td>
      Bank maintenance
    </td>
    
    <td>
      Tunggu dan minta retry
    </td>
  </tr>
  
  <tr>
    <td>
      Limit terlampaui
    </td>
    
    <td>
      Hubungi bank
    </td>
  </tr>
</tbody>
</table>

---

## Troubleshooting Laporan

### Laporan Tidak Sesuai

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Data tidak muncul
    </td>
    
    <td>
      Periksa filter tanggal
    </td>
  </tr>
  
  <tr>
    <td>
      Nominal berbeda
    </td>
    
    <td>
      Cek apakah sudah include fee
    </td>
  </tr>
  
  <tr>
    <td>
      Settlement tidak tercatat
    </td>
    
    <td>
      Hubungi support
    </td>
  </tr>
</tbody>
</table>

### Export Gagal

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      File corrupt
    </td>
    
    <td>
      Coba export ulang
    </td>
  </tr>
  
  <tr>
    <td>
      Timeout
    </td>
    
    <td>
      Kurangi rentang tanggal
    </td>
  </tr>
  
  <tr>
    <td>
      Format error
    </td>
    
    <td>
      Coba format lain
    </td>
  </tr>
</tbody>
</table>

---

## Best Practices

### Rutinitas Laporan

<list type="success">

- **Download harian** untuk volume transaksi tinggi
- **Rekonsiliasi mingguan** dengan mutasi bank
- **Arsip bulanan** laporan settlement
- **Review tahunan** untuk audit

</list>

### Organisasi File

<list type="success">

- Buat folder terstruktur per bulan/tahun
- Gunakan naming convention yang konsisten
- Backup ke cloud storage
- Simpan di beberapa lokasi

</list>

### Contoh Struktur Folder

```text
Laporan-TriPay/
├── 2024/
│   ├── 01-Januari/
│   │   ├── settlement-2024-01.xlsx
│   │   ├── rekonsiliasi-2024-01.xlsx
│   │   └── mutasi-bank-2024-01.pdf
│   ├── 02-Februari/
│   │   └── ...
│   └── ...
└── 2023/
    └── ...
```

---

## FAQ Laporan Penarikan

### Berapa lama data settlement tersimpan di Dashboard?

Data tersedia di Dashboard selama periode tertentu. Disarankan backup rutin ke file lokal.

### Bagaimana jika ada selisih dengan mutasi bank?

Laporkan ke TriPay dalam **H+7 Hari Kalender** dengan bukti pendukung.

### Apakah bisa akses laporan via API?

Ya, tersedia API untuk akses data settlement. Lihat dokumentasi API.

### Format mana yang terbaik untuk rekonsiliasi?

**Excel** untuk analisis manual, **CSV** untuk import ke software akuntansi.

---

## Dukungan

Jika mengalami kendala terkait laporan penarikan:

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Kontak
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Email
      </strong>
    </td>
    
    <td>
      <a href="mailto:ops@trihariyanto.com">
        ops@trihariyanto.com
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        WhatsApp
      </strong>
    </td>
    
    <td>
      085730000727
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Jam Operasional
      </strong>
    </td>
    
    <td>
      Senin - Jumat (Hari Kerja)
    </td>
  </tr>
</tbody>
</table>

---

## Referensi

Ketentuan pelaporan berdasarkan:

- **Pasal 3 Poin 3** - Kewajiban TriPay menyimpan data
- **Pasal 4 Poin 6** - Kewajiban Mitra menyimpan bukti (min. 12 bulan)
- **Pasal 6 Poin 2** - Hak Mitra mengakses Dashboard dan laporan
- **Pasal 7 Poin 5** - Rekonsiliasi H+7 Hari Kalender
