console.log("question 3 script is running!")
Promise.all([d3.html("./question.html"), d3.html("./visualisation.svg")])
.then(function([html, svgDocument]){
    // populate page with content from question.html
    const questionContent = d3.select(html).selectAll('body > *');
    questionContent.each(function(d){
        d3.select("#question-container").node().appendChild(this);
    })

    // Bring the visualization inside the page by using plain JS
    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#visualisation");
    container.appendChild(svgNode);

    // Use d3js for interactions ...
})