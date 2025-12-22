# IPN

> Panduan Instant Payment Notification (Callback) TriPay

**IPN (Instant Payment Notification)** atau **Callback** adalah mekanisme notifikasi otomatis yang dikirimkan TriPay ke server Mitra saat status transaksi berubah (terutama saat pembayaran berhasil). Halaman ini menjelaskan cara kerja, konfigurasi, dan penanganan callback.

---

## Pengertian Callback/IPN

**Callback** adalah HTTP request yang dikirimkan oleh server TriPay ke URL yang ditentukan oleh Mitra untuk memberitahukan perubahan status transaksi secara **real-time**.

### Fungsi Callback

<list type="info">

- Memberitahu Mitra bahwa pembayaran telah **berhasil** (PAID)
- Memungkinkan Mitra untuk **update status pesanan** secara otomatis
- Mendukung proses bisnis yang **real-time** dan **otomatis**
- Mengurangi kebutuhan pengecekan manual

</list>

---

## Cara Kerja Callback

### Alur Proses

```text
1. Pelanggan Melakukan Pembayaran
              ↓
2. Pembayaran Diverifikasi oleh PJP Rekanan
              ↓
3. Status Transaksi Berubah ke PAID di Sistem TriPay
              ↓
4. TriPay Mengirim HTTP POST ke Callback URL Mitra
              ↓
5. Server Mitra Menerima dan Memproses Data
              ↓
6. Server Mitra Mengembalikan Response (JSON)
              ↓
7. Mitra Update Status Pesanan di Sistem Internal
```

### Kapan Callback Dikirim?

<table>
<thead>
  <tr>
    <th>
      Event
    </th>
    
    <th>
      Callback Dikirim
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Pembayaran <strong>
        berhasil
      </strong>
      
       (PAID)
    </td>
    
    <td>
      ✅ Ya
    </td>
  </tr>
  
  <tr>
    <td>
      Transaksi <strong>
        expired
      </strong>
    </td>
    
    <td>
      ✅ Ya (opsional)
    </td>
  </tr>
  
  <tr>
    <td>
      Transaksi <strong>
        dibuat
      </strong>
      
       (UNPAID)
    </td>
    
    <td>
      ❌ Tidak
    </td>
  </tr>
  
  <tr>
    <td>
      Transaksi <strong>
        gagal
      </strong>
    </td>
    
    <td>
      Tergantung konfigurasi
    </td>
  </tr>
</tbody>
</table>

---

## Konfigurasi Callback URL

### Cara Mengatur Callback URL

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Merchant**
3. Pilih merchant yang ingin dikonfigurasi
4. Masuk ke tab **Pengaturan** atau **API**
5. Isi field **Callback URL** dengan URL endpoint Anda
6. **Simpan** perubahan

### Persyaratan Callback URL

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
      HTTPS (disarankan) atau HTTP
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Akses
      </strong>
    </td>
    
    <td>
      URL harus dapat diakses dari internet
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Response
      </strong>
    </td>
    
    <td>
      Harus mengembalikan response JSON
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Timeout
      </strong>
    </td>
    
    <td>
      Response dalam waktu < 30 detik
    </td>
  </tr>
</tbody>
</table>

### Contoh Callback URL

```text
https://tokosaya.com/api/tripay/callback
https://api.tokosaya.com/payment/notification
https://tokosaya.com/webhook/tripay
```

---

## Format Data Callback

### HTTP Method

TriPay mengirim callback menggunakan **HTTP POST** method.

### Headers

<table>
<thead>
  <tr>
    <th>
      Header
    </th>
    
    <th>
      Value
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        Content-Type
      </code>
    </td>
    
    <td>
      <code>
        application/json
      </code>
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        X-Callback-Signature
      </code>
    </td>
    
    <td>
      Signature untuk validasi
    </td>
  </tr>
</tbody>
</table>

### Body (JSON)

Contoh data callback yang dikirim:

```json
{
  "reference": "T1234567890",
  "merchant_ref": "INV-001",
  "payment_method": "BRIVA",
  "payment_method_code": "BRIVA",
  "total_amount": 100000,
  "fee_merchant": 4250,
  "fee_customer": 0,
  "total_fee": 4250,
  "amount_received": 95750,
  "is_closed_payment": 1,
  "status": "PAID",
  "paid_at": "2024-01-15 10:30:00",
  "note": ""
}
```

### Penjelasan Field

