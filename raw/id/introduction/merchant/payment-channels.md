# Aktivasi channel pembayaran

> Panduan lengkap metode pembayaran yang tersedia di TriPay

TriPay menyediakan berbagai **metode pembayaran (payment channel)** yang dapat diaktifkan untuk menerima pembayaran dari pelanggan.

---

## Cara Mengaktifkan Channel Pembayaran

Pengaturan Channel Pembayaran ada di halaman **Merchant → Opsi → Edit**. Di halaman tersebut, merchant dapat:

- Mengaktifkan/menonaktifkan metode pembayaran
- Mengatur biaya admin (dibebankan ke merchant, pembeli, atau keduanya)
- Mendaftar channel pembayaran QRIS custom (syarat dan ketentuan berlaku)

---

## Daftar Channel Pembayaran

<table>
<thead>
  <tr>
    <th>
      Nama
    </th>
    
    <th>
      Kategori
    </th>
    
    <th>
      Biaya Admin
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
      QRIS
    </td>
    
    <td>
      Rp750 + 0,7%
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BCA Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp5.500
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BNI Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BRI Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Mandiri Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Permata Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        CIMB Niaga Virtual Account
      </strong>
    </td>
    
    <td>
      Virtual Account
    </td>
    
    <td>
      Rp4.250
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        GoPay
      </strong>
    </td>
    
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        OVO
      </strong>
    </td>
    
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        DANA
      </strong>
    </td>
    
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        ShopeePay
      </strong>
    </td>
    
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        LinkAja
      </strong>
    </td>
    
    <td>
      E-Wallet
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Alfamart
      </strong>
    </td>
    
    <td>
      Retail
    </td>
    
    <td>
      Rp3.500
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Indomaret
      </strong>
    </td>
    
    <td>
      Retail
    </td>
    
    <td>
      Rp3.500
    </td>
  </tr>
</tbody>
</table>

<callout color="blue" icon="i-lucide-info">

**Catatan**:

