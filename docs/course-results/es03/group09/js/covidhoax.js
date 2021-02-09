$("body").css("overflow", "scroll");
var block_flag3 = false;


$.fn.followTo = function (pos) {
    var $this = this;

    $this.scroll(function (e) {
        if ($("#covid_scrolling").prop('scrollHeight') - $("#covid_scrolling").scrollTop() == Math.round($("#covid_scrolling").innerHeight()) ) {
       console.log("cacchio");
          block_flag3=true;
          $('#covid_scrolling').css("overflow", "hidden");
            $('#covid_scrolling').css("position", "absolute");
            $("body").css("overflow", "scroll");
          }
    });
};


$('#covid_scrolling').followTo(0);

var covid_waypoints = $('.covid-waypoint').waypoint({
  handler: function(direction) {
        if (block_flag3==false) {
          $("body").css("overflow", "hidden");
          $('#covid_scrolling').css("overflow", "scroll");
        }

  }
})

document.getElementById('covid1').addEventListener('ended',myHandler,false);
    function myHandler(e) {
      $("#stella_blu").css("visibility", "visible")
    }


    Promise.all([d3.html("./about.html"), d3.html("./assets/svg/conclusion.svg")])
      .then(function([html, svgDocument]) {

        let svgNode = svgDocument.querySelector("svg");
        let container = document.querySelector("#conclusion");
        container.appendChild(svgNode);

        let selected = d3.selectAll("svg > #Livello_1 > g")

        selected.on("mouseover", function() {
          console.log("opacizza");
          d3.select(this).style("opacity", 0.7);
        })

        selected.on("mouseleave", function() {
          d3.select(this).style("opacity", 1);
        })

        d3.select("#concl_1").on('click',function(e){
            e.preventDefault();
          location.href = "index.html#diverso";
          });

        d3.select("#concl_2").on('click',function(e){
            e.preventDefault();
          location.href = "index.html#diverso";
          });

      })
