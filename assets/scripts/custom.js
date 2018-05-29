jQuery(function($) {
    $(document.body).doon();

    var loading = false;

    $('#contactSubmit').click(function() {
      var hasError = false;

      /* validate first */
      if (!$('#inputName').val() || $('#inputName').val() === '') {
        $('#helpName')
          .text('Name is required')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputName').addClass('has-danger');

        hasError = true;
      }
      else {
        $('#helpName')
          .text('')
          .removeClass('text-danger')
          .css('display', 'none');
        $('#inputName').removeClass('has-danger');
      }

      if (!$('#inputEmail').val() || $('#inputEmail').val() === '') {
        $('#helpEmail')
          .text('Email is required')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputEmail').addClass('has-danger');

        hasError = true;
      } else if (!validateEmail($('#inputEmail').val())) {
        $('#helpEmail')
          .text('Invalid Email Format')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputEmail').addClass('has-danger');

        hasError = true;
      }
      else {
        $('#helpEmail')
          .text('')
          .removeClass('text-danger')
          .css('display', 'none');
        $('#inputEmail').removeClass('has-danger');
      }

      /* validate first */
      if (!$('#inputCompanyName').val() || $('#inputCompanyName').val() === '') {
        $('#helpCompanyName')
          .text('Company Name is required')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputCompanyName').addClass('has-danger');

        hasError = true;
      }
      else {
        $('#helpCompanyName')
          .text('')
          .removeClass('text-danger')
          .css('display', 'none');
        $('#inputCompanyName').removeClass('has-danger');
      }

      /* validate first */
      if (!$('#inputContact').val() || $('#inputContact').val() === '') {
        $('#helpContact')
          .text('Contact is required')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputContact').addClass('has-danger');

        hasError = true;
      }
      else {
        $('#helpContact')
          .text('')
          .removeClass('text-danger')
          .css('display', 'none');
        $('#inputContact').removeClass('has-danger');
      }

      /* validate first */
      if (!$('#inputMessage').val()) {
        $('#helpMessage')
          .text('Message is required')
          .addClass('text-danger')
          .css('display', 'block');

        $('#inputMessage').addClass('has-danger');

        hasError = true;
      }
      else {
        $('#helpMessage')
          .text('')
          .removeClass('text-danger')
          .css('display', 'none');
        $('#inputMessage').removeClass('has-danger');
      }

      if (!hasError) {
        loading = true;
        $('#contactForm').submit();
        $('#contactForm input').attr('readonly', true);
        $('#contactForm textarea').attr('readonly', true);

        setTimeout(function() {
          $("#contactForm")[0].reset();
          $('#contactForm input').removeAttr('readonly');
          $('#contactForm textarea').removeAttr('readonly');
          loading = false;
        }, 3000);
      }

    });

    function validateEmail(email) {
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
    }

});
