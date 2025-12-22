# Plugin

> Panduan plugin dan modul integrasi TriPay untuk berbagai platform

TriPay menyediakan **plugin dan modul** siap pakai untuk mempermudah integrasi dengan berbagai platform e-commerce dan CMS populer.

---

## Pengertian Plugin TriPay

### Apa itu Plugin?

**Plugin TriPay** adalah modul integrasi yang sudah jadi, memungkinkan:

<list type="info">

- Integrasi **tanpa coding** atau minimal coding
- **Instalasi mudah** di platform yang didukung
- **Konfigurasi** melalui admin panel
- **Update otomatis** untuk fitur terbaru

</list>

---

## Platform yang Didukung

### E-Commerce

<table>
<thead>
  <tr>
    <th>
      Platform
    </th>
    
    <th>
      Status
    </th>
    
    <th>
      Tipe
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        WooCommerce
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Plugin WordPress
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Prestashop
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Module
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        OpenCart
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Extension
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Magento
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Extension
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Laravel
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Package Composer
    </td>
  </tr>
</tbody>
</table>

### Billing & Hosting

<table>
<thead>
  <tr>
    <th>
      Platform
    </th>
    
    <th>
      Status
    </th>
    
    <th>
      Tipe
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        WHMCS
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Gateway Module
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BoxBilling
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Gateway Module
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Blesta
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Gateway Module
    </td>
  </tr>
</tbody>
</table>

### CMS & Website Builder

<table>
<thead>
  <tr>
    <th>
      Platform
    </th>
    
    <th>
      Status
    </th>
    
    <th>
      Tipe
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        WordPress
      </strong>
    </td>
    
    <td>
      ✅ Tersedia
    </td>
    
    <td>
      Plugin
    </td>
  </tr>
</tbody>
</table>

---

## WooCommerce

### Instalasi

#### Metode 1: Upload Manual

1. **Download** plugin dari Dashboard TriPay
2. Login ke **WordPress Admin**
3. Masuk ke **Plugins** → **Add New** → **Upload Plugin**
4. Upload file **zip** plugin
5. Klik **Install Now** → **Activate**

#### Metode 2: FTP Upload

1. Extract file plugin
2. Upload ke folder `/wp-content/plugins/`
3. Aktifkan di **Plugins** → **Installed Plugins**

### Konfigurasi

1. Masuk ke **WooCommerce** → **Settings** → **Payments**
2. Pilih **TriPay**
3. Isi konfigurasi:

  - **API Key** (production atau sandbox)
  - **Private Key**
  - **Merchant Code**
  - **Mode** (Sandbox/Production)
4. Pilih **channel pembayaran** yang aktif
5. **Save changes**

### Testing

1. Set mode ke **Sandbox**
2. Lakukan **checkout** di toko
3. Cek apakah payment options muncul
4. Test **pembayaran** dan **callback**

---

## WHMCS

### Instalasi

1. **Download** module dari Dashboard TriPay
2. Extract file
3. Upload folder ke `/modules/gateways/`
4. Upload callback file ke `/modules/gateways/callback/`

### Konfigurasi

1. Login ke **WHMCS Admin**
2. Masuk ke **Setup** → **Payments** → **Payment Gateways**
3. Pilih **TriPay** dari dropdown
4. Isi konfigurasi:

  - API Key
  - Private Key
  - Merchant Code
  - Mode (Sandbox/Production)
5. **Activate** gateway
6. Pilih **channel** yang ingin ditampilkan

### Struktur File

```text
/modules/gateways/
├── tripay.php
├── tripay/
│   ├── callback.php
│   ├── config.php
│   └── helper.php
└── callback/
    └── tripay.php
```

---

## Laravel Package

### Instalasi via Composer

```bash
composer require tripay/tripay-payment
```

### Konfigurasi

Publish config file:

```bash
php artisan vendor:publish --provider="Tripay\TripayServiceProvider"
```

Edit file `config/tripay.php`:

```php
return [
    'api_key' => env('TRIPAY_API_KEY'),
    'private_key' => env('TRIPAY_PRIVATE_KEY'),
    'merchant_code' => env('TRIPAY_MERCHANT_CODE'),
    'mode' => env('TRIPAY_MODE', 'sandbox'), // sandbox atau production
];
```

### Penggunaan

```php
use Tripay\Facades\Tripay;

// Create transaction
$transaction = Tripay::createTransaction([
    'method' => 'BRIVA',
    'merchant_ref' => 'INV-001',
    'amount' => 100000,
    'customer_name' => 'John Doe',
    'customer_email' => 'john@example.com',
    'order_items' => [
        [
            'name' => 'Product A',
            'price' => 100000,
            'quantity' => 1
        ]
    ]
]);

// Get channels
$channels = Tripay::getChannels();

// Check transaction
$detail = Tripay::getTransaction('T123456789');
```

