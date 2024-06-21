     // Voeg validatie toe aan het formulier
     (function () {
        'use strict'

        // Haal alle formulieren op waaraan we validatie willen toevoegen
        var forms = document.querySelectorAll('.needs-validation')

        // Loop door elke form en voeg event listener toe aan verzenden knop
        Array.prototype.slice.call(forms)
            .forEach(function (form) {
                form.addEventListener('submit', function (event) {
                    if (!form.checkValidity()) {
                        event.preventDefault()
                        event.stopPropagation()
                    }

                    form.classList.add('was-validated')
                }, false)
            })
    })()