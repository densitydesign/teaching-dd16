$(document).ready(function() {

// set responsive grid sizes

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      $(".box").height(height / 4 - 2);
      $(".box").width(width / 8 - 2);
      $(".box2").width(width / 4 - 2);
      $("#title").css("margin-top", height / 5).css("margin-left", width / 6);
      $(".box").css("max-width", $("#wraper").width() / 8);
      $(".box2").css("max-width", $("#wraper").width() / 4);
      $("#box8").css("max-width", $("#wraper").width() / 4);
    }).resize();
});

function startStory() {
  $("#box8").animate({width: 2 * $("#box1").width() + 4, height: 2 * $("#box1").height() + 4}, 2000);
//  $(".homebtn").animate({backgroundColor: "#efefef"}, 1000);
  $("#box18").addClass("invisible", 700);
  $("#box18").animate({width: $("#box18").width() / 2 + 1}, 1600);
  $(".title-line").animate({height: "100%"}, 1300);
  $(".box").removeClass("off", 700, "swing");
  $("#image-open").animate({opacity: 0}, 700);
  //$("p").animate({opacity: 0}, 700);
  $("h1").animate({opacity: 0}, 700);
  $(".btn").animate({opacity: 0}, 700);
  $(".home").animate({opacity: 0}, 700);
  $(".title").animate({opacity: 0}, 700)
}

$("#story-content").load("proudboys.xml");
$.getScript("script-story.js");
$("#story-content").css("opacity", 0);

$(".startbtn").click(function(){
  $("#box1").animate({backgroundColor: "#efefef"}, 1000);
  startStory();
  setTimeout(
    function() {
      $("#opening-content").animate({opacity: 0}, 2000);
      $("#story-content").animate({opacity: 1}, 2000);
    }, 2000);
    setTimeout(
      function() {
        $("#opening-content").empty();
    }
    , 3500)
  })
})
