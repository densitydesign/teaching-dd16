$(document).ready(function() {

// set responsive grid sizes

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var boxHeight = $(".box").height(height / 4 - 2);
      var boxWidth = $(".box").width(width / 8 - 2);
      $(".box").css("min-height", boxHeight).css("max-width", $("#wraper-content").width() / 7);
      $(".box2").width(width / 4 - 2).css("max-width", 2 * $("#wraper-content").width() / 7);
      $("#footer").width(width).height(height / 2);
      $("#footer").css("margin-left", - width / 8)
    }).resize();
});

$("#homebtn").hover(
  function() {
    $("#homebtn").animate({opacity: 0.6},300)
  },
  function() {
    $("#homebtn").animate({opacity: 1},300)
  }
);

$(".download-btn").hover(
  function() {
    $(".download-btn").animate({opacity: 0.7},300)
  },
  function() {
    $(".download-btn").animate({opacity: 1},300)
  }
)

function startStory() {
  $("#box1").animate({width: 2 * $("#box1").width() + 4, height: 2 * $("#box1").height() + 4}, 2000);
  $(".homebtn").animate({backgroundColor: "#efefef"}, 1000);
  $("#box18").addClass("invisible", 700);
  $("#box18").animate({width: $("#box18").width() / 2 + 1}, 1600)
  $(".box").removeClass("off", 700, "swing");
  $("#image-open").animate({opacity: 0}, 700);
  $("p").animate({opacity: 0}, 700);
  $("h1").animate({opacity: 0}, 700);
};

$(".name").hover(
  function() {
    $(this).animate({opacity: 0}, 300)
  },
  function() {
    $(this).animate({opacity: 1}, 300)
  }
);

$(".startbtn").click(function(){
  startStory();
  setTimeout(
    function() {
      $("#story-content").load("proudboys.xml");
      $.getScript("scripts/script-story.js");
      $("#opening-content").animate({opacity: 0}, 2000);
    }, 3500);
    setTimeout(
      function() {
        $("#opening-content").empty();
    }
    , 5500)
  })
});

//footer
