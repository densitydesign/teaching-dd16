// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP3.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);


  // script gephi prova
  // background

  const etichette = d3.selectAll("#interazione_etichette > g > g");
  const hashScomparire = d3.selectAll("#interazione_etichette");

  etichette.style("visibility", "hidden");


  d3.selectAll("#interazione_etichette > g").on("mouseover", function() {
    d3.select(this).select("g").style("visibility", "visible");
  })

  d3.selectAll("#interazione_etichette > g").on("mouseout", function() {
    d3.select(this).select("g").style("visibility", "hidden");
  })

  const hash = d3.selectAll("#hashtag");
  hash.style("opacity", "1");

  const posts = d3.selectAll("#posts_square");
  posts.style("opacity", "1");

  const hashT = d3.selectAll("#hasthag_text");


  //selectall nodes
  const clusters = d3.selectAll("#nodes > g");
  clusters.style("opacity", "0");
  clusters.select("g > circle").on("mouseover", function() {
    hashScomparire.style("opacity", "0");
    hash.style("opacity", "0");
  })
  clusters.select("g > circle").on("mouseout", function() {
    hashScomparire.style("opacity", "1");
  })



  //hover sui nodes
  d3.select("#g_skull").on("mouseover", function() {
    d3.select("#skull").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_skull").on("mouseout", function() {
    d3.select("#skull").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_death").on("mouseover", function() {
    d3.select("#death-2").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_death").on("mouseout", function() {
    d3.select("#death-2").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_history").on("mouseover", function() {
    d3.select("#history").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_history").on("mouseout", function() {
    d3.select("#history").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_mementomori").on("mouseover", function() {
    d3.select("#mementomori").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_mementomori").on("mouseout", function() {
    d3.select("#mementomori").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_halloween").on("mouseover", function() {
    d3.select("#halloween-2").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_halloween").on("mouseout", function() {
    d3.select("#halloween-2").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_cemetery").on("mouseover", function() {
    d3.select("#cemetery").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_cemetery").on("mouseout", function() {
    d3.select("#cemetery").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_paranormal").on("mouseover", function() {
    d3.select("#paranormal").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_paranormal").on("mouseout", function() {
    d3.select("#paranormal").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_haunted").on("mouseover", function() {
    d3.select("#haunted").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_haunted").on("mouseout", function() {
    d3.select("#haunted").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_travel").on("mouseover", function() {
    d3.select("#travel-2").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_travel").on("mouseout", function() {
    d3.select("#travel-2").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_spooky").on("mouseover", function() {
    d3.select("#spooky").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_spooky").on("mouseout", function() {
    d3.select("#spooky").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_abandonedplaces").on("mouseover", function() {
    d3.select("#abandonedplaces").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_abandonedplaces").on("mouseout", function() {
    d3.select("#abandonedplaces").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_urbex").on("mouseover", function() {
    d3.select("#urbex").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_urbex").on("mouseout", function() {
    d3.select("#urbex").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_abandoned").on("mouseover", function() {
    d3.select("#abandoned").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_abandoned").on("mouseout", function() {
    d3.select("#abandoned").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_pripyat").on("mouseover", function() {
    d3.select("#pripyat").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_pripyat").on("mouseout", function() {
    d3.select("#pripyat").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_chernobyl").on("mouseover", function() {
    d3.select("#chernobyl").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_chernobyl").on("mouseout", function() {
    d3.select("#chernobyl").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });

  d3.select("#g_radioactive").on("mouseover", function() {
    d3.select("#radioactive").style("opacity", "1").style("transition", "0.1s ease");
    hash.style("opacity", "0.2").style("transition", "0.1s ease");
    posts.style("opacity", "0.2").style("transition", "0.1s ease");
    hashT.style("opacity", "0.2").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "0").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "0").style("transition", "0.1s ease");
  });
  d3.select("#g_radioactive").on("mouseout", function() {
    d3.select("#radioactive").style("opacity", "0").style("transition", "0.1s ease");
    hash.style("opacity", "1").style("transition", "0.1s ease");
    posts.style("opacity", "1").style("transition", "0.1s ease");
    hashT.style("opacity", "1").style("transition", "0.1s ease");
    hashScomparire.style("opacity", "1").style("transition", "0.1s ease");
    d3.select("#targhette_grandi").style("opacity", "1").style("transition", "0.1s ease");
  });


  //interaction on click sulle aree

  //background
  const background = d3.selectAll("#sfondo");
  background.on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
  })

  const onHover = d3.selectAll("#on-hover > g");
  onHover.style("opacity", "0");

  const on = d3.selectAll("#on > g");
  on.style("opacity", "0");


  onHover.on("mouseover", function() {
    d3.select(this).style("opacity", "1");
  })
  onHover.on("mouseout", function() {
    d3.select(this).style("opacity", "0");
  })

  const foto = d3.selectAll("#death, #nuclear, #horror, #halloween, #cambodia, #travel, #turismonegro, #korean");
  foto.style("opacity", "0");

  d3.select("#area_death_on-hover").on("click", function() {
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_death_on").style("opacity", "1");
    d3.select("#area_death_on-hover").style("visibility", "hidden");
    d3.select("#death").style("opacity", "1");
  })
  d3.select("#area_death_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_death_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_spanish_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "1");
    d3.select("#area_spanish_on-hover").style("visibility", "hidden");
    d3.select("#turismonegro").style("opacity", "1");
  })
  d3.select("#area_spanish_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_spanish_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_horror_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "1");
    d3.select("#area_horror_on-hover").style("visibility", "hidden");
    d3.select("#horror").style("opacity", "1");
  })
  d3.select("#area_horror_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_horror_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_halloween_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "1");
    d3.select("#area_halloween_on-hover").style("visibility", "hidden");
    d3.select("#halloween").style("opacity", "1");
  })
  d3.select("#area_halloween_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_halloween_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_travel_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "1");
    d3.select("#area_travel_on-hover").style("visibility", "hidden");
    d3.select("#travel").style("opacity", "1");
  })
  d3.select("#area_travel_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_travel_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_nuclear_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "1");
    d3.select("#area_nuclear_on-hover").style("visibility", "hidden");
    d3.select("#nuclear").style("opacity", "1");
  })
  d3.select("#area_nuclear_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_nuclear_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });


  d3.select("#area_korean_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "1");
    d3.select("#area_korean_on-hover").style("visibility", "hidden");
    d3.select("#korean").style("opacity", "1");
  })
  d3.select("#area_korean_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_korean_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

  d3.select("#area_cambodian_on-hover").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    foto.style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "1");
    d3.select("#area_cambodian_on-hover").style("visibility", "hidden");
    d3.select("#cambodia").style("opacity", "1");
  })
  d3.select("#area_cambodian_on").on("click", function() {
    d3.select("#area_death_on").style("opacity", "0");
    d3.select("#area_spanish_on").style("opacity", "0");
    d3.select("#area_horror_on").style("opacity", "0");
    d3.select("#area_halloween_on").style("opacity", "0");
    d3.select("#area_travel_on").style("opacity", "0");
    d3.select("#area_nuclear_on").style("opacity", "0");
    d3.select("#area_korean_on").style("opacity", "0");
    d3.select("#area_cambodian_on").style("opacity", "0");
    d3.select("#area_cambodian_on-hover").style("visibility", "visible");
    foto.style("opacity", "0");
  });

});
