// set responsive grid sizes

$(document).ready(function() {
    $(window).resize(function() {
      var width = window.innerWidth;
      var height = window.innerHeight;
      var narratorH = $("#narrator-box").height(height / 2 - 2);
      var narratorW = $("#narrator-box").width(width / 4 - 2);
      var boxHeight = $(".box-story").height(height / 4 - 2);
      var boxWidth = $(".box-story").width(width / 8 - 2);
      $(".photo1").width(width / 2 - 2).css("max-width", 2 * $("#image-wraper-story").width() / 3);
      $(".photo2").width(width / 4 - 2).css("max-width", $("#image-wraper-story").width() / 3);
      $(".fixedbox").height(height / 4 - 2).width(width / 8 - 2);
      $(".box-story").css("max-width", $("#wraper-story").width() / 6);
      $(".fixedbox").css("max-width", $("#content-wraper").width() / 2)
    }).resize();
});

//keeps track of the tweets clicked

var clicks = 1;

var incrementCount = function(){
    clicks++;
};

//opens the Tweet

function popupTweet() {
  var elmId = $(event.target).parent().attr("id");
  $(".tweet-content").empty();
  $(".tweet-content").load("tweets/"+elmId+".xml");
  setTimeout(
    function() {
    if($("#tweet-text").hasClass("no-media")) {
      $(".popup-overlay3").css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 700);
      $(".tweet-text").css("height", "100%");
    } else {
      $(".popup-overlay").css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 700);
  }}, 500)
};

function popupMedia() {
  var mediaId = $(event.target).attr("id");
  $(".popup-overlay2").css("visibility", "visible").css("opacity", 0).animate({opacity: 1}, 700);
  $(".media-content").empty();
  $(".media-content").load("media/"+mediaId+".xml")
}

//appends all the buttons and disable them

$(document).ready(function() {
  $(".tweet").append("<button class='clickable' onclick='nextTweet()' disabled></button>");
  $("#tweet1").children().prop("disabled", false);
  $(".narrator-text").load("narration/narration1.xml").css("opacity", 0).animate({opacity: 1}, 800);
});

// toggle next square to open tweet

function nextTweet(){
  popupTweet();
  $(".clickHere").remove()
  $("#tweet"+clicks).removeClass("clickNext", 800, "swing").removeClass("clickNext2", 800, "swing").animate({backgroundColor: 'rgba(239,239,239,0)'}, 800);
  $("#tweet"+clicks).children().removeAttr("onclick").attr("onclick", 'popupTweet()');
  incrementCount();
  if(clicks == 9 || clicks == 8 || clicks == 7) {
    $("#tweet"+clicks).addClass("clickNext2", 800, "swing");
  } else {
    $("#tweet"+clicks).addClass("clickNext", 800, "swing");
  }
  $("#tweet"+clicks).children().prop("disabled", false);
}

// close popup

$(".close-btn").click(function() {
  $(".popup-overlay").animate({opacity: 0}, 700);
  setTimeout (function() {
    $(".popup-overlay").css("visibility", "hidden");
    $(".tweet-content").empty();
  }, 700)
})

$(".close-btn3").click(function() {
  $(".popup-overlay3").animate({opacity: 0}, 700);
  setTimeout (function() {
    $(".popup-overlay3").css("visibility", "hidden");
    $(".tweet-content").empty();
  }, 700)
})

$(".close-btn2").click(function() {
  $(".popup-overlay2").animate({opacity: 0}, 700);
  setTimeout (function() {
    $(".popup-overlay2").css("visibility", "hidden");
    $(".media-content").empty()
  }, 700)
})


// change month

