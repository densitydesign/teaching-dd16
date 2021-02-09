gsap.registerPlugin(ScrollTrigger)
let debug = false;

$(window).on('scroll', function() {
      if ($(window).scrollTop() >= $(
        '#start').offset().top + $('#start').
          outerHeight() - window.innerHeight) {
            document.getElementById('ser').style.backgroundColor= '#000000';
            document.getElementById('sel').style.backgroundColor= '#edf2f7';
            document.getElementById('sel').style.borderColor= '#000000';
            document.getElementById('sel').style.color= '#000000';
      }
  });

$(window).on('scroll', function() {
      if ($(window).scrollTop() >= $(
        '#separator1').offset().top + $('#separator1').
          outerHeight() - window.innerHeight) {
            document.getElementById('ser').style.backgroundColor= '#edf2f7';
            document.getElementById('sel').style.backgroundColor= '#000000';
            document.getElementById('sel').style.borderColor= '#edf2f7';
            document.getElementById('sel').style.color= '#edf2f7';
      }
  });

  $(window).on('scroll', function() {
        if ($(window).scrollTop() >= $(
          '#ending-video2').offset().top + $('#ending-video2').
            outerHeight() - window.innerHeight) {
              document.getElementById('ser').style.backgroundColor= '#000000';
              document.getElementById('sel').style.backgroundColor= '#edf2f7';
              document.getElementById('sel').style.borderColor= '#000000';
              document.getElementById('sel').style.color= '#000000';
        }
    });

    $(window).on('scroll', function() {
          if ($(window).scrollTop() >= $(
            '#separator3').offset().top + $('#separator3').
              outerHeight() - window.innerHeight) {
                document.getElementById('ser').style.backgroundColor= '#edf2f7';
                document.getElementById('sel').style.backgroundColor= '#000000';
                document.getElementById('sel').style.borderColor= '#edf2f7';
                document.getElementById('sel').style.color= '#edf2f7';
          }
      });

      $(window).on('scroll', function() {
            if ($(window).scrollTop() >= $(
              '#separator4').offset().top + $('#separator4').
                outerHeight() - window.innerHeight) {
                  document.getElementById('ser').style.backgroundColor= '#000000';
                  document.getElementById('sel').style.backgroundColor= '#edf2f7';
                  document.getElementById('sel').style.borderColor= '#000000';
                  document.getElementById('sel').style.color= '#000000';
            }
        });

        $(window).on('scroll', function() {
              if ($(window).scrollTop() >= $(
                '#separator5').offset().top + $('#separator5').
                  outerHeight() - window.innerHeight) {
                    document.getElementById('ser').style.backgroundColor= '#edf2f7';
                    document.getElementById('sel').style.backgroundColor= '#000000';
                    document.getElementById('sel').style.borderColor= '#edf2f7';
                    document.getElementById('sel').style.color= '#edf2f7';
              }
          });


