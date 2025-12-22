# Penarikan sabtu minggu

> Panduan fitur Weekend Withdrawal di TriPay

**Weekend Withdrawal (Penarikan Sabtu-Minggu)** adalah fitur khusus yang memungkinkan Mitra melakukan penarikan dana di akhir pekan. Halaman ini menjelaskan cara kerja, ketentuan, dan biaya tambahan untuk fitur ini.

---

## Pengertian Weekend Withdrawal

### Apa itu Weekend Withdrawal?

Secara default, settlement di TriPay hanya diproses pada **Hari Kerja** (Senin-Jumat). **Weekend Withdrawal** adalah fitur tambahan yang memungkinkan:

<list type="info">

- Penarikan dana pada hari **Sabtu** dan **Minggu**
- Proses transfer di luar jam kerja normal
- Akses dana lebih cepat untuk kebutuhan mendesak

</list>

### Ketentuan Standar vs Weekend

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Settlement Standar
    </th>
    
    <th>
      Weekend Withdrawal
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Hari Proses
      </strong>
    </td>
    
    <td>
      Senin - Jumat
    </td>
    
    <td>
      Sabtu & Minggu
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Biaya Tambahan
      </strong>
    </td>
    
    <td>
      Tidak ada
    </td>
    
    <td>
      Ada biaya ekstra
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Ketersediaan
      </strong>
    </td>
    
    <td>
      Default
    </td>
    
    <td>
      Fitur khusus
    </td>
  </tr>
</tbody>
</table>

---

## Mengapa Weekend Withdrawal Diperlukan?

### Definisi Hari Kerja

Berdasarkan Perjanjian Kerja Sama:

<callout color="blue" icon="i-lucide-info">

**Hari Kerja** adalah hari Senin sampai Jumat, **tidak termasuk** Sabtu, Minggu, dan hari libur nasional yang ditetapkan oleh Pemerintah Republik Indonesia.

</callout>

### Implikasi untuk Mitra

Pada kondisi standar:

- Transaksi hari **Jumat** akan settlement pada **Selasa** (H+2 Bisnis) atau **Rabu** (H+3 Personal)
- Transaksi **Sabtu-Minggu** menunggu hingga **Hari Kerja** berikutnya
- Mitra harus menunggu lebih lama untuk akses dana

---

## Cara Kerja Weekend Withdrawal

### Proses

```text
1. Mitra Request Penarikan di Sabtu/Minggu
              ↓
2. Sistem Memproses Request
              ↓
3. Biaya Weekend Dipotong dari Dana
              ↓
4. Transfer ke Rekening Mitra
              ↓
5. Dana Diterima (tergantung bank)
```

### Estimasi Waktu Proses

<table>
<thead>
  <tr>
    <th>
      Request Dikirim
    </th>
    
    <th>
      Estimasi Proses
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Sabtu pagi
    </td>
    
    <td>
      Sabtu siang/sore
    </td>
  </tr>
  
  <tr>
    <td>
      Sabtu sore
    </td>
    
    <td>
      Sabtu malam / Minggu pagi
    </td>
  </tr>
  
  <tr>
    <td>
      Minggu pagi
    </td>
    
    <td>
      Minggu siang/sore
    </td>
  </tr>
  
  <tr>
    <td>
      Minggu sore
    </td>
    
    <td>
      Minggu malam / Senin pagi
    </td>
  </tr>
</tbody>
</table>

<callout color="amber" icon="i-lucide-alert-triangle">

**Catatan**: Waktu proses tergantung pada jam cut-off bank penerima. Beberapa bank memproses transfer akhir pekan, beberapa menundanya hingga Senin.

</callout>

---

## Biaya Weekend Withdrawal

### Struktur Biaya

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
        Biaya Settlement Standar
      </strong>
    </td>
    
    <td>
      Rp7.500
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Biaya Weekend
      </strong>
    </td>
    
    <td>
      Tambahan (bervariasi)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Total
      </strong>
    </td>
    
    <td>
      Biaya standar + Biaya weekend
    </td>
  </tr>
</tbody>
</table>

### Contoh Perhitungan

**Penarikan Rp1.000.000 di hari Sabtu:**

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
      Dana yang Dicairkan
    </td>
    
    <td>
      Rp1.000.000
    </td>
  </tr>
  
  <tr>
    <td>
      Biaya Settlement
    </td>
    
    <td>
      -Rp7.500
    </td>
  </tr>
  
  <tr>
    <td>
      Biaya Weekend
    </td>
    
    <td>
      -Rp10.000*
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Dana Diterima
      </strong>
    </td>
    
    <td>
      <strong>
        Rp982.500
      </strong>
    </td>
  </tr>
</tbody>
</table>

*Biaya weekend bersifat ilustratif, cek Dashboard untuk biaya aktual.

---

## Mengaktifkan Weekend Withdrawal

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Pengaturan** atau **Penarikan**
3. Cari opsi **Weekend Withdrawal**
4. **Aktifkan** fitur
5. Baca dan **setujui** ketentuan biaya tambahan
6. **Simpan** pengaturan

