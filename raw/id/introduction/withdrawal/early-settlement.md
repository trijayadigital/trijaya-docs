# Early settlement

> Panduan fitur Early Settlement (Pencairan Lebih Awal) di TriPay

**Early Settlement (Pencairan Lebih Awal)** adalah fitur yang memungkinkan Mitra menerima Dana Transaksi sebelum masa kliring standar selesai. Halaman ini menjelaskan cara kerja, ketentuan, dan biaya early settlement.

---

## Pengertian Early Settlement

### Apa itu Early Settlement?

Secara standar, settlement di TriPay adalah:

- **H+2** untuk Akun Bisnis (setelah memenuhi syarat)
- **H+3** untuk Akun Personal

**Early Settlement** memungkinkan:

<list type="info">

- Pencairan dana **sebelum** jadwal settlement standar
- Akses dana **lebih cepat** untuk kebutuhan bisnis
- Fleksibilitas dalam **pengelolaan cashflow**

</list>

### Perbandingan Settlement

<table>
<thead>
  <tr>
    <th>
      Tipe
    </th>
    
    <th>
      Jadwal
    </th>
    
    <th>
      Biaya
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Standar (Bisnis)
      </strong>
    </td>
    
    <td>
      H+2
    </td>
    
    <td>
      Rp7.500
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Standar (Personal)
      </strong>
    </td>
    
    <td>
      H+3
    </td>
    
    <td>
      Rp7.500
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Early Settlement
      </strong>
    </td>
    
    <td>
      < H+2
    </td>
    
    <td>
      Rp7.500 + Biaya Early
    </td>
  </tr>
</tbody>
</table>

---

## Cara Kerja Early Settlement

### Alur Proses

```text
1. Transaksi Sukses (PAID)
              ↓
2. Dana Masuk ke Saldo Pending
              ↓
3. Mitra Request Early Settlement
              ↓
4. Sistem Memvalidasi Request
              ↓
5. Biaya Early Settlement Dipotong
              ↓
6. Dana Ditransfer ke Rekening Mitra
```

### Timeline Perbandingan

**Contoh transaksi hari Senin:**

<table>
<thead>
  <tr>
    <th>
      Tipe Settlement
    </th>
    
    <th>
      Pencairan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        H+3 (Personal)
      </strong>
    </td>
    
    <td>
      Kamis
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        H+2 (Bisnis)
      </strong>
    </td>
    
    <td>
      Rabu
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        H+1 (Early)
      </strong>
    </td>
    
    <td>
      Selasa
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        H+0 (Same Day)
      </strong>
    </td>
    
    <td>
      Senin
    </td>
  </tr>
</tbody>
</table>

---

## Biaya Early Settlement

### Struktur Biaya

<table>
<thead>
  <tr>
    <th>
      Komponen
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
        Biaya Early
      </strong>
    </td>
    
    <td>
      Persentase atau flat (bervariasi)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Total Biaya
      </strong>
    </td>
    
    <td>
      Standar + Early
    </td>
  </tr>
</tbody>
</table>

### Contoh Perhitungan

**Early Settlement Rp10.000.000 (H+0 dari jadwal H+2):**

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
      Dana Transaksi
    </td>
    
    <td>
      Rp10.000.000
    </td>
  </tr>
  
  <tr>
    <td>
      Biaya Settlement Standar
    </td>
    
    <td>
      -Rp7.500
    </td>
  </tr>
  
  <tr>
    <td>
      Biaya Early (misal 0,3%)
    </td>
    
    <td>
      -Rp30.000
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
        Rp9.962.500
      </strong>
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Catatan**: Biaya early settlement bersifat ilustratif. Cek Dashboard atau hubungi support untuk tarif aktual.

</callout>

---

## Kapan Menggunakan Early Settlement?

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
        Kebutuhan modal mendesak
      </strong>
    </td>
    
    <td>
      Perlu stok barang segera
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Bayar supplier COD
      </strong>
    </td>
    
    <td>
      Pembayaran harus segera
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Gaji karyawan
      </strong>
    </td>
    
    <td>
      Jatuh tempo gaji di tengah minggu
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Opportunity cost tinggi
      </strong>
    </td>
    
    <td>
      Potensi keuntungan > biaya early
    </td>
  </tr>
</tbody>
</table>

### Analisis Biaya-Manfaat

Pertanyaan yang perlu dijawab:

<list type="info">

- Apakah **nilai keuntungan** dari dana lebih awal > biaya early?
- Apakah ada **alternatif pembiayaan** yang lebih murah?
- Seberapa **urgent** kebutuhan dana?

</list>

---

## Mengaktifkan/Request Early Settlement

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Penarikan** atau **Settlement**
3. Pilih opsi **Early Settlement**
4. Pilih transaksi yang ingin dicairkan lebih awal
5. Review **biaya** yang akan dikenakan
6. **Konfirmasi** request
7. Dana diproses sesuai jadwal early settlement

