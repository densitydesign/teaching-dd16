Promise.all([d3.html("./question.html"), d3.html("./scroll1.svg")]).then(function([html, svgDocument]) {
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d) {
    d3.select("#question-container").node().appendChild(this);
  });

  let svgNode = svgDocument.querySelector("svg");
  let container = document.querySelector("#visContainer");
  container.appendChild(svgNode);

  d3.html("./nav16.svg").then(function(svgDocument) {
    console.log(svgDocument);
    let svgNode1 = svgDocument.querySelector("svg");
    let container1 = document.querySelector("#navContainer");
    container1.appendChild(svgNode1);

    d3.html("./stickybar.svg").then(function(svgDocument) {
      let svgNode2 = svgDocument.querySelector("svg");
      let container2 = document.querySelector("#bar");
      container2.appendChild(svgNode2);
    })




    const PepeTheFrog = d3.selectAll("#PepeTheFrog>g")
    const Parray = [
      ["PAltered", "Altered"],
      ["PCharacters", "with characters"],
      ["PAngryPepe", "Angry Pepe"],
      ["PApuApustaja", "Apu Apustaja"],
      ["PClownPepe", "Clown Pepe"],
      ["PFeelsGoodMan", "Feels good man"],
      ["PGraphic", "Graphic / text"],
      ["PGroyper", "Groyper"],
      ["PPepePunch", "Pepe punch"],
      ["PPersonification", "Personificated"],
      ["PPhotomontage", "Photomontage"],
      ["PSadFrog", "Sad frog"],
      ["PSmugFrog", "Smug Frog"],
      ["PTrumpHat", "Trump Hat"],
      ["PHazmat", "Hazmat suit"],
      ["PMask", "Masked"],
    ]

    const Wojak = d3.selectAll("#Wojak>g")
    const Warray = [
      ["WBrainlet", "Brainlet"],
      ["Wgrug", "Grug"],
      ["WMask", "mask"],
      ["WMilitary", "Military"],
      ["Wnorf", "Norf F. C."],
      ["WNPC", "NPC"],
      ["WNujak", "Nujak"],
      ["WOomer", "Oomer"],
      ["WOthers", "Others"],
      ["Wpink", "Pink"],
      ["WPoljak", "Poljak"],
      ["WSoyjak", "Soyjak"],
      ["WTrumpHat", "Trump hat"],
      ["Wwithered", "Withered"],
      ["WWojak", "Classic"],
      ["Wasian", "Asian"],
    ]

    const CoronaChan = d3.selectAll("#CoronaChan>g")
    const Carray = [
      ["Cchan", "with chan"],
      ["CCharacters", "with characters"],
      ["CBeer", "with corona beer"],
      ["CDarkEvil", "dark / evil"],
      ["Cerotic", "erotic"],
      ["CFlat", "flat"],
      ["Cgraphic", "graphic / text"],
      ["Chazmat", "hazmat suit"],
      ["CCounter", "death counter"],
      ["Cmono", "monochromatic"],
      ["CPhotomontage", "photomontage"],
      ["CShaded", "shaded"]
    ]

    const CharaArray = [
      "Bakemonogatari",
      "CoronaChan",
      "CureChan",
      "Doom",
      "Emoji",
      "Fallout",
      "FateGrandOrder",
      "FawkesGuy",
      "GirlsFrontline",
      "Gondola",
      "HappyMerchant",
      "HazmatSuit",
      "Joker",
      "Kon",
      "Lain",
      "JojoRabbit",
      "LooneyToons",
      "LordOfTheRings",
      "LoveLive",
      "MagaMomiji",
      "NeonGenesisEvangelion",
      "PepeTheFrog",
      "Pokemon",
      "Simpsons",
      "Spongebob",
      "Stalker",
      "StarWars",
      "WinnieThePooh",
      "Wojak",
    ]
    const MainArray = [
      "CoronaChan",
      "PepeTheFrog",
      "Wojak",
    ]
    const OtherArray = [
      "Bakemonogatari",
      "CureChan",
      "Doom",
      "Emoji",
      "Fallout",
      "FateGrandOrder",
      "FawkesGuy",
      "GirlsFrontline",
      "Gondola",
      "HappyMerchant",
      "HazmatSuit",
      "Joker",
      "Kon",
      "Lain",
      "JojoRabbit",
      "LooneyToons",
      "LordOfTheRings",
      "LoveLive",
      "MagaMomiji",
      "NeonGenesisEvangelion",
      "Pokemon",
      "Simpsons",
      "Spongebob",
      "Stalker",
      "StarWars",
      "WinnieThePooh",
    ]
    const Sarray = [
      "Finding1",
      "Finding2",
      "Finding3",
      "Finding4"
    ]


    var firstClick = [
      true,
      true,
      true,
      true
    ]



    function removefinding() {
      Sarray.forEach((S) => {
        d3.select("#" + S + "gif").remove();
        d3.selectAll("#" + S).attr("class", "invisibile")
        d3.selectAll("#S" + S).attr("class", "invisibile")
      })
    }
removefinding()
    d3.selectAll("#circFinding1").on('click', function() {

      if (firstClick[0]) {
        removefinding()
        firstClick[1] = true;
        firstClick[2] = true;
        firstClick[3] = true;
        d3.selectAll("#Finding1").attr("class", "visibile")
        d3.selectAll("#SFinding1").attr("class", "visibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/Finding1.gif'></img>")
          .attr("id", "Finding1gif")

        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "invisibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "0.3")
        })
        firstClick[0] = false;
      } else {
        removefinding()
        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "visibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "1")
        })
        firstClick[0] = true;

      }

    })

    d3.selectAll("#circFinding2").on('click', function() {

      if (firstClick[1]) {
        removefinding()
        firstClick[0] = true;
        firstClick[2] = true;
        firstClick[3] = true;
        d3.selectAll("#Finding2").attr("class", "visibile")
        d3.selectAll("#SFinding2").attr("class", "visibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/Finding2.gif'></img>")
          .attr("id", "Finding2gif")

        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "invisibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "0.3")
        })
        firstClick[1] = false;
      } else {
        removefinding()
        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "visibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "1")
        })

        firstClick[1] = true;
      }

    })

    d3.selectAll("#circFinding3").on('click', function() {

      if (firstClick[2]) {
        removefinding()
        firstClick[0] = true;
        firstClick[1] = true;
        firstClick[3] = true;
        d3.selectAll("#Finding3").attr("class", "visibile")
        d3.selectAll("#SFinding3").attr("class", "visibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/Finding3.gif'></img>")
          .attr("id", "Finding3gif")

        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "invisibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "0.3")
        })
        firstClick[2] = false;
      } else {
        removefinding()
        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "visibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "1")
        })

        firstClick[2] = true;
      }

    })

    d3.selectAll("#circFinding4").on('click', function() {

      if (firstClick[3]) {
        removefinding()
        firstClick[0] = true;
        firstClick[1] = true;
        firstClick[2] = true;
        d3.selectAll("#Finding4").attr("class", "visibile")
        d3.selectAll("#SFinding4").attr("class", "visibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/Finding4.gif'></img>")
          .attr("id", "Finding4gif")

        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "invisibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "0.3")
        })
        firstClick[3] = false;
      } else {
        removefinding()
        CharaArray.forEach((F) => {
          d3.selectAll("#T" + F).attr("class", "visibile")
          d3.selectAll("#" + F).transition()
            .attr("opacity", "1")
        })

        firstClick[3] = true;
      }

    })






    MainArray.forEach((V) => {
      d3.selectAll("#Focus" + V).attr("class", "Tinvisibile")
      d3.selectAll("#T" + V).on('mouseenter', function() {
        d3.selectAll("#Focus" + V).attr("class", "Tvisibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/" + V + ".gif'></img>")
          .attr("id", V + "gif")
      })
      d3.selectAll("#T" + V).on('mouseleave', function() {
        d3.selectAll("#Focus" + V).attr("class", "Tinvisibile")
        d3.select("#" + V + "gif").remove();
      })
    })

    Carray.forEach((C) => {

      var Ctooltip = d3.selectAll("#nicetooltip")
      Ctooltip.style("opacity", "0")

      d3.selectAll("#" + C[0]).on('mouseenter', function() {
        d3.selectAll("#Focuscoronachan").attr("class", "Tvisibile")
        Ctooltip.style("opacity", "1")
          .append("div")
          .attr("id", C[0] + "tip")
          .html("<p style='font-size:0.8em; margin-top:2pt;'>" + C[1] + "</p>");

        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/" + C[0] + ".gif'></img>")
          .attr("id", C[0] + "gif")


        var isActive = this;
        CoronaChan.filter(function(d, i) {
          return (this !== isActive);
        }).transition().style('opacity', '0.3');
        d3.select(this).attr('opacity', '1.0');


      })

      d3.selectAll("#" + C[0]).on('mouseleave', function() {
        d3.selectAll("#Focuscoronachan").attr("class", "Tinvisibile")
        d3.select("#" + C[0] + "gif").remove();
        CoronaChan.transition()
          .style("opacity", "1")
        //Ctooltip.style("visibility", "hidden")
        Ctooltip.style("opacity", "0")
        d3.select("#" + C[0] + "tip").remove();

      })
    })

    Parray.forEach((P) => {

      var Ptooltip = d3.selectAll("#nicetooltip")
      Ptooltip.style("opacity", "0")


      d3.selectAll("#" + P[0]).on('mouseenter', function() {
        d3.selectAll("#Focuspepethefrog").attr("class", "Tvisibile")
        Ptooltip.style("opacity", "1")
          .append("div")
          .attr("id", P[0] + "tip")
          .html("<p style='font-size:0.8em; margin-top:2pt;'>" + P[1] + "</p>");

        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/" + P[0] + ".gif'></img>")
          .attr("id", P[0] + "gif")



        var isActive = this;
        PepeTheFrog.filter(function(d, i) {
          return (this !== isActive);
        }).transition().style('opacity', '0.3');
        d3.select(this).attr('opacity', '1.0');
        console.log(P[1])
      })

      d3.selectAll("#" + P[0]).on('mouseleave', function() {
        d3.selectAll("#Focuspepethefrog").attr("class", "Tinvisibile")
        d3.select("#" + P[0] + "gif").remove();
        d3.select("#" + P[0] + "tip").remove();
        Ptooltip.style("opacity", "0")
        PepeTheFrog.transition()
          .style("opacity", "1")

      })

    })

    Warray.forEach((W) => {
      var Wtooltip = d3.selectAll("#nicetooltip")
      Wtooltip.style("opacity", "0")

      d3.selectAll("#" + W[0]).on('mouseenter', function() {
        d3.selectAll("#Focuswojak").attr("class", "Tvisibile")
        Wtooltip.style("opacity", "1")
          .append("div")
          .attr("id", W[0] + "tip")
          .html("<p style='font-size:0.8em; margin-top:2pt;'>" + W[1] + "</p>");

        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/" + W[0] + ".gif'></img>")
          .attr("id", W[0] + "gif")
        var isActive = this;
        Wojak.filter(function(d, i) {
          return (this !== isActive);
        }).transition().style('opacity', '0.3');
        d3.select(this).attr('opacity', '1.0');
      })

      d3.selectAll("#" + W[0]).on('mouseleave', function() {
        d3.selectAll("#Focuswojak").attr("class", "Tinvisibile")
        d3.select("#" + W[0] + "gif").remove();
        d3.select("#" + W[0] + "tip").remove();
        Wtooltip.style("opacity", "0")
        Wojak.transition()
          .style("opacity", "1")
      })

    })

    OtherArray.forEach((D) => {

      d3.selectAll("#Focus" + D).attr("class", "Tinvisibile")
      d3.selectAll("#" + D + ",#T" + D).on('mouseenter', function() {
        d3.selectAll("#Focus" + D).attr("class", "Tvisibile")
        d3.selectAll("#gifcontainer").append("div")
          .html("<img src='./links/" + D + ".gif'></img>")
          .attr("id", D + "gif")

      })

      d3.selectAll("#" + D + ",#T" + D).on('mouseleave', function() {
        d3.selectAll("#Focus" + D).attr("class", "Tinvisibile")
        d3.select("#" + D + "gif").remove();

      })
    })

  })
})