---

## Prestashop

### Instalasi

1. Download module dari Dashboard TriPay
2. Login ke **Prestashop Admin**
3. Masuk ke **Modules** → **Module Manager**
4. Klik **Upload a module**
5. Upload file zip
6. Klik **Configure** setelah install

### Konfigurasi

1. Masuk ke konfigurasi module TriPay
2. Isi:

  - API Key
  - Private Key
  - Merchant Code
  - Mode (Test/Live)
3. Pilih channel aktif
4. Save

---

## OpenCart

### Instalasi

1. Download extension dari Dashboard TriPay
2. Login ke **OpenCart Admin**
3. Masuk ke **Extensions** → **Installer**
4. Upload file extension
5. Masuk ke **Extensions** → **Payments**
6. Install **TriPay**

### Konfigurasi

1. Klik **Edit** pada payment TriPay
2. Isi konfigurasi credential
3. Set **Status** ke Enabled
4. Save

---

## Keuntungan Menggunakan Plugin

### Dibanding Integrasi Manual

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Plugin
    </th>
    
    <th>
      Manual API
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Waktu Integrasi
      </strong>
    </td>
    
    <td>
      Menit - Jam
    </td>
    
    <td>
      Hari - Minggu
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Skill Diperlukan
      </strong>
    </td>
    
    <td>
      Basic
    </td>
    
    <td>
      Programming
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Maintenance
      </strong>
    </td>
    
    <td>
      Minimal
    </td>
    
    <td>
      Perlu update manual
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Support
      </strong>
    </td>
    
    <td>
      Komunitas + TriPay
    </td>
    
    <td>
      Mandiri
    </td>
  </tr>
</tbody>
</table>

### Fitur Plugin

<list type="success">

- **Auto-update status** - Status order diupdate otomatis
- **Multi-channel** - Semua channel dalam satu plugin
- **Callback handler** - Sudah terimplementasi
- **Logging** - Log untuk debugging

</list>

---

## Troubleshooting Plugin

### Masalah Umum

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
      Channel tidak muncul
    </td>
    
    <td>
      Credential salah
    </td>
    
    <td>
      Cek API Key & Merchant Code
    </td>
  </tr>
  
  <tr>
    <td>
      Callback gagal
    </td>
    
    <td>
      URL tidak benar
    </td>
    
    <td>
      Cek konfigurasi URL
    </td>
  </tr>
  
  <tr>
    <td>
      Error saat checkout
    </td>
    
    <td>
      Mode salah
    </td>
    
    <td>
      Cek Sandbox/Production mode
    </td>
  </tr>
  
  <tr>
    <td>
      Plugin conflict
    </td>
    
    <td>
      Konflik dengan plugin lain
    </td>
    
    <td>
      Nonaktifkan plugin lain satu per satu
    </td>
  </tr>
</tbody>
</table>

### Log & Debug

Aktifkan debug mode untuk troubleshooting:

```php
// WooCommerce
define('WP_DEBUG', true);
define('WP_DEBUG_LOG', true);
```

---

## Update Plugin

### Cara Update

1. **Backup** konfigurasi dan data
2. **Download** versi terbaru dari Dashboard
3. **Nonaktifkan** plugin lama
4. **Hapus** file plugin lama
5. **Install** versi baru
6. **Konfigurasi ulang** jika diperlukan
7. **Test** transaksi

### Changelog

Cek changelog di Dashboard atau repository untuk melihat perubahan di versi terbaru.

---

## Integrasi Custom

### Jika Platform Tidak Didukung

Jika platform Anda tidak memiliki plugin resmi:

<list type="info">

1. Gunakan **API langsung** (lihat dokumentasi API)
2. Buat **custom module** berdasarkan dokumentasi
3. Hubungi TriPay untuk **diskusi integrasi**

</list>

---

## FAQ Plugin

### Plugin mana yang paling populer?

**WooCommerce** dan **WHMCS** adalah yang paling banyak digunakan.

### Apakah plugin gratis?

**Ya.** Semua plugin resmi TriPay gratis.

### Bagaimana jika ada bug di plugin?

Laporkan ke support TriPay atau buka issue di repository (jika open source).

### Bisakah modifikasi plugin?

Tergantung lisensi. Beberapa plugin open source dan dapat dimodifikasi.

---

## Dukungan

Jika mengalami kendala dengan plugin:

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

- **Dashboard TriPay** - Download plugin terbaru
- **Dokumentasi API** - Untuk integrasi custom
- **Sandbox** - Testing sebelum production
