
console.log("question 4 script is running!")
Promise.all([d3.html("./question.html"), d3.html("./interactive/Graph_4.svg")])
 .then(function([html, svgDocument]){
   // loader settings
   // populate page with content from question.html
   const questionContent = d3.select(html).selectAll('body > *');
   questionContent.each(function(d){
       d3.select("#question-container").node().appendChild(this);
   })



   // Bring the visualization inside the page by using plain JS
    let svgNode = svgDocument.querySelector("svg");
    let container = document.querySelector("#visualization");

   container.appendChild(svgNode);


   const clusters = d3.selectAll('#Sections > g');
    clusters.on('mousemove', function(){
      console.log("ciao");
      clusters.style('opacity',0.2);
  	// «this» refers to clicked element
      d3.select(this).style('opacity',1);
    });
    // bind a click event to the rectangle in the background
    // to reset selection
    d3.select('#background').on('mousemove', function(){
    clusters.style('opacity',1);

   });

   const  allImages = d3.selectAll("#Sections image")


       allImages.on ('click', function(){
       url = d3.select(this).attr("data_url");
       //url = "https://www.google.de"
       console.log(url);
       window.open(url,'_blank');// <- '_blank' is what makes it open in a new window.
     }
     );




})
