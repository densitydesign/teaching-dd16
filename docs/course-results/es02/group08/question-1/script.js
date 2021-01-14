console.log("Script is loaded!");

d3.html("./1_viz.svg").then(function(svgDocument){

  let svgHashtags = svgDocument.querySelector("svg");
  let container = document.querySelector("#visualization-container");
  container.appendChild(svgHashtags);

  let clusters = d3.selectAll("#clusters > g").style("opacity", "0");
  const chart = d3.selectAll("#areas > path");
  let all = d3.selectAll("#all > g").style("opacity", "1");

  d3.select("#h1").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#borat").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#c1").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#borat").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#h2").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#cancelborat").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#c2").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#cancelborat").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#h3").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#sachabaroncohen").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#c3").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#sachabaroncohen").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#h4").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#wearenotyourjoke").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#c4").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#wearenotyourjoke").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
  d3.select("#h6").on("mouseover", function(){
    d3.select("#stophate").transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "0.2");
    chart.transition().duration(300).style("opacity", "0.1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
    d3.select("#c6").transition().duration(300).style("opacity", "1");
    d3.select("#c7").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "0.2");
    d3.select("#h2").transition().duration(300).style("opacity", "0.2");
    d3.select("#h3").transition().duration(300).style("opacity", "0.2");
    d3.select("#h4").transition().duration(300).style("opacity", "0.2");
  }).on("mouseout", function(){
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    clusters.transition().duration(300).style("opacity", "0");
    d3.select("#h1").transition().duration(300).style("opacity", "1");
    d3.select("#h2").transition().duration(300).style("opacity", "1");
    d3.select("#h3").transition().duration(300).style("opacity", "1");
    d3.select("#h4").transition().duration(300).style("opacity", "1");
  });

  d3.select("#c6").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#stophate").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
    d3.select("#c6").transition().duration(300).style("opacity", "1");
    d3.select("#c7").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "0.2");
    d3.select("#h2").transition().duration(300).style("opacity", "0.2");
    d3.select("#h3").transition().duration(300).style("opacity", "0.2");
    d3.select("#h4").transition().duration(300).style("opacity", "0.2");
  }).on("mouseout", function(){
    clusters.transition().duration(300).style("opacity", "0");
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "1");
    d3.select("#h2").transition().duration(300).style("opacity", "1");
    d3.select("#h3").transition().duration(300).style("opacity", "1");
    d3.select("#h4").transition().duration(300).style("opacity", "1");
  });

  d3.select("#h7").on("mouseover", function(){
    d3.select("#instafreeze").transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
    d3.select("#c6").transition().duration(300).style("opacity", "1");
    d3.select("#c7").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "0.2");
    d3.select("#h2").transition().duration(300).style("opacity", "0.2");
    d3.select("#h3").transition().duration(300).style("opacity", "0.2");
    d3.select("#h4").transition().duration(300).style("opacity", "0.2");
  }).on("mouseout", function(){
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    clusters.transition().duration(300).style("opacity", "0");
    d3.select("#h1").transition().duration(300).style("opacity", "1");
    d3.select("#h2").transition().duration(300).style("opacity", "1");
    d3.select("#h3").transition().duration(300).style("opacity", "1");
    d3.select("#h4").transition().duration(300).style("opacity", "1");
  });

  d3.select("#c7").on("mouseover", function(){
    all.transition().duration(300).style("opacity", "0.1");
    chart.transition().duration(300).style("opacity", "0.2");
    d3.select("#instafreeze").transition().duration(300).style("opacity", "1");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
    d3.select("#c6").transition().duration(300).style("opacity", "1");
    d3.select("#c7").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "0.2");
    d3.select("#h2").transition().duration(300).style("opacity", "0.2");
    d3.select("#h3").transition().duration(300).style("opacity", "0.2");
    d3.select("#h4").transition().duration(300).style("opacity", "0.2");
  }).on("mouseout", function(){
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    clusters.transition().duration(300).style("opacity", "0");
    d3.select("#h1").transition().duration(300).style("opacity", "1");
    d3.select("#h2").transition().duration(300).style("opacity", "1");
    d3.select("#h3").transition().duration(300).style("opacity", "1");
    d3.select("#h4").transition().duration(300).style("opacity", "1");
  });
  d3.select("#event1").on("mouseover", function(){
    chart.transition().duration(300).style("opacity", "0.2");
    all.transition().duration(300).style("opacity", "0.1");
    d3.select("#event2").transition().duration(300).style("opacity", "0.2");
    d3.select("#borat").transition().duration(300).style("opacity", "0");
    d3.select("#cancelborat").transition().duration(300).style("opacity", "0");
    d3.select("#wearenotyourjoke").transition().duration(300).style("opacity", "0");
    d3.select("#sachabaroncohen").transition().duration(300).style("opacity", "0");
    d3.select("#instafreeze").transition().duration(300).style("opacity", "1");
    d3.select("#stophate").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "0.2");
    d3.select("#h2").transition().duration(300).style("opacity", "0.2");
    d3.select("#h3").transition().duration(300).style("opacity", "0.2");
    d3.select("#h4").transition().duration(300).style("opacity", "0.2");
    d3.select("#c5").transition().duration(300).style("opacity", "1");
    d3.select("#c6").transition().duration(300).style("opacity", "1");
    d3.select("#c7").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    clusters.transition().duration(300).style("opacity", "0");
    d3.select("#event2").transition().duration(300).style("opacity", "1");
    d3.select("#h1").transition().duration(300).style("opacity", "1");
    d3.select("#h2").transition().duration(300).style("opacity", "1");
    d3.select("#h3").transition().duration(300).style("opacity", "1");
    d3.select("#h4").transition().duration(300).style("opacity", "1");
  });
  d3.select("#event2").on("mouseover", function(){
    chart.transition().duration(300).style("opacity", "0.2");
    all.transition().duration(300).style("opacity", "0.1");
    d3.select("#event1").transition().duration(300).style("opacity", "0.2");
    d3.select("#borat").transition().duration(300).style("opacity", "1");
    d3.select("#cancelborat").transition().duration(300).style("opacity", "1");
    d3.select("#wearenotyourjoke").transition().duration(300).style("opacity", "1");
    d3.select("#sachabaroncohen").transition().duration(300).style("opacity", "1");
    d3.select("#instafreeze").transition().duration(300).style("opacity", "0");
    d3.select("#stophate").transition().duration(300).style("opacity", "0");
    d3.select("#h6").transition().duration(300).style("opacity", "0.2");
    d3.select("#h7").transition().duration(300).style("opacity", "0.2");
    d3.select("#c1").transition().duration(300).style("opacity", "1");
    d3.select("#c2").transition().duration(300).style("opacity", "1");
    d3.select("#c3").transition().duration(300).style("opacity", "1");
    d3.select("#c4").transition().duration(300).style("opacity", "1");
  }).on("mouseout", function(){
    chart.transition().duration(300).style("opacity", "1");
    all.transition().duration(300).style("opacity", "1");
    clusters.transition().duration(300).style("opacity", "0");
    d3.select("#event1").transition().duration(300).style("opacity", "1");
    d3.select("#h6").transition().duration(300).style("opacity", "1");
    d3.select("#h7").transition().duration(300).style("opacity", "1");
  });
})