### Persyaratan

<list type="warning">

- Akun dalam status **aktif**
- Rekening penarikan sudah **terverifikasi**
- Saldo mencukupi untuk **biaya tambahan**
- Tidak ada **dispute** atau **hold** pada dana

</list>

---

## Kapan Menggunakan Weekend Withdrawal?

### Situasi yang Cocok

<table>
<thead>
  <tr>
    <th>
      Skenario
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
        Kebutuhan mendesak
      </strong>
    </td>
    
    <td>
      Bayar supplier di akhir pekan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Operasional 7 hari
      </strong>
    </td>
    
    <td>
      Bisnis yang buka Sabtu-Minggu
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Cashflow ketat
      </strong>
    </td>
    
    <td>
      Perlu dana segera untuk operasional
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Momentum bisnis
      </strong>
    </td>
    
    <td>
      Promo/event di akhir pekan
    </td>
  </tr>
</tbody>
</table>

### Pertimbangan

<list type="info">

- Apakah urgensi **worth** biaya tambahan?
- Apakah bisa **menunggu** Hari Kerja?
- Apakah bank penerima **memproses** transfer weekend?

</list>

---

## Keterbatasan Weekend Withdrawal

### Bank yang Mungkin Delay

Beberapa bank tidak memproses transfer masuk di akhir pekan:

<table>
<thead>
  <tr>
    <th>
      Bank
    </th>
    
    <th>
      Proses Weekend
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      BCA
    </td>
    
    <td>
      Real-time (BI-Fast)
    </td>
  </tr>
  
  <tr>
    <td>
      BNI
    </td>
    
    <td>
      Tergantung jenis transfer
    </td>
  </tr>
  
  <tr>
    <td>
      BRI
    </td>
    
    <td>
      Tergantung jenis transfer
    </td>
  </tr>
  
  <tr>
    <td>
      Mandiri
    </td>
    
    <td>
      Tergantung jenis transfer
    </td>
  </tr>
  
  <tr>
    <td>
      Bank Digital
    </td>
    
    <td>
      Umumnya real-time
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Tips**: Bank digital seperti Jago, SeaBank, Blu umumnya lebih cepat memproses transfer weekend.

</callout>

### Nominal Limit

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Ketentuan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Minimum
      </strong>
    </td>
    
    <td>
      Tergantung kebijakan (cek Dashboard)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Maximum
      </strong>
    </td>
    
    <td>
      Tergantung kebijakan (cek Dashboard)
    </td>
  </tr>
</tbody>
</table>

---

## Alternatif Weekend Withdrawal

### Perencanaan Cashflow

Jika tidak ingin biaya tambahan:

<list type="success">

- **Prediksi kebutuhan** dana akhir pekan
- **Withdraw lebih awal** di hari Jumat
- **Siapkan buffer** saldo untuk operasional weekend
- **Gunakan** fitur auto withdrawal untuk konsistensi

</list>

### Request di Hari Jumat

<table>
<thead>
  <tr>
    <th>
      Request Jumat
    </th>
    
    <th>
      Settlement
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Pagi
    </td>
    
    <td>
      Mungkin diproses Jumat
    </td>
  </tr>
  
  <tr>
    <td>
      Sore
    </td>
    
    <td>
      Diproses Senin
    </td>
  </tr>
</tbody>
</table>

---

## FAQ Weekend Withdrawal

### Apakah fitur ini tersedia untuk semua akun?

Fitur ini mungkin memerlukan **aktivasi khusus** atau tersedia untuk akun tertentu. Cek Dashboard atau hubungi support.

### Berapa biaya weekend withdrawal?

Biaya bervariasi. Cek informasi terbaru di **Dashboard** atau hubungi support.

### Apakah dana pasti masuk di hari yang sama?

**Tergantung bank penerima.** Bank digital umumnya lebih cepat, bank konvensional mungkin delay hingga Senin.

### Bisakah saya request weekend withdrawal untuk dana yang belum settlement?

**Tidak.** Dana harus sudah melewati masa kliring (H+2/H+3) dan tersedia di saldo.

### Apakah ada limit per transaksi?

Cek ketentuan limit di Dashboard atau hubungi support.

---

## Tips Menggunakan Weekend Withdrawal

<list type="success">

- **Gunakan hanya jika urgent** - biaya tambahan perlu dipertimbangkan
- **Request pagi** untuk proses lebih cepat di hari yang sama
- **Pilih rekening bank digital** untuk penerimaan lebih cepat
- **Pantau status** transfer di Dashboard

</list>

---

## Dukungan

Jika mengalami kendala dengan weekend withdrawal:

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

<callout color="amber" icon="i-lucide-alert-triangle">

**Catatan**: Support mungkin memiliki respons lebih lambat di akhir pekan.

</callout>

---

## Referensi

Ketentuan weekend withdrawal berdasarkan:

- **Pasal 1 Poin 13** - Definisi Hari Kerja (tidak termasuk Sabtu-Minggu)
- **Pasal 9** - Biaya Transaksi dan Settlement
- **Lampiran III** - Ketentuan Settlement
