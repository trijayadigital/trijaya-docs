# Alur Transaksi

> Mekanisme dan alur transaksi di TriPay

## Mekanisme Transaksi

Setelah integrasi selesai, berikut alur transaksi yang terjadi:

### Alur Pembayaran

```text
1. Pelanggan checkout di website MITRA
        ↓
2. MITRA request create transaction ke TriPay API
        ↓
3. TriPay mengembalikan detail pembayaran (VA number, QR code, dll)
        ↓
4. Pelanggan melakukan pembayaran
        ↓
5. PJP Rekanan memproses pembayaran
        ↓
6. TriPay mengirim callback ke server MITRA
        ↓
7. MITRA update status pesanan
        ↓
8. Pelanggan menerima konfirmasi
```

### Status Transaksi

<table>
<thead>
  <tr>
    <th>
      Status
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
        UNPAID
      </strong>
    </td>
    
    <td>
      Menunggu pembayaran
    </td>
  </tr>
  
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
      Waktu pembayaran habis
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
  
  <tr>
    <td>
      <strong>
        REFUND
      </strong>
    </td>
    
    <td>
      Dana dikembalikan
    </td>
  </tr>
</tbody>
</table>
