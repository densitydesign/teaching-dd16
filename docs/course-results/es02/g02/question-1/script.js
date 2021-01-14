// this is the Javascript file
console.log("Script is loaded!");

Promise.all([d3.html("./question.html"), d3.html("./viz.svg")]).then(function([html, svgDocument]){

  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });

  let svgNode = svgDocument.querySelector("svg");

  // console.log(svgNode);
  let container = document.querySelector("#visualization");

  // console.log(container);
  container.appendChild(svgNode);

  let selectedHashtagIndex = -1;

  let bars = d3.selectAll("#Barre > g").attr('id', function(d, i){return i});
  let hovers = d3.selectAll("#Hover > g");
  let hoverContainer = d3.select("#Hover");
  hoverContainer.style('pointer-events', 'none');
  let post = d3.select("#Post");

  bars.on("mouseover", function(){
    selectedHashtagIndex = parseInt(this.id);
    bars.style('opacity', function(d, i){if (i == selectedHashtagIndex) {return 1} else {return 0.1}} );
    post.style('opacity', function(){if (selectedHashtagIndex >= 0) return 0.1});
    hovers.style('opacity', function(d, i){if(i == selectedHashtagIndex) return 1});
  });
  bars.on("mouseout", function(){
    selectedHashtagIndex = -1;
    bars.style('opacity', function(){if (selectedHashtagIndex < 0) return 1});
    post.style('opacity', function(){if (selectedHashtagIndex < 0) return 1});
    hovers.style('opacity', function(d, i){if(i != selectedHashtagIndex) return 0});
  });


});
