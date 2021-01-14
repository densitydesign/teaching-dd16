console.log("question 2 script is running!")
Promise.all([d3.html("./question.html"), d3.html("./interactive/visualization-2.svg")])
  .then(function([html, svgDocument]) {
    // populate page with content from question.html
    const questionContent = d3.select(html).selectAll("body > *");
    questionContent.each(function(d) {
      d3.select("#question-container").node().appendChild(this);
    })

    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#visualization");
    container.appendChild(svgNode);

    let visualization = d3.select("svg");
    let image = d3.selectAll("#images > g");
    let legend = d3.selectAll("#legend > g");

    // extract the color of the image frame and add it as a class
    d3.selectAll("#images > g > path")
      .each(function() {
        let color = d3.select(this).style("fill");
        let colorClass = color.toString()
                              .replace(", ","-")
                              .replace(", ","-")
                              .replace("(","-")
                              .replace(")","");
        d3.select(this.parentNode).attr("class", colorClass);
    })
    // extract the color from the legend and add it as a class
    d3.selectAll("#legend > g > g > rect").each(function() {
      let color = d3.select(this).style("fill");
      let colorClass = color.toString()
                            .replace(", ","-")
                            .replace(", ","-")
                            .replace("(","-")
                            .replace(")","");
      d3.select(this.parentNode.parentNode).attr("class", colorClass);
    })

    // change cursor
    legend.on("mouseover", function() {
      d3.select(this).style("cursor", "pointer");
    });
    // click on legend to hide all images except the active color
    legend.on("click", function() {
      let color = d3.select(this).attr("class");
      image.transition().style("opacity", "0.3");
      let category = d3.selectAll("." + color)
                       .transition()
                       .style("opacity", "1");
    });

    // change "mouseover" to "click" if you want the image to show on click
    image.on("mouseover", function() {

      d3.select(this).style("cursor", "zoom-in");
      // get the layers id to later match it with the image id
      let selection = d3.select(this).property("id");

      // get the width and height of the visualization
      // to detect if the mouse is on the left/right/top/bottom
      let width = parseInt(visualization.style("width"));
      let height = parseInt(visualization.style("height"));

      let xOffset = 0;
      let yOffset = 0;
        // calculate if the mouse is left/right/top/bottom of
        // the visualization and change if the image appears
        // on the left/right/top/bottom of the mouse
        if (event.pageX >= width / 2) {
          xOffset = -400;
        }
        else if (event.pageX <= width / 2) {
          xOffset = 20;
        }
        if (event.pageY >= height / 2) {
          yOffset = -400;
        }
        else if (event.pageY <= height / 2) {
          yOffset = 20;
        }
        // show the image based on the id of the layer and
        // display it next to the cursor
        selection = d3.select("#visualization").append("div")
          .html("<img src='interactive/img/" + selection + ".jpg'>")
          .attr("class", "thumbnail")
          .style("left", event.pageX + xOffset)
          .style("top", event.pageY + yOffset);
    });
    // hide image if the cursor leaves the image
    image.on("mouseout", function() {
      d3.selectAll(".thumbnail").remove();
    });
    // full opacity when clicked on background
    d3.select("#background").on("click", function(){
      legend.transition().style("opacity", "1");
      image.transition().style("opacity", "1");
    });
  })
