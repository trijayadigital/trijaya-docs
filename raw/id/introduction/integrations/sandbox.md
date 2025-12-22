# Sandbox

> Panduan menggunakan mode Sandbox TriPay untuk testing

**Mode Sandbox** adalah lingkungan testing yang disediakan TriPay untuk melakukan integrasi dan pengujian tanpa menggunakan uang asli atau mempengaruhi data production.

---

## Pengertian Sandbox

### Apa itu Sandbox?

**Sandbox** adalah environment terpisah untuk:

<list type="info">

- **Testing integrasi** API tanpa transaksi nyata
- **Simulasi pembayaran** untuk berbagai channel
- **Development** dan debugging tanpa risiko
- **Validasi** flow sebelum go-live production

</list>

### Perbedaan Sandbox vs Production

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
      Simulasi (tidak nyata)
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
      Ada biaya
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
      Dana real dicairkan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        API URL
      </strong>
    </td>
    
    <td>
      URL Sandbox
    </td>
    
    <td>
      URL Production
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Credential
      </strong>
    </td>
    
    <td>
      API Key Sandbox
    </td>
    
    <td>
      API Key Production
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Data
      </strong>
    </td>
    
    <td>
      Data testing
    </td>
    
    <td>
      Data real merchant
    </td>
  </tr>
</tbody>
</table>

---

## Mengakses Sandbox

### Mendapatkan Credential Sandbox

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Merchant**
3. Pilih merchant yang diinginkan
4. Masuk ke tab **API** atau **Credential**
5. **Copy credential Sandbox**:

  - API Key (Sandbox)
  - Private Key (Sandbox)
  - Merchant Code (Sandbox)

### URL API Sandbox

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
        Create Transaction
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api-sandbox/transaction/create
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Get Transaction
      </strong>
    </td>
    
    <td>
      <code>
        https://tripay.co.id/api-sandbox/transaction/detail
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
        https://tripay.co.id/api-sandbox/merchant/payment-channel
      </code>
    </td>
  </tr>
</tbody>
</table>

<callout color="amber" icon="i-lucide-alert-triangle">

**Perhatian**: URL dan endpoint sandbox dapat berbeda dengan production. Selalu cek dokumentasi API terbaru.

</callout>

---

## Cara Testing di Sandbox

### 1. Buat Transaksi Sandbox

Request ke API dengan credential sandbox:

```bash
curl -X POST https://tripay.co.id/api-sandbox/transaction/create \
  -H "Authorization: Bearer YOUR_SANDBOX_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{
    "method": "BRIVA",
    "merchant_ref": "TEST-001",
    "amount": 100000,
    "customer_name": "Test Customer",
    "customer_email": "test@example.com",
    "order_items": [{
      "name": "Test Product",
      "price": 100000,
      "quantity": 1
    }]
  }'
```

### 2. Simulasi Pembayaran

Setelah transaksi dibuat:

1. Akses **Dashboard TriPay**
2. Masuk ke menu **Transaksi** (mode Sandbox)
3. Cari transaksi yang dibuat
4. Klik **Simulasi Bayar** atau **Mark as Paid**
5. Sistem akan mengirim **callback** ke URL Anda

### 3. Terima Callback

Endpoint callback Anda akan menerima notifikasi seperti transaksi nyata.

---

## Channel Pembayaran di Sandbox

### Channel yang Tersedia

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Simulasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        Virtual Account
      </strong>
    </td>
    
    <td>
      Semua VA tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        QRIS
      </strong>
    </td>
    
    <td>
      Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        E-Wallet
      </strong>
    </td>
    
    <td>
      Tersedia
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Retail
      </strong>
    </td>
    
    <td>
      Tersedia
    </td>
  </tr>
</tbody>
</table>

### Cara Simulasi per Channel

<table>
<thead>
  <tr>
    <th>
      Channel
    </th>
    
    <th>
      Cara Simulasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      VA
    </td>
    
    <td>
      Mark as Paid di Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      QRIS
    </td>
    
    <td>
      Mark as Paid di Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      E-Wallet
    </td>
    
    <td>
      Mark as Paid di Dashboard
    </td>
  </tr>
  
  <tr>
    <td>
      Retail
    </td>
    
    <td>
      Mark as Paid di Dashboard
    </td>
  </tr>
</tbody>
</table>

---

## Fitur Testing Sandbox

### 1. Simulasi Status Transaksi

Anda dapat mensimulasikan berbagai status:

<table>
<thead>
  <tr>
    <th>
      Status
    </th>
    
    <th>
      Simulasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <strong>
        PAID
      </strong>
    </td>
    
    <td>
      Pembayaran berhasil
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        EXPIRED
      </strong>
    </td>
    
    <td>
      Transaksi kedaluwarsa
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        FAILED
      </strong>
    </td>
    
    <td>
      Pembayaran gagal
    </td>
  </tr>
