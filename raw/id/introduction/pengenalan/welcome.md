# Pengenalan

> Pengenalan layanan sistem pembayaran elektronik TriPay

Selamat datang di TriPay Payment!

## Tentang TriPay

**TriPay** adalah sistem pembayaran elektronik milik **PT Trijaya Digital Grup** yang menghubungkan bisnis (merchant) dengan pelanggan melalui berbagai metode pembayaran elektronik. TriPay berperan sebagai penyelenggara sistem dan technical operator yang terhubung dengan Penyelenggara Jasa Pembayaran (PJP) yang telah memperoleh izin dari **Bank Indonesia**.

TriPay Payment hadir sebagai jembatan yang menghubungkan bisnis atau merchant dengan pelanggan, menyediakan berbagai pilihan metode pembayaran yang lengkap, aman, dan mudah diakses melalui satu dashboard yang terintegrasi.

Melalui beragam pilihan integrasi API dan plugin, website atau aplikasi dapat dihubungkan dengan solusi pembayaran TriPay. Hal ini akan membantu bisnis berkembang pesat dan menjangkau pasar yang lebih luas.

---

## Ruang Lingkup Layanan

TriPay menyediakan layanan sistem pembayaran elektronik agar MITRA dapat menerima pembayaran dari Pelanggan melalui berbagai metode pembayaran. Layanan yang disediakan meliputi:

### 1. Akses API dan Dashboard

- **Application Programming Interface (API)**: Kumpulan fungsi, dokumentasi, dan protokol untuk integrasi sistem TriPay dengan sistem MITRA
- **Dashboard TriPay**: Aplikasi berbasis web untuk pemantauan transaksi, pengaturan konfigurasi, dan pengunduhan laporan

### 2. Pemrosesan Transaksi

Pemrosesan transaksi pembayaran dari Pelanggan ke rekening penampungan TriPay dan/atau PJP Rekanan secara real-time.

### 3. Settlement Dana

Pelimpahan Dana Transaksi kepada MITRA sesuai ketentuan:

- **Akun Bisnis**: H+2 (dua Hari Kerja)
- **Akun Personal**: H+3 (tiga Hari Kerja)

### 4. Laporan dan Dukungan

- Penyediaan laporan transaksi lengkap
- Dukungan teknis untuk integrasi dan troubleshooting

---

## Metode Pembayaran

TriPay menyediakan berbagai metode pembayaran (payment channel) yang lengkap:

<table>
<thead>
  <tr>
    <th>
      Kategori
    </th>
    
    <th>
      Channel
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        QRIS
      </strong>
    </td>
    
    <td>
      Pembayaran via QR Code (dapat dibayar melalui semua e-wallet dan mobile banking)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Virtual Account
      </strong>
    </td>
    
    <td>
      BCA, BNI, BRI, Mandiri, Permata, CIMB Niaga, dan bank lainnya
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        E-Wallet
      </strong>
    </td>
    
    <td>
      GoPay, OVO, DANA, ShopeePay, LinkAja
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Gerai Retail
      </strong>
    </td>
    
    <td>
      Alfamart, Alfamidi, Indomaret
    </td>
  </tr>
</tbody>
</table>

Semua metode pembayaran tersedia pada saat pembuatan merchant dan dapat dikonfigurasi sesuai kebutuhan bisnis.

---

## Fitur-fitur Andalan

### 1. Solusi B2B Terlengkap

TriPay menawarkan kemudahan bagi bisnis Business-to-Business (B2B) dengan:

- Proses pendaftaran yang cepat dan sederhana
- Dukungan tim khusus yang cepat tanggap
- Dokumentasi teknis yang lengkap

### 2. Multi Channel Pembayaran

Tersedia beragam pilihan pembayaran bagi pelanggan:

- **Virtual Account (VA)** dari berbagai bank
- **Transfer bank** langsung
- **Gerai retail** (Alfamart, Indomaret)
- **E-wallet** populer di Indonesia

### 3. Notifikasi Real-time

Notifikasi instan dikirimkan saat pembayaran berhasil melalui:

- **Callback/IPN** ke server MITRA
- **Email** ke alamat yang terdaftar
- **WhatsApp** ke nomor yang terdaftar

