console.log("question 3 script is running!");
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
    const nodes = document.querySelectorAll('[id^="node"]');
    const clusters = d3.selectAll('[id^="node"]');

    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener(
        "mouseenter",
        function (event) {
          const name = event.target.id.split("_")[1] !== undefined ? event.target.id.split("_")[1] : '1';
          fetch("gifs/" + name + ".gif", { method: "HEAD" })
            .then((res) => {
              if (res.ok) {
                image.setAttribute("href", "gifs/" + name + ".gif");
              } else {
                image.setAttribute("href", "");
              }
            })
            .catch((err) => console.log("Error:", err));

            clusters.style("opacity", "0.3");
            d3.select(this).style("opacity", "1");
        },
        false
      );

      nodes[i].addEventListener(
        "mouseleave",
        function (event) {
          image.setAttribute("href", "");
          clusters.style("opacity", "1");
        },
        false
      );
    }

    const gifContainer = document.getElementById("gif_placeholder");
    var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
    g.setAttribute("style", "transform: translate(24px, 540px)");

    var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.setAttribute("id", "svg-container");
    svg.setAttribute("height", "172");
    svg.setAttribute("width", "307");
    svg.setAttribute("overflow", "visible");

    var image = document.createElementNS("http://www.w3.org/2000/svg", "image");
    image.setAttribute("height", "172");
    image.setAttribute("width", "307");
    image.setAttribute("x", "0");
    image.setAttribute("y", "0");
    image.setAttribute("onerror", "");

    g.appendChild(image);
    svg.appendChild(g);
    gifContainer.appendChild(svg);
  }
);
