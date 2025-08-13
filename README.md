---

```markdown
# ​ Validasi Tanggal HTML

Batasi pilihan tanggal mulai **hari ini** sampai **X hari ke depan** (default: 15).

---

##  Fitur

- Atur tanggal minimum (hari ini) dan maksimum (X hari ke depan)  
- Validasi otomatis saat tanggal dipilih atau form dikirim  
- Konfigurasi fleksibel via:
  - `data-max-days` pada elemen input
  - `window.dateValidationConfig.maxDays` di JavaScript

---

## Cara Pakai

###  HTML:
```html
<form id="dateForm">
  <input type="date" class="date-input" data-max-days="10" />
  <div id="dateError"></div>
  <button type="submit">Submit</button>
</form>
```

###  Global JS (Opsional):
```html
<script>
  window.dateValidationConfig = { maxDays: 7 };
</script>
<script src="script.js"></script>
```

---

## ​ Catatan

- Prioritas: `data-max-days` > `window.dateValidationConfig.maxDays` > default `15`  
- Tampilkan error jika tanggal di luar rentang

---

##  Cocok untuk

Form seperti: booking, reservasi, jadwal, deadline, dan banyak lagi.
```

---