### Persyaratan

<list type="warning">

- Transaksi sudah berstatus **PAID**
- Akun dalam kondisi **aktif**
- Tidak ada **dispute** atau **hold** pada transaksi
- Rekening penarikan sudah **verified**
- Memenuhi **minimum nominal** (jika ada)

</list>

---

## Ketentuan Early Settlement

### Transaksi yang Memenuhi Syarat

<table>
<thead>
  <tr>
    <th>
      Kriteria
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
        Status
      </strong>
    </td>
    
    <td>
      PAID (pembayaran berhasil)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Masa Kliring
      </strong>
    </td>
    
    <td>
      Belum selesai masa standar
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Dispute
      </strong>
    </td>
    
    <td>
      Tidak dalam dispute/hold
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Channel
      </strong>
    </td>
    
    <td>
      Semua channel (tergantung kebijakan)
    </td>
  </tr>
</tbody>
</table>

### Limit dan Batasan

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
        Minimum Nominal
      </strong>
    </td>
    
    <td>
      Tergantung kebijakan (cek Dashboard)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Maximum per Hari
      </strong>
    </td>
    
    <td>
      Tergantung kebijakan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Frekuensi
      </strong>
    </td>
    
    <td>
      Tergantung kebijakan
    </td>
  </tr>
</tbody>
</table>

---

## Risiko dan Pertimbangan

### Potensi Risiko

<list type="warning">

- **Biaya tambahan** mengurangi margin keuntungan
- **Fraud/Dispute** setelah early settlement tetap jadi tanggung jawab Mitra
- **Chargeback** akan dipotong dari saldo berikutnya

</list>

### Hak TriPay

Berdasarkan Perjanjian Kerja Sama, TriPay berhak menahan dana jika:

<list type="info">

- Terdapat indikasi **fraud** atau kecurangan
- Ada **dispute** dari Pelanggan atau PJP Rekanan
- Permintaan dari **otoritas berwenang**
- Mitra **melanggar** ketentuan PKS

</list>

---

## Alternatif Early Settlement

### Optimasi Cashflow Lain

<table>
<thead>
  <tr>
    <th>
      Alternatif
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
        Upgrade ke Bisnis
      </strong>
    </td>
    
    <td>
      Settlement H+2 vs H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Perencanaan cashflow
      </strong>
    </td>
    
    <td>
      Buffer saldo untuk operasional
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Credit line
      </strong>
    </td>
    
    <td>
      Kredit usaha dari bank
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Invoice financing
      </strong>
    </td>
    
    <td>
      Pendanaan berbasis invoice
    </td>
  </tr>
</tbody>
</table>

### Upgrade ke Akun Bisnis

Untuk mendapat settlement H+2 secara standar:

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
      Jenis Akun
    </td>
    
    <td>
      Upgrade ke Akun Bisnis
    </td>
  </tr>
  
  <tr>
    <td>
      Transaksi
    </td>
    
    <td>
      Min. 30 transaksi sukses
    </td>
  </tr>
  
  <tr>
    <td>
      Nilai
    </td>
    
    <td>
      Min. Rp30.000.000
    </td>
  </tr>
  
  <tr>
    <td>
      Umur Akun
    </td>
    
    <td>
      Min. 60 hari
    </td>
  </tr>
</tbody>
</table>

---

## FAQ Early Settlement

### Apakah semua transaksi bisa di-early settlement?

**Tergantung kebijakan.** Transaksi harus berstatus PAID dan tidak dalam dispute.

### Berapa biaya early settlement?

Biaya bervariasi tergantung kebijakan. Cek informasi di **Dashboard** atau hubungi support.

### Seberapa cepat dana diterima?

Tergantung tipe early settlement yang dipilih (H+1, H+0, dll) dan jam operasional bank.

### Bagaimana jika terjadi dispute setelah early settlement?

Dana dispute akan dipotong dari saldo berikutnya sesuai ketentuan.

### Apakah early settlement tersedia untuk semua channel?

Umumnya ya, tapi cek ketentuan spesifik di Dashboard.

---

## Tips Menggunakan Early Settlement

<list type="success">

- **Hitung biaya vs manfaat** sebelum request
- **Gunakan untuk kebutuhan mendesak** dengan return jelas
- **Monitor pola cashflow** untuk perencanaan lebih baik
- **Pertimbangkan upgrade** ke Akun Bisnis untuk H+2 standar

</list>

---

## Dukungan

Jika mengalami kendala dengan early settlement:

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

Ketentuan early settlement berdasarkan:

- **Pasal 7 Poin 4** - Mekanisme Settlement
- **Pasal 8** - Hak TriPay menahan dana dalam kondisi tertentu
- **Pasal 9** - Biaya Transaksi dan Settlement
- **Lampiran III** - Ketentuan Settlement
