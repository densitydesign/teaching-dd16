console.log("Script is loaded");
d3.html("./vis.svg").then(function(svgDocument){
  console.log(svgDocument);
  let svgNode = svgDocument.querySelector("svg");
  console.log(svgNode);

  let container = document.querySelector("#visualisation");

  console.log(container);
  container.appendChild(svgNode);
  console.log(container);

  const clusters = d3.selectAll("#nodes > g");
  clusters.on("mouseover",function(){
    clusters.transition().duration(250).ease(d3.easeLinear).style("opacity", "0.2");
    d3.select(this).transition().duration(250).ease(d3.easeLinear).style("opacity", "1");
    // clusters.style("opacity","0.3");
    // d3.select(this).style("opacity","1");
  });
  clusters.on("mouseout",function(){
    clusters.transition().duration(250).ease(d3.easeLinear).style("opacity", "1");
    //clusters.style("opacity","1");
  });
d3.select("#background").on("click",function(){
  clusters.style("opacity","1");
});

console.log(clusters);

});