Hal ini memungkinkan proses pesanan dilakukan lebih cepat dan otomatis.

### 4. Biaya Terjangkau

- Biaya transaksi yang **kompetitif dan transparan**
- **Tanpa biaya bulanan** tersembunyi
- Biaya hanya dikenakan untuk transaksi yang berhasil

### 5. API & Integrasi Lengkap

- **Satu API** untuk semua channel pembayaran
- **Dokumentasi** yang mudah dipahami
- **Sandbox** untuk simulasi transaksi
- **Plugin gratis** untuk platform CMS populer:

  - WooCommerce
  - WHMCS
  - Easy Digital Downloads
  - aMember
  - Dan lainnya

### 6. Keamanan Transaksi & Anti-fraud

Platform dilengkapi dengan:

- Fitur **keamanan transaksi** berlapis
- Sistem **deteksi anti-fraud** untuk melindungi setiap transaksi
- **Enkripsi data** untuk menjaga kerahasiaan informasi
- Kepatuhan terhadap regulasi **APU PPT** (Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme)

---

## Posisi TriPay dalam Sistem Pembayaran

<callout color="blue" icon="i-lucide-info">

**Penting untuk Dipahami**: TriPay bukan Penyelenggara Jasa Pembayaran (PJP) yang memiliki izin langsung dari Bank Indonesia. TriPay menjalankan peran sebagai **penyelenggara sistem dan technical operator** yang terhubung dengan PJP Rekanan berizin.

</callout>

Struktur kerja sama:

```text
Pelanggan → Metode Pembayaran → PJP Rekanan (Berizin BI) → TriPay → MITRA
```

Dengan struktur ini, TriPay memastikan:

- Seluruh transaksi diproses melalui PJP yang telah berizin Bank Indonesia
- Kepatuhan terhadap peraturan perundang-undangan di bidang sistem pembayaran
- Perlindungan dana MITRA dan Pelanggan

---

## Keunggulan Menggunakan TriPay

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Keunggulan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Kemudahan
      </strong>
    </td>
    
    <td>
      Satu dashboard untuk semua channel pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kecepatan
      </strong>
    </td>
    
    <td>
      Integrasi cepat dengan API yang sederhana
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kelengkapan
      </strong>
    </td>
    
    <td>
      Semua metode pembayaran populer tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transparansi
      </strong>
    </td>
    
    <td>
      Biaya jelas tanpa hidden cost
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Keamanan
      </strong>
    </td>
    
    <td>
      Terhubung dengan PJP berizin Bank Indonesia
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Dukungan
      </strong>
    </td>
    
    <td>
      Tim support yang responsif
    </td>
  </tr>
</tbody>
</table>

---

## Mulai Menggunakan TriPay

Untuk memulai menggunakan layanan TriPay, ikuti langkah-langkah berikut:

1. **Daftar Akun** - Buat akun TriPay dan verifikasi identitas
2. **Buat Merchant** - Ajukan merchant untuk bisnis Mitra
3. **Aktivasi Channel** - Pilih metode pembayaran yang diinginkan
4. **Integrasi** - Integrasikan dengan website atau aplikasi

Atau baca halaman [Integration Overview](/id/introduction/introduction/integration-overview) untuk gambaran singkat proses integrasi.

---

## Informasi Perusahaan

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
        Nama Perusahaan
      </strong>
    </td>
    
    <td>
      PT Trijaya Digital Grup
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Nama Layanan
      </strong>
    </td>
    
    <td>
      TriPay
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Direktur
      </strong>
    </td>
    
    <td>
      Tri Hariyanto
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Alamat
      </strong>
    </td>
    
    <td>
      Dusun Ngompak 2 RT 003/RW 003, Desa Cepoko, Kec. Ngrambe, Kab. Ngawi, Jawa Timur
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Telepon/WhatsApp
      </strong>
    </td>
    
    <td>
      085730000727
    </td>
  </tr>
  
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
</tbody>
</table>

---

## Referensi Hukum

Seluruh pemanfaatan layanan TriPay tunduk pada:

- Peraturan perundang-undangan di bidang sistem pembayaran
- Ketentuan Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme (APU PPT)
- Peraturan perlindungan konsumen
- Ketentuan otoritas terkait lainnya yang berlaku di Indonesia
