Promise.all([d3.html("./question.html"), d3.html("./viz3.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);


    var vizz=null;
  const anni = d3.selectAll("#anni").selectAll("g");
  const img = d3.selectAll("#anni").selectAll("g").selectAll("image");
  const ombre = d3.selectAll("#anni").selectAll("g").selectAll("#ombra");



    console.log("Wandaaaaaaa tvb");

    img.style("opacity",1);
      ombre.style("opacity",1);

  anni.each(function(){
      d3.select(this).on("click", function(){


          img.style("opacity",0);
           ombre.style("opacity",0);

        d3.select(this).selectAll("image").transition().duration(80).ease(d3.easeLinear).style("opacity", 1);
        // d3.select(this).selectAll("rect").style("opacity", 1);
        d3.select(this).selectAll("#ombra").style("opacity",1);


          });
      });

    d3.select('#sfondo').on('click', function(){
       img.style("opacity",1);
        ombre.style("opacity",1);
    });


     });
