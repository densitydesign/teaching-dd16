$('document').ready(function() {
  console.log("About Loaded!");

  function scrolltotop() {
    $("html, body").animate({
      scrollTop: $('#top').offset().top
    }, 1000);
  }
  Promise.all([d3.html("./about.html"), d3.html("./assets/svg/menu.svg")])
    .then(function([html, svgDocument]) {

      let svgNode = svgDocument.querySelector("svg");
      let container = document.querySelector("#menu");
      container.appendChild(svgNode);

      let selected = d3.selectAll("svg > #selected > g")

      selected.on("mouseover", function() {
        let color = d3.select(this).attr("data-color");
        d3.select(this).select("path").style("fill", color);
        d3.select(this).select("rect").style("fill", color);
      })

      selected.on("mouseleave", function() {
        d3.select(this).select("path").style("fill", "#e9e9e9");
        d3.select(this).select("rect").style("fill", "#e9e9e9");
      })

      d3.select("#Name").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $('#pinkZoom').offset().top
        }, 1000);
      });

      d3.select("#Research").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $('#redZoom').offset().top
        }, 1000);
      });

      d3.select("#Concept").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $('#purpleZoom').offset().top
        }, 1000);
      });

      d3.select("#Output").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $('#blueZoom').offset().top
        }, 1000);
      });

      d3.select("#Team").on('click', function(e) {
        e.preventDefault();
        $("html, body").animate({
          scrollTop: $('#teamZoom').offset().top
        }, 1000);
      });



    })
});
