console.log("Hello");

d3.html("./3_viz.svg").then(function(svgDocument){

  let svgSquares = svgDocument.querySelector("svg");

  let container = document.querySelector("#visualization-container");

  container.appendChild(svgSquares);

    let groups = d3.selectAll("#groups > g");
    let lines = d3.selectAll("#lines > g").style("opacity", "0");

    groups.on("mouseover", function(){
      var x = this.id
      groups.style("opacity", "0.2");
      d3.select(this).style("opacity", "1");
      d3.select("#"+x+"x").transition().duration(200).style("opacity", "1")
    }).on("mouseout", function(){
      groups.style("opacity", "1");
      lines.transition().duration(200).style("opacity", "0")
    });
  })
