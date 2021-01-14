console.log("question 2 script is running!");
Promise.all([d3.html("./question.html"), d3.html("./visualisation.svg")]).then(
  function ([html, svgDocument]) {
    // populate page with content from question.html
    const questionContent = d3.select(html).selectAll("body > *");
    questionContent.each(function (d) {
      d3.select("#question-container").node().appendChild(this);
    });

    // Bring the visualization inside the page by using plain JS
    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#visualisation");
    container.appendChild(svgNode);

    // Use d3js for interactions ...
    //We are using plain js...
    const gifContainer = document.getElementById("gif_placeholder");
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("style", "transform: translate(0, 198px)");

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "svg-container");
    svg.setAttribute("height", "184");
    svg.setAttribute("width", "300");
    svg.setAttribute("overflow", "visible");

    var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("height", "184");
    image.setAttribute("width", "300");
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");

    g.appendChild(image);
    svg.appendChild(g);
    gifContainer.appendChild(svg);
    const clusters = d3.selectAll('[id^="parent"] > g');
    const nodes = document.querySelectorAll('[id^="parent"]');

    for (var i = 0; i < nodes.length; i++) {
      const childList = nodes[i].querySelectorAll('[id^="child"]');
      const folderName = nodes[i];

      for (var j = 0; j < childList.length; j++) {
        childList[j].addEventListener(
          "mouseenter",
          function (event) {
            const name = event.target.id.split("_")[1];

            const src =
              "gifs/" + folderName.id.split("_")[1] + "/" + name + ".gif";

            clusters.style("opacity", "0.3");
            d3.select(this).style("opacity", "1");

            fetch(src, { method: "HEAD" })
              .then((res) => {
                if (res.ok) {
                  image.setAttribute("href", src);
                } else {
                  image.setAttribute("href", "");
                }
              })
              .catch((err) => console.log("Error:", err));
          },
          false
        );
        childList[j].addEventListener(
          "mouseleave",
          function (event) {
            image.setAttribute("href", "");
            clusters.style("opacity", "1");
          },
          false
        );
      }
    }


    //Add sticky gif container
    var sticky = gifContainer.getBoundingClientRect().top;

    function stickyScroll() {
      if (window.pageYOffset > sticky && window.pageYOffset <= 1300) {
        console.log()
        gifContainer.setAttribute("transform", "translate(0, " + (window.pageYOffset - 780) + ")");
      
      } else {
        gifContainer.setAttribute("transform", "");
      }
    }

    window.onscroll = function() {stickyScroll()};
  }
);
