# Registration

> Panduan lengkap registrasi dan pengajuan merchant TriPay

Setelah akun TriPay terverifikasi, langkah selanjutnya adalah membuat **merchant** untuk mulai menerima pembayaran dari pelanggan. Halaman ini menjelaskan secara lengkap proses registrasi merchant, persyaratan, dan ketentuan yang berlaku.

---

## Apa itu Merchant?

**Merchant** adalah profil bisnis atau toko online Pengguna di TriPay yang digunakan untuk menerima pembayaran. Setiap merchant memiliki:

<table>
<thead>
  <tr>
    <th>
      Istilah
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
        Merchant Code
      </strong>
    </td>
    
    <td>
      Kode unik untuk identifikasi merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        API Key
      </strong>
    </td>
    
    <td>
      Kredensial untuk autentikasi API
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Private Key
      </strong>
    </td>
    
    <td>
      Kunci rahasia untuk validasi signature
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Channel Pembayaran
      </strong>
    </td>
    
    <td>
      Pengaturan metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback URL
      </strong>
    </td>
    
    <td>
      URL untuk menerima notifikasi transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Website
      </strong>
    </td>
    
    <td>
      Alamat website yang terhubung dengan merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kategori
      </strong>
    </td>
    
    <td>
      Kategori bisnis merchant
    </td>
  </tr>
</tbody>
</table>

### Mengapa Perlu Membuat Merchant?

<list type="info">

- Memisahkan transaksi untuk setiap bisnis/website
- Mendapatkan kredensial API untuk integrasi
- Mengaktifkan channel pembayaran yang diinginkan
- Memantau transaksi per merchant secara terpisah

</list>

---

## Persyaratan Sebelum Membuat Merchant

### 1. Akun Terverifikasi

Pastikan akun TriPay Anda sudah **terverifikasi** (Personal atau Bisnis).

### 2. Website Aktif

