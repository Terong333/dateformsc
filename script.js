        document.addEventListener('DOMContentLoaded', function() {
            const dateInput = document.querySelector('.date-input');
            const errorElement = document.getElementById('dateError');
            
            // Set tanggal minimum (hari ini)
            const today = new Date();
            const minDate = today.toISOString().split('T')[0];
            dateInput.setAttribute('min', minDate);
            
            // Set tanggal maksimum (15 hari dari sekarang)
            const maxDate = new Date();
            maxDate.setDate(today.getDate() + 15);
            const maxDateString = maxDate.toISOString().split('T')[0];
            dateInput.setAttribute('max', maxDateString);
            
            // Validasi saat form disubmit
            document.getElementById('dateForm').addEventListener('submit', function(e) {
                const selectedDate = new Date(dateInput.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                const maxAllowedDate = new Date();
                maxAllowedDate.setDate(today.getDate() + 15);
                maxAllowedDate.setHours(0, 0, 0, 0);

                if (selectedDate < today) {
                    e.preventDefault();
                    errorElement.textContent = 'Tanggal tidak boleh kurang dari hari ini';
                } else if (selectedDate > maxAllowedDate) {
                    e.preventDefault();
                    errorElement.textContent = 'Maksimal peminjaman 15 hari dari sekarang';
                } else {
                    errorElement.textContent = '';
                }
            });

            // Validasi saat tanggal dipilih
            dateInput.addEventListener('change', function() {
                const selectedDate = new Date(this.value);
                const today = new Date();
                today.setHours(0, 0, 0, 0);
                
                const maxAllowedDate = new Date();
                maxAllowedDate.setDate(today.getDate() + 15);
                maxAllowedDate.setHours(0, 0, 0, 0);

                if (selectedDate < today) {
                    errorElement.textContent = 'Tanggal tidak boleh kurang dari hari ini';
                    this.value = '';
                } else if (selectedDate > maxAllowedDate) {
                    errorElement.textContent = 'Maksimal peminjaman 15 hari dari sekarang';
                    this.value = '';
                } else {
                    errorElement.textContent = '';
                }
            });
        });
