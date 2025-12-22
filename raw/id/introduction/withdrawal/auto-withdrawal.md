# Penarikan otomatis

> Panduan fitur Auto Withdrawal di TriPay

**Penarikan Otomatis (Auto Withdrawal)** adalah fitur yang memungkinkan Dana Transaksi dicairkan secara otomatis ke rekening Mitra sesuai jadwal settlement tanpa perlu request manual. Halaman ini menjelaskan cara kerja, konfigurasi, dan ketentuan auto withdrawal.

---

## Pengertian Auto Withdrawal

### Apa itu Auto Withdrawal?

**Auto Withdrawal** adalah mode pencairan dana di mana:

<list type="info">

- Dana dicairkan **otomatis** sesuai jadwal settlement (H+2/H+3)
- **Tidak perlu** request manual dari Dashboard
- Pencairan dilakukan ke **rekening utama** yang terdaftar
- Proses berjalan **setiap Hari Kerja**

</list>

### Perbedaan dengan Manual Withdrawal

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Auto Withdrawal
    </th>
    
    <th>
      Manual Withdrawal
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Proses
      </strong>
    </td>
    
    <td>
      Otomatis tanpa aksi
    </td>
    
    <td>
      Perlu request dari Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Jadwal
      </strong>
    </td>
    
    <td>
      Sesuai H+2/H+3
    </td>
    
    <td>
      Kapan saja (setelah settlement)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Effort
      </strong>
    </td>
    
    <td>
      Minimal
    </td>
    
    <td>
      Perlu login dan klik
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Cocok untuk
      </strong>
    </td>
    
    <td>
      Volume transaksi tinggi
    </td>
    
    <td>
      Kontrol cashflow ketat
    </td>
  </tr>
</tbody>
</table>

---

## Cara Kerja Auto Withdrawal

### Alur Proses

```text
1. Transaksi Sukses (PAID)
              ↓
2. Masa Kliring H+2/H+3 (Hari Kerja)
              ↓
3. Dana Siap Dicairkan
              ↓
4. Sistem Otomatis Memproses Settlement
              ↓
5. Biaya Settlement (Rp7.500) Dipotong
              ↓
6. Dana Ditransfer ke Rekening Mitra
```

### Jadwal Proses Otomatis

<table>
<thead>
  <tr>
    <th>
      Hari
    </th>
    
    <th>
      Proses
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Senin - Jumat
      </strong>
    </td>
    
    <td>
      Settlement diproses pada Hari Kerja
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Sabtu - Minggu
      </strong>
    </td>
    
    <td>
      Tidak ada proses (kecuali fitur Weekend aktif)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Hari Libur Nasional
      </strong>
    </td>
    
    <td>
      Diproses pada Hari Kerja berikutnya
    </td>
  </tr>
</tbody>
</table>

---

## Mengaktifkan Auto Withdrawal

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Pengaturan** atau **Settings**
3. Cari opsi **Mode Penarikan** atau **Withdrawal Mode**
4. Pilih **Auto Withdrawal** / **Penarikan Otomatis**
5. **Simpan** pengaturan

### Persyaratan

<list type="warning">

- Rekening penarikan sudah **terverifikasi**
- Akun dalam status **aktif** dan **tidak suspended**
- Tidak ada **dispute** atau **hold** pada dana

</list>

---

## Ketentuan Auto Withdrawal

### Jadwal Settlement

<table>
<thead>
  <tr>
    <th>
      Jenis Akun
    </th>
    
    <th>
      Jadwal
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
        Akun Bisnis
      </strong>
    </td>
    
    <td>
      <strong>
        H+2
      </strong>
    </td>
    
    <td>
      2 Hari Kerja setelah transaksi*
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Akun Personal
      </strong>
    </td>
    
    <td>
      <strong>
        H+3
      </strong>
    </td>
    
    <td>
      3 Hari Kerja setelah transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BCA VA
      </strong>
    </td>
    
    <td>
      <strong>
        H+3
      </strong>
    </td>
    
    <td>
      Selalu H+3 untuk semua jenis akun
    </td>
  </tr>
