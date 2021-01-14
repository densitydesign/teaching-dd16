console.log("question 3 script is running!")
Promise.all([d3.html("./question.html"),d3.html("./interactive/Legend3.svg")])
  .then(function([html, svgDocument]) {
    // populate page with content from question.html
    const questionContent = d3.select(html).selectAll("body > *");
    questionContent.each(function(d) {
      d3.select("#question-container").node().appendChild(this);
    })

    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#legend_3");
    let legend = document.querySelector("#legend_3");
    container.appendChild(svgNode);

    let columns = d3.selectAll(".flex-container");

    let isOnPic = false

    columns.on("click", function(){
      let clickedColumn = d3.select(this);
      let category = d3.select(this).attr("data-category");
      console.log(category);
      if(clickedColumn.style("width") == "100%") {
        d3.select(".meme")
        .transition()
        .style("opacity", "0")
        .end()
        .then(() => {
          d3.select(".image-wrapper").style("display", "none");
          columns
          .transition()
          .style("width", "10%")
          .end()
          .then(() => {
            columns.classed("border", true);
          });
        });
      } else {
        d3.select(".image-wrapper")
        .style("display", "block");
        columns
        .classed("border", false)
        .style("width", "0%")
        d3.selectAll("."+category)
        .style("width", "100%");

        let picSpan
        let subjects = d3.selectAll(".flex-item > span");
        subjects.on("mousemove", function() {
          picSpan = this
          image = d3.select(this).attr("data-image");
          d3.select(".image-wrapper").html("<img class='meme' src='img/" + image +".jpg'>" )
        })
        var x = document.getElementsByTagName('span')
        for (var i = 0; i < x.length; i++) {
          x[i].addEventListener("mouseout", e => {
            d3.select(".meme").remove(picSpan)
          })
        }
}
});
  })
