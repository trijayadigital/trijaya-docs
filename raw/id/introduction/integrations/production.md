# Production

> Panduan integrasi dan go-live ke mode Production TriPay

**Mode Production** adalah environment live TriPay di mana transaksi nyata terjadi, uang asli diproses, dan settlement dilakukan ke rekening Mitra.

---

## Pengertian Production

### Apa itu Mode Production?

Mode Production adalah:

<list type="info">

- Environment **live** untuk transaksi nyata
- Menggunakan **uang asli** dari pelanggan
- **Settlement** dana ke rekening Mitra
- **Biaya transaksi** berlaku sesuai ketentuan

</list>

### Perbedaan dengan Sandbox

<table>
<thead>
  <tr>
    <th>
      Aspek
    </th>
    
    <th>
      Sandbox
    </th>
    
    <th>
      Production
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Transaksi
      </strong>
    </td>
    
    <td>
      Simulasi
    </td>
    
    <td>
      Nyata
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Uang
      </strong>
    </td>
    
    <td>
      Tidak ada
    </td>
    
    <td>
      Uang asli
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement
      </strong>
    </td>
    
    <td>
      Tidak ada
    </td>
    
    <td>
      H+2/H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Biaya
      </strong>
    </td>
    
    <td>
      Gratis
    </td>
    
    <td>
      Sesuai tarif
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Credential
      </strong>
    </td>
    
    <td>
      Sandbox Key
    </td>
    
    <td>
      Production Key
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        URL API
      </strong>
    </td>
    
    <td>
      api-sandbox
    </td>
    
    <td>
      api
    </td>
  </tr>
</tbody>
</table>

---

## Persiapan Go-Live Production

### Checklist Pra-Production

Sebelum go-live, pastikan:

<list type="success">

- [ ] **Testing Sandbox** selesai dan sukses
- [ ] **Merchant** sudah diverifikasi dan aktif
- [ ] **Rekening penarikan** sudah terverifikasi
- [ ] **Callback URL** sudah siap di production server
- [ ] **SSL Certificate** valid untuk endpoint
- [ ] **Error handling** sudah terimplementasi
- [ ] **Tim** sudah siap menangani transaksi

</list>

---

## Mendapatkan Credential Production

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Merchant**
3. Pilih merchant yang sudah **verified**
4. Masuk ke tab **API** atau **Credential**
5. **Copy credential Production**:

  - API Key (Production)
  - Private Key (Production)
  - Merchant Code

### Credential yang Diperlukan

<table>
<thead>
  <tr>
    <th>
      Credential
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
      Autentikasi API request
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Private Key
      </strong>
    </td>
    
    <td>
      Generate signature & validasi callback
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Merchant Code
      </strong>
    </td>
    
    <td>
      Identifikasi merchant
    </td>
  </tr>
</tbody>
</table>

<callout color="red" icon="i-lucide-alert-triangle">

**PENTING**: Jaga kerahasiaan credential production. Jangan share atau commit ke repository publik!

</callout>

---

## URL API Production

### Endpoint

<table>
<thead>
  <tr>
    <th>
      Endpoint
    </th>
    
    <th>
      URL
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Base URL
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Create Transaction
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api/transaction/create
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Transaction Detail
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api/transaction/detail
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Payment Channels
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api/merchant/payment-channel
      </code>
    </td>
  </tr>
</tbody>
</table>

---

## Konfigurasi Production

### Update Konfigurasi Aplikasi

Ganti semua konfigurasi sandbox dengan production:

```javascript
// Production Configuration
const tripayConfig = {
  apiUrl: 'https://tripay.co.id/api',
  apiKey: process.env.TRIPAY_API_KEY,
  privateKey: process.env.TRIPAY_PRIVATE_KEY,
  merchantCode: process.env.TRIPAY_MERCHANT_CODE,
  callbackUrl: 'https://yourdomain.com/callback/tripay'
};
```

### Environment Variables

Gunakan environment variables untuk credential:

```bash
# .env file (jangan commit!)
TRIPAY_API_KEY=your_production_api_key
TRIPAY_PRIVATE_KEY=your_production_private_key
TRIPAY_MERCHANT_CODE=your_merchant_code
```

---

## Callback URL Production

### Persyaratan

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
        Protokol
      </strong>
    </td>
    
    <td>
      HTTPS (wajib untuk production)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        SSL
      </strong>
    </td>
    
    <td>
      Certificate valid (bukan self-signed)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Akses
      </strong>
    </td>
    
    <td>
      Dapat diakses dari internet
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Response
      </strong>
    </td>
    
    <td>
      Return JSON dalam < 30 detik
    </td>
  </tr>
</tbody>
</table>

### Konfigurasi di Dashboard

1. Login ke Dashboard
2. Masuk ke **Merchant** → merchant Anda
3. Update **Callback URL** dengan URL production
4. Simpan perubahan

---

## Go-Live Bertahap

### Rekomendasi Proses

#### Fase 1: Soft Launch

<list type="info">

- Test dengan **transaksi kecil** (Rp10.000 - Rp50.000)
- **Monitor** callback dan settlement
- Pastikan **flow** berjalan lancar

</list>

#### Fase 2: Limited Launch

<list type="info">

- Buka untuk **sebagian user** atau channel tertentu
- Tingkatkan **nominal** transaksi bertahap
- Kumpulkan **feedback** dan perbaiki issue

