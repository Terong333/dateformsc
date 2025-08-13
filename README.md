---

# 📅 Validasi Input Tanggal HTML dengan JavaScript

Skrip ini berfungsi untuk membatasi dan memvalidasi input tanggal pada sebuah form HTML. Pengguna hanya dapat memilih tanggal dari **hari ini** hingga **15 hari ke depan**.

---

## ✨ Fitur

- ✅ Menentukan batas minimum tanggal (hari ini).
- ✅ Menentukan batas maksimum tanggal (15 hari dari hari ini).
- ✅ Menampilkan pesan kesalahan jika tanggal yang dipilih tidak valid.
- ✅ Validasi dilakukan saat:
  - Pengguna memilih tanggal (`change` event).
  - Form disubmit (`submit` event).

---

## 🛠️ Cara Kerja

1. Saat halaman dimuat (`DOMContentLoaded`), skrip:
   - Mengatur atribut `min` dan `max` pada elemen input tanggal.
   - Mengaktifkan event listener untuk validasi saat form dikirim dan saat tanggal berubah.

2. Saat pengguna memilih tanggal:
   - Jika tanggal sebelum hari ini → muncul error.
   - Jika tanggal lebih dari 15 hari dari hari ini → muncul error.

3. Saat form dikirim:
   - Jika tanggal tidak sesuai batasan → form tidak akan disubmit, dan pesan kesalahan ditampilkan.

---

## 🧩 Struktur HTML yang Diperlukan

Agar skrip ini berfungsi, pastikan HTML memiliki struktur berikut:

```html
<form id="dateForm">
  <label for="dateInput">Pilih tanggal:</label>
  <input type="date" class="date-input" id="dateInput" />
  <div id="dateError" style="color: red;"></div>
  <button type="submit">Kirim</button>
</form>
```

---

## 📌 Catatan

- Format tanggal yang digunakan adalah standar ISO (`YYYY-MM-DD`).
- Skrip menggunakan waktu lokal pengguna.
- Validasi dilakukan menggunakan `Date` object bawaan JavaScript, tanpa dependensi eksternal.

---

## 📂 File Terkait

- `index.html` — Struktur HTML yang memuat elemen input dan form.
- `script.js` — File JavaScript yang memuat skrip validasi ini (bisa di-embed langsung atau dipisah).

---

## 🧪 Contoh Penggunaan

```html
<!DOCTYPE html>
<html lang="id">
<head>
  <meta charset="UTF-8" />
  <title>Validasi Tanggal</title>
</head>
<body>
  <form id="dateForm">
    <label for="dateInput">Pilih tanggal:</label>
    <input type="date" class="date-input" id="dateInput" />
    <div id="dateError" style="color: red;"></div>
    <button type="submit">Kirim</button>
  </form>

  <script src="script.js"></script>
</body>
</html>
```

---