window.addEventListener('DOMContentLoaded', function() {
  console.log("Function Loaded!");

  // removes the loader when document is ready
  let loader = $("#loader")
  loader.addClass("hidden");
  $("body").removeClass("overflow-hidden");

  // scroll back to top
  d3.select("#back-to-top").on('click', function(e) {
    e.preventDefault();
    $("html, body").animate({
      scrollTop: $('body').offset().top
    }, 1000);
  });

  let goTopTrigger = document.getElementById("show-back-to-top");
  gsap.utils.toArray("#back-to-top").forEach(function(elem) {

    ScrollTrigger.create({
      trigger: goTopTrigger,
      start: 'top top',
      end: '99999',
      onEnter: () => gsap.to(elem, {
        opacity: 1
      }),
      onLeave: () => gsap.to(elem, {
        opacity: 0
      }),
      onLeaveBack: () => gsap.to(elem, {
        opacity: 0
      }),
      onEnterBack: () => gsap.to(elem, {
        opacity: 1
      }),
      markers: debug
    });

  });

  let container = document.getElementById("horizontal-scroll");
  if (container) {
    gsap.to(container, {
      x: () => -(container.scrollWidth - document.documentElement.clientWidth) + "px",

      scrollTrigger: {
        markers: debug, // Easaly remove markers for production
        start: "center center",
        trigger: container,
        invalidateOnRefresh: true,
        pin: true,
        scrub: true,
        anticipatePin: 1, // can help avoid flash
        end: () => "+=" + container.offsetWidth
      }
    })
  }

  let container2 = document.getElementById("horizontal-scroll-2");
  if (container2) {
    gsap.to(container2, {
      x: () => -(container2.scrollWidth - document.documentElement.clientWidth) + "px",

      scrollTrigger: {
        markers: debug, // Easaly remove markers for production
        start: "center center",
        trigger: container2,
        invalidateOnRefresh: true,
        pin: true,
        scrub: true,
        anticipatePin: 1, // can help avoid flash
        end: () => "+=" + container2.offsetWidth
      }
    })
  }

  let yellowStar = document.getElementById("yellowZoom");
  if (yellowStar) {
    const yellowTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: yellowStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + yellowStar.offsetWidth
      }
    });

    yellowTimeline
      .to("#yellowZoomImg", {
        scale: 5
      })
  }

  let blueStar = document.getElementById("blueZoom");
  if (blueStar) {
    const blueTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: blueStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + blueStar.offsetWidth
      }
    });

    blueTimeline
      .to("#blueZoomImg", {
        scale: 5
      })
  }


  let greenStar = document.getElementById("greenZoom");
  if (greenStar) {
    const greenTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: greenStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + greenStar.offsetWidth
      }
    });

    greenTimeline
      .to("#greenZoomImg", {
        scale: 5
      })
  }

  let pinkStar = document.getElementById("pinkZoom");
  if (pinkStar) {
    const pinkTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: pinkStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + pinkStar.offsetWidth
      }
    });

    pinkTimeline
      .to("#pinkZoomImg", {
        scale: 5
      })
  }

  let redStar = document.getElementById("redZoom");
  if (redStar) {
    const redTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: redStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + redStar.offsetWidth
      }
    });

    redTimeline
      .to("#redZoomImg", {
        scale: 5
      })
  }

  let purpleStar = document.getElementById("purpleZoom");
  if (purpleStar) {
    const purpleTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: purpleStar, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        end: () => "+=" + purpleStar.offsetWidth
      }
    });

    purpleTimeline
      .to("#purpleZoomImg", {
        scale: 5
      })
  }



  // const ending = document.getElementById("end");
  // if (ending) {
  gsap.utils.toArray(".panel").forEach((panel, i) => {
    const id = panel.getAttribute('data-ending');
    const ending = document.getElementById(id);
    const pinTimeline = gsap.timeline({
      scrollTrigger: {
        markers: debug,
        trigger: panel, // What element triggers the scroll
        scrub: true, // Add a small delay of scrolling and animation. `true` is direct
        start: "center center", // Start at top of Trigger and at the top of the viewport
        pin: true, // Pin the element true or false
        pinSpacing: false,
        endTrigger: ending,
        end: "top bottom"
      }
    });
  });
  // }








  // @Vera, I think the follwing code is causing problems in the bottom section when the cards should overlap
  var block_flag2 = false;

  $.fn.followTo = function(pos) {
    var $this = this;

    $this.scroll(function(e) {
      /*  console.log("SCROLLHEIGHT: "+$("#intro2").prop('scrollHeight'));
        console.log("SCROLLTOP: "+$("#intro2").scrollTop());
        console.log("SCROLLHEIGHT-SCROLLTOP= " + ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop()));
        console.log("HEIGHT: "+Math.round($("#intro2").innerHeight())); */
      if ($("#intro2").prop('scrollHeight') - $("#intro2").scrollTop() == Math.round($("#intro2").innerHeight())) {
        block_flag2 = true;
        $('#intro2').css("overflow-y", "hidden");
        $('#intro2').css("position", "absolute");
        $("body").css("overflow-y", "scroll");
        block_flag.destroy();
      }
    });
  };

  $('#intro2').followTo(0);

  var intro_waypoints = $('.intro_waypoint').waypoint({
    handler: function(direction) {
      if (block_flag2 == false) {
        console.log("intro");
        $("body").css("overflow", "hidden");
        $('#intro2').css("overflow-y", "scroll");
      }

    }
  })



});

gsap.utils.toArray(".colorChange").forEach(function(elem) {

  let defaultBgColor = elem.getAttribute('data-default-bg-color');
  let defaultTextColor = elem.getAttribute('data-default-text-color');
  let bgColor = elem.getAttribute('data-bg-color');
  let textColor = elem.getAttribute('data-text-color');

  ScrollTrigger.create({
    trigger: elem,
    start: 'top top',
    end: 'bottom -100',
    onEnter: () => gsap.to(elem, {
      backgroundColor: bgColor,
      color: textColor
    }),
    onLeave: () => gsap.to(elem, {
      backgroundColor: defaultBgColor,
      color: defaultTextColor
    }),
    onLeaveBack: () => gsap.to(elem, {
      backgroundColor: defaultBgColor,
      color: defaultTextColor
    }),
    onEnterBack: () => gsap.to(elem, {
      backgroundColor: bgColor,
      color: textColor
    }),
    markers: debug
  });

});

function showDivPol() {
  document.getElementById('PolCard').style.display = "block";
  $("body").css("overflow", "hidden");
};

function hideDiv() {
  document.getElementById('PolCard').style.display = "none";
  document.getElementById('HealthCard').style.display = "none";
  document.getElementById('ViolenceCard').style.display = "none";
  $("body").css("overflow", "scroll");
}

function showDivHealth() {
  document.getElementById('HealthCard').style.display = "block";
  $("body").css("overflow", "hidden");
};

function showDivViolence() {
  document.getElementById('ViolenceCard').style.display = "block";
  $("body").css("overflow", "hidden");
};
