# Notifikasi WhatsApp

> Panduan fitur notifikasi WhatsApp di TriPay

TriPay menyediakan fitur **Notifikasi WhatsApp** untuk memberikan informasi real-time kepada Mitra mengenai transaksi, settlement, dan update penting lainnya.

---

## Pengertian Notifikasi WhatsApp

### Apa itu Notifikasi WhatsApp?

**Notifikasi WhatsApp** adalah layanan pengiriman informasi otomatis dari TriPay ke nomor WhatsApp Mitra yang terdaftar.

<list type="info">

- Notifikasi dikirim **otomatis** saat ada event penting
- Informasi dikirim **real-time** atau mendekati real-time
- Dapat dikonfigurasi sesuai **kebutuhan** Mitra

</list>

---

## Jenis Notifikasi

### 1. Notifikasi Transaksi

<table>
<thead>
  <tr>
    <th>
      Event
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
        Transaksi Sukses
      </strong>
    </td>
    
    <td>
      Pembayaran berhasil diterima
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transaksi Expired
      </strong>
    </td>
    
    <td>
      Transaksi melewati batas waktu pembayaran
    </td>
  </tr>
</tbody>
</table>

### 2. Notifikasi Settlement

<table>
<thead>
  <tr>
    <th>
      Event
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
      Pencairan dana dimulai
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Berhasil
      </strong>
    </td>
    
    <td>
      Dana sudah ditransfer ke rekening
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Gagal
      </strong>
    </td>
    
    <td>
      Ada masalah dengan proses pencairan
    </td>
  </tr>
</tbody>
</table>

### 3. Notifikasi Akun

<table>
<thead>
  <tr>
    <th>
      Event
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
        Perubahan Status Akun
      </strong>
    </td>
    
    <td>
      Upgrade, suspend, dll
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Perubahan Merchant
      </strong>
    </td>
    
    <td>
      Approval, perubahan setting
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Keamanan
      </strong>
    </td>
    
    <td>
      Login dari device baru, perubahan password
    </td>
  </tr>
</tbody>
</table>

### 4. Notifikasi Informasi

<table>
<thead>
  <tr>
    <th>
      Event
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
        Pengumuman
      </strong>
    </td>
    
    <td>
      Info penting dari TriPay
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Maintenance
      </strong>
    </td>
    
    <td>
      Jadwal pemeliharaan sistem
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Fitur Baru
      </strong>
    </td>
    
    <td>
      Informasi fitur terbaru
    </td>
  </tr>
</tbody>
</table>

---

## Mengaktifkan Notifikasi WhatsApp

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Pengaturan** atau **Settings**
3. Pilih tab **Notifikasi**
4. Aktifkan **Notifikasi WhatsApp**
5. Masukkan **nomor WhatsApp** yang valid
6. **Verifikasi** nomor (jika diperlukan)
7. Pilih **jenis notifikasi** yang ingin diterima
8. **Simpan** pengaturan

### Persyaratan Nomor

<table>
<thead>
  <tr>
    <th>
      Persyaratan
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
        Format
      </strong>
    </td>
    
    <td>
      Nomor Indonesia dengan kode +62 atau 08xx
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Status
      </strong>
    </td>
    
    <td>
      WhatsApp aktif dan dapat menerima pesan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kepemilikan
      </strong>
    </td>
    
    <td>
      Nomor milik Mitra atau PIC yang berwenang
    </td>
  </tr>
</tbody>
</table>

---

## Konfigurasi Notifikasi

### Memilih Jenis Notifikasi

Mitra dapat memilih notifikasi mana yang ingin diterima:

<table>
<thead>
  <tr>
    <th>
      Kategori
    </th>
    
    <th>
      Rekomendasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Transaksi Sukses
      </strong>
    </td>
    
    <td>
      ✅ Aktifkan untuk monitoring real-time
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement
      </strong>
    </td>
    
    <td>
      ✅ Aktifkan untuk memastikan dana masuk
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Keamanan
      </strong>
    </td>
    
    <td>
      ✅ Sangat direkomendasikan aktif
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Pengumuman
      </strong>
    </td>
    
    <td>
      ✅ Untuk info penting
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transaksi Expired
      </strong>
    </td>
    
    <td>
      Opsional (bisa banyak jika volume tinggi)
    </td>
  </tr>
</tbody>
</table>

### Contoh Konfigurasi

**Untuk volume transaksi tinggi:**

- ✅ Settlement saja
- ✅ Keamanan
- ✅ Pengumuman
- ❌ Transaksi (terlalu banyak notifikasi)

**Untuk volume transaksi rendah-sedang:**

- ✅ Semua notifikasi aktif

---

## Format Notifikasi

### Contoh Notifikasi Transaksi Sukses

```text
✅ PEMBAYARAN BERHASIL

Merchant: Toko ABC
Reference: T1234567890
Order ID: INV-001
Nominal: Rp100.000
Channel: QRIS
Waktu: 15 Jan 2024, 10:30 WIB

Terima kasih menggunakan TriPay.
```

### Contoh Notifikasi Settlement

