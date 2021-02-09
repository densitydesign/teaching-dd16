// set responsive grid sizes
$(document).ready(function() {

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      $(".box").height(height / 4 - 2);
      $(".box").width(width / 8 - 2);
      $(".box2").width(width / 4 - 2);
      $(".box2").height(height / 4 - 2);
      $(".box").css("max-width", $("#wraper").width() / 8);
      $("#box19").width(3 * width / 8 - 2).css("max-width", 3 * $("#wraper").width() / 8);
    }).resize();

      $("#box1").hover(
        function() {
          $("#box1").animate({backgroundColor: "rgb(60,60,60)"},300)
        },
        function() {
          $("#box1").animate({backgroundColor: "#1a1a1a"},300)
        }
      )

      $(".launch-video").hover(
        function() {
          $(".launch-video").animate({backgroundColor: "rgba(255, 143, 157)"},300)
        },
        function() {
          $(".launch-video").animate({backgroundColor: "rgb(255, 100, 119)"},300)
        }
      )

      $(".launch-video").click(function () {
        $("#box11").animate({opacity: 0}, 400);
        $("#box12").animate({opacity: 0}, 600);
        $("#box13").animate({opacity: 0}, 800);
        $("#box14").animate({opacity: 0}, 1000);
        $("#box15").animate({opacity: 0}, 1200);
        $("#box19").animate({opacity: 0}, 1400).remove();
      //  $("#box4").animate({width: 2 * $("#box4").width() + 4}, 700).css("max-width", $("#wraper") / 4);
        $("#box21").animate({opacity: 0}, 700);
        $("#box22").animate({opacity: 0}, 700);
        $("#box23").animate({opacity: 0}, 700);
        $("#box24").animate({opacity: 0}, 700);
        $("#box31").removeClass("invisible2");
        $("#box32").removeClass("invisible2");
        $("#box33").removeClass("invisible2");
        $("#box34").removeClass("invisible2");
        $("#wraper").css("pointer-events", "none");
        $("#box1").css("pointer-events", "auto");
        $("#title")
          .animate({fontSize: "0.8vw"}, 700)
          .animate({top: "8%"}, 700).animate({left: "50%"}, 700)
          .css("transform", "translate(-50%, -50%)")
          .animate({fontWeight: "300"}, 700);
        $("#box20").removeClass("launch-video").empty();
        $("#box20").parent().remove();
        setTimeout(
          function() {
            $(".line1").css("opacity", 1).animate({height: "50%"}, 500)
          }, 1600
        )
        $('video').get(0).play()
      });

      $("video").on("ended", function () {
        $("#box11").animate({opacity: 1}, 400);
        $("#box12").animate({opacity: 1}, 600);
        $("#box13").animate({opacity: 1}, 800);
        $("#box14").animate({opacity: 1}, 1000);
        $("#box15").animate({opacity: 1}, 1200);
        $("#box20").animate({opacity: 1}, 1300);
        $("#box21").animate({opacity: 1}, 1600);
        $("#box22").animate({opacity: 1}, 1800);
        $("#box23").animate({opacity: 1}, 1800);
        $("#box24").animate({opacity: 1}, 1800);
        setTimeout(
          function() {
              window.location.replace("../about/index.html")
          }, 2000
        )
      });

});

// change box color on hover

/*$(".box").mouseover(function() {
  $(this).data("original-color", $(this).css("background-color")).css("background-color", "rgba(69,104,233,0.5)");
  }).mouseleave(function() {
  $(this).css("background-color", $(this).data("original-color"))
});*/

//change box opacity on click

})