</tbody>
</table>

*Setelah memenuhi syarat tertentu

### Syarat H+2 untuk Akun Bisnis

<table>
<thead>
  <tr>
    <th>
      Syarat
    </th>
    
    <th>
      Ketentuan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Jumlah Transaksi
    </td>
    
    <td>
      Min. <strong>
        30 transaksi sukses
      </strong>
    </td>
  </tr>
  
  <tr>
    <td>
      Total Nilai
    </td>
    
    <td>
      Min. <strong>
        Rp30.000.000
      </strong>
    </td>
  </tr>
  
  <tr>
    <td>
      Umur Akun
    </td>
    
    <td>
      Min. <strong>
        60 hari
      </strong>
      
       sejak transaksi pertama
    </td>
  </tr>
</tbody>
</table>

### Biaya Settlement

<table>
<thead>
  <tr>
    <th>
      Komponen
    </th>
    
    <th>
      Nilai
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Biaya Settlement
      </strong>
    </td>
    
    <td>
      <strong>
        Rp7.500
      </strong>
      
       per proses
    </td>
  </tr>
</tbody>
</table>

Biaya ini dipotong otomatis dari Dana Transaksi.

---

## Contoh Jadwal Auto Withdrawal

### Skenario Akun Bisnis (H+2)

<table>
<thead>
  <tr>
    <th>
      Tanggal Transaksi
    </th>
    
    <th>
      Hari
    </th>
    
    <th>
      Tanggal Settlement
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Senin, 15 Jan
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      Rabu, 17 Jan
    </td>
  </tr>
  
  <tr>
    <td>
      Selasa, 16 Jan
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      Kamis, 18 Jan
    </td>
  </tr>
  
  <tr>
    <td>
      Rabu, 17 Jan
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      Jumat, 19 Jan
    </td>
  </tr>
  
  <tr>
    <td>
      Kamis, 18 Jan
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      Senin, 22 Jan
    </td>
  </tr>
  
  <tr>
    <td>
      Jumat, 19 Jan
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      Selasa, 23 Jan
    </td>
  </tr>
  
  <tr>
    <td>
      Sabtu, 20 Jan
    </td>
    
    <td>
      Libur
    </td>
    
    <td>
      Selasa, 23 Jan
    </td>
  </tr>
</tbody>
</table>

### Skenario dengan Hari Libur

Jika **Rabu, 17 Jan** adalah hari libur nasional:

<table>
<thead>
  <tr>
    <th>
      Transaksi
    </th>
    
    <th>
      Settlement Normal
    </th>
    
    <th>
      Settlement Aktual
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Senin, 15 Jan
    </td>
    
    <td>
      Rabu, 17 Jan
    </td>
    
    <td>
      <strong>
        Kamis, 18 Jan
      </strong>
    </td>
  </tr>
</tbody>
</table>

---

## Keuntungan Auto Withdrawal

### Untuk Mitra

<list type="success">

- **Efisiensi waktu** - tidak perlu login dan request setiap hari
- **Cashflow teratur** - dana masuk sesuai jadwal yang dapat diprediksi
- **Tidak terlewat** - tidak ada settlement yang terlupa
- **Otomatis saat libur** - diproses di Hari Kerja berikutnya

</list>

### Cocok untuk

<table>
<thead>
  <tr>
    <th>
      Profil Mitra
    </th>
    
    <th>
      Alasan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Volume tinggi
    </td>
    
    <td>
      Banyak transaksi, tidak praktis request manual
    </td>
  </tr>
  
  <tr>
    <td>
      Tim kecil
    </td>
    
    <td>
      Tidak perlu staf khusus untuk withdrawal
    </td>
  </tr>
  
  <tr>
    <td>
      Bisnis 24/7
    </td>
    
    <td>
      Settlement tetap berjalan tanpa intervensi
    </td>
  </tr>
</tbody>
</table>

---

## Pengaturan Tambahan

### Minimum Settlement (Jika Tersedia)

Beberapa akun dapat mengatur minimum nominal untuk auto withdrawal:

