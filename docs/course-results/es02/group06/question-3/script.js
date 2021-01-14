
console.log("script is loaded!")

d3.html("./Q2.svg").then(function(Q2svgDoc){

  //console.log(Q2svgDoc);
  let svgNode = Q2svgDoc.querySelector("svg");
  //console.log(svgNode);
  //
  let container = document.querySelector("#visualisation");
  //console.log(container);
  container.appendChild(svgNode);

  const bubble = d3.selectAll("#bubbles > g");

  bubble.select("g[data-name=pie]").style("opacity","0");
  console.log(this);
  bubble.select("g[data-name=card]").style("opacity","0");
  console.log(this);
  bubble.on("mouseover",function(){
    bubble.style("opacity","0.1");
    d3.select(this).style("opacity","1");
    // d3.select(this).select("g[data-name=bb]").style("opacity","0");
    d3.select(this).select("g[data-name=pie]").style("opacity","1").raise();
    d3.select(this).select("g[data-name=card]").style("opacity","1").raise();
  })

  bubble.on("mouseout",function(){
    bubble.style("opacity","1");
    bubble.select("g[data-name=pie]").style("opacity","0");
    bubble.select("g[data-name=card]").style("opacity","0");
  })

  // const firstBubble = d3.select("#bubbles > g#provide");
  // firstBubble.select("#pie").style("opacity","0");
  // firstBubble.select("#card").style("opacity","0");
  // firstBubble.on("mouseover",function(){
  //   d3.select(this).select("#pie").style("opacity","1");
  //   d3.select(this).select("#card").style("opacity","1");
  //
  // })
  //
  // firstBubble.on("mouseout",function(){
  //   d3.select(this).select("#pie").style("opacity","0");
  //   d3.select(this).select("#card").style("opacity","0");
  // })
  //console.log(container);
  // const cluster = d3.selectAll("#main > g");
  // const pie_all = d3.selectAll(".pie").style("opacity","0");
  // const card_all = d3.selectAll(".card").style("opacity","0");


  // //——————none——————
  // const cluster_none = d3.select("#none").selectAll(".none");
  // console.log("cluster_none");
  // cluster_none.on("mouseenter",function(){
  //   //console.log(this);
  //   //cluster.transition().duration(50).ease(d3.easeLinear).style("opacity", "0.3");
  //   d3.select("#none").select(".pie").transition().duration(200).ease(d3.easeLinear).style("opacity", "1");
  //   d3.select("#none").select(".card").transition().duration(200).ease(d3.easeLinear).style("opacity", "1");
  // });
  //
  // cluster_none.on("mouseleave",function(){
  //   //console.log(this);
  //   cluster.transition().duration(150).ease(d3.easeLinear).style("opacity", "1");
  //   //d3.select("#none").select(".pie").transition().duration(0).ease(d3.easeLinear);
  //   pie_all.transition().duration(150).ease(d3.easeLinear).style("opacity", "0");
  //   card_all.transition().duration(150).ease(d3.easeLinear).style("opacity", "0");
  // });
  //
  // //——————sensitive——————
  // const cluster_sensitive = d3.select("#sensitive").selectAll(".sensitive");
  // //console.log("cluster_sensitive");
  // cluster_sensitive.on("mouseenter",function(){
  //   console.log(this);
  //   //cluster.transition().duration(0).ease(d3.easeLinear).style("opacity", "0.2");
  //   d3.select("#sensitive").select(".pie").transition().duration(150).ease(d3.easeLinear).style("opacity", "1");
  //   d3.select("#sensitive").select(".card").transition().duration(150).ease(d3.easeLinear).style("opacity", "1");
  // });
  // cluster_sensitive.on("mouseleave",function(){
  //   //console.log(this);
  //   d3.select("#sensitive").select(".pie").transition().duration(0).ease(d3.easeLinear);
  //   pie_all.transition().duration(100).ease(d3.easeLinear).style("opacity", "0");
  //   card_all.transition().duration(150).ease(d3.easeLinear).style("opacity", "0");
  // });
  //
  // //——————provide——————
  // const cluster_provide = d3.select("#provide").selectAll(".provide");
  // console.log("cluster_provide");
  // cluster_provide.on("mouseenter",function(){
  //   //console.log(this);
  //   //cluster.transition().duration(0).ease(d3.easeLinear).style("opacity", "0.2");
  //   d3.select("#provide").select(".pie").transition().duration(150).ease(d3.easeLinear).style("opacity", "1").attr("transform","translate(20,-30)");
  //   d3.select("#provide").select(".card").transition().duration(150).ease(d3.easeLinear).style("opacity", "1");
  // });
  // cluster_provide.on("mouseleave",function(){
  //   //console.log(this);
  //   d3.select("#provide").select(".pie").transition().duration(0).ease(d3.easeLinear).attr("transform","translate(0,0)");
  //   pie_all.transition().duration(100).ease(d3.easeLinear).style("opacity", "0");
  //   card_all.transition().duration(150).ease(d3.easeLinear).style("opacity", "0");
  // });





});
