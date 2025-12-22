# Callback tester

> Panduan menggunakan Callback Tester TriPay

**Callback Tester** adalah tool yang disediakan TriPay untuk menguji apakah endpoint callback/webhook Mitra sudah berfungsi dengan benar sebelum go-live.

---

## Pengertian Callback Tester

### Apa itu Callback Tester?

Callback Tester adalah fitur di Dashboard TriPay yang memungkinkan:

<list type="info">

- **Mengirim test callback** ke URL endpoint Mitra
- **Memverifikasi** endpoint dapat menerima dan merespons dengan benar
- **Debug** masalah callback tanpa transaksi nyata
- **Simulasi** berbagai skenario (sukses, gagal, dll)

</list>

---

## Mengapa Perlu Testing Callback?

### Pentingnya Testing

Sebelum menerima transaksi nyata, pastikan:

<table>
<thead>
  <tr>
    <th>
      Aspek
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
        Endpoint aktif
      </strong>
    </td>
    
    <td>
      URL dapat diakses dari internet
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Format benar
      </strong>
    </td>
    
    <td>
      Server dapat parse JSON callback
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Response valid
      </strong>
    </td>
    
    <td>
      Return format yang diharapkan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Validasi signature
      </strong>
    </td>
    
    <td>
      Implementasi signature verification
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Proses bisnis
      </strong>
    </td>
    
    <td>
      Update status order berjalan
    </td>
  </tr>
</tbody>
</table>

---

## Cara Menggunakan Callback Tester

### Langkah-langkah

1. **Login** ke Dashboard TriPay
2. Masuk ke menu **Developer** atau **Integrasi**
3. Pilih **Callback Tester**
4. Masukkan **URL callback** endpoint Anda
5. Pilih **tipe callback** yang ingin ditest
6. Klik **Kirim** atau **Test**
7. Lihat **hasil** dan **response** dari server Anda

