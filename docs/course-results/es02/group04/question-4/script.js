// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP4.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualisation");
  // console.log(container);
  container.appendChild(svgNode);
  //
  //   const cerchiBase = d3.selectAll("#Cerchi-paesi > g");
  //   cerchiBase.style("display", "none");
  //
  const città = d3.selectAll("#Labels-Cities > g");
  città.style("visibility", "hidden");
  //
  //   const cerchiPaesi = d3.selectAll("#Circles > g");
  // cerchiPaesi.style("display", "none");
  //
  const paesi = d3.selectAll("#Colors-Cities > g");


  paesi.on("mouseover", function() {
    paesi.style("opacity", "0.2");
    paesi.style("transition", "0.1s ease");
    d3.select(this).style("opacity", "1");
  });
  paesi.on("mouseout", function() {
    paesi.style("transition", "0.1s ease");
    paesi.style("opacity", "1");

  });


  //click su label
  const labelOn = d3.selectAll("#Body-on > g");
  labelOn.style("opacity", "0");

  const labelOnHover = d3.selectAll("#Body-on-hover > g");
  labelOnHover.style("visibility", "hidden");

  labelOn.on("mouseover", function() {
    d3.select(this).style("opacity", "1");
  })
  labelOn.on("mouseout", function() {
    d3.select(this).style("opacity", "0");
  })


  const cerchiBase = d3.select("#Cerchi-paesi");
  // cerchiBase.style("display", "none");

  const cerchi = d3.selectAll("#Circles > g");
  cerchi.style("display", "none");


  d3.select("#Background").on("click", function() {
    d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
    cerchiBase.style("display", "initial");
    paesi.style("display", "initial");
    d3.select("#Skin-Circles").style("display", "none");
    d3.select("#Skin-Labels").style("visibility", "hidden");
    d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Hair-Circles").style("display", "none");
    d3.select("#Hair-Labels").style("visibility", "hidden");
    d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Nose-Circles").style("display", "none");
    d3.select("#Nose-Labels").style("visibility", "hidden");
    d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Fertility-Circles").style("display", "none");
    d3.select("#Fertility-Labels").style("visibility", "hidden");
    d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Breast-Circles").style("display", "none");
    d3.select("#Breast-Labels").style("visibility", "hidden");
    d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Butt-Circles").style("display", "none");
    d3.select("#Butt-Labels").style("visibility", "hidden");
    d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Legs-Circles").style("display", "none");
    d3.select("#Legs-Labels").style("visibility", "hidden");
    d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Weight-Loss-Circles").style("display", "none");
    d3.select("#Weight-Loss-Labels").style("visibility", "hidden");
    d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Face-Circles").style("display", "none");
    d3.select("#Face-Labels").style("visibility", "hidden");
    d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#General-Surgery-Circles").style("display", "none");
    d3.select("#General-Surgery-Labels").style("visibility", "hidden");
    d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Teeth-Circles").style("display", "none");
    d3.select("#Teeth-Labels").style("visibility", "hidden");
  })

  d3.select("#Skin-Body-PIENO").on("click", function() {
    d3.select("#Skin-Body-PIENO_copy").style("visibility", "visible");
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Skin-Circles").style("display", "initial");
    d3.select("#Skin-Labels").style("visibility", "visible");
  })
  d3.select("#Skin-Body-PIENO_copy").on("click", function() {
    d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Skin-Circles").style("display", "none");
    d3.select("#Skin-Labels").style("visibility", "hidden");
  })

  d3.select("#Hair-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Hair-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Hair-Circles").style("display", "initial");
    d3.select("#Hair-Labels").style("visibility", "visible");
  })
  d3.select("#Hair-Body-PIENO_copy").on("click", function() {
    d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Hair-Circles").style("display", "none");
    d3.select("#Hair-Labels").style("visibility", "hidden");
  })

  d3.select("#Nose-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Nose-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Nose-Circles").style("display", "initial");
    d3.select("#Nose-Labels").style("visibility", "visible");
  })
  d3.select("#Nose-Body-PIENO_copy").on("click", function() {
    d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Nose-Circles").style("display", "none");
    d3.select("#Nose-Labels").style("visibility", "hidden");
  })

  d3.select("#Fertility-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Fertility-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Fertility-Circles").style("display", "initial");
    d3.select("#Fertility-Labels").style("visibility", "visible");
  })
  d3.select("#Fertility-Body-PIENO_copy").on("click", function() {
    d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Fertility-Circles").style("display", "none");
    d3.select("#Fertility-Labels").style("visibility", "hidden");
  })

  d3.select("#Breast-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Breast-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Breast-Circles").style("display", "initial");
    d3.select("#Breast-Labels").style("visibility", "visible");
  })
  d3.select("#Breast-Body-PIENO_copy").on("click", function() {
    d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Breast-Circles").style("display", "none");
    d3.select("#Breast-Labels").style("visibility", "hidden");
  })

  d3.select("#Butt-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Butt-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Butt-Circles").style("display", "initial");
    d3.select("#Butt-Labels").style("visibility", "visible");
  })
  d3.select("#Butt-Body-PIENO_copy").on("click", function() {
    d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Butt-Circles").style("display", "none");
    d3.select("#Butt-Labels").style("visibility", "hidden");
  })

  d3.select("#Legs-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Legs-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Legs-Circles").style("display", "initial");
    d3.select("#Legs-Labels").style("visibility", "visible");
  })
  d3.select("#Legs-Body-PIENO_copy").on("click", function() {
    d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Legs-Circles").style("display", "none");
    d3.select("#Legs-Labels").style("visibility", "hidden");
  })

  d3.select("#WeightLoss-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Weight-Loss-Circles").style("display", "initial");
    d3.select("#Weight-Loss-Labels").style("visibility", "visible");
  })
  d3.select("#WeightLoss-Body-PIENO_copy").on("click", function() {
    d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Weight-Loss-Circles").style("display", "none");
    d3.select("#Weight-Loss-Labels").style("visibility", "hidden");
  })

  d3.select("#Face-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Face-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Face-Circles").style("display", "initial");
    d3.select("#Face-Labels").style("visibility", "visible");
  })
  d3.select("#Face-Body-PIENO_copy").on("click", function() {
    d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Face-Circles").style("display", "none");
    d3.select("#Face-Labels").style("visibility", "hidden");
  })

  d3.select("#General-Surgery-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#General-Surgery-Circles").style("display", "initial");
    d3.select("#General-Surgery-Labels").style("visibility", "visible");
  })
  d3.select("#General-Surgery-Body-PIENO_copy").on("click", function() {
    d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#General-Surgery-Circles").style("display", "none");
    d3.select("#General-Surgery-Labels").style("visibility", "hidden");
  })

  d3.select("#Teeth-Body-PIENO").on("click", function() {
    cerchiBase.style("display", "none");
    paesi.style("display", "none");
    d3.select("#Teeth-Body-PIENO_copy").style("visibility", "visible");
    d3.select("#Teeth-Circles").style("display", "initial");
    d3.select("#Teeth-Labels").style("visibility", "visible");
  })
  d3.select("#Teeth-Body-PIENO_copy").on("click", function() {
    d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
    d3.select("#Teeth-Circles").style("display", "none");
    d3.select("#Teeth-Labels").style("visibility", "hidden");
  })








  //
  // d3.select("#Background").on("click", function() {
  //   cerchiPaesi.style("visibility", "visible");
  //   paesi.style("visibility", "visible");
  //   d3.select("#Hair-Labels").style("visibility", "hidden");
  //     d3.select("#Hair-Circles").style("visibility", "hidden");
  //   d3.select("#Skin-Labels").style("visibility", "hidden");
  //   d3.select("#Skin-Circles").style("visibility", "hidden");
  //   d3.select("#Nose-Labels").style("visibility", "hidden");
  //   d3.select("#Nose-Circles").style("visibility", "hidden");
  // })
  //
  // d3.select("#Skin-Body-PIENO").on("click", function() {
  //   cerchiPaesi.style("visibility", "hidden");
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Skin-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Circles").style("visibility", "visible");
  // })
  // d3.select("#Hair-Body-PIENO").on("click", function() {
  //   cerchiPaesi.style("visibility", "hidden");
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Hair-Labels").style("visibility", "visible");
  //   d3.select("#Hair-Circles").style("visibility", "visible");
  // })
  // d3.select("#Nose-Body-PIENO").on("click", function() {
  //   cerchiPaesi.style("visibility", "hidden");
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Nose-Labels").style("visibility", "visible");
  //   d3.select("#Nose-Circles").style("visibility", "visible");
  // })


  //
  // d3.select("#Background").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "visible");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "visible");
  //   città.style("visibility", "hidden")
  //   d3.select("#Continents-Body").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  // })
  //
  // d3.select("#Skin-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Skin-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "visible");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  // })
  //
  // d3.select("#Legs-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Legs-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Fertility-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Fertility-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Butt-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Butt-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#WeightLoss-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Weight-Loss-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#General-Surgery-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#General-Surgery-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Breast-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Breast-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Teeth-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Teeth-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Face-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Face-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Nose-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Nose-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "visible");
  // })
  //
  // d3.select("#Hair-Body-PIENO").on("click", function() {
  //   d3.select("#Cerchi-paesi").style("visibility", "hidden");
  //   città.style("visibility", "hidden")
  //   paesi.style("visibility", "hidden");
  //   d3.select("#Hair-Labels").style("visibility", "visible");
  //   d3.select("#Skin-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Legs-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Fertility-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Butt-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#WeightLoss-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#General-Surgery-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Breast-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Teeth-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Face-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Nose-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "hidden");
  //   d3.select("#Hair-Body-PIENO_copy").style("visibility", "visible");
  // })


});