```text
💰 SETTLEMENT BERHASIL

Tanggal: 17 Jan 2024
Jumlah Transaksi: 25
Total Gross: Rp5.000.000
Total Fee: Rp107.500
Total Net: Rp4.892.500

Dana telah ditransfer ke rekening:
Bank BCA - 1234567890

Terima kasih menggunakan TriPay.
```

---

## Multi Nomor (Jika Tersedia)

### Menambah Nomor Tambahan

Beberapa akun dapat mendaftarkan lebih dari satu nomor WhatsApp:

<table>
<thead>
  <tr>
    <th>
      Nomor
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
        Nomor Utama
      </strong>
    </td>
    
    <td>
      Menerima semua notifikasi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Nomor Finance
      </strong>
    </td>
    
    <td>
      Hanya notifikasi settlement
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Nomor Teknis
      </strong>
    </td>
    
    <td>
      Notifikasi keamanan dan maintenance
    </td>
  </tr>
</tbody>
</table>

---

## Troubleshooting

### Notifikasi Tidak Diterima

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
      Tidak ada notifikasi
    </td>
    
    <td>
      Fitur belum aktif
    </td>
    
    <td>
      Aktifkan di Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      Nomor salah
    </td>
    
    <td>
      Typo saat input
    </td>
    
    <td>
      Periksa dan update nomor
    </td>
  </tr>
  
  <tr>
    <td>
      WhatsApp bermasalah
    </td>
    
    <td>
      Nomor tidak aktif
    </td>
    
    <td>
      Pastikan WhatsApp aktif
    </td>
  </tr>
  
  <tr>
    <td>
      Diblokir
    </td>
    
    <td>
      Menandai sebagai spam
    </td>
    
    <td>
      Tambahkan kontak TriPay
    </td>
  </tr>
</tbody>
</table>

### Notifikasi Terlambat

<table>
<thead>
  <tr>
    <th>
      Penyebab
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Jaringan
    </td>
    
    <td>
      Koneksi internet tidak stabil
    </td>
  </tr>
  
  <tr>
    <td>
      Load tinggi
    </td>
    
    <td>
      Banyak notifikasi dalam antrian
    </td>
  </tr>
  
  <tr>
    <td>
      WhatsApp delay
    </td>
    
    <td>
      Delay dari sisi WhatsApp
    </td>
  </tr>
</tbody>
</table>

---

## Tips Penggunaan

### Best Practices

<list type="success">

- **Simpan kontak TriPay** untuk menghindari notifikasi masuk spam
- **Update nomor segera** jika ada perubahan
- **Pilih notifikasi yang relevan** untuk menghindari notifikasi berlebihan
- **Aktifkan notifikasi keamanan** untuk perlindungan akun

</list>

### Etika Notifikasi

<list type="info">

- Jangan **forward** notifikasi yang berisi informasi sensitif
- **Jaga kerahasiaan** data transaksi
- Laporkan jika menerima **notifikasi mencurigakan**

</list>

---

## Privasi dan Keamanan

### Data yang Dikirim

Notifikasi WhatsApp berisi informasi:

- Nomor referensi transaksi
- Nominal transaksi
- Status transaksi/settlement
- Informasi umum merchant

### Proteksi Data

<callout color="green" icon="i-lucide-shield">

**Keamanan**: Data sensitif seperti API Key, Private Key, dan credential tidak pernah dikirim melalui notifikasi WhatsApp.

</callout>

---

## Alternatif Notifikasi

Selain WhatsApp, TriPay juga menyediakan:

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
        Dashboard
      </strong>
    </td>
    
    <td>
      Notifikasi in-app
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback/IPN
      </strong>
    </td>
    
    <td>
      Notifikasi teknis ke server Mitra
    </td>
  </tr>
</tbody>
</table>

---

## Mengubah Nomor WhatsApp

### Langkah-langkah

1. Login ke Dashboard
2. Masuk ke **Pengaturan** → **Notifikasi**
3. Klik **Ubah Nomor**
4. Masukkan nomor baru
5. Verifikasi (jika diperlukan)
6. Simpan

### Kewajiban Update

<callout color="amber" icon="i-lucide-alert-triangle">

**Kewajiban**: Mitra wajib memperbarui data kontak, termasuk nomor WhatsApp, jika ada perubahan. Laporkan dalam **7 Hari Kalender** sejak perubahan.

</callout>

---

## FAQ Notifikasi WhatsApp

### Apakah ada biaya untuk notifikasi WhatsApp?

Saat ini **tidak ada biaya tambahan** untuk notifikasi WhatsApp.

### Berapa banyak notifikasi yang dikirim per hari?

Tergantung volume transaksi dan jenis notifikasi yang diaktifkan.

### Bisakah notifikasi dikirim ke lebih dari satu nomor?

Tergantung fitur yang tersedia di akun Anda.

### Bagaimana jika saya tidak menerima notifikasi?

Periksa pengaturan di Dashboard, pastikan nomor benar dan WhatsApp aktif.

---

## Dukungan

Jika mengalami kendala dengan notifikasi WhatsApp:

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

Fitur notifikasi berdasarkan:

- **Pasal 3 Poin 4** - Kewajiban TriPay memberikan notifikasi transaksi
- **Pasal 4 Poin 2** - Kewajiban Mitra memperbarui data kontak
- **Pasal 6 Poin 2** - Hak Mitra mendapatkan informasi perubahan fitur
