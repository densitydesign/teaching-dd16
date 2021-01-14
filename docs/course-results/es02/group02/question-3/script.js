// this is the Javascript file
console.log("Script is loaded!");

Promise.all([d3.html("./question.html"), d3.html("./viz.svg"), d3.json("./dataset2.json")]).then(function([html, svgDocument, data]){

  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });

  let svgNode = svgDocument.querySelector("svg");
  let dataset = data;

  // console.log(svgNode);
  let container = document.querySelector("#visualization");

  // console.log(container);
  container.appendChild(svgNode);
 let users = d3.selectAll("#USERS > *");
 users.style('cursor', 'pointer');
 let topics = d3.selectAll("#TOPICS > *")
 let hovers = d3.selectAll("#HOVERS > g");
 let links = d3.selectAll("#LINKS > *");
 let hoverContainer = d3.select("#HOVERS");
 let edges = d3.selectAll("#EDGES > *");
 let userScreen = document.getElementById("visualization-aside");
 hoverContainer.style('pointer-events', 'none');
 let background = d3.select("#SFONDO");
 const colors = {
   "notActive": "#333333",
   "Spamming-hashtags-and-contents": "#00ffcc",
   "Business-promotion": "#0099ff",
   "Self-promotion": "#cd00ff"
 }

 users.on("mouseover", function(){
   let currentNode = d3.select(this);
   let nodeId = currentNode.attr('id');
   console.log(nodeId);
   let nodeData = dataset["users"][nodeId];
   console.log(nodeData);

   users.style('fill', colors["notActive"]);
   users.style('opacity', 0.1);
   topics.style('opacity', 0.1);
   currentNode.style('opacity', 1);
   edges.style('stroke', '#333333');
   currentNode.style('fill', colors[nodeData.type]);
   d3.select("#hover_" +nodeId).style('opacity', 1);
   for (i=0; i < nodeData.connections.length; i++){
     let connectedNode = d3.select("#" + nodeData.connections[i]);
     d3.select("#" + nodeData.connections[i] + "-" + nodeId).style('stroke', 'white');
     connectedNode.style('opacity', 1);
   }
 });
 users.on("mouseout", function(){
   users.style('opacity', 1);
   topics.style('opacity', 1);
   hovers.style('opacity', 0);
   edges.style('stroke', '#707070');
   users.style('fill', function(d, i){
     let nodeColor = colors[dataset["users"][d3.select(this).attr('id')].type];
     return nodeColor;
   });

 });

 topics.on("mouseover", function(){
   let currentNode = d3.select(this);
   let nodeId = currentNode.attr('id');
   console.log(nodeId);
   let nodeData = dataset["topics"][nodeId];
   console.log(nodeData);

   users.style('fill', colors["notActive"]);
   users.style('opacity', 0.1);
   topics.style('opacity', 0.1);
   currentNode.style('opacity', 1);
   edges.style('stroke', '#333333');
   for (i=0; i < nodeData.connections.length; i++){
     if (nodeData.connections[i] == "all"){
       for (k = 0; k < users.size(); k++){
        d3.select("#Support_Black_Lives_Matter-" + users.filter(function (d, i) { return i === k;}).attr('id')).style('stroke', 'white');
       }
       users.style('opacity', 1);
       users.style('fill', function(d, i){
         let nodeColor = colors[dataset["users"][d3.select(this).attr('id')].type];
         return nodeColor;
       });
     } else {
       let connectedNode = d3.select("#" + nodeData.connections[i]);
       d3.select("#" + nodeId + "-" + nodeData.connections[i]).style('stroke', 'white');
       connectedNode.style('opacity', 1);
       connectedNode.style('fill', function(){
         let nodeColor = colors[dataset["users"][connectedNode.attr('id')].type];
         return nodeColor;
       });
     }
   }
 });
 topics.on("mouseout", function(){
   users.style('opacity', 1);
   topics.style('opacity', 1);
   hovers.style('opacity', 0);
   edges.style('stroke', '#707070');
   users.style('fill', function(d, i){
     let nodeColor = colors[dataset["users"][d3.select(this).attr('id')].type];
     return nodeColor;
   });
 });

 users.on("click", function(){
   let currentNode = d3.select(this);
   let nodeId = currentNode.attr('id');
   let nodeData = dataset["users"][nodeId];
   console.log("clicked on" + nodeId);
   userScreen.style.backgroundImage = "url('./images/" + nodeId + ".jpg')";
   links.style('opacity', 0);
   if (nodeData.link == "yes"){
     d3.select("#link_" + nodeId).style('opacity', 1);
   }
   });

   background.on("click", function(){
     userScreen.style.backgroundImage = "url('./image-placeholder.svg')";
   })


});
