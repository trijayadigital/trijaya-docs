# Dashboard

> Panduan penggunaan Dashboard TriPay

**Dashboard TriPay** adalah aplikasi berbasis web yang disediakan untuk Mitra guna melakukan pemantauan transaksi, pengaturan konfigurasi, manajemen merchant, serta mengunduh laporan transaksi. Halaman ini menjelaskan fitur-fitur dashboard dan cara penggunaannya.

---

## Akses Dashboard

### URL Dashboard

Dashboard TriPay dapat diakses melalui: **tripay.co.id**

### Login

1. Buka halaman login Dashboard TriPay
2. Masukkan **email** yang terdaftar
3. Masukkan **password** akun Anda
4. Klik tombol **Login**

<callout color="amber" icon="i-lucide-shield">

**Keamanan**: Jaga kerahasiaan kredensial login Anda. Jangan bagikan email dan password kepada pihak lain.

</callout>

---

## Fitur Utama Dashboard

### 1. Beranda (Home)

Halaman utama yang menampilkan ringkasan aktivitas akun:

<table>
<thead>
  <tr>
    <th>
      Informasi
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
        Saldo
      </strong>
    </td>
    
    <td>
      Total dana yang tersedia untuk ditarik
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transaksi Hari Ini
      </strong>
    </td>
    
    <td>
      Jumlah dan nilai transaksi hari ini
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transaksi Bulan Ini
      </strong>
    </td>
    
    <td>
      Ringkasan transaksi bulan berjalan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Grafik Transaksi
      </strong>
    </td>
    
    <td>
      Visualisasi tren transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Notifikasi
      </strong>
    </td>
    
    <td>
      Pemberitahuan penting terbaru
    </td>
  </tr>
</tbody>
</table>

---

### 2. Manajemen Merchant

Kelola merchant yang terdaftar di akun Anda:

#### Daftar Merchant

- Lihat semua merchant yang sudah dibuat
- Status aktivasi setiap merchant
- Ringkasan transaksi per merchant

#### Tambah Merchant Baru

1. Klik tombol **Tambah Merchant**
2. Isi informasi bisnis (nama, website, kategori, deskripsi)
3. Konfigurasi channel pembayaran
4. Submit untuk verifikasi

#### Pengaturan Merchant

<table>
<thead>
  <tr>
    <th>
      Fitur
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
        Informasi Dasar
      </strong>
    </td>
    
    <td>
      Edit nama, deskripsi, dan kategori merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Channel Pembayaran
      </strong>
    </td>
    
    <td>
      Aktifkan/nonaktifkan metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Biaya Admin
      </strong>
    </td>
    
    <td>
      Atur biaya tambahan ke pelanggan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback URL
      </strong>
    </td>
    
    <td>
      Set URL untuk menerima notifikasi transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kredensial API
      </strong>
    </td>
    
    <td>
      Lihat API Key, Private Key, dan Merchant Code
    </td>
  </tr>
</tbody>
</table>

---

### 3. Pemantauan Transaksi

Pantau seluruh aktivitas transaksi secara real-time:

#### Daftar Transaksi

<table>
<thead>
  <tr>
    <th>
      Kolom
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
        Reference
      </strong>
    </td>
    
    <td>
      Nomor referensi unik transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Merchant
      </strong>
    </td>
    
    <td>
      Nama merchant terkait
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Channel
      </strong>
    </td>
    
    <td>
      Metode pembayaran yang digunakan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Amount
      </strong>
    </td>
    
    <td>
      Nilai transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Fee
      </strong>
    </td>
    
    <td>
      Biaya transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Status
      </strong>
    </td>
    
    <td>
      Status transaksi (UNPAID, PAID, EXPIRED, dll)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Tanggal
      </strong>
    </td>
    
    <td>
      Waktu transaksi dibuat
    </td>
  </tr>
</tbody>
</table>

#### Filter Transaksi

Gunakan filter untuk mencari transaksi tertentu:

- **Tanggal**: Rentang tanggal transaksi
- **Status**: UNPAID, PAID, EXPIRED, FAILED, REFUND
- **Channel**: QRIS, VA, E-Wallet, Retail
- **Merchant**: Filter berdasarkan merchant
- **Reference**: Cari berdasarkan nomor referensi

#### Detail Transaksi