</tbody>
</table>

### 2. Callback Testing

- Callback dikirim ke URL yang dikonfigurasi
- Format sama dengan production
- Signature menggunakan credential sandbox

### 3. Data Testing

Gunakan data dummy untuk testing:

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Contoh Data
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Customer Name
    </td>
    
    <td>
      "Test Customer"
    </td>
  </tr>
  
  <tr>
    <td>
      Customer Email
    </td>
    
    <td>
      "<a href="mailto:test@example.com">
        test@example.com
      </a>
      
      "
    </td>
  </tr>
  
  <tr>
    <td>
      Customer Phone
    </td>
    
    <td>
      "081234567890"
    </td>
  </tr>
  
  <tr>
    <td>
      Amount
    </td>
    
    <td>
      Nominal bebas
    </td>
  </tr>
</tbody>
</table>

---

## Best Practices Sandbox

### Do's ✅

<list type="success">

- **Test semua flow** (create, callback, status check)
- **Test berbagai channel** yang akan digunakan
- **Validasi signature** dengan credential sandbox
- **Test error handling** (transaksi gagal, expired)
- **Gunakan callback URL** yang dapat menerima request

</list>

### Don'ts ❌

<list type="warning">

- **Jangan gunakan credential sandbox** di production
- **Jangan campurkan** data sandbox dengan production
- **Jangan skip testing** langsung ke production
- **Jangan abaikan** error di sandbox

</list>

---

## Checklist Sebelum Pindah ke Production

Pastikan semua item berikut sudah di-test di Sandbox:

<list type="success">

- [ ] **Create transaction** berhasil
- [ ] **Callback diterima** dan diproses dengan benar
- [ ] **Signature validation** berfungsi
- [ ] **Status check** via API berfungsi
- [ ] **Error handling** untuk berbagai skenario
- [ ] **UI pembayaran** menampilkan info dengan benar
- [ ] **Semua channel** yang digunakan sudah ditest

</list>

---

## Migrasi Sandbox ke Production

### Langkah-langkah

1. **Selesaikan semua testing** di Sandbox
2. **Dapatkan credential Production** dari Dashboard
3. **Update konfigurasi**:

  - Ganti API URL ke production
  - Ganti API Key ke production
  - Ganti Private Key ke production
4. **Test transaksi kecil** di production
5. **Monitor** beberapa transaksi pertama
6. **Go live** sepenuhnya

### Perubahan Konfigurasi

```javascript
// Sandbox
const config = {
  apiUrl: 'https://tripay.co.id/api-sandbox',
  apiKey: 'YOUR_SANDBOX_API_KEY',
  privateKey: 'YOUR_SANDBOX_PRIVATE_KEY'
};

// Production
const config = {
  apiUrl: 'https://tripay.co.id/api',
  apiKey: 'YOUR_PRODUCTION_API_KEY',
  privateKey: 'YOUR_PRODUCTION_PRIVATE_KEY'
};
```

---

## Troubleshooting Sandbox

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
      Transaksi tidak terbuat
    </td>
    
    <td>
      Credential salah
    </td>
    
    <td>
      Gunakan credential sandbox
    </td>
  </tr>
  
  <tr>
    <td>
      Callback tidak diterima
    </td>
    
    <td>
      URL tidak accessible
    </td>
    
    <td>
      Cek URL callback
    </td>
  </tr>
  
  <tr>
    <td>
      Signature invalid
    </td>
    
    <td>
      Private key salah
    </td>
    
    <td>
      Gunakan private key sandbox
    </td>
  </tr>
  
  <tr>
    <td>
      Channel tidak tersedia
    </td>
    
    <td>
      Channel belum aktif
    </td>
    
    <td>
      Aktifkan di Dashboard
    </td>
  </tr>
</tbody>
</table>

---

## FAQ Sandbox

### Apakah ada biaya untuk sandbox?

**Tidak.** Sandbox sepenuhnya gratis untuk testing.

### Berapa lama data sandbox disimpan?

Data sandbox bersifat temporary dan dapat dihapus secara periodik.

### Bisakah sandbox digunakan untuk demo ke client?

**Ya.** Sandbox cocok untuk demo karena tidak ada transaksi nyata.

### Apakah rate limit sandbox sama dengan production?

Rate limit mungkin berbeda. Cek dokumentasi untuk detailnya.

---

## Dukungan

Jika mengalami kendala dengan Sandbox:

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

- **Dokumentasi API** - Detail endpoint dan parameter
- **Callback Tester** - Tool testing callback
- **Production** - Panduan go-live ke production
