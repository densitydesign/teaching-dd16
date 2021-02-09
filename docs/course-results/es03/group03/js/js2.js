let last_known_scroll_position = 0;

let ticking = false;

$(document).scroll(function (event) {
    var scroll = $(document).scrollTop();
//    console.log(scroll)
    doSomething(scroll)
    // Do something
});

let gino = 0
let ginetto = 0
let ginStrada = 0

function doSomething(antonio) {

console.log(antonio)

 if ((antonio >= 2087)&&(antonio <= 2130)&& (gino!=1)) {
     $(".alert_container").fadeIn();

     $("html").addClass("lockScroll");
    
     $("#wrapper").addClass("unfocused");
    $(".alert_container").center();
     gino=1
     }
else if ((antonio >= 5814)&&(antonio <= 5900)&& (ginetto!=1)){
     $(".alert_container2").fadeIn();
     $("html").addClass("lockScroll");
    
     $("#wrapper").addClass("unfocused");
    $(".alert_container2").center();
    ginetto = 1
     }
else if ((antonio >= 7020)&&(antonio <= 7040)&& (ginoStrada!=1)){

     $(".alert_container3").fadeIn();
     $("html").addClass("lockScroll");
     $(".menu-bar").addClass("unfocused");
     $(".container").addClass("unfocused");
     $(".sticky").addClass("unfocused");
    
    $(".alert_container3").center();
    ginostrada = 1
     }
else{
    console.log("ciaone")
}
}

//document.addEventListener('scroll', function(e) {
//  last_known_scroll_position = window.scrollY;
//
//  if (!ticking) {
//   
//      doSomething(last_known_scroll_position);
//      ticking = false;
//    };
//
//    ticking = true;
//  }
//);





$(document).scroll(function() {
  $("#scroll").fadeOut("slow");
  
});

function alertMobile(x) {
  if (x.matches) { // If media query matches
    $("html").addClass("lockScroll");
    $("#mobileAlert").css({"display":"flex"});
  } else {

  }
}

var x = window.matchMedia("(max-width: 700px)")
alertMobile(x) // Call listener function at run time
x.addListener(alertMobile) // Attach listener function on state changes


// prevent refresh
//
//$(window).on('unload', function() {
//  $(window).scrollTop(0);
//});
//
//window.onunload = function() {
//  window.scrollTo(0, 0);
//}
//
//if ('scrollRestoration' in history) {
//  history.scrollRestoration = 'manual';
//}

//// viewport plug in
//;
//(function($, win) {
//  $.fn.inViewport = function(cb) {
//    return this.each(function(i, el) {
//      function visPx() {
//        var H = $(this).height(),
//          r = el.getBoundingClientRect(),
//          t = r.top,
//          b = r.bottom;
//        return cb.call(el, Math.max(0, t > 0 ? H - t : (b < H ? b : H)));
//      }
//      visPx();
//      $(win).on("resize scroll", visPx);
//    });
//  };
//}(jQuery, window));
//
//$("#alert_active").inViewport(function(px) {
//  if (px) $(".alert_container").fadeIn("slow");
//});
//
//$("#alert_active2").inViewport(function(px) {
//  if (px) $(".alert_container2").fadeIn("slow");
//});
//
//$("#alert_active3").inViewport(function(px) {
//  if (px) $(".alert_container3").fadeIn("slow");
//});


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
//
//$(".alert_container").inViewport(function(px) {
//  if (px) $("html").addClass("lockScroll");
//  if (px) $(".menu-bar").addClass("unfocused");
//  if (px) $(".container").addClass("unfocused");
//  if (px) $(".sticky").addClass("unfocused");
//  $(".alert_container").center();
//});
//
//$(".alert_container2").inViewport(function(px) {
//  if (px) $("html").addClass("lockScroll");
//  if (px) $(".menu-bar").addClass("unfocused");
//  if (px) $(".container").addClass("unfocused");
//  if (px) $(".sticky").addClass("unfocused");
//  $(".alert_container2").center();
//});
//
//$(".alert_container3").inViewport(function(px) {
//  if (px) $("html").addClass("lockScroll");
//  if (px) $(".menu-bar").addClass("unfocused");
//  if (px) $(".container").addClass("unfocused");
//  if (px) $(".sticky").addClass("unfocused");
//  $(".alert_container3").center();
//});

// reactivate scroll

$("#alert1_btn").click(function() {
  $("html").removeClass("lockScroll");
  $(".menu-bar").removeClass("unfocused");
  $(".container").removeClass("unfocused");
  $(".sticky").removeClass("unfocused");

  $(".alert_container").fadeOut();
//  $("#alert_active").hide();
});

$("#alert2_btn").click(function() {
  $("html").removeClass("lockScroll");
  $(".menu-bar").removeClass("unfocused");
  $(".container").removeClass("unfocused");
  $(".sticky").removeClass("unfocused");

  $(".alert_container2").fadeOut();
//  $("#alert_active2").hide();
});

$("#alert3_btn").click(function() {
  $("html").removeClass("lockScroll");
  $(".menu-bar").removeClass("unfocused");
  $(".container").removeClass("unfocused");
  $(".sticky").removeClass("unfocused");

  $(".alert_container3").fadeOut();
//  $("#alert_active3").hide();
});
