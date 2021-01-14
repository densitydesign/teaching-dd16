// this is the Javascript file
console.log("Script is loaded!");
let dataset;

Promise.all([d3.html("./question.html"), d3.html("./viz.svg"), d3.json("./dataset_new.json")]).then(function([html, svgDocument, data]){

  dataset = data;
  console.log(dataset);
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });

  let svgNode = svgDocument.querySelector("svg");

  // console.log(svgNode);
  let container = document.querySelector("#visualization");

  // console.log(container);
  container.appendChild(svgNode);

 let textBoxes = [];
 let image = document.getElementById("aside-image-container");
 let imageContainerHeight = image.offsetHeight;
 textBoxes.push(image);
 let username = document.getElementById("username");
 textBoxes.push(username);
 let likes = document.getElementById("likes");
 textBoxes.push(likes);
 let retweets = document.getElementById("retweets");
 textBoxes.push(retweets);
 let text = document.getElementById("text");
 textBoxes.push(text);
 let textTitle = document.getElementById("text-title");
 textBoxes.push(textTitle);
 let retweetsTitle = document.getElementById("retweets-title");
 textBoxes.push(retweetsTitle);
 let likesTitle = document.getElementById("likes-title");
 textBoxes.push(likesTitle);
 let usernameTitle = document.getElementById("username-title");
 textBoxes.push(usernameTitle);

 let images = d3.selectAll("#HASHTAG > g").attr("id", function(d, i){return i});
 images.style('cursor', "pointer");
 d3.select("#QUADRATINI").style('pointer-events', 'none');
 let background = d3.select("#BACKGROUND");

 let selectedImage = -1;

 images.on("click", function(){
     let imageIndex = parseInt(this.id) + 2;
     selectedImage = imageIndex;
     image.style.backgroundImage = "url('./images/" + imageIndex + ".jpg')";
 let boxesBorderColor;
 if (dataset[this.id].Relevance == "hashtag hijacked" || dataset[this.id].Relevance == "Hashtag Hijacked"){
   boxesBorderColor = "#FF00CC"
 } else {
   boxesBorderColor = "#00FFCC"
 };
 for(i = 0; i < textBoxes.length; i++){
   textBoxes[i].style.borderColor = boxesBorderColor;
 };
 images.style('opacity', 0.4);
 d3.select(this).style("opacity", 1);
 username.innerHTML = dataset[this.id].Username;
 likes.innerHTML = dataset[this.id].Likes_count;
 retweets.innerHTML = dataset[this.id].Retweets_count;
 text.innerHTML = dataset[this.id].Tweet;
 });

 images.on('mouseover', function(){
   let imageIndex = parseInt(this.id) + 2;
   if(selectedImage >= 0 && selectedImage != imageIndex){
     d3.select(this).style('opacity', 0.8);
   }
 });
 images.on('mouseout', function(){
   let imageIndex = parseInt(this.id) + 2;
   if(selectedImage >= 0 && selectedImage != imageIndex){
     d3.select(this).style('opacity', 0.4);
   }
 })

 background.on('click', function(){
   selectedImage = -1;
   images.style('opacity', 1);
   username.innerHTML = "";
   likes.innerHTML = "";
   retweets.innerHTML = "";
   text.innerHTML = "";
   image.style.backgroundImage = "url('./image-placeholder.svg')";
   for(i = 0; i < textBoxes.length; i++){
     textBoxes[i].style.borderColor = "white";
   };
 });

});