</list>

#### Fase 3: Full Launch

<list type="info">

- Buka **semua channel** dan **semua user**
- Monitor **metrik** (success rate, error rate)
- Siap **scaling** jika traffic meningkat

</list>

---

## Monitoring Production

### Hal yang Perlu Dimonitor

<table>
<thead>
  <tr>
    <th>
      Metrik
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
        Success Rate
      </strong>
    </td>
    
    <td>
      Persentase transaksi sukses
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Error Rate
      </strong>
    </td>
    
    <td>
      Persentase transaksi gagal
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Callback Delivery
      </strong>
    </td>
    
    <td>
      Callback diterima dengan benar
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Response Time
      </strong>
    </td>
    
    <td>
      Waktu respons endpoint
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement
      </strong>
    </td>
    
    <td>
      Dana masuk sesuai jadwal
    </td>
  </tr>
</tbody>
</table>

### Tools Monitoring

<list type="success">

- **Dashboard TriPay** - Statistik transaksi
- **Application logs** - Error dan debug info
- **Uptime monitoring** - Server availability
- **Alert system** - Notifikasi jika ada masalah

</list>

---

## Keamanan Production

### Best Practices

<list type="success">

- **Simpan credential** di environment variable, bukan hardcode
- **Jangan commit** credential ke version control
- **Rotasi credential** secara berkala (jika fitur tersedia)
- **Validasi signature** di setiap callback
- **HTTPS wajib** untuk semua endpoint
- **Rate limiting** untuk API endpoint Anda
- **Logging** untuk audit trail

</list>

### Proteksi Credential

```php
// JANGAN lakukan ini
$apiKey = "DEV-xxx-your-api-key"; // Hardcoded - SALAH!

// LAKUKAN ini
$apiKey = getenv('TRIPAY_API_KEY'); // Dari env - BENAR!
```

---

## Troubleshooting Production

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
      Unauthorized
    </td>
    
    <td>
      API Key salah
    </td>
    
    <td>
      Cek credential production
    </td>
  </tr>
  
  <tr>
    <td>
      Signature invalid
    </td>
    
    <td>
      Private Key salah
    </td>
    
    <td>
      Pastikan private key production
    </td>
  </tr>
  
  <tr>
    <td>
      Callback failed
    </td>
    
    <td>
      URL tidak accessible
    </td>
    
    <td>
      Cek server dan firewall
    </td>
  </tr>
  
  <tr>
    <td>
      Transaction failed
    </td>
    
    <td>
      Channel tidak aktif
    </td>
    
    <td>
      Aktifkan di Dashboard
    </td>
  </tr>
</tbody>
</table>

### Emergency Contact

Jika terjadi masalah kritis di production:

<table>
<thead>
  <tr>
    <th>
      Urgensi
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
        Critical
      </strong>
    </td>
    
    <td>
      WhatsApp 085730000727
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        High
      </strong>
    </td>
    
    <td>
      Email <a href="mailto:ops@trihariyanto.com">
        ops@trihariyanto.com
      </a>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Normal
      </strong>
    </td>
    
    <td>
      Dashboard ticket
    </td>
  </tr>
</tbody>
</table>

---

## Kewajiban di Production

### Berdasarkan PKS

Saat menggunakan layanan production, Mitra wajib:

<list type="warning">

- **Menjaga kerahasiaan** credential dan data transaksi
- **Bertanggung jawab** atas keamanan sistem integrasi
- **Memenuhi kewajiban** kepada Pelanggan (pengiriman barang/jasa)
- **Tidak menggunakan** layanan untuk kegiatan ilegal
- **Menyimpan bukti** transaksi minimal 12 bulan

</list>

---

## Biaya di Production

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
        Channel Fee
      </strong>
    </td>
    
    <td>
      Per transaksi sesuai channel
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Platform Fee
      </strong>
    </td>
    
    <td>
      Khusus QRIS (Rp750)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Settlement Fee
      </strong>
    </td>
    
    <td>
      Rp7.500 per settlement
    </td>
  </tr>
</tbody>
</table>

### Contoh Biaya

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Biaya
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
  </tr>
  
  <tr>
    <td>
      BCA VA
    </td>
    
    <td>
      Rp5.500
    </td>
  </tr>
  
  <tr>
    <td>
      VA Lainnya
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      Retail
    </td>
    
    <td>
      Rp3.500
    </td>
  </tr>
</tbody>
</table>

---

## FAQ Production

### Kapan bisa go-live production?

Setelah **merchant verified** dan **testing sandbox selesai**.

### Apakah ada minimum transaksi untuk mulai?

**Tidak ada minimum**. Bisa langsung mulai dengan transaksi berapapun.

### Bagaimana jika terjadi error di production?

**Log error**, cek Dashboard, dan hubungi support jika diperlukan.

### Bisakah kembali ke sandbox setelah production?

**Ya.** Sandbox tetap tersedia untuk testing fitur baru.

---

## Dukungan

Jika mengalami kendala di Production:

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

<callout color="blue" icon="i-lucide-info">

Untuk masalah production yang mendesak, prioritaskan WhatsApp untuk respons lebih cepat.

</callout>

---

## Referensi

- **Dokumentasi API** - Detail endpoint production
- **Sandbox** - Testing sebelum production
- **Biaya Transaksi** - Detail struktur biaya
- **PKS** - Hak dan kewajiban
