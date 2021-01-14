

console.log("script is loaded!")
d3.html("./Q3.svg").then(function(Q1svgDoc){
  //console.log(Q1svgDoc);
  let svgNode = Q1svgDoc.querySelector("svg");
  console.log(svgNode);
  //
  let container = document.querySelector("#visualisation");
  //console.log(container);
  container.appendChild(svgNode);
  console.log(container);

  const cluster = d3.selectAll("#main > g");
  cluster.on("mouseenter",function(){
    console.log(this);
    cluster.transition().duration(250).ease(d3.easeLinear).style("opacity", "0.1");
    d3.select(this).transition().duration(250).ease(d3.easeLinear).style("opacity", "1");
  });
  cluster.on("mouseleave",function(){
    console.log(this);
    cluster.transition().duration(250).ease(d3.easeLinear).style("opacity", "1");
  });

  d3.select("#background").on("click",function(){
    cluster.style('opacity','1');
  });

});
