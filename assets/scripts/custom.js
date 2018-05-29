jQuery(function($) {
    $(document.body).doon();

    var loading = false;

    $('#contactSubmit').click(function() {
      var hasError = false;

      /* validate first */
      if (!$('#inputName').val() || $('#inputName').val() === '') {
        $('#helpName')
          .text('Name is required')
          .addClass('is-danger')
          .css('display', 'block');

        $('#inputName').addClass('is-danger');

        hasError = true;
      }

      if (!$('#inputEmail').val() || $('#inputEmail').val() === '') {
        $('#helpEmail')
          .text('Email is required')
          .addClass('is-danger')
          .css('display', 'block');

        $('#inputEmail').addClass('is-danger');

        hasError = true;
      } else if (!validateEmail($('#inputEmail').val())) {
        $('#helpEmail')
          .text('Invalid Email Format')
          .addClass('is-danger')
          .css('display', 'block');

        $('#inputEmail').addClass('is-danger');

        hasError = true;
      }

      if (!hasError) {
        loading = true;
        $('#contactForm').submit();
        $('#contactForm input[type="text"]').attr('readonly', true);

        setTimeout(function() {
          $("#contactForm")[0].reset();
          $('#contactForm input[type="text"]').removeAttr('readonly');
          loading = false;
        }, 3000);
      }

    });

    function validateEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

});
