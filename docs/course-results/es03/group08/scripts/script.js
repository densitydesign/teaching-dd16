// set responsive grid sizes
$(document).ready(function() {

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var boxHeight = $(".box").height(height / 4 - 2);
      var boxWidth = $(".box").width(width / 8 - 2);
      $(".box2").width(width / 4 - 2);
      $(".box").css("max-width", $("#wraper").width() / 8);
      $(".box2").css("max-width", $("#wraper").width() / 4);
    }).resize();

    setTimeout(
      function () {
        $("#wraper").children().addClass("empty");
        $("#box1").removeClass("empty");
        $("#box3").removeClass("empty").switchClass("letter-a", "letter-s");
        $("#box5").removeClass("empty");
        $("#box7").removeClass("empty").switchClass("letter-a", "letter-t");
        $("#box8").removeClass("empty").switchClass("letter-g", "letter-a");
        $("#box9").removeClass("empty").switchClass("letter-B", "letter-a");
        $("#box10").removeClass("empty").switchClass("letter-a", "letter-H");
        $("#box12").removeClass("empty");
        $("#box13").removeClass("empty");
        $("#box14").removeClass("empty");
        $("#box19").removeClass("empty").switchClass("letter-f", "letter-t");
        $("#box20").removeClass("empty");
        $("#box23").removeClass("empty").switchClass("letter-d", "letter-l");
        $("#box24").removeClass("empty").addClass("letter-d");
        $("#box27").removeClass("empty").addClass("letter-f");
        $("#box29").removeClass("empty").addClass("letter-e");
        setTimeout(
          function() {
            $("#wraper").children().addClass("empty");
            $("#box3").removeClass("empty");
            $("#box5").removeClass("empty");
            $("#box8").removeClass("empty").switchClass("letter-a", "letter-t");
            $("#box9").removeClass("empty").switchClass("letter-a", "letter-H");
            $("#box13").removeClass("empty");
            $("#box15").removeClass("empty").addClass("letter-e");
            $("#box17").removeClass("empty").addClass("letter-a");
            $("#box20").removeClass("empty").switchClass("letter-i", "letter-t");
            $("#box21").removeClass("empty").switchClass("letter-e", "letter-i");
            $("#box23").removeClass("empty");
            $("#box27").removeClass("empty").switchClass("letter-f", "letter-t");
            $("#box30").removeClass("empty").addClass("letter-e");
            setTimeout(
              function() {
                $("#wraper").children().addClass("empty");
                $("#box2").removeClass("empty").switchClass("letter-H", "letter-s");
                $("#box4").removeClass("empty").switchClass("letter-s", "letter-h");
                $("#box5").removeClass("empty").switchClass("letter-h", "letter-l");
                $("#box7").removeClass("empty").switchClass("letter-t", "letter-e");
                $("#box17").removeClass("empty");
                $("#box22").removeClass("empty").switchClass("letter-l", "letter-i");
                $("#box24").removeClass("empty").switchClass("letter-d", "letter-l");
                $("#box28").removeClass("empty").addClass("letter-t");
                setTimeout(
                  function() {
                    $("#wraper").children().addClass("empty");
                    $("#box4").removeClass("empty");
                    $("#box7").removeClass("empty");
                    $("#box17").removeClass("empty");
                    $("#box24").removeClass("empty");
                    $("#box30").removeClass("empty").addClass("letter-i");
                    $(".launch-video").removeClass("invisible");
                  }, 1000)
              }, 1000);
          }, 1000);
      }, 3000);

      $(".launch-video").click(function () {
        $("#box11").animate({opacity: 0}, 400);
        $("#box12").animate({opacity: 0}, 600);
        $("#box13").animate({opacity: 0}, 800);
        $("#box14").animate({opacity: 0}, 1000);
        $("#box19").animate({opacity: 0}, 1200);
        $("#box20").animate({opacity: 0}, 1400);
        $("#box21").animate({opacity: 0}, 1600);
        $("#box22").animate({opacity: 0}, 1800);
        $('video').get(0).play()
        $('.skip').removeClass('invisible', 700);
      });

      $("video").on("ended", function () {
        $("#box11").animate({opacity: 1}, 1600);
        $("#box12").animate({opacity: 1}, 1400);
        $("#box13").animate({opacity: 1}, 1200);
        $("#box14").animate({opacity: 1}, 1800);
        $("#box19").animate({opacity: 1}, 100);
        $("#box20").animate({opacity: 1}, 800);
        $("#box21").animate({opacity: 1}, 600);
        $("#box22").animate({opacity: 1}, 400);
        $('.skip').addClass('invisible', 700);
        $("#launch-video").children().empty();
        $("#launch-video").attr("href", 'menu/index.html').append("<p class='launch-video'>CONTINUE</p>")
      })
});

// change box color on hover

/*$(".box").mouseover(function() {
  $(this).data("original-color", $(this).css("background-color")).css("background-color", "rgba(69,104,233,0.5)");
  }).mouseleave(function() {
  $(this).css("background-color", $(this).data("original-color"))
});*/

//change box opacity on click

})
