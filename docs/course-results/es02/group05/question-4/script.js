console.log("question 4 script is running!");
Promise.all([d3.html("./question.html"), d3.html("./visualisation.svg")]).then(
  function ([html, svgDocument]) {
    // populate page with content from question.html
    const questionContent = d3.select(html).selectAll("body > *");
    questionContent.each(function (d) {
      d3.select("#question-container").node().appendChild(this);
    });

    // Bring the visualization inside the page by using plain JS
    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#visualisation");

    container.appendChild(svgNode);

    // Use d3js for interactions ...

    //Toggle formats
    const toggleButton = document.getElementById("toggle_button");
    const toggleSwitch = document.getElementById("switch");
    const titleClusterDefault = document.querySelectorAll('[id^="title_2016"]');
    const toggleBackground = document.getElementById("button_background")
      .childNodes[0].nextElementSibling;
    const formats = document.querySelectorAll('[id^="formats"]');
    const hoveredLetters = document.querySelectorAll('[id^="letter_format_"]');
    const letterClustersList = document.querySelectorAll('[id^="letter"]');
    const titleClustersList = document.querySelectorAll('[id^="title"]');
    let toggle = false;
    let year_name = 2016;
    let current_year = 2016;

    console.log(toggle);

    toggleButton.addEventListener(
      "click",
      function (event) {
        titleClusterDefault[0].childNodes[1].setAttribute("fill", "#5D5D5D");
        titleClusterDefault[1].childNodes[1].setAttribute("fill", "#5D5D5D");

        if (!toggle) {
          toggle = true;
          toggleBackground.setAttribute("fill", "#5D5D5D");
          formats[0].style.display = "block";
          formats[1].style.display = "none";
          toggleSwitch.setAttribute("x", "100");
        } else {
          toggle = false;
          toggleBackground.setAttribute("fill", "#C4C4C4");
          formats[0].style.display = "none";
          formats[1].style.display = "block";
          toggleSwitch.setAttribute("x", "62");
          toggleSwitch.setAttribute("x", "62");
        }
      },
      false
    );

    //Toggle years
    const textClustersList = document.querySelectorAll('[id^="text"]');
    const titleClusters = d3.selectAll('[id^="title"]').selectAll("rect");

    //Frmat 1
    for (var i = 0; i < titleClustersList.length; i++) {
      titleClustersList[i].addEventListener(
        "click",
        function (event) {
          year_name = event.currentTarget.id.split("_")[1];
          current_year = this.id.split("_")[1];
          //var currentNode = this.childNodes[1];
          let titleNodes1 = Array.from(titleClustersList).filter(
            (x) => x.id.split("_")[2] === undefined
          );
          let titleNodes2 = Array.from(titleClustersList).filter(
            (x) => x.id.split("_")[2]
          );
          titleNodes1 = Array.from(titleNodes1).filter(
            (x) => x.id.split("_")[1] === year_name
          );
          titleNodes2 = Array.from(titleNodes2).filter(
            (x) => x.id.split("_")[1] === year_name
          );

          //Remain selected year background
          if (current_year === year_name) {
            titleClusters.style("fill", "#C4C4C4");
            titleNodes1[0].childNodes[1].setAttribute("style", "fill: #5d5d5d");
            titleNodes2[0].childNodes[1].setAttribute("style", "fill: #5d5d5d");
          }
          //Accent letters only for current year
          for (var i = 0; i < hoveredLetters.length; i++) {
            const hovered_letters_name = hoveredLetters[i].id
              .split("_")[2]
              .slice(0, -1);
            const letter = hoveredLetters[i].childNodes[1].childNodes[1];
            const letter2 = hoveredLetters[i].childNodes[1];

            if (hovered_letters_name === year_name) {
              letter !== undefined &&
                letter.setAttribute("style", "fill: #828282");
              letter2 !== undefined &&
                letter2.setAttribute("style", "fill: #828282");
            } else {
              letter !== undefined &&
                letter.setAttribute("style", "fill: #C4C4C4");
              letter2 !== undefined &&
                letter2.setAttribute("style", "fill: #C4C4C4");
            }
          }

          //Toggle between text formats
          for (var i = 0; i < textClustersList.length; i++) {
            const text_cluster_year_name = textClustersList[i].id.split("_")[1];

            if (text_cluster_year_name === year_name) {
              textClustersList[i].setAttribute("style", "display: block");
            } else {
              textClustersList[i].setAttribute("style", "display: none");
            }
          }
        },
        false
      );
    }

    const nodes = document.querySelectorAll('[id^="node_format_"]');
    const clusters = d3.selectAll('[id^="node"]');
    const letterClusters = d3.selectAll('[id^="letter"]');

    //Accent text formats
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].addEventListener("mouseenter", function (event) {
        const currentSelection = this.id.split("_")[2];

        var diagramFormat = document.getElementById(
          "node_letter_" + currentSelection
        );
        var diagramFormat2 = document.getElementById(
          "node_letter_" + currentSelection + "_2"
        );
        var letter1 = document.getElementById(
          "letter_format_" + currentSelection
        );
        var letter2 = document.getElementById(
          "letter_format_" + currentSelection + "_2"
        );

        clusters.style("opacity", "0.1");
        letterClusters.style("opacity", "0.1");
        d3.select(this).style("opacity", "1");
        diagramFormat.setAttribute("style", "opacity: 1");
        diagramFormat2.setAttribute("style", "opacity: 1");
        letter1.setAttribute("style", "opacity: 1");
        letter2.setAttribute("style", "opacity: 1");
      });

      nodes[i].addEventListener(
        "mouseleave",
        function (event) {
          clusters.style("opacity", "1");
          letterClusters.style("opacity", "1");
        },
        false
      );
    }

    //Accent diagrams
    for (var i = 0; i < letterClustersList.length; i++) {
      letterClustersList[i].addEventListener(
        "mouseenter",
        function (event) {
          const currentSelection = this.id.split("_")[2];
          current_year = currentSelection.slice(0, -1);

          if (!current_year) {
            current_year = currentSelection.slice(0, -1) + "_2";
          }
          current_year = parseInt(current_year);
          year_name = parseInt(year_name);

          var textFormat = document.getElementById(
            "node_format_" + currentSelection
          );
          var diagramFormat = document.getElementById(
            "node_letter_" + currentSelection
          );

          var textFormat2 = document.getElementById(
            "node_format_" + currentSelection + "_2"
          );
          var diagramFormat2 = document.getElementById(
            "node_letter_" + currentSelection + "_2"
          );

          //Only if year is selected
          if (year_name === current_year) {
            clusters.style("opacity", "0.1");
            letterClusters.style("opacity", "0.1");
            d3.select(this).style("opacity", "1");
            d3.select(this).style("cursor", "pointer");
            diagramFormat.setAttribute("style", "opacity: 1");
            textFormat.setAttribute("style", "opacity: 1");
            diagramFormat2.setAttribute("style", "opacity: 1");
            textFormat2.setAttribute("style", "opacity: 1");
          }
        },
        false
      );

      letterClustersList[i].addEventListener(
        "mouseleave",
        function (event) {
          clusters.style("opacity", "1");
          letterClusters.style("opacity", "1");
        },
        false
      );
    }
  }
);
