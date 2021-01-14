d3.html("./4_viz.svg").then(function(svgDocument){

  let svgUsers = svgDocument.querySelector("svg");

  let container = document.querySelector("#visualization-container");

  container.appendChild(svgUsers);

  const clusters = d3.selectAll("#users > g");
  const dots = d3.select("#Other_users");
  const chart = d3.select("#area_chart-2").style("opacity", "0.2");
  let b1 = d3.select("#button1");
  let b2 = d3.select("#button2").style("opacity", "0");
  let descriptions = d3.selectAll("#description > g").style("opacity", "0");
  let textbox = d3.selectAll("#textbox_bgonthescene").style("opacity", "0");
  let textcover = d3.selectAll("#text_cover").style("opacity", "1");
  let tts = d3.selectAll("#tooltips-2 > g").style("opacity", "0");
  let toggles = d3.selectAll("#exclamation > g");
  let axis = d3.select("#axis").style("opacity", "0");

  clusters.on("click", function(){
    var x = this.id;
    clusters.transition().duration(500).style("opacity","0.2");
    dots.transition().duration(500).style("opacity","0.2");
    descriptions.transition().duration(500).style("opacity", "0");
    toggles.transition().duration(500).style("opacity", "0");
    axis.transition().duration(500).style("opacity", "0");
    chart.transition().duration(500).style("opacity", "0.2");
    b2.transition().duration(500).style("opacity", "0");
    d3.select("#texto_"+x).transition().duration(500).style("opacity", "1");
    d3.select(this).transition().duration(500).style("opacity","1");
    d3.select("#instructions").transition().duration(500).style("opacity","0");
    d3.select("#annotation").transition().duration(500).style("opacity","0.2");
    d3.select("#user_ranking").transition().duration(500).style("opacity", "1");
  });

  b1.on("click", function(){
    chart.transition().duration(500).style("opacity", "1");
    b2.transition().duration(500).style("opacity", "1");
    clusters.transition().duration(500).style("opacity","0.05");
    dots.transition().duration(500).style("opacity","0.05");
    descriptions.transition().duration(500).style("opacity", "0");
    d3.select("#annotation").transition().duration(500).style("opacity","0.05");
    d3.select("#user_ranking").transition().duration(500).style("opacity", "0");
    axis.transition().duration(500).style("opacity", "1");
  })

  d3.select("#background").on("click", function(){
    clusters.transition().duration(500).style("opacity","1");
    dots.transition().duration(500).style("opacity","1");
    descriptions.transition().duration(500).style("opacity", "0");
    toggles.transition().duration(500).style("opacity", "1");
    d3.select("#instructions").transition().duration(500).style("opacity","1");
    d3.select("#annotation").transition().duration(500).style("opacity","1");
    b2.transition().duration(500).style("opacity", "0");
    chart.transition().duration(500).style("opacity", "0.2");
    d3.select("#user_ranking").transition().duration(500).style("opacity", "1");
    d3.select("#axis").transition().duration(500).style("opacity", "0");
  });

  toggles.on("mouseover", function(){
    var y = this.id;
    d3.select("#"+y+"a").transition().duration(500).style("opacity","1");
  }).on("mouseout", function (){
    tts.transition().duration(500).style("opacity","0");
  })

});