### Informasi yang Diperlukan

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
        Callback URL
      </strong>
    </td>
    
    <td>
      URL lengkap endpoint (https://...)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Tipe Callback
      </strong>
    </td>
    
    <td>
      PAID, EXPIRED, dll
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Data Tambahan
      </strong>
    </td>
    
    <td>
      Reference, amount (opsional)
    </td>
  </tr>
</tbody>
</table>

---

## Jenis Test yang Tersedia

### 1. Test Transaksi Sukses (PAID)

Simulasi callback saat pembayaran berhasil.

**Data yang dikirim:**

```json
{
  "reference": "T-TEST-123456",
  "merchant_ref": "ORDER-TEST-001",
  "payment_method": "BRIVA",
  "total_amount": 100000,
  "status": "PAID",
  "paid_at": "2024-01-15 10:30:00"
}
```

### 2. Test Transaksi Expired

Simulasi callback saat transaksi expired.

**Data yang dikirim:**

```json
{
  "reference": "T-TEST-123456",
  "merchant_ref": "ORDER-TEST-001",
  "status": "EXPIRED"
}
```

---

## Validasi Response

### Response yang Diharapkan

Server Anda harus mengembalikan:

```json
{
  "success": true
}
```

### Status HTTP

<table>
<thead>
  <tr>
    <th>
      Code
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
      Sukses - callback diterima
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        400
      </strong>
    </td>
    
    <td>
      Bad Request - ada masalah dengan data
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        401
      </strong>
    </td>
    
    <td>
      Unauthorized - signature tidak valid
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        500
      </strong>
    </td>
    
    <td>
      Server Error - error di sisi Mitra
    </td>
  </tr>
</tbody>
</table>

---

## Hasil Testing

### Sukses

Jika testing berhasil, Anda akan melihat:

<callout color="green" icon="i-lucide-check-circle">

**Sukses**: Callback berhasil dikirim dan diterima. Response: `{"success": true}`

</callout>

### Gagal

Jika testing gagal:

<callout color="red" icon="i-lucide-x-circle">

**Gagal**: Tidak dapat menghubungi endpoint. Error: Connection timeout

</callout>

---

## Troubleshooting

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
      Connection refused
    </td>
    
    <td>
      Server tidak aktif
    </td>
    
    <td>
      Pastikan server running
    </td>
  </tr>
  
  <tr>
    <td>
      Connection timeout
    </td>
    
    <td>
      Firewall blocking
    </td>
    
    <td>
      Whitelist IP TriPay
    </td>
  </tr>
  
  <tr>
    <td>
      SSL error
    </td>
    
    <td>
      Certificate tidak valid
    </td>
    
    <td>
      Gunakan SSL valid
    </td>
  </tr>
  
  <tr>
    <td>
      404 Not Found
    </td>
    
    <td>
      URL salah
    </td>
    
    <td>
      Periksa URL endpoint
    </td>
  </tr>
  
  <tr>
    <td>
      500 Server Error
    </td>
    
    <td>
      Bug di kode
    </td>
    
    <td>
      Debug error di server
    </td>
  </tr>
</tbody>
</table>

### Checklist Sebelum Testing

<list type="success">

- [ ] Server sudah **running** dan dapat diakses publik
- [ ] URL callback **benar** dan lengkap
- [ ] **SSL certificate** valid (untuk HTTPS)
- [ ] **Firewall** mengizinkan koneksi dari luar
- [ ] **Kode callback handler** sudah di-deploy

</list>

---

## Contoh Handler Callback

### PHP

```php
<?php
// Terima callback
$json = file_get_contents('php://input');
$data = json_decode($json, true);

// Log untuk debugging
file_put_contents('callback.log', $json . "\n", FILE_APPEND);

// Validasi signature (jika menggunakan)
// ... kode validasi ...

// Response sukses
header('Content-Type: application/json');
echo json_encode(['success' => true]);
```

### Node.js

```javascript
app.post('/callback', (req, res) => {
  const data = req.body;

  // Log untuk debugging
  console.log('Callback received:', data);

  // Validasi signature
  // ... kode validasi ...

  // Response sukses
  res.json({ success: true });
});
```

---

## Tips Testing

### Best Practices

<list type="success">

- **Test di Sandbox dulu** sebelum production
- **Log semua callback** untuk debugging
- **Gunakan ngrok** jika testing dari localhost
- **Validasi signature** untuk keamanan
- **Test berbagai skenario** (PAID, EXPIRED)

</list>

### Menggunakan ngrok untuk Local Testing

Jika server development di localhost:

```bash
# Install ngrok
npm install -g ngrok

# Jalankan server lokal (misal port 3000)
npm run dev

# Buat tunnel
ngrok http 3000

# Gunakan URL ngrok sebagai callback URL
# Contoh: https://abc123.ngrok.io/callback
```

---

## Perbedaan Sandbox vs Production

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
        URL Endpoint
      </strong>
    </td>
    
    <td>
      Bebas (bisa ngrok)
    </td>
    
    <td>
      Harus HTTPS valid
    </td>
  </tr>
  
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
        Signature
      </strong>
    </td>
    
    <td>
      Credential Sandbox
    </td>
    
    <td>
      Credential Production
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Biaya
      </strong>
    </td>
    
    <td>
      Tidak ada
    </td>
    
    <td>
      Ada biaya transaksi
    </td>
  </tr>
</tbody>
</table>

---

## Setelah Testing Berhasil

Jika callback tester sudah sukses:

<list type="info">

1. **Deploy ke production** environment
2. **Update callback URL** dengan URL production
3. **Ganti credential** ke production API Key
4. **Test ulang** di mode Sandbox dengan credential production
5. **Go live** dan monitor transaksi pertama

</list>

---

## FAQ Callback Tester

### Apakah callback tester memotong biaya?

**Tidak.** Callback tester hanya simulasi, tidak ada transaksi atau biaya nyata.

### Bisakah test dengan URL localhost?

**Tidak langsung.** Gunakan ngrok atau service tunnel lainnya untuk expose localhost.

### Berapa kali bisa test?

**Tidak terbatas.** Gunakan seperlunya untuk memastikan integrasi benar.

### Apakah data test sama dengan data production?

Format sama, tapi data adalah **dummy/simulasi**.

---

## Dukungan

Jika mengalami kendala dengan callback testing:

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

- **Dokumentasi API** - Format lengkap callback
- **Halaman IPN** - Cara handle callback di production
- **Halaman Sandbox** - Testing dengan transaksi simulasi