Klik transaksi untuk melihat detail lengkap:

- Informasi pembayaran (nomor VA, QR code, dll)
- Data pelanggan
- Riwayat status
- Log callback

---

### 4. Laporan dan Rekonsiliasi

Akses laporan transaksi untuk keperluan pembukuan dan rekonsiliasi:

#### Jenis Laporan

<table>
<thead>
  <tr>
    <th>
      Laporan
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
        Laporan Harian
      </strong>
    </td>
    
    <td>
      Ringkasan transaksi per hari
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Laporan Bulanan
      </strong>
    </td>
    
    <td>
      Rekap transaksi per bulan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Laporan Per Channel
      </strong>
    </td>
    
    <td>
      Breakdown berdasarkan metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Laporan Settlement
      </strong>
    </td>
    
    <td>
      Riwayat pencairan dana
    </td>
  </tr>
</tbody>
</table>

#### Export Data

Download laporan dalam berbagai format:

- **Excel (.xlsx)** - Untuk analisis dan pembukuan
- **CSV (.csv)** - Untuk import ke sistem lain
- **PDF** - Untuk arsip dan cetak

<callout color="blue" icon="i-lucide-info">

**Kewajiban Rekonsiliasi**: Berdasarkan Perjanjian Kerja Sama, Mitra wajib melakukan rekonsiliasi berdasarkan laporan dari TriPay dan menyampaikan koreksi jika ada perbedaan **paling lambat H+7 (tujuh) Hari Kalender** setelah tanggal transaksi.

</callout>

---

### 5. Settlement (Pencairan Dana)

Pantau dan kelola proses pencairan dana:

#### Informasi Settlement

<table>
<thead>
  <tr>
    <th>
      Data
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
        Saldo Tersedia
      </strong>
    </td>
    
    <td>
      Dana yang siap dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Saldo Pending
      </strong>
    </td>
    
    <td>
      Dana yang masih dalam proses kliring
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Riwayat Settlement
      </strong>
    </td>
    
    <td>
      Daftar pencairan yang sudah dilakukan
    </td>
  </tr>
</tbody>
</table>

#### Jadwal Settlement

