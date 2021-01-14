// this is the Javascript file
console.log("Script is loaded!");

Promise.all([d3.html("./question.html"), d3.html("./viz.svg"), d3.json("./new_dataset.json")]).then(function([html, svgDocument, data]){

  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });

  let svgNode = svgDocument.querySelector("svg");

  let dataset = data;
  console.log(dataset);
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  console.log(data["words"]);

  const colors = {
    "neutral": {
      'hard': "#666666",
      'soft-hard': "#B2B2B2",
      'soft': "#E8E8E8"
    },
    "subject": {
      'soft': "#EC9CFF",
      'soft-hard': "#E166FF",
      'hard': "#CD00FF"
    },
    "attribute": {
      'soft': "#FF99EC",
      'soft-hard': "#FF66E2",
      'hard': "#FF00CC"
    },
    "verb": {
      'soft': "#ccfff5",
      'soft-hard': "#80FFE7",
      'hard': "#00FFCC"
    },
    "object":{
      'soft': "#A6E4FF",
      'soft-hard': "#5AD4FF",
      'hard': "#0099FF"
    },
  };

  // console.log(container);
  container.appendChild(svgNode);

 let clusters = d3.selectAll("#Clusters > g");
 let rings = clusters.selectAll("g:first-child");
 let words = clusters.selectAll("g + g");
 let testate = d3.selectAll("#Testate > g");
 let targhette = testate.selectAll(":first-child");
 console.log(targhette);

 rings.on("mouseover", function(){
   clusters.style('opacity', 0.1);
   let parentCluster = d3.select(this.parentNode);
   parentCluster.style('opacity', 1);
 });

 rings.on("mouseout", function(){
   clusters.style('opacity', 1);
 })

 words.on("mouseover", function(){
   let currentWord = d3.select(this);
   let wordId = currentWord.attr('id');
   if (wordId == "Kpop"){
     words.style('opacity', 1);
     testate.style('opacity', 1);
     targhette.style('opacity', 1);
   } else {
     let wordData = dataset["words"][wordId];
     console.log(wordData);
     words.style('opacity', 0.1);
     testate.style('opacity', 0.1);
     for (let i = 0; i < wordData.connections.length; i++){
       d3.select("#" + wordData.connections[i]).style('opacity', 1);
     };
     let selectedNewspapers = [];
     for (let i = 0; i < wordData.newspapers.length; i++){
       d3.select("#" + wordData.newspapers[i]).style('opacity', 1);
       selectedNewspapers[i] = wordData.newspapers[i];
     };
     targhette.style('opacity', function(d, i){
       for (let i = 0; i < selectedNewspapers.length; i++){
         if (d3.select(this.parentNode).attr('id') == wordData.newspapers[i]){
           return 1
         }
       }
     });
     currentWord.style('opacity', 1);
   }
 });

 words.on("mouseout", function(){
   words.style('opacity', 1);
   testate.style('opacity', 1);
   targhette.style('opacity', 0);
 });

 testate.on("mouseover", function(){
   let currentNews = d3.select(this);
   let newsId = currentNews.attr('id');
   let newsData = dataset["newspapers"][newsId];
   words.style('opacity', 0.1);
   testate.style('opacity', 0.1);
   for (let i = 0; i < newsData.connections.length; i++){
     d3.select("#" + newsData.connections[i]).style('opacity', 1);
   };
   targhette.style('opacity', function(d, i){
       if (d3.select(this.parentNode).attr('id') == newsId){
         return 1
       }
   });
   currentNews.style('opacity', 1);

 });

 testate.on("mouseout", function(){
   words.style('opacity', 1);
   testate.style('opacity', 1);
   targhette.style('opacity', 0);
 })



});
