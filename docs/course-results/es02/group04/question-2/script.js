// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP2.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);

  const arbol = d3.selectAll("#CASA_DEL_ARBOL");
  arbol.style("display", "initial");

  const lempuyang = d3.selectAll("#LEMPUYANG");
  lempuyang.style("display", "none");

  const pig = d3.selectAll("#PIG_ISLAND");
  pig.style("display", "none");

  d3.selectAll("#bottoni_on > g").style("display", "none");


  //bottoni


  const bottoneArbolHover = d3.select("#casa_albor_on-hover");
  const bottonePigHover = d3.select("#pig_island_on-hover");
  const bottoneLempHover = d3.select("#lempuyang_on-hover");
  const bottoniOnHover = d3.selectAll("#bottoni_on-hover > g");

  bottoniOnHover.style("opacity", "0");
  d3.select("#casa_albor_on").style("display", "initial");

  bottoniOnHover.on("mouseover", function() {
    d3.select(this).style("opacity", "1");
  })
  bottoniOnHover.on("mouseout", function() {
    d3.select(this).style("opacity", "0");
  })


  const bottoneArbol = d3.select("#casa_albor_off");
  const bottonePig = d3.select("#pig_island_off");
  const bottoneLemp = d3.select("#lempuyang_off");


  bottoneArbolHover.on("click", function() {
    arbol.style("display", "initial");
    lempuyang.style("display", "none");
    pig.style("display", "none");
    d3.select("#casa_albor_on").style("display", "initial");
    d3.select("#pig_island_on").style("display", "none");
    d3.select("#lempuyang_on").style("display", "none");
  })

  bottonePigHover.on("click", function() {
    arbol.style("display", "none");
    lempuyang.style("display", "none");
    pig.style("display", "initial");
    d3.select("#pig_island_on").style("display", "initial");
    d3.select("#casa_albor_on").style("display", "none");
    d3.select("#lempuyang_on").style("display", "none");

  })

  bottoneLempHover.on("click", function() {
    arbol.style("display", "none");
    lempuyang.style("display", "initial");
    pig.style("display", "none");
    d3.select("#pig_island_on").style("display", "none");
    d3.select("#casa_albor_on").style("display", "none");
    d3.select("#lempuyang_on").style("display", "initial");
  })


  //Arbol
  const allArbol = d3.select("#ALL-on-HOVER_ARBOL");
  const overviewArbol = d3.select("#OVERVIEW-on-HOVER_ARBOL");
  allArbol.style("visibility", "hidden");

  const instaArbol = d3.select("#Arbol_Instagram_9");
  const sortArbol = d3.select("#Arbol_Imagesorter");
  sortArbol.style("opacity", "0");


  overviewArbol.on("click", function() {
    overviewArbol.style("visibility", "hidden");
    allArbol.style("visibility", "visible");
    sortArbol.style("opacity", "1");
    instaArbol.style("opacity", "0");
    d3.select("#Arbol_Insight").style("opacity", "0");
  })
  //
  allArbol.on("click", function() {
    overviewArbol.style("visibility", "visible");
    allArbol.style("visibility", "hidden");
    sortArbol.style("opacity", "0");
    instaArbol.style("opacity", "1");
    d3.select("#Arbol_Insight").style("opacity", "1");
  })

  //Arbol Tripadvisor
  const immaginiArbol = d3.selectAll("#Arbol_pictures > g > image");

  immaginiArbol.on("mouseover", function() {
    d3.select(this).attr("width", "2000");
    d3.select(this).attr("height", "2000");
    d3.select(this).raise();
  })
  immaginiArbol.on("mouseout", function() {
    d3.select(this).attr("width", "200");
    d3.select(this).attr("height", "200");
    d3.select(this).lower();
  })




  //Pig

  const allPig = d3.select("#ALL-on-HOVER_PIG");
  const overviewPig = d3.select("#OVERVIEW-on-HOVER_PIG");
  allPig.style("visibility", "hidden");


  const instaPig = d3.select("#Pig_Instagram_9");
  const sortPig = d3.select("#Pig_Imagesorter");
  sortPig.style("opacity", "0");

  overviewPig.on("click", function() {
    overviewPig.style("visibility", "hidden");
    allPig.style("visibility", "visible");
    sortPig.style("opacity", "1");
    instaPig.style("opacity", "0");
    d3.select("#Pig_Insight").style("opacity", "0");
  })

  allPig.on("click", function() {
    overviewPig.style("visibility", "visible");
    allPig.style("visibility", "hidden");
    sortPig.style("opacity", "0");
    instaPig.style("opacity", "1");
    d3.select("#Pig_Insight").style("opacity", "1");
  })

  //Pig Tripadvisor
  const immaginiPig = d3.selectAll("#Pig_pictures > g > image");

  immaginiPig.on("mouseover", function() {
    d3.select(this).attr("width", "3400");
    d3.select(this).attr("height", "3400");
    d3.select(this).raise();
  })
  immaginiPig.on("mouseout", function() {
    d3.select(this).attr("width", "300");
    d3.select(this).attr("height", "300");
    d3.select(this).lower();
  })


  //Lempuyang

  const allLemp = d3.select("#ALL-on-HOVER_LEMP");
  const overviewLemp = d3.select("#OVERVIEW-on-HOVER_LEMP");
  allLemp.style("visibility", "hidden");


  const instaLemp = d3.select("#Lempuyang_Instagram_9");
  const sortLemp = d3.select("#Lempuyang_Imagesorter");
  sortLemp.style("opacity", "0");

  overviewLemp.on("click", function() {
    overviewLemp.style("visibility", "hidden");
    allLemp.style("visibility", "visible");
    sortLemp.style("opacity", "1");
    instaLemp.style("opacity", "0");
    d3.select("#Lempuyang_Insight").style("opacity", "0");
  })

  allLemp.on("click", function() {
    overviewLemp.style("visibility", "visible");
    allLemp.style("visibility", "hidden");
    sortLemp.style("opacity", "0");
    instaLemp.style("opacity", "1");
    d3.select("#Lempuyang_Insight").style("opacity", "1");
  })

  //Lempuyang Tripadvisor
  const immaginiLemp = d3.selectAll("#lempuyang_temple_pictures > g > image");

  immaginiLemp.on("mouseover", function() {
    d3.select(this).attr("width", "2400");
    d3.select(this).attr("height", "2400");
    d3.select(this).raise();
  })
  immaginiLemp.on("mouseout", function() {
    d3.select(this).attr("width", "300");
    d3.select(this).attr("height", "300");
    d3.select(this).lower();
  })

});
