console.log("Script is loaded!");

d3.html("./2_viz.svg").then(function(svgDocument){

  let svgSquares = svgDocument.querySelector("svg");
  let container = document.querySelector("#visualization-container");
  container.appendChild(svgSquares);

  const box = d3.selectAll("#comedy > g").classed("box", true);
  const box2 = d3.selectAll("#personal > g").classed("box", true);
  const box3 = d3.selectAll("#call_for_action > g").classed("box", true);
  let categories = d3.selectAll("#categories > g");
  let number = d3.selectAll("#numero_posts > g").style("opacity", "0");
  let captions = d3.selectAll("#captions > g").style("opacity", "0");
  d3.select('#imagecontainer > g > image').transition().duration(300).attr("opacity", 0);

  categories.on("mouseover", function (){
    var y = this.id;
    categories.style("opacity", 0.2);
    d3.select(this).style("opacity", 1);
    d3.selectAll(number).style("opacity", 0);
    d3.select("#n" + y).transition().duration(300).style("opacity", 1);
  }).on("mouseout", function (){
    categories.style("opacity", 1);
    d3.selectAll(number).transition().duration(300).style("opacity", 0);
  })

  box.on("mouseover", function (){
    var x = this.id;
    d3.select("#instruction").transition().duration(300).style("opacity", "0");
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#t" + x).transition().duration(300).style("opacity", "1");
    d3.select('#imagecontainer > g > image').attr("xlink:href", "./images/"+x+".jpg").transition().duration(300).attr("opacity", 1);
  }).on("mouseout", function (){
    d3.select('#imagecontainer > g > image').transition().duration(300).attr("opacity", 0);
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#instruction").transition().duration(300).style("opacity", "1");
  });

  box2.on("mouseover", function (){
    var x = this.id;
    d3.select("#instruction").transition().duration(300).style("opacity", "0");
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#t" + x).transition().duration(300).style("opacity", "1");
    d3.select('#imagecontainer > g > image').attr("xlink:href", "./images/"+x+".jpg").transition().duration(300).attr("opacity", 1);
  }).on("mouseout", function (){
    d3.select('#imagecontainer > g > image').transition().duration(300).attr("opacity", 0);
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#instruction").transition().duration(300).style("opacity", "1");
  });

  box3.on("mouseover", function (){
    var x = this.id;
    d3.select("#instruction").transition().duration(300).style("opacity", "0");
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#t" + x).transition().duration(300).style("opacity", "1");
    d3.select('#imagecontainer > g > image').attr("xlink:href", "./images/"+x+".jpg").transition().duration(300).attr("opacity", 1);
  }).on("mouseout", function (){
    d3.select('#imagecontainer > g > image').transition().duration(300).attr("opacity", 0);
    captions.transition().duration(300).style("opacity", "0");
    d3.select("#instruction").transition().duration(300).style("opacity", "1");
  });
});
