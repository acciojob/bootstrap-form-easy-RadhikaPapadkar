//your code here
<script>
    // JavaScript for Bootstrap form validation
    (function () {
        'use strict';

        // Select the form
        const forms = document.querySelectorAll('.needs-validation');

        // Apply custom Bootstrap validation styles to each form
        Array.from(forms).forEach(function (form) {
            form.addEventListener('submit', function (event) {
                // Prevent submission if form is invalid
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                }

                // Add Bootstrap validation class
                form.classList.add('was-validated');
            }, false);
        });
    })();
</script>
