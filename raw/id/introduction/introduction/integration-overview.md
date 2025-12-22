# Integration Overview

> Gambaran umum proses integrasi dengan layanan TriPay

Halaman ini memberikan gambaran umum tentang proses integrasi bisnis dengan layanan TriPay. Proses integrasi terdiri dari tiga tahap utama: pembuatan akun, pengajuan merchant, dan integrasi teknis.

---

## Tahap 1: Buat Akun TriPay

Langkah pertama adalah membuat dan memverifikasi akun TriPay. Proses pendaftaran terdiri dari dua tahap utama:

1. **Isi Formulir Pendaftaran di Halaman Depan TriPay**
  - Nama lengkap sesuai KTP
  - Alamat lengkap (provinsi, kabupaten, kecamatan, dst.)
  - Email aktif
  - Nomor WhatsApp aktif
  - Alamat website yang akan diintegrasikan
  - Verifikasi email dan nomor telepon
2. **Verifikasi Akun (5 Tahap)**
  - Pilih Jenis Akun (Personal/Bisnis)
  - Upload Dokumen sesuai jenis akun
  - Informasi Usaha (data pemilik dan bisnis)
  - Verifikasi Identitas (verifikasi wajah Privy)
  - Tanda Tangan Dokumen (PKS Privy)

### Persyaratan Dokumen

<table>
<thead>
  <tr>
    <th>
      Jenis Akun
    </th>
    
    <th>
      Dokumen yang Diperlukan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Personal
      </strong>
    </td>
    
    <td>
      KTP Penanggung Jawab
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Bisnis
      </strong>
    </td>
    
    <td>
      KTP Penanggung Jawab, NPWP Penanggung Jawab, SIUP, Akta Pendirian, NPWP Perusahaan
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Kewajiban Data**: Mitra wajib mengisi data pendaftaran secara **benar, lengkap, dan terkini**. Setiap perubahan data harus dilaporkan ke TriPay dalam waktu **7 hari kalender**.

</callout>

📖 **Panduan Lengkap**: [Pendaftaran Akun](/id/introduction/account/registration)

---

## Tahap 2: Ajukan Merchant

Setelah akun terverifikasi, buat merchant untuk bisnis Mitra.

### Proses Pembuatan Merchant

1. **Login ke Dashboard TriPay**
  - Akses Dashboard menggunakan email dan password
2. **Buat Merchant Baru**
  - Masuk ke menu **Merchant**
  - Klik **Tambah Merchant**
3. **Lengkapi Informasi Bisnis**

**Informasi Dasar:**

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
      <strong>
        Nama Merchant
      </strong>
    </td>
    
    <td>
      Nama website atau aplikasi Mitra. Tidak boleh mengandung karakter spesial dan tidak boleh menggunakan nama badan usaha.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kategori Bisnis
      </strong>
    </td>
    
    <td>
      Pilih kategori yang sesuai dengan jenis bisnis Mitra.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Logo
      </strong>
    </td>
    
    <td>
      Upload logo website/aplikasi (max 1MB). Format: jpg, jpeg, png. Resolusi disarankan: 200x50 pixel.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Deskripsi
      </strong>
    </td>
    
    <td>
      Jelaskan detail produk atau layanan yang disediakan Mitra, termasuk alur transaksi dan cara transaksi pada website.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        URL Website
      </strong>
    </td>
    
    <td>
      URL website dengan format <code>
        https://
      </code>
      
       atau <code>
        http://
      </code>
      
      . Domain yang <strong>
        tidak diperbolehkan
      </strong>
      
      : my.id, biz.id, xyz, vercel, netlify, blogspot, dan wordpress.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Data Login
      </strong>
    </td>
    
    <td>
      Jika website memerlukan login untuk mengakses, isi dengan data login akun dummy untuk keperluan demo transaksi merchant.
    </td>
  </tr>
</tbody>
</table>

**Pengaturan Teknis:**

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
      <strong>
        URL Callback
      </strong>
    </td>
    
    <td>
      URL endpoint untuk menerima notifikasi transaksi. Harus mengandung domain yang sama dengan URL website. Format: <code>
        https://
      </code>
      
       atau <code>
        http://
      </code>
      
      . Contoh: <code>
        https://example.com/callback
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Whitelist IP
      </strong>
    </td>
    
    <td>
      Alamat IPv4 dan IPv6 dari server hosting Mitra. Jika lebih dari satu, pisahkan dengan koma. Contoh: <code>
        192.168.1.1,192.168.1.2
      </code>
      
      . IP dapat dilihat di panel hosting atau VPS.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Izinkan Inkonsistensi Nilai
      </strong>
    </td>
    
    <td>
      Jika diizinkan, sistem tidak akan memvalidasi konsistensi nilai produk dengan jumlah transaksi yang masuk. Hanya ubah jika Mitra memahami fungsinya. Default: <strong>
        Tidak
      </strong>
      
      .
    </td>
  </tr>
