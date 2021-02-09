
var padre = 0;
var figlio = 0;
var spiritoSanto =  0;

  $(document).scroll(function() {
    $("#scroll").fadeOut("slow");
  });

  function alertMobile(x) {
    if (x.matches) { // If media query matches
      $("html").addClass("lockScroll");
      $("#mobileAlert").css({
        "display": "flex"
      });
      $("html").css({
        "overflow": "hidden"
      });
    } else {

    }
  }



var x = window.matchMedia("(max-width: 700px)")
alertMobile(x) // Call listener function at run time
x.addListener(alertMobile) // Attach listener function on state changes


// prevent refresh




$(window).on('unload', function() {
  $(window).scrollTop(0);
});

window.onunload = function() {
  window.scrollTo(0, 0);
}

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

// viewport plug in
;

(function($, win) {
  $.fn.inViewport = function(cb) {
    return this.each(function(i, el) {
      function visPx() {
        var H = $(this).height(),
          r = el.getBoundingClientRect(),
          t = r.top,
          b = r.bottom;
        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
      }
      visPx();
      $(win).on("resize scroll", visPx);
    });
  };
}(jQuery, window));

$("#alert_active").inViewport(function(px) {

  if (px) $(".alert_container").fadeIn("slow");




});

$("#alert_active2").inViewport(function(px) {
  if (px) $(".alert_container2").fadeIn("slow");
});

$("#alert_active3").inViewport(function(px) {
  if (px) $(".alert_container3").fadeIn("slow");
});


//center in viewport

jQuery.fn.center = function() {
  this.css("position", "absolute");
  this.css("top", Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) +
    $(window).scrollTop()) + "px");
  this.css("left", Math.max(0, (($(window).width() - $(this).outerWidth()) / 2) +
    $(window).scrollLeft()) + "px");
  return this;
}


// lock scroll on alert

$(".alert_container").inViewport(function(px) {
  if (padre ==0){
  if (px) $("html").addClass("lockScroll");
  if (px) $("#wrapper").addClass("unfocused");
  $(".alert_container").center();
  }
});

$(".alert_container2").inViewport(function(px) {
    if (figlio ==0){
  if (px) $("html").addClass("lockScroll");
  if (px) $("#wrapper").addClass("unfocused");
  $(".alert_container2").center();
    }

});

$(".alert_container3").inViewport(function(px) {
    if (spiritoSanto ==0){
  if (px) $("html").addClass("lockScroll");
  if (px) $("#wrapper").addClass("unfocused");
  $(".alert_container3").center();}

});

// reactivate scroll

$("#alert1_btn").click(function() {

      $("#alert_active").hide();
  $("html").removeClass("lockScroll");
  $(".alert_container").fadeOut();

  $("#wrapper").removeClass("unfocused");
    padre = 1

});

$("#alert2_btn").click(function() {
       console.log("bottone2 premuto")
    $("#alert_active2").hide();
  $("html").removeClass("lockScroll");
  $(".alert_container2").fadeOut();

  $("#wrapper").removeClass("unfocused");
figlio = 1
});

$("#alert3_btn").click(function() {
       console.log("bottone3 premuto")
      $("#alert_active3").hide();
  $("html").removeClass("lockScroll");
  $(".alert_container3").fadeOut();

  $("#wrapper").removeClass("unfocused");

spiritoSanto = 1
});