function changeMonth() {
  //sets what happens in september
  if(clicks == 3) {
    $(".month").empty();
    $(".month").append("NOV 10");
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 300);
    $(".date-fixed").css("opacity", 1).animate({opacity: 0}, 300);
    $(".number-tweets").empty().append("867 tweets");
    $(".that-month").empty();
    $("#content-wraper2").css("visibility", "visible").css("opacity", 1).animate({opacity: 0}, 500);
    setTimeout(
      function() {
        $("#content-wraper2").css("visibility", "hidden");
      }, 501
    );
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration2.xml").animate({opacity: 1}, 300);
        $(".date-fixed").animate({opacity: 1}, 300)
      }
    , 400)
    //october
  } if (clicks == 4) {
    $(".month").empty();
    $(".month").append("NOV 12");
    $(".number-tweets").empty().append("1192 tweets");
    $("#content-wraper2").css("visibility", "visible").css("opacity", 1).animate({opacity: 0}, 500);
    setTimeout(
      function() {
        $("#content-wraper2").css("visibility", "hidden");
      }, 501
    );
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    $("#media-box").empty().removeClass("media1", 800);
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration3.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 6) {
    $(".month").empty();
    $(".month").append("NOV 13");
    $(".number-tweets").empty().append("9504 tweets");
    $("#content-wraper2").css("visibility", "visible").css("opacity", 1).animate({opacity: 0}, 500);
    setTimeout(
      function() {
        $("#content-wraper2").css("visibility", "hidden");
      }, 501
    );
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    $("#media-box").empty().animate({opacity: 0}, 800).removeClass("media2", 800);
    $("#media-box").css("opacity", 0).addClass("media1", 300, "swing").animate({opacity: 0.6}, 300).append("<button class='clickable' id='media1' onclick='popupMedia()'></button>");
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration4.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 10) {
    $(".month").empty();
    $(".month").append("NOV 14");
    $("#media-box").empty().removeClass("media1", 800);
    $("#content-wraper2").css("visibility", "visible").css("opacity", 1).animate({opacity: 0}, 500);
    setTimeout(
      function() {
        $("#content-wraper2").css("visibility", "hidden");
      }, 501
    );
    $(".number-tweets").empty().append("69748 tweets");
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration5.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 14) {
    $(".month").empty();
    $(".month").append("NOV 15");
    $("#content-wraper2").css("visibility", "visible").css("opacity", 1).animate({opacity: 0}, 500);
    setTimeout(
      function() {
        $("#content-wraper2").css("visibility", "hidden");
      }, 501
    );
    $(".number-tweets").empty().append("12476 tweets");
    $(".narrator-text").css("opacity", 1).animate({opacity: 0}, 800);
    setTimeout(
      function() {
        $(".narrator-text").empty();
        $(".narrator-text").load("narration/narration6.xml").animate({opacity: 1}, 800)
      }
    , 900)
  } if (clicks == 19) {
    $("#date-container").children().remove();
    $("#date-container").wrap("<a href='../menu/index.html'></a>")
    $("#date-container").css("background-color", "#ff6477").addClass("return").append("<p class='next'>< MENU</p>");
    $(".next").css("opacity", 0).animate({opacity: 1}, 800);
    $("#number-tweets-container").empty();
    $(".tweet").animate({backgroundColor: 'rgba(239,239,239,0.7)'}, 800);
    $(".invisible").animate({opacity: 1}, 800);
    $(".exit-btn").remove();
    setTimeout(
      function() {
        $("#narrator-box").addClass("narrator-box-final");
        $(".narrator-text").empty().addClass("narrator-text-final");
        $(".narrator-text").load("narration/narrationfinal.xml").animate({opacity: 1}, 800)
      }
    , 900);
    var visit2 = true;
    sessionStorage.setItem('mmm-visited', visit2);
  }
};

$(".close-btn").click(function() {changeMonth()});
$(".close-btn3").click(function() {changeMonth()});

// button effects
$("#media-box").hover(
  function() {
    $(this).animate({opacity: 1}, 600);
  }, function() {
    $(this).animate({opacity: 0.6}, 600);
  }
)



$(".exit-btn").hover(
  function() {
    $(".exit-btn").animate({
      width: "12.5%",
      height: "25%",
      opacity: 1
    }, 400);
    $(".exit-btn").children("p").empty();
    $(".exit-btn").children("p").append("<<span>MENU</span>")
  },
  function() {
    $(".exit-btn").animate({
      width: "35px",
      height: "35px",
      opacity: 0.7
    }, 400);
    $(".exit-btn").children("p").empty();
    $(".exit-btn").children("p").append("<");
  }
)
