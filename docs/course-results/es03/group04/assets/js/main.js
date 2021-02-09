console.log("js is working");

$(document).ready(function() {
  let a = 0;
  $("#sidebar").mCustomScrollbar({
    theme: "minimal"
  });

  $('#dismiss, .overlay').on('click', function() {
    $('#sidebar').removeClass('active');
    $('.overlay').removeClass('active');
    a = 0;
  });

  $('#sidebarCollapse').on('click', function() {
    if (a === 0) {
      $('#sidebar').addClass('active');
      $('.overlay').addClass('active');
      $('.collapse.in').toggleClass('in');
      $('a[aria-expanded=true]').attr('aria-expanded', 'false');
      a = 1;
    } else {
      $('#sidebar').removeClass('active');
      $('.overlay').removeClass('active');
      a = 0;
    }

  });
});
