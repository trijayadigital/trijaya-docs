# Kliring

> Panduan lengkap proses kliring dan settlement dana transaksi TriPay

**Kliring** merupakan proses yang dibutuhkan oleh sistem untuk menjamin transaksi yang terjadi bebas dari adanya fraud maupun hal lain yang dapat menimbulkan kerugian layanan TriPay Payment. Halaman ini menjelaskan secara lengkap mekanisme, jadwal, dan ketentuan kliring di TriPay.

---

## Apa itu Kliring?

Kliring adalah proses verifikasi dan validasi transaksi yang telah diselesaikan oleh pelanggan sebelum dana dapat ditarik ke rekening Mitra. Masa kliring adalah **3x24 jam (tiga hari kerja)** untuk akun Personal dan **2x24 jam (dua hari kerja)** untuk akun Bisnis. Proses ini bertujuan untuk:

<list type="success">

- **Mencegah fraud** dan kecurangan dalam transaksi
- **Melindungi** Mitra dan Pelanggan dari kerugian
- **Memastikan keamanan** dan validitas setiap transaksi
- **Menjaga integritas** sistem pembayaran TriPay

</list>

---

## Mekanisme Kliring

### Proses Otomatis

Setiap transaksi yang telah diselesaikan pelanggan akan memasuki proses kliring **secara otomatis**. Tidak ada tindakan manual yang diperlukan dari Mitra.

### Alur Proses Kliring

```text
1. Pelanggan Melakukan Pembayaran
              ↓
2. Transaksi Berstatus DIBAYAR (PAID)
              ↓
3. Transaksi Masuk ke Proses Kliring (Otomatis)
              ↓
4. Verifikasi dan Validasi Transaksi
              ↓
5. Proses Kliring Selesai (3x24 jam Hari Kerja)
              ↓
6. Saldo Tersedia untuk Ditarik ke Rekening Mitra
```

---

## Waktu Kliring

### Ketentuan Umum

Proses kliring membutuhkan waktu **3x24 jam** (tiga hari kerja) sejak transaksi berstatus **dibayar**, dengan ketentuan:

<list type="info">

- **Tidak termasuk** hari Sabtu, Minggu, dan tanggal merah (hari libur nasional)
- Waktu kliring dihitung berdasarkan **Hari Kerja** saja
- Jika jatuh pada hari libur, proses kliring dilanjutkan pada Hari Kerja berikutnya
- Batas waktu lain dapat ditentukan oleh pengelola sesuai kondisi

</list>

### Hari Kerja vs Hari Kalender

<table>
<thead>
  <tr>
    <th>
      Istilah
    </th>
    
    <th>
      Definisi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Hari Kerja
      </strong>
    </td>
    
    <td>
      Senin sampai Jumat, <strong>
        tidak termasuk
      </strong>
      
       Sabtu, Minggu, dan hari libur nasional
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Hari Kalender
      </strong>
    </td>
    
    <td>
      Semua hari dalam satu bulan kalender <strong>
        tanpa kecuali
      </strong>
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Penting**: Waktu kliring dihitung berdasarkan **Hari Kerja**, bukan Hari Kalender. Jika proses kliring jatuh pada hari libur, proses dilanjutkan pada Hari Kerja berikutnya.

</callout>

---

## Masa Waktu Kliring yang Berbeda

Mitra dapat memperoleh masa waktu kliring yang berbeda yang disesuaikan dengan kondisi atau tingkat risiko pada layanan Mitra.

### Faktor yang Mempengaruhi Waktu Kliring

<table>
<thead>
  <tr>
    <th>
      Faktor
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
        Tingkat Risiko
      </strong>
    </td>
    
    <td>
      Mitra dengan risiko rendah dapat memperoleh waktu kliring lebih cepat
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Riwayat Transaksi
      </strong>
    </td>
    
    <td>
      Mitra dengan riwayat transaksi baik dapat memperoleh waktu kliring lebih cepat
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Volume Transaksi
      </strong>
    </td>
    
    <td>
      Mitra dengan volume transaksi tinggi dan konsisten dapat memperoleh waktu kliring lebih cepat
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kepatuhan
      </strong>
    </td>
    
    <td>
      Mitra yang patuh terhadap ketentuan dapat memperoleh waktu kliring lebih cepat
    </td>
  </tr>