<table>
<thead>
  <tr>
    <th>
      Jenis Akun
    </th>
    
    <th>
      Jadwal
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Akun Personal
    </td>
    
    <td>
      H+3 (3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Akun Bisnis
    </td>
    
    <td>
      H+2 (2 Hari Kerja)*
    </td>
  </tr>
</tbody>
</table>

*Setelah memenuhi syarat (30 transaksi, Rp30 juta, 60 hari)

#### Pengaturan Penarikan

- **Auto Withdrawal**: Aktifkan pencairan otomatis
- **Manual Withdrawal**: Request pencairan manual
- **Rekening Tujuan**: Kelola rekening bank untuk settlement

---

### 6. Pengaturan Akun

Kelola informasi dan keamanan akun:

#### Profil

- Edit data pribadi (nama, alamat, kontak)
- Update informasi bisnis

#### Verifikasi Akun

- Status verifikasi akun
- Upload dokumen verifikasi
- Upgrade ke Akun Bisnis

#### Rekening Bank

- Tambah/edit rekening tujuan settlement
- Set rekening utama

#### Keamanan

<table>
<thead>
  <tr>
    <th>
      Fitur
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
        Ubah Password
      </strong>
    </td>
    
    <td>
      Ganti password akun
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Two-Factor Auth
      </strong>
    </td>
    
    <td>
      Aktifkan keamanan 2FA
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Riwayat Login
      </strong>
    </td>
    
    <td>
      Pantau aktivitas login
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        API Access Log
      </strong>
    </td>
    
    <td>
      Log akses API
    </td>
  </tr>
</tbody>
</table>

---

### 7. Notifikasi

Terima pemberitahuan penting:

<table>
<thead>
  <tr>
    <th>
      Jenis Notifikasi
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
        Transaksi Berhasil
      </strong>
    </td>
    
    <td>
      Notifikasi pembayaran masuk
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Selesai
      </strong>
    </td>
    
    <td>
      Pemberitahuan dana sudah dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Verifikasi Akun
      </strong>
    </td>
    
    <td>
      Update status verifikasi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Pengumuman
      </strong>
    </td>
    
    <td>
      Info perubahan fitur atau kebijakan
    </td>
  </tr>
</tbody>
</table>

#### Channel Notifikasi

- **Dashboard** - Notifikasi dalam aplikasi
- **Email** - Dikirim ke email terdaftar
- **WhatsApp** - Dikirim ke nomor terdaftar
- **Callback** - Dikirim ke server Mitra (untuk transaksi)

---

## Hak Mitra dalam Penggunaan Dashboard

Berdasarkan Perjanjian Kerja Sama, Mitra berhak:

<list type="success">

- **Menggunakan layanan TriPay** sesuai ketentuan yang berlaku
- **Mengakses Dashboard** dan laporan transaksi
- **Menerima Dana Transaksi** sesuai ketentuan settlement
- **Mendapatkan informasi** mengenai perubahan fitur, biaya, dan kebijakan

</list>

---

## Kewajiban Terkait Dashboard

Mitra wajib:

<list type="info">

- **Menjaga kerahasiaan** kredensial login (email, password)
- **Menyimpan bukti transaksi** dari Dashboard selama minimal **12 bulan**
- **Melakukan rekonsiliasi** berdasarkan laporan transaksi
- **Melaporkan** jika menemukan transaksi mencurigakan

</list>

---

## Tips Penggunaan Dashboard

### Pemantauan Rutin

<list type="success">

- Cek transaksi **minimal sekali sehari**
- Review laporan **mingguan** untuk rekonsiliasi
- Download laporan **bulanan** untuk arsip
- Pantau notifikasi untuk info penting

</list>

### Keamanan

<list type="success">

- Gunakan **password yang kuat** (kombinasi huruf, angka, simbol)
- Aktifkan **Two-Factor Authentication (2FA)**
- **Jangan bagikan** kredensial ke pihak lain
- **Logout** setelah selesai menggunakan dashboard
- Akses dashboard dari **jaringan yang aman**

</list>

### Pengelolaan Data

<list type="success">

- **Backup** laporan transaksi secara berkala
- **Rekonsiliasi** data dengan sistem internal
- **Simpan** bukti transaksi minimal 12 bulan
- **Update** data kontak jika ada perubahan

</list>

---

## Troubleshooting

### Tidak Bisa Login

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
      Lupa password
    </td>
    
    <td>
      Gunakan fitur <strong>
        Lupa Password
      </strong>
      
       untuk reset
    </td>
  </tr>
  
  <tr>
    <td>
      Email tidak terdaftar
    </td>
    
    <td>
      Pastikan email yang digunakan benar
    </td>
  </tr>
  
  <tr>
    <td>
      Akun terkunci
    </td>
    
    <td>
      Hubungi customer support
    </td>
  </tr>
</tbody>
</table>

### Transaksi Tidak Muncul

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
      Filter tanggal salah
    </td>
    
    <td>
      Sesuaikan rentang tanggal filter
    </td>
  </tr>
  
  <tr>
    <td>
      Merchant berbeda
    </td>
    
    <td>
      Pilih merchant yang benar
    </td>
  </tr>
  
  <tr>
    <td>
      Transaksi baru
    </td>
    
    <td>
      Refresh halaman atau tunggu beberapa saat
    </td>
  </tr>
</tbody>
</table>

### Settlement Belum Masuk

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
      Belum H+2/H+3
    </td>
    
    <td>
      Tunggu sesuai jadwal settlement
    </td>
  </tr>
  
  <tr>
    <td>
      Hari libur
    </td>
    
    <td>
      Settlement dilakukan di hari kerja berikutnya
    </td>
  </tr>
  
  <tr>
    <td>
      Rekening salah
    </td>
    
    <td>
      Cek dan update rekening tujuan
    </td>
  </tr>
  
  <tr>
    <td>
      Status ditahan
    </td>
    
    <td>
      Hubungi customer support
    </td>
  </tr>
</tbody>
</table>

---

## Dukungan Teknis

Jika mengalami kendala dalam penggunaan Dashboard:

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

Fitur dan ketentuan Dashboard berdasarkan:

- **Pasal 1 Poin 4** - Definisi Dashboard TriPay
- **Pasal 3** - Kewajiban TriPay (penyediaan sistem dan laporan)
- **Pasal 6** - Hak Mitra (akses dashboard dan laporan)
- **Pasal 7** - Mekanisme Layanan