</tbody>
</table>

1. **Konfigurasi Channel Pembayaran**
  - Pilih metode pembayaran yang diinginkan
  - Atur biaya admin ke pelanggan (opsional)
2. **Submit dan Tunggu Verifikasi**
  - Tim TriPay memverifikasi dalam 1x24 jam
  - Merchant akan disetujui jika memenuhi syarat

### Metode Pembayaran yang Tersedia

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Biaya
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      QRIS
    </td>
    
    <td>
      0,7% + Rp750
    </td>
    
    <td>
      Semua e-wallet dan mobile banking
    </td>
  </tr>
  
  <tr>
    <td>
      BCA VA
    </td>
    
    <td>
      Rp5.500
    </td>
    
    <td>
      Virtual Account BCA
    </td>
  </tr>
  
  <tr>
    <td>
      VA Lainnya
    </td>
    
    <td>
      Rp4.250
    </td>
    
    <td>
      BNI, BRI, Mandiri, dll
    </td>
  </tr>
  
  <tr>
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
    
    <td>
      GoPay, OVO, DANA, dll
    </td>
  </tr>
  
  <tr>
    <td>
      Retail
    </td>
    
    <td>
      Rp3.500
    </td>
    
    <td>
      Alfamart, Indomaret
    </td>
  </tr>
</tbody>
</table>

<callout color="amber" icon="i-lucide-alert-triangle">

**Kategori Terlarang**: TriPay tidak menerima merchant untuk kegiatan ilegal seperti judi, pinjol ilegal, money game, perdagangan barang terlarang, dan pornografi.

</callout>

📖 **Panduan Lengkap**: [Registrasi Merchant](/id/introduction/merchant/registration)

---

## Tahap 3: Integrasi dengan Bisnis

Setelah merchant disetujui, Mitra akan mendapatkan kredensial untuk integrasi.

### Kredensial yang Diperoleh

<table>
<thead>
  <tr>
    <th>
      Kredensial
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
        API Key
      </strong>
    </td>
    
    <td>
      Identifikasi merchant dalam setiap request
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Private Key
      </strong>
    </td>
    
    <td>
      Autentikasi dan validasi signature
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Merchant Code
      </strong>
    </td>
    
    <td>
      Kode unik merchant
    </td>
  </tr>
</tbody>
</table>

<callout color="amber" icon="i-lucide-shield">

**Keamanan**: Simpan kredensial dengan aman. Jangan bagikan Private Key ke pihak manapun. Penggunaan kredensial oleh pihak tidak sah menjadi tanggung jawab MITRA.

</callout>

### Pilihan Metode Integrasi

TriPay menyediakan berbagai opsi integrasi sesuai kebutuhan:

#### 1. Integrasi API

Untuk developer yang ingin kontrol penuh atas proses pembayaran.

**Fitur:**

- Kontrol penuh atas UI/UX checkout
- Fleksibilitas tinggi
- Cocok untuk aplikasi custom

**Kebutuhan:**

- Kemampuan programming (PHP, Node.js, Python, dll)
- Server untuk hosting aplikasi

📖 **Dokumentasi**: [API Endpoints](/id/api-references/api-endpoints)

#### 2. Plugin CMS

Untuk pengguna platform e-commerce populer tanpa coding.

<table>
<thead>
  <tr>
    <th>
      Platform
    </th>
    
    <th>
      Status
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      WooCommerce
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      WHMCS
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      Easy Digital Downloads
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      aMember
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      OpenCart
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      PrestaShop
    </td>
    
    <td>
      ✅ Tersedia
    </td>
  </tr>
</tbody>
</table>

**Keunggulan:**

- Instalasi mudah tanpa coding
- Konfigurasi melalui admin panel
- Update otomatis

📖 **Panduan**: [Plugin Integration](/id/introduction/integrations/plugin)

---

## Mode Development: Sandbox

Sebelum go-live, gunakan mode **Sandbox** untuk testing.

### Keunggulan Sandbox