</tbody>
</table>

### Waktu Kliring Standar

<table>
<thead>
  <tr>
    <th>
      Kondisi
    </th>
    
    <th>
      Waktu Kliring
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Default
      </strong>
    </td>
    
    <td>
      <strong>
        3x24 jam
      </strong>
      
       (tiga Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Setelah Evaluasi
      </strong>
    </td>
    
    <td>
      Dapat disesuaikan sesuai kondisi dan tingkat risiko Mitra
    </td>
  </tr>
</tbody>
</table>

<callout color="amber" icon="i-lucide-alert-triangle">

**Catatan**: Waktu kliring dapat berbeda untuk setiap Mitra tergantung evaluasi dari pengelola. Batas waktu lain dapat ditentukan oleh pengelola sesuai kondisi.

</callout>

---

## Status Saldo Selama Kliring

### Saldo Pending vs Saldo Tersedia

<table>
<thead>
  <tr>
    <th>
      Status Saldo
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
        Saldo Pending
      </strong>
    </td>
    
    <td>
      Saldo yang masih dalam proses kliring, <strong>
        belum dapat ditarik
      </strong>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Saldo Tersedia
      </strong>
    </td>
    
    <td>
      Saldo yang sudah selesai proses kliring, <strong>
        dapat ditarik
      </strong>
      
       ke rekening Mitra
    </td>
  </tr>
</tbody>
</table>

### Ketentuan Penarikan

<callout color="amber" icon="i-lucide-alert-triangle">

**Penting**: Saldo Mitra yang masih berada pada proses kliring **belum dapat ditarik** ke rekening Mitra hingga proses kliring selesai. Hanya saldo yang sudah selesai proses kliring (Saldo Tersedia) yang dapat ditarik.

</callout>

---

## Contoh Perhitungan Jadwal Kliring

### Waktu Kliring 3x24 Jam (Hari Kerja)

<table>
<thead>
  <tr>
    <th>
      Transaksi Dibayar
    </th>
    
    <th>
      Hari
    </th>
    
    <th>
      Kliring Selesai
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Senin
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      <strong>
        Kamis
      </strong>
      
       (3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Selasa
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      <strong>
        Jumat
      </strong>
      
       (3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Rabu
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      <strong>
        Senin
      </strong>
      
       (minggu berikutnya, 3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Kamis
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      <strong>
        Selasa
      </strong>
      
       (minggu berikutnya, 3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Jumat
    </td>
    
    <td>
      Kerja
    </td>
    
    <td>
      <strong>
        Rabu
      </strong>
      
       (minggu berikutnya, 3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Sabtu
    </td>
    
    <td>
      Libur
    </td>
    
    <td>
      <strong>
        Rabu
      </strong>
      
       (minggu berikutnya, 3 Hari Kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Minggu
    </td>
    
    <td>
      Libur
    </td>
    
    <td>
      <strong>
        Rabu
      </strong>
      
       (minggu berikutnya, 3 Hari Kerja)
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Catatan**: Transaksi yang dibayar pada hari Sabtu atau Minggu akan mulai dihitung proses kliringnya pada Hari Kerja berikutnya (Senin).

</callout>

---

## Kondisi Penundaan Kliring

TriPay berhak **menunda proses kliring** atau **menahan sementara** dana transaksi dalam kondisi:

<list type="warning">

- Indikasi **fraud** atau kecurangan
- **Dispute/Chargeback** dari Pelanggan atau PJP Rekanan
- **Permintaan dari otoritas** berwenang
- **Pelanggaran** Perjanjian Kerja Sama
- **Transaksi mencurigakan** yang memerlukan investigasi lebih lanjut

</list>

---

## Rekonsiliasi

### Kewajiban

Mitra wajib melakukan rekonsiliasi dan menyampaikan koreksi **paling lambat H+7 Hari Kalender** setelah tanggal transaksi.

---

## Dukungan

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
</tbody>
</table>

---

## Referensi

Ketentuan settlement berdasarkan **Pasal 9** dan **Lampiran III** Perjanjian Kerja Sama.