<table>
<thead>
  <tr>
    <th>
      Field
    </th>
    
    <th>
      Tipe
    </th>
    
    <th>
      Keterangan
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      <code>
        reference
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Nomor referensi transaksi TriPay
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        merchant_ref
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Nomor referensi dari Mitra (order ID)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        payment_method
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Nama metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        payment_method_code
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Kode metode pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        total_amount
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      Total nilai transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        fee_merchant
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      Biaya yang ditanggung merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        fee_customer
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      Biaya yang ditanggung customer
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        total_fee
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      Total biaya transaksi
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        amount_received
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      Jumlah yang diterima merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        is_closed_payment
      </code>
    </td>
    
    <td>
      integer
    </td>
    
    <td>
      1 = closed, 0 = open
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        status
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Status transaksi (PAID, EXPIRED, dll)
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        paid_at
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Waktu pembayaran
    </td>
  </tr>
  
  <tr>
    <td>
      <code>
        note
      </code>
    </td>
    
    <td>
      string
    </td>
    
    <td>
      Catatan (jika ada)
    </td>
  </tr>
</tbody>
</table>

---

## Validasi Callback

### Pentingnya Validasi

<callout color="red" icon="i-lucide-shield-alert">

**SANGAT PENTING**: Selalu validasi setiap callback yang diterima untuk memastikan callback berasal dari TriPay dan data tidak dimanipulasi.

</callout>

### Metode Validasi

#### 1. Validasi Signature

TriPay mengirimkan signature di header `X-Callback-Signature`. Verifikasi signature dengan cara:

```php
// PHP Example
$callbackSignature = $_SERVER['HTTP_X_CALLBACK_SIGNATURE'] ?? '';
$json = file_get_contents('php://input');

$signature = hash_hmac('sha256', $json, $privateKey);

if ($callbackSignature !== $signature) {
    // Signature tidak valid, tolak callback
    exit('Invalid signature');
}
```

#### 2. Validasi ke API TriPay

Setelah menerima callback, lakukan pengecekan ulang ke API TriPay untuk memastikan data valid:

```php
// Cek status transaksi ke API TriPay
$response = checkTransactionStatus($reference);

if ($response['status'] !== 'PAID') {
    // Status tidak sesuai
    exit('Invalid status');
}
```

---

## Response yang Diharapkan

### Response Sukses

Server Mitra harus mengembalikan response JSON dengan format:

```json
{
  "success": true
}
```

### Response Gagal

Jika terjadi error di sisi Mitra:

```json
{
  "success": false,
  "message": "Error processing callback"
}
```

### HTTP Status Code

<table>
<thead>
  <tr>
    <th>
      Status Code
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
        200
      </strong>
    </td>
    
    <td>
      Callback berhasil diproses
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        4xx
      </strong>
    </td>
    
    <td>
      Error di sisi client (Mitra)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        5xx
      </strong>
    </td>
    
    <td>
      Error di sisi server (Mitra)
    </td>
  </tr>
</tbody>
</table>

---

## Retry Mechanism

### Jika Callback Gagal

Jika server Mitra tidak merespons atau mengembalikan error, TriPay akan melakukan **retry** pengiriman callback.

<table>
<thead>
  <tr>
    <th>
      Percobaan
    </th>
    
    <th>
      Interval
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      1
    </td>
    
    <td>
      Langsung
    </td>
  </tr>
  
  <tr>
    <td>
      2
    </td>
    
    <td>
      1 menit
    </td>
  </tr>
  
  <tr>
    <td>
      3
    </td>
    
    <td>
      5 menit
    </td>
  </tr>
  
  <tr>
    <td>
      4
    </td>
    
    <td>
      15 menit
    </td>
  </tr>
  
  <tr>
    <td>
      5
    </td>
    
    <td>
      30 menit
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Catatan**: Mekanisme retry dapat berbeda tergantung konfigurasi sistem. Pastikan endpoint Anda selalu tersedia dan merespons dengan cepat.

</callout>

---

## Best Practices

### 1. Idempotency

<list type="success">

- Callback yang sama mungkin dikirim **lebih dari sekali**
- Pastikan sistem Anda **idempotent** (hasil sama meski diproses berkali-kali)
- Cek apakah order sudah diproses sebelum update status

</list>

### 2. Response Cepat

<list type="success">

- Respons callback **secepatnya** (< 5 detik ideal)
- Proses berat dilakukan **di background** (queue)
- Jangan blocking process saat handle callback

</list>

### 3. Validasi Ketat

<list type="success">

- **Selalu validasi** signature callback
- **Cek ulang** status ke API TriPay
- **Jangan percaya** data callback tanpa validasi

</list>

### 4. Logging

<list type="success">

- **Log semua** callback yang diterima
- Simpan **raw data** untuk troubleshooting
- Log **response** yang dikirim balik

