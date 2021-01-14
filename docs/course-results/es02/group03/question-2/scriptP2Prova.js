Promise.all([d3.html("./question.html"), d3.html("./p2.svg")]).then(function([html, svgDocument]){
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);


  const imgGroup= d3.selectAll("#imageGroups > g");
  const cluster = d3.selectAll("#clusters > g");
  const focus = d3.selectAll("#moreInfo > g");

  $("[id*='focus']").not("[id*="+this.id+"]").css({"opacity":"0"});
   $('#gifContainerP2').css({"opacity":"0"});

  cluster.on("click", function(){
  console.log('ciao');
  d3.select("#info-titoli").style("opacity","0");
  cluster.style("opacity","0.05");
  focus.style("opacity","1");
  imgGroup.style("opacity","1");
  $("[id*='img']").not("[id*="+this.id+"]").css({"opacity":"0.05"});
  $("[id*='focus']").not("[id*="+this.id+"]").css({"opacity":"0"});
  d3.select(this).style("opacity","1");

 $('#gifContainerP2').css({"opacity":"100"});


  var img = document.createElement("IMG");
     img.src = "./gifs/"+this.id+".gif";
     $('#gifContainerP2').html(img);

/*     d3.selec("#gifContainerP2").append("div")
       .html("<img src='./gifs/reptAmUs.gif'></img>")
*/

  });

d3.select("#background").style("opacity","0");

d3.select("#background").on("click", function(){
   $('#gifContainerP2').css({"opacity":"0"});
    imgGroup.style("opacity", "1");
    cluster.style("opacity","1");
    d3.select("#info-titoli").style("opacity","100");
    $("[id*='focus']").css({"opacity":"0"});

  })

});