<table>
<thead>
  <tr>
    <th>
      Fitur
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
        Simulasi Transaksi
      </strong>
    </td>
    
    <td>
      Test pembayaran tanpa uang sungguhan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Semua Channel
      </strong>
    </td>
    
    <td>
      Akses semua metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback Testing
      </strong>
    </td>
    
    <td>
      Simulasi notifikasi pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Tanpa Risiko
      </strong>
    </td>
    
    <td>
      Tidak ada biaya transaksi
    </td>
  </tr>
</tbody>
</table>

### Alur Penggunaan Sandbox

```text
1. Aktifkan Mode Sandbox di Dashboard
        ↓
2. Gunakan Kredensial Sandbox (API Key & Private Key Sandbox)
        ↓
3. Lakukan Testing Transaksi
        ↓
4. Verifikasi Callback/IPN Berfungsi
        ↓
5. Siap Beralih ke Production
```

📖 **Panduan Lengkap**: [Sandbox Testing](/id/introduction/integrations/sandbox)

---

## Mode Live: Production

Setelah testing selesai, beralih ke mode Production untuk menerima pembayaran nyata.

### Checklist Sebelum Go-Live

<list type="success">

- Akun dan Merchant sudah terverifikasi
- Testing di Sandbox berhasil
- Callback/IPN sudah berfungsi
- Halaman sukses dan gagal sudah siap
- Error handling sudah diimplementasi

</list>

### Langkah Beralih ke Production

1. **Ganti Kredensial**
  - Ubah API Key dari Sandbox ke Production
  - Ubah Private Key dari Sandbox ke Production
2. **Ubah Endpoint**
  - Sandbox: `https://tripay.co.id/api-sandbox/...`
  - Production: `https://tripay.co.id/api/...`
3. **Verifikasi Konfigurasi**
  - Pastikan URL callback sudah benar
  - Test transaksi pertama dengan nominal kecil

📖 **Panduan Lengkap**: [Production Setup](/id/introduction/integrations/production)

---

---

## Dukungan Teknis

TriPay menyediakan dukungan teknis untuk membantu proses integrasi:

### Sumber Bantuan

<table>
<thead>
  <tr>
    <th>
      Resource
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
        Dokumentasi API
      </strong>
    </td>
    
    <td>
      Referensi lengkap endpoint dan parameter
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback Tester
      </strong>
    </td>
    
    <td>
      Tool untuk test callback di Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Contoh Code
      </strong>
    </td>
    
    <td>
      Sample code dalam berbagai bahasa
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        FAQ
      </strong>
    </td>
    
    <td>
      Jawaban pertanyaan umum
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Customer Support
      </strong>
    </td>
    
    <td>
      Bantuan langsung via email/WhatsApp
    </td>
  </tr>
</tbody>
</table>

### Kontak Support

- **Email**: [ops@trihariyanto.com](mailto:ops@trihariyanto.com)
- **WhatsApp**: 085730000727
- **Jam Operasional**: Senin - Jumat (Hari Kerja)

---

## Ringkasan Proses Integrasi

<table>
<thead>
  <tr>
    <th>
      Tahap
    </th>
    
    <th>
      Aktivitas
    </th>
    
    <th>
      Estimasi Waktu
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      1
    </td>
    
    <td>
      Daftar & Verifikasi Akun (5 Tahap)
    </td>
    
    <td>
      1-2 hari
    </td>
  </tr>
  
  <tr>
    <td>
      2
    </td>
    
    <td>
      Buat & Verifikasi Merchant
    </td>
    
    <td>
      1 hari
    </td>
  </tr>
  
  <tr>
    <td>
      3
    </td>
    
    <td>
      Integrasi API/Plugin
    </td>
    
    <td>
      1-7 hari*
    </td>
  </tr>
  
  <tr>
    <td>
      4
    </td>
    
    <td>
      Testing di Sandbox
    </td>
    
    <td>
      1-3 hari
    </td>
  </tr>
  
  <tr>
    <td>
      5
    </td>
    
    <td>
      Go-Live Production
    </td>
    
    <td>
      Langsung
    </td>
  </tr>
</tbody>
</table>

*Tergantung kompleksitas dan pengalaman developer

---

## Langkah Selanjutnya

Setelah memahami gambaran umum, lanjutkan ke panduan detail:

1. **Pendaftaran Akun** - Panduan lengkap membuat akun
2. **Upgrade Akun** - Perbedaan Personal vs Bisnis
3. **Registrasi Merchant** - Cara membuat merchant
4. **Channel Pembayaran** - Detail setiap metode pembayaran
5. **Biaya Transaksi** - Struktur biaya lengkap