- **Expired Time**: Default expired time adalah **24 jam** jika parameter `expired_time` tidak diisi saat create transaksi. Expired time menggunakan format **unix timestamp**. Setiap channel memiliki batasan minimal dan maksimal expired time yang berbeda. Untuk informasi detail, silakan cek di [halaman developer](https://tripay.co.id/developer?tab=channels)
- **Amount Limits**: Setiap channel memiliki batasan minimal dan maksimal nominal transaksi yang berbeda-beda. Untuk informasi detail tentang batasan amount setiap channel, silakan cek di [halaman developer](https://tripay.co.id/developer?tab=channels)

</callout>

---

## Ringkasan Biaya Channel

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
      Settlement
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
      0,7% + Rp750
    </td>
    
    <td>
      H+2/H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        BCA VA
      </strong>
    </td>
    
    <td>
      Rp5.500
    </td>
    
    <td>
      H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        VA Bank Lainnya
      </strong>
    </td>
    
    <td>
      Rp4.250
    </td>
    
    <td>
      H+2/H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        E-Wallet
      </strong>
    </td>
    
    <td>
      3% (min. Rp1.000)
    </td>
    
    <td>
      H+2/H+3
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Retail
      </strong>
    </td>
    
    <td>
      Rp3.500
    </td>
    
    <td>
      H+2/H+3
    </td>
  </tr>
</tbody>
</table>

---

## Konfigurasi Biaya Admin

Merchant dapat mengatur **pembagian biaya admin** TriPay antara merchant dan pelanggan. Biaya admin adalah biaya channel yang sudah ditetapkan TriPay, dan merchant dapat menentukan siapa yang menanggung biaya tersebut.

<table>
<thead>
  <tr>
    <th>
      Opsi Pembagian
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
        Merchant 100%
      </strong>
    </td>
    
    <td>
      Seluruh biaya admin ditanggung merchant
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Pelanggan 100%
      </strong>
    </td>
    
    <td>
      Seluruh biaya admin ditanggung pelanggan
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Flat
      </strong>
    </td>
    
    <td>
      Pembagian biaya dengan nominal tetap (contoh: merchant Rp3.000, pelanggan Rp2.500)
    </td>
  </tr>
  
  <tr>
    <td>
      <strong>
        Persentase
      </strong>
    </td>
    
    <td>
      Pembagian biaya dengan persentase (contoh: merchant 50%, pelanggan 50%)
    </td>
  </tr>
</tbody>
</table>

**Contoh perhitungan:**

### Contoh 1: Virtual Account (BCA) - Nominal Rp100.000

**Rincian:**

- Nominal transaksi: Rp100.000
- Biaya admin TriPay: Rp5.500

**Skenario A: Merchant menanggung 100%**

- **Total yang dibayar pelanggan**: Rp100.000
- **Biaya yang ditanggung merchant**: Rp5.500
- **Dana yang diterima merchant**: Rp100.000 - Rp5.500 = **Rp94.500**

**Skenario B: Pembagian flat (Merchant Rp3.000, Pelanggan Rp2.500)**

- **Total yang dibayar pelanggan**: Rp100.000 + Rp2.500 = **Rp102.500**
- **Biaya yang ditanggung merchant**: Rp3.000
- **Dana yang diterima merchant**: Rp100.000 - Rp3.000 = **Rp97.000**

**Skenario C: Pembagian persentase (Merchant 50%, Pelanggan 50%)**

- Biaya merchant: 50% × Rp5.500 = Rp2.750
- Biaya pelanggan: 50% × Rp5.500 = Rp2.750
- **Total yang dibayar pelanggan**: Rp100.000 + Rp2.750 = **Rp102.750**
- **Biaya yang ditanggung merchant**: Rp2.750
- **Dana yang diterima merchant**: Rp100.000 - Rp2.750 = **Rp97.250**

---

### Contoh 2: QRIS - Nominal Rp100.000

**Rincian:**

- Nominal transaksi: Rp100.000
- Biaya admin TriPay: 0,7% + Rp750

  - 0,7% dari Rp100.000 = Rp700
  - Platform fee = Rp750
  - Total biaya admin = Rp700 + Rp750 = **Rp1.450**

**Skenario A: Merchant menanggung 100%**

- **Total yang dibayar pelanggan**: Rp100.000
- **Biaya yang ditanggung merchant**: Rp1.450
- **Dana yang diterima merchant**: Rp100.000 - Rp1.450 = **Rp98.550**

**Skenario B: Pembagian persentase (Merchant 50%, Pelanggan 50%)**

- Biaya merchant: 50% × Rp1.450 = Rp725
- Biaya pelanggan: 50% × Rp1.450 = Rp725
- **Total yang dibayar pelanggan**: Rp100.000 + Rp725 = **Rp100.725**
- **Biaya yang ditanggung merchant**: Rp725
- **Dana yang diterima merchant**: Rp100.000 - Rp725 = **Rp99.275**

---

## Rekomendasi Pemilihan Channel

### Berdasarkan Nilai Transaksi

<table>
<thead>
  <tr>
    <th>
      Nilai Transaksi
    </th>
    
    <th>
      Channel Rekomendasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      < Rp50.000
    </td>
    
    <td>
      VA Bank / Retail
    </td>
  </tr>
  
  <tr>
    <td>
      Rp50.000 - Rp500.000
    </td>
    
    <td>
      QRIS / VA
    </td>
  </tr>
  
  <tr>
    <td>
      > Rp500.000
    </td>
    
    <td>
      VA Bank (non-BCA)
    </td>
  </tr>
</tbody>
</table>

### Berdasarkan Target Pelanggan

<table>
<thead>
  <tr>
    <th>
      Target Pelanggan
    </th>
    
    <th>
      Channel Rekomendasi
    </th>
  </tr>
</thead>

<tbody>
  <tr>
    <td>
      Milenial / Gen-Z
    </td>
    
    <td>
      QRIS, E-Wallet
    </td>
  </tr>
  
  <tr>
    <td>
      Profesional
    </td>
    
    <td>
      VA Bank, QRIS
    </td>
  </tr>
  
  <tr>
    <td>
      Masyarakat umum
    </td>
    
    <td>
      Retail, VA Bank
    </td>
  </tr>
  
  <tr>
    <td>
      Tanpa rekening bank
    </td>
    
    <td>
      Retail
    </td>
  </tr>
</tbody>
</table>

---

## FAQ

### Channel mana yang paling murah?

Tergantung nilai transaksi. Untuk nilai besar, **VA Bank (non-BCA)** dengan biaya flat Rp4.250 paling efisien.

### Apakah bisa mengaktifkan semua channel?

Ya, Pengguna dapat mengaktifkan semua channel sekaligus.

### Mengapa BCA VA tetap H+3?

Ini merupakan ketentuan dari pihak BCA, bukan TriPay.