</list>

### 5. Error Handling

<list type="success">

- Handle **semua kemungkinan error**
- Return response yang **jelas** jika error
- Implementasi **fallback mechanism**

</list>

---

## Contoh Implementasi

### PHP

```php
<?php
// Terima callback
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Validasi signature
$callbackSignature = $_SERVER['HTTP_X_CALLBACK_SIGNATURE'] ?? '';
$privateKey = 'YOUR_PRIVATE_KEY';
$signature = hash_hmac('sha256', $json, $privateKey);

if ($callbackSignature !== $signature) {
    http_response_code(400);
    echo json_encode(['success' => false, 'message' => 'Invalid signature']);
    exit;
}

// Proses callback
$reference = $data['reference'];
$merchantRef = $data['merchant_ref'];
$status = $data['status'];

if ($status === 'PAID') {
    // Update status order di database
    updateOrderStatus($merchantRef, 'paid');

    // Kirim notifikasi ke customer
    sendNotification($merchantRef);
}

// Response sukses
echo json_encode(['success' => true]);
```

### Node.js

```javascript
const crypto = require('crypto');

app.post('/callback/tripay', (req, res) => {
    const json = JSON.stringify(req.body);
    const callbackSignature = req.headers['x-callback-signature'];
    const privateKey = 'YOUR_PRIVATE_KEY';

    // Validasi signature
    const signature = crypto
        .createHmac('sha256', privateKey)
        .update(json)
        .digest('hex');

    if (callbackSignature !== signature) {
        return res.status(400).json({
            success: false,
            message: 'Invalid signature'
        });
    }

    // Proses callback
    const { reference, merchant_ref, status } = req.body;

    if (status === 'PAID') {
        // Update order status
        updateOrderStatus(merchant_ref, 'paid');
    }

    res.json({ success: true });
});
```

---

## Testing Callback

### Callback Tester di Dashboard

TriPay menyediakan tool **Callback Tester** di Dashboard untuk menguji endpoint callback Anda.

**Cara Menggunakan:**

1. Login ke Dashboard TriPay
2. Masuk ke menu **Developer** atau **Callback Tester**
3. Masukkan URL endpoint callback
4. Klik **Test** atau **Kirim**
5. Lihat response dari server Anda

### Mode Sandbox

Gunakan mode **Sandbox** untuk testing callback tanpa transaksi nyata:

1. Buat transaksi di Sandbox
2. Simulasikan pembayaran
3. Callback akan dikirim ke URL yang dikonfigurasi

---

## Troubleshooting

### Callback Tidak Diterima

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      URL tidak dapat diakses
    </td>
    
    <td>
      Pastikan URL publik dan tidak diblock firewall
    </td>
  </tr>
  
  <tr>
    <td>
      HTTPS certificate error
    </td>
    
    <td>
      Pastikan SSL certificate valid
    </td>
  </tr>
  
  <tr>
    <td>
      Timeout
    </td>
    
    <td>
      Optimasi response time endpoint
    </td>
  </tr>
  
  <tr>
    <td>
      Callback URL belum dikonfigurasi
    </td>
    
    <td>
      Set Callback URL di Dashboard
    </td>
  </tr>
</tbody>
</table>

### Signature Tidak Valid

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Private Key salah
    </td>
    
    <td>
      Cek dan update Private Key
    </td>
  </tr>
  
  <tr>
    <td>
      Data berubah
    </td>
    
    <td>
      Pastikan JSON tidak dimodifikasi sebelum validasi
    </td>
  </tr>
  
  <tr>
    <td>
      Encoding berbeda
    </td>
    
    <td>
      Gunakan raw body untuk hashing
    </td>
  </tr>
</tbody>
</table>

### Status Order Tidak Update

<table>
<thead>
  <tr>
    <th>
      Masalah
    </th>
    
    <th>
      Solusi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Error di kode
    </td>
    
    <td>
      Cek log untuk error details
    </td>
  </tr>
  
  <tr>
    <td>
      Database error
    </td>
    
    <td>
      Cek koneksi dan query database
    </td>
  </tr>
  
  <tr>
    <td>
      Order tidak ditemukan
    </td>
    
    <td>
      Validasi merchant_ref
    </td>
  </tr>
</tbody>
</table>

---

## Dukungan

Jika mengalami kendala terkait callback:

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

Fitur callback merupakan bagian dari:

- **Pasal 2** - Ruang Lingkup Layanan
- **Pasal 3** - Kewajiban TriPay (notifikasi transaksi)
- **Pasal 7** - Mekanisme Layanan
