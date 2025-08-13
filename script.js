document.addEventListener('DOMContentLoaded', function () {
    const dateInput = document.querySelector('.date-input');
    const errorElement = document.getElementById('dateError');

    if (!dateInput) return;

    // Konfigurasi maksimal hari (bisa diatur lewat data-attribute atau global config)
    let maxDays =
        parseInt(dateInput.dataset.maxDays) ||
        (window.dateValidationConfig?.maxDays) ||
        15; // default: 15 hari

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    // Set tanggal minimum
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);

    // Set tanggal maksimum
    const maxDate = new Date(today);
    maxDate.setDate(today.getDate() + maxDays);
    const maxDateString = maxDate.toISOString().split('T')[0];
    dateInput.setAttribute('max', maxDateString);

    // Validasi saat form disubmit
    document.getElementById('dateForm')?.addEventListener('submit', function (e) {
        const selectedDate = new Date(dateInput.value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            e.preventDefault();
            errorElement.textContent = 'Tanggal tidak boleh sebelum hari ini.';
        } else if (selectedDate > maxDate) {
            e.preventDefault();
            errorElement.textContent = `Tanggal tidak boleh lebih dari ${maxDays} hari dari hari ini.`;
        } else {
            errorElement.textContent = '';
        }
    });

    // Validasi saat tanggal dipilih
    dateInput.addEventListener('change', function () {
        const selectedDate = new Date(this.value);
        selectedDate.setHours(0, 0, 0, 0);

        if (selectedDate < today) {
            errorElement.textContent = 'Tanggal tidak boleh sebelum hari ini.';
            this.value = '';
        } else if (selectedDate > maxDate) {
            errorElement.textContent = `Tanggal tidak boleh lebih dari ${maxDays} hari dari hari ini.`;
            this.value = '';
        } else {
            errorElement.textContent = '';
        }
    });
});
