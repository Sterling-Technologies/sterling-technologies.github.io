jQuery(function($) {

  // call the function for contact submit
  contactSubmit();

  // call the function for charts
  charts();
});

/* 
 * Function for contact submit
 */
function contactSubmit() {
  // contact submit
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
    } else {
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
    } else {
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
    } else {
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
    } else {
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
    } else {
      $('#helpMessage')
        .text('')
        .removeClass('text-danger')
        .css('display', 'none');
      $('#inputMessage').removeClass('has-danger');
    }

    // remove error text if there is
    if ($('.contactSubmitText').hasClass('text-danger')) {
      $('.contactSubmitText').text('').removeClass('text-danger');
    }

    if (!hasError) {
      loading = true;
      $('#contactForm').submit();
      $('#contactForm input').attr('readonly', true);
      $('#contactForm textarea').attr('readonly', true);

      // display success message
      $('.insert-message').append(
        '<p class="text-success" id="contactSubmitText">' + 
          'Your response had been submitted successfully!' + 
        '</p>'
      );

      setTimeout(function() {
        $('#contactForm')[0].reset();
        $('#contactForm input').removeAttr('readonly');
        $('#contactForm textarea').removeAttr('readonly');
        $('.insert-message').addClass('d-none');
        loading = false;
      }, 5000);
    } else {
      $('.insert-message').append(
        '<p class="text-danger contactSubmitText">' + 
          'Please fill-in the required details.' + 
        '</p>'
      );
    }
  });

  // function for validating email formats
  function validateEmail(email) {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
}

/* 
 * Function for charts.js
 */
function charts() {
  // charts data
  var techCharts = [
    {
      name: 'aws',
      color: '#FF9900',
      percent: 80,
      tag: 'servers'
    },{
      name: 'googlecloud',
      color: '#EA4335',
      percent: 25,
      tag: 'servers'
    },{
      name: 'rackspace',
      color: '#D40021',
      percent: 80,
      tag: 'servers'
    },{
      name: 'azure',
      color: '#00AEEF',
      percent: 25,
      tag: 'servers'
    },{
      name: 'openstack',
      color: '#DA1A32',
      percent: 60,
      tag: 'servers'
    },{
      name: 'linode',
      color: '#1FB25A',
      percent: 90,
      tag: 'servers'
    },{
      name: 'digitalocean',
      color: '#0080FF',
      percent: 30,
      tag: 'servers'
    },{
      name: 'hadoop',
      color: '#66CCFF',
      percent: 60,
      tag: 'databases'
    },{
      name: 'couchdb',
      color: '#E32428',
      percent: 90,
      tag: 'databases'
    },{
      name: 'redis',
      color: '#A41E11',
      percent: 30,
      tag: 'databases'
    },{
      name: 'elasticsearch',
      color: '#07A4DD',
      percent: 25,
      tag: 'databases'
    },{
      name: 'rabbitmq',
      color: '#F2661F',
      percent: 25,
      tag: 'databases'
    },{
      name: 'react',
      color: '#61DAFB',
      percent: 60,
      tag: 'libraries'
    },{
      name: 'ionic',
      color: '#4E8EF7',
      percent: 90,
      tag: 'libraries'
    },{
      name: 'electron',
      color: '#47848F',
      percent: 30,
      tag: 'libraries'
    },{
      name: 'android',
      color: '#77C159',
      percent: 25,
      tag: 'libraries'
    }
  ];

  $.each(techCharts, function(key, val) {
    // gets the ID of the canvas where the chart will be rendered
    var ctx = document.getElementById(val.name).getContext('2d');
  
    // And for a doughnut chart
    new Chart(ctx, {
      type: 'doughnut',
      data: {
        datasets: [{
          data: [100 - val.percent, val.percent],
          backgroundColor: [
            '#E5E5E5',
            val.color
          ],
        }],
      },
      options: {
        hover: { mode: null },
        maintainAspectRatio: true,
        responsive: false,
        tooltips: { enabled: false },
        plugins: {
          deferred: {
            xOffset: 150,   // defer until 150px of the canvas width are inside the viewport
            yOffset: '50%', // defer until 50% of the canvas height are inside the viewport
          }
        }
      }
    });
  });
}