<table>
<thead>
  <tr>
    <th>
      Syarat
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
        URL Valid
      </strong>
    </td>
    
    <td>
      Website harus memiliki URL yang dapat diakses (https://...)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Konten Jelas
      </strong>
    </td>
    
    <td>
      Website harus menampilkan produk/jasa yang dijual
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Informasi Lengkap
      </strong>
    </td>
    
    <td>
      Harga, deskripsi produk, dan syarat transaksi harus jelas
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Halaman Checkout
      </strong>
    </td>
    
    <td>
      Proses pembayaran harus tersedia atau dalam pengembangan
    </td>
  </tr>
</tbody>
</table>

### 3. Kategori Bisnis yang Sah

Merchant harus untuk kegiatan usaha yang **sah dan legal**. TriPay tidak menerima merchant untuk:

<list type="danger">

- Money game ilegal
- Perjudian (gambling)
- Pinjaman online ilegal
- Investasi bodong / skema ponzi
- Perdagangan barang terlarang
- Pornografi dan konten dewasa
- Kegiatan lain yang melanggar hukum

</list>

---

## Langkah-langkah Membuat Merchant

### Tahap 1: Akses Menu Merchant

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Merchant**
3. Klik tombol **Tambah Merchant** atau **Buat Merchant Baru**

### Tahap 2: Isi Informasi Bisnis

Lengkapi formulir dengan data yang benar dan akurat:

#### Informasi Dasar

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Keterangan
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
        Nama Merchant
      </strong>
    </td>
    
    <td>
      Nama website atau aplikasi Anda
    </td>
    
    <td>
      Tidak boleh mengandung karakter spesial. Tidak boleh menggunakan nama badan usaha.
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kategori Bisnis
      </strong>
    </td>
    
    <td>
      Pilih kategori yang sesuai dengan jenis bisnis
    </td>
    
    <td>
      Dropdown pilihan kategori
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Logo
      </strong>
    </td>
    
    <td>
      Upload logo website/aplikasi
    </td>
    
    <td>
      Max 1MB. Format: jpg, jpeg, png. Resolusi disarankan: 200x50 pixel
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Deskripsi
      </strong>
    </td>
    
    <td>
      Jelaskan detail produk/layanan yang Anda sediakan
    </td>
    
    <td>
      Sertakan alur transaksi dan cara transaksi pada website
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        URL Website
      </strong>
    </td>
    
    <td>
      Alamat website dengan format lengkap
    </td>
    
    <td>
      Format: <code>
        https://
      </code>
      
       atau <code>
        http://
      </code>
      
      . Domain yang <strong>
        tidak diperbolehkan
      </strong>
      
      : my.id, biz.id, xyz, vercel, netlify, blogspot, dan wordpress
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Data Login
      </strong>
    </td>
    
    <td>
      Kredensial akun dummy untuk demo
    </td>
    
    <td>
      Isi jika website memerlukan login untuk mengakses. Untuk keperluan verifikasi oleh tim TriPay
    </td>
  </tr>
</tbody>
</table>

#### Pengaturan Teknis

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Keterangan
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
        URL Callback
      </strong>
    </td>
    
    <td>
      URL endpoint untuk menerima notifikasi transaksi
    </td>
    
    <td>
      Harus mengandung domain yang sama dengan URL website. Format: <code>
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
      Alamat IP server hosting Anda
    </td>
    
    <td>
      Diisi IPv4 dan IPv6. Jika lebih dari satu, pisahkan dengan koma. Contoh: <code>
        192.168.1.1,192.168.1.2
      </code>
      
      . IP dapat dilihat di panel hosting atau VPS
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Izinkan Inkonsistensi Nilai
      </strong>
    </td>
    
    <td>
      Pengaturan validasi nilai produk
    </td>
    
    <td>
      Jika diizinkan, sistem tidak akan memvalidasi konsistensi nilai produk dengan jumlah transaksi. Default: <strong>
        Tidak
      </strong>
      
      . Hanya ubah jika memahami fungsinya
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Tips**: Berikan deskripsi yang jelas dan lengkap untuk mempercepat proses verifikasi merchant. Pastikan URL website dan URL callback sudah benar sebelum submit.

</callout>

### Tahap 3: Konfigurasi Channel Pembayaran

Pengaturan Channel Pembayaran dapat dilakukan setelah merchant disetujui melalui halaman **Merchant → Opsi → Edit**. Di halaman tersebut, merchant dapat:

- Mengaktifkan/menonaktifkan metode pembayaran
- Mengatur biaya admin, ingin dibebankan ke merchant, pembeli, atau keduanya
- Mendaftar channel pembayaran QRIS custom (syarat dan ketentuan berlaku)

📖 **Panduan Lengkap**: [Aktivasi Channel Pembayaran](/id/introduction/merchant/payment-channels)

### Tahap 5: Submit Pengajuan

1. Review semua informasi yang telah diisi
2. Pastikan data sudah benar dan lengkap
3. Klik tombol **Submit** atau **Ajukan Merchant**
4. Tunggu proses verifikasi

---

## Proses Verifikasi Merchant

### Apa yang Diperiksa Tim TriPay?

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Yang Diperiksa
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Kesesuaian Data
      </strong>
    </td>
    
    <td>
      Data merchant sesuai dengan informasi akun
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Website Aktif
      </strong>
    </td>
    
    <td>
      Website dapat diakses secara publik dan berfungsi dengan baik
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Status Website
      </strong>
    </td>
    
    <td>
      Website tidak dalam tahap development atau maintenance
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Konten Website
      </strong>
    </td>
    
    <td>
      Produk/jasa ditampilkan dengan jelas dan lengkap
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kelengkapan Website
      </strong>
    </td>
    
    <td>
      Nama merchant jelas, brand konsisten, halaman statis tersedia (kebijakan privasi, ketentuan layanan, dll)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Kategori Bisnis
      </strong>
    </td>
    
    <td>
      Bukan termasuk kategori yang dilarang
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Legalitas
      </strong>
    </td>
    
    <td>
      Tidak ada indikasi kegiatan ilegal
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        URL Valid
      </strong>
    </td>
    
    <td>
      Website harus memiliki URL yang dapat diakses (https://...) dan domain tidak termasuk yang dilarang
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Informasi Lengkap
      </strong>
    </td>
    
    <td>
      Harga, deskripsi produk, dan syarat transaksi harus jelas
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Halaman Checkout
      </strong>
    </td>
    
    <td>
      Proses pembayaran harus tersedia dan berfungsi
    </td>
  </tr>
</tbody>
</table>

### Waktu Verifikasi

<table>
<thead>
  <tr>
    <th>
      Status
    </th>
    
    <th>
      Estimasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Merchant baru
    </td>
    
    <td>
      1x24 jam (hari kerja)
    </td>
  </tr>
  
  <tr>
    <td>
      Perubahan data merchant
    </td>
    
    <td>
      1x24 jam (hari kerja)
    </td>
  </tr>
</tbody>
</table>

### Hasil Verifikasi

<table>
<thead>
  <tr>
    <th>
      Status
    </th>
    
    <th>
      Keterangan
    </th>
    
    <th>
      Tindakan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Disetujui
      </strong>
    </td>
    
    <td>
      Merchant aktif dan siap digunakan
    </td>
    
    <td>
      Lakukan integrasi
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Ditolak
      </strong>
    </td>
    
    <td>
      Tidak memenuhi syarat
    </td>
    
    <td>
      Perbaiki dan ajukan ulang
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Pending
      </strong>
    </td>
    
    <td>
      Butuh informasi tambahan
    </td>
    
    <td>
      Lengkapi data yang diminta
    </td>
  </tr>
</tbody>
</table>

<u-alert color="error" description="Pastikan website merchant memiliki informasi yang lengkap dan jelas, seperti nama merchant yang tidak terlalu umum, brand website yang konsisten (nama, logo, dan domain), produk atau jasa yang ditampilkan dengan detail, serta halaman statis penting (kebijakan privasi, ketentuan layanan, tentang kami, dan kontak). Selain itu, pastikan produk atau layanan yang ditawarkan tidak termasuk dalam kategori yang dilarang oleh TriPay." icon="i-lucide-alert-triangle" title="Penting" variant="subtle">



</u-alert>

---

## Persyaratan Website

Website yang didaftarkan sebagai merchant harus memenuhi persyaratan berikut:

### 1. Website Harus Lengkap dan Siap Digunakan

Website harus sudah **selesai dibuat** dan tidak dalam tahap development. Website harus memiliki:

- **Nama merchant yang jelas** (tidak terlalu umum)
- **Brand website konsisten** (nama, logo, dan domain konsisten)
- **Produk/jasa yang dijual** ditampilkan dengan jelas
- **Halaman statis penting**:

  - Kebijakan privasi
  - Ketentuan layanan
  - Tentang kami
  - Kontak
- **Deskripsi website yang detail** saat pengajuan merchant

### 2. Website Harus Dapat Diakses Publik

- Website harus dapat diakses secara **publik** (tidak memerlukan akses khusus)
- Website **tidak boleh dalam tahap developing** atau maintenance
- Website harus **aktif dan berfungsi** dengan baik

### 3. Domain yang Tidak Diperbolehkan

TriPay **tidak menerima** website dengan domain berikut:

<table>
<thead>
  <tr>
    <th>
      Domain
    </th>
    
    <th>
      Alasan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        biz.id, my.id, xyz
      </strong>
    </td>
    
    <td>
      Sering digunakan untuk penipuan dan aktivitas ilegal
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        netlify, vercel
      </strong>
    </td>
    
    <td>
      Hosting publik yang sulit diverifikasi kepemilikannya
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        blogspot, wordpress
      </strong>
    </td>
    
    <td>
      Domain gratis yang kurang kredibel untuk transaksi finansial
    </td>
  </tr>
</tbody>
</table>

**Alasan Pembatasan Domain:**

1. **Potensi Penyalahgunaan** - Domain gratis atau murah sering dimanfaatkan untuk aktivitas phishing atau penipuan
2. **Minimnya Kontrol dan Validasi** - Domain gratis/hosting publik tidak selalu mewakili identitas bisnis resmi dan sulit diverifikasi kepemilikannya
3. **Kurangnya Kredibilitas Bisnis** - Domain dengan ekstensi personal atau generik cenderung tidak dipercaya oleh pengguna akhir dalam konteks transaksi finansial
4. **Perlindungan Reputasi Layanan** - Untuk menjaga reputasi TriPay sebagai penyedia layanan pembayaran yang aman dan profesional

### 4. Ketentuan Transaksi

<u-alert color="error" description="TriPay tidak memperbolehkan transaksi di luar website yang terdaftar. Transaksi di luar website yang terdaftar merupakan pelanggaran yang dapat mengakibatkan pemblokiran akun dan pembekuan saldo secara permanen." icon="i-lucide-alert-triangle" title="Penting" variant="subtle">



</u-alert>

- Semua transaksi **harus dilakukan melalui website yang terdaftar** di merchant
- Transaksi di luar website terdaftar **dilarang keras** dan dapat mengakibatkan pemblokiran akun
- Return URL pada saat create transaksi harus menggunakan domain yang sama dengan website yang terdaftar

---

## Kategori Bisnis yang Tidak Diperbolehkan

Merchant harus untuk kegiatan usaha yang **sah dan legal**. TriPay **tidak menerima** merchant untuk kategori berikut:

### Kategori yang Dilarang

<list type="danger">

- **Perjudian dan Gambling** - Semua bentuk perjudian dalam bentuk apapun
- **Pornografi dan Konten Dewasa** - Konten pornografi dan sejenisnya
- **Crypto dan Trading** - Transaksi cryptocurrency dan trading ilegal
- **Investasi Bodong** - Skema ponzi, investasi ilegal, atau investasi yang mencurigakan
- **Money Game Ilegal** - Game dengan sistem money game yang ilegal
- **Pinjaman Online Ilegal** - Pinjaman online yang tidak terdaftar di OJK
- **Perdagangan Barang Terlarang** - Narkoba, senjata, dan barang terlarang lainnya
- **Produk Merugikan** - Dislike, negative reaction, negative review, dan produk sejenis yang merugikan pihak lain
- **OTP (One Time Password)** - Jual/beli layanan OTP
- **Shortlink** - Jual/beli layanan shortlink
- **BOT** - Website yang berkaitan dengan BOT
- **Ekspor dan Impor** - Website yang berkaitan dengan ekspor dan impor
- **Payment Gateway** - Website yang berkaitan dengan payment gateway
- **Rekening Bersama (Rekber)** - Website yang berkaitan dengan rekening bersama
- **Game Tanpa Lisensi** - Lost Saga Exotic Reborn dan Ragnarok tanpa mengantongi lisensi resmi dari pihak pemilik atau pengelola server pribadi yang sah
- **Kegiatan Lain yang Melanggar Hukum** - Semua kegiatan yang melanggar peraturan perundang-undangan Republik Indonesia

</list>

<u-alert color="warning" description="Pelanggaran terhadap ketentuan ini dapat mengakibatkan pemblokiran akun dan pembekuan saldo secara permanen. Keputusan pemblokiran bersifat final dan tidak dapat diganggu gugat." icon="i-lucide-shield-alert" title="Peringatan" variant="subtle">



</u-alert>

---

## Hak TriPay dalam Verifikasi Merchant

Berdasarkan Perjanjian Kerja Sama, TriPay berhak:

### 1. Menyetujui atau Menolak

TriPay berhak menyetujui atau menolak permohonan merchant berdasarkan **penilaian internal risiko dan kepatuhan**.

### 2. Meminta Dokumen Tambahan

Jika diperlukan, TriPay dapat meminta dokumen atau informasi tambahan untuk verifikasi.

### 3. Menghentikan Merchant

TriPay berhak menghentikan sementara atau permanen merchant jika:

<list type="warning">

- Terdapat indikasi pelanggaran ketentuan
- Terdapat indikasi fraud atau kecurangan
- Merchant digunakan untuk kegiatan ilegal
- Ada permintaan dari instansi berwenang

</list>

---

## Setelah Merchant Disetujui

### Kredensial yang Diperoleh

Setelah merchant disetujui, Anda akan mendapatkan:

<table>
<thead>
  <tr>
    <th>
      Kredensial
    </th>
    
    <th>
      Fungsi
    </th>
    
    <th>
      Lokasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Merchant Code
      </strong>
    </td>
    
    <td>
      Identifikasi merchant
    </td>
    
    <td>
      Dashboard > Merchant > Detail
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        API Key
      </strong>
    </td>
    
    <td>
      Autentikasi request API
    </td>
    
    <td>
      Dashboard > Merchant > API
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Private Key
      </strong>
    </td>
    
    <td>
      Validasi signature
    </td>
    
    <td>
      Dashboard > Merchant > API
    </td>
  </tr>
</tbody>
</table>

<callout color="red" icon="i-lucide-shield-alert">

**PERINGATAN KEAMANAN**: Simpan **Private Key** dengan aman dan **JANGAN PERNAH** membagikannya ke pihak lain. Penggunaan kredensial oleh pihak tidak sah menjadi tanggung jawab Mitra.

</callout>

### Langkah Selanjutnya

1. **Pilih Metode Integrasi**
  - API untuk kontrol penuh
  - Plugin untuk CMS populer
2. **Testing di Sandbox**
  - Gunakan mode sandbox untuk testing
  - Verifikasi callback berfungsi
3. **Go-Live di Production**
  - Ganti kredensial ke production
  - Mulai terima pembayaran

---

## Kewajiban Mitra sebagai Pemilik Merchant

Berdasarkan Perjanjian Kerja Sama, Mitra wajib:

### 1. Informasi yang Jelas kepada Pelanggan

<list type="info">

- Menampilkan **informasi produk/jasa** secara jelas
- Menampilkan **harga** dan **biaya tambahan** secara transparan
- Menjelaskan **syarat dan ketentuan** transaksi

</list>

### 2. Pemenuhan Pesanan

<list type="info">

- **Mengirimkan barang** atau **menyediakan jasa** setelah transaksi berhasil
- Memproses pesanan sesuai waktu yang dijanjikan

</list>

### 3. Penyimpanan Bukti

<list type="info">

- Menyimpan **bukti transaksi** selama minimal **12 bulan**
- Menyimpan **dokumen pendukung** (invoice, bukti kirim, dll)

</list>

### 4. Penanganan Pengaduan

<list type="info">

- Menangani **pengaduan pelanggan** terkait produk/jasa
- Berkoordinasi dengan TriPay jika menyangkut aspek pembayaran

</list>

### 5. Tanggung Jawab Transaksi

Mitra **bertanggung jawab penuh** atas segala transaksi yang terjadi di merchant, sepanjang tidak dapat dibuktikan adanya kesalahan sistem pada TriPay.

---

## Mengelola Multiple Merchant

Anda dapat membuat beberapa merchant dalam satu akun:

<table>
<thead>
  <tr>
    <th>
      Skenario
    </th>
    
    <th>
      Rekomendasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      1 website, 1 bisnis
    </td>
    
    <td>
      1 merchant
    </td>
  </tr>
  
  <tr>
    <td>
      1 website, beberapa kategori produk
    </td>
    
    <td>
      1 merchant
    </td>
  </tr>
  
  <tr>
    <td>
      Beberapa website berbeda
    </td>
    
    <td>
      Merchant terpisah per website
    </td>
  </tr>
  
  <tr>
    <td>
      Bisnis dengan entity berbeda
    </td>
    
    <td>
      Merchant terpisah per entity
    </td>
  </tr>
  
  <tr>
    <td>
      Ingin memisahkan laporan
    </td>
    
    <td>
      Merchant terpisah
    </td>
  </tr>
</tbody>
</table>

### Keuntungan Multiple Merchant

<list type="success">

- Laporan transaksi terpisah per merchant
- Konfigurasi channel berbeda per merchant
- Kredensial API terpisah
- Memudahkan pembukuan per bisnis

</list>

---

## FAQ Registrasi Merchant

### Berapa lama proses verifikasi merchant?

Proses verifikasi merchant membutuhkan waktu **1x24 jam** pada hari kerja.

### Apakah ada batasan jumlah merchant?

Tidak ada batasan jumlah merchant dalam satu akun, selama memenuhi syarat dan ketentuan.

### Bagaimana jika merchant ditolak?

Perbaiki data sesuai alasan penolakan, lalu ajukan ulang merchant.

### Apakah bisa mengubah data merchant setelah disetujui?

Ya, Anda dapat mengubah data merchant melalui Dashboard. Perubahan tertentu mungkin memerlukan verifikasi ulang.

### Apakah kredensial API bisa di-reset?

Ya, Anda dapat melakukan regenerate API Key dan Private Key melalui Dashboard.

---

## Dukungan

Jika mengalami kendala dalam proses registrasi merchant:

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

Ketentuan registrasi merchant berdasarkan:

- **Pasal 2** - Ruang Lingkup Layanan
- **Pasal 4** - Kewajiban Mitra
- **Pasal 5** - Hak TriPay
- **Pasal 7** - Mekanisme Layanan
