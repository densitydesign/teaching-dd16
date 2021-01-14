// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP1.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");

  let container = document.querySelector("#visualisation");

  container.appendChild(svgNode);

  const immagine = d3.selectAll("image");

  immagine.style("opacity", "1");


  //hover immagini
  immagine.on("mouseover", function() {
    console.log(d3.select(this));
    d3.select(this).raise();
    immagine.style("opacity", "1");
    d3.select(this).style("opacity", "1");
    d3.select(this).style("transition", "0.01s ease");
    d3.select(this).attr("width", "130");
    d3.select(this).attr("height", "130");
  })

  immagine.on("mouseout", function() {
    immagine.style("opacity", "1");
    d3.select(this).style("transition", "0.01s ease");
    d3.select(this).attr("width", "21");
    d3.select(this).attr("height", "21");
  })



  //hover categorie
  const etichetteon = d3.selectAll("#SEZIONI-ON > g");
  etichetteon.style("opacity", "0");

  d3.selectAll("#SEZIONI-ON-hover").style("visibility", "hidden");

  etichetteon.on("mouseover", function() {
    d3.select(this).style("opacity", "1");
  })

  etichetteon.on("mouseout", function() {
    d3.select(this).style("opacity", "0");
  })

  const etichette = d3.selectAll("#Etichette > g");
  const sezioni = d3.selectAll("#SEZIONI > g");
  const imgTutte = d3.selectAll("#Images > g");

  d3.selectAll("#BACKGROUND").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  })

  const a = 0;

  d3.select("#SEZ-NATURE-on").on("click", function() {

    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Nature").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-nature").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "visible");

  })
  d3.selectAll("#SEZ-NATURE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-ACTIVITIES-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Activities").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-sport").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-ACTIVITIES-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-ADVENTURE-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Adventure").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-adventure").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-ADVENTURE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-AID-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Aid").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-aid").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-AID-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-CULTURE-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Culture").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-cultural").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-CULTURE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-DOMESTIC-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#DOMESTIC").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-DOMESTIC").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-DOMESTIC-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-HERITAGE-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#HERITAGE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-HERITAGE").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-HERITAGE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-LGBT-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#LGBT").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-LGBT").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-LGBT-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-BUSINESS-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#BUSINESS").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-BUSINESS").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-BUSINESS-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-ACCESSIBLE-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#ACCESSIBLE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-ACCESSIBLE").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-ACCESSIBLE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-RELIGION-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Religion").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-religious").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-RELIGION-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });


  d3.select("#SEZ-SEX-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#SEX").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-SEX").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-SEX-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-SPACE-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#SPACE").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-SPACE").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-SPACE-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-MEDIC-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Medical").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-medical").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-MEDIC-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-FOOD-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Food").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-food").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-FOOD-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

  d3.select("#SEZ-DARK-on").on("click", function() {
    imgTutte.style("opacity", "0.3");
    sezioni.style("opacity", "0.3");
    d3.select(this).style("opacity", "1");
    d3.select("#Dark").style("opacity", "1");
    etichette.style("opacity", "0.3");
    d3.select("#Box-dark").style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "visible");
  })

  d3.selectAll("#SEZ-DARK-on-hover").on("click", function() {
    imgTutte.style("opacity", "1");
    etichette.style("opacity", "1");
    sezioni.style("opacity", "1");
    d3.selectAll("#SEZ-NATURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACTIVITIES-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ADVENTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-AID-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-CULTURE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DOMESTIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-HERITAGE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-LGBT-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-BUSINESS-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-ACCESSIBLE-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-RELIGION-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SEX-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-MEDIC-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-FOOD-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-DARK-on-hover").style("visibility", "hidden");
    d3.selectAll("#SEZ-SPACE-on-hover").style("visibility", "hidden");
    d3.select("#SEZ-NATURE-on").style("opacity", "0");
  });

});