<table>
<thead>
  <tr>
    <th>
      Opsi
    </th>
    
    <th>
      Contoh
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Tanpa minimum
      </strong>
    </td>
    
    <td>
      Semua saldo dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Minimum Rp100.000
      </strong>
    </td>
    
    <td>
      Settlement hanya jika saldo ≥ Rp100.000
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Minimum Rp500.000
      </strong>
    </td>
    
    <td>
      Settlement hanya jika saldo ≥ Rp500.000
    </td>
  </tr>
</tbody>
</table>

### Notifikasi Settlement

Aktifkan notifikasi untuk mendapat informasi setiap kali auto withdrawal diproses:

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
      Notifikasi ke email terdaftar
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        WhatsApp
      </strong>
    </td>
    
    <td>
      Notifikasi ke nomor terdaftar
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

---

## Troubleshooting

### Auto Withdrawal Tidak Berjalan

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
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
      Dana tidak masuk
    </td>
    
    <td>
      Rekening bermasalah
    </td>
    
    <td>
      Periksa dan update rekening
    </td>
  </tr>
  
  <tr>
    <td>
      Jadwal tidak sesuai
    </td>
    
    <td>
      Hari libur
    </td>
    
    <td>
      Tunggu Hari Kerja berikutnya
    </td>
  </tr>
  
  <tr>
    <td>
      Mode tidak aktif
    </td>
    
    <td>
      Auto withdrawal off
    </td>
    
    <td>
      Aktifkan di pengaturan
    </td>
  </tr>
  
  <tr>
    <td>
      Ada dispute
    </td>
    
    <td>
      Dana di-hold
    </td>
    
    <td>
      Selesaikan dispute terlebih dahulu
    </td>
  </tr>
</tbody>
</table>

### Settlement Tertunda

<table>
<thead>
  <tr>
    <th>
      Kondisi
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
        Indikasi Fraud
      </strong>
    </td>
    
    <td>
      Dana di-hold untuk investigasi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Dispute Pelanggan
      </strong>
    </td>
    
    <td>
      Menunggu penyelesaian dispute
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Permintaan Otoritas
      </strong>
    </td>
    
    <td>
      Sesuai instruksi pihak berwenang
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Pelanggaran PKS
      </strong>
    </td>
    
    <td>
      Akun dalam review
    </td>
  </tr>
</tbody>
</table>

---

## FAQ Auto Withdrawal

### Apakah auto withdrawal diaktifkan secara default?

Tergantung konfigurasi akun. Periksa menu **Pengaturan** untuk memastikan mode yang aktif.

### Bisakah saya beralih dari auto ke manual?

**Ya.** Anda dapat mengubah mode penarikan kapan saja melalui Dashboard.

### Bagaimana jika rekening saya berubah?

Update rekening terlebih dahulu. Auto withdrawal akan menggunakan rekening yang **aktif dan verified**.

### Apakah ada biaya tambahan untuk auto withdrawal?

**Tidak.** Biaya sama yaitu **Rp7.500** per settlement, baik auto maupun manual.

### Jam berapa auto withdrawal diproses?

Umumnya pada **jam kerja** (09.00 - 17.00 WIB) di Hari Kerja. Waktu pasti dapat bervariasi.

### Apakah bisa set jadwal khusus (misal: mingguan)?

Fitur ini tergantung ketersediaan di akun Anda. Hubungi support untuk informasi lebih lanjut.

---

## Tips Penggunaan Auto Withdrawal

<list type="success">

- **Pastikan rekening selalu aktif** untuk menghindari kegagalan transfer
- **Monitor notifikasi** untuk memastikan settlement berjalan lancar
- **Review laporan settlement** secara berkala
- **Update rekening segera** jika ada perubahan (max H+7)

</list>

---

## Dukungan

Jika mengalami kendala dengan auto withdrawal:

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

Ketentuan auto withdrawal berdasarkan:

- **Pasal 7 Poin 4** - Mekanisme Settlement
- **Pasal 9** - Biaya dan Settlement
- **Lampiran III** - Ketentuan Settlement
