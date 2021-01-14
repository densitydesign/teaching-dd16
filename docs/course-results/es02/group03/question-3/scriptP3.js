
Promise.all([d3.html("./question.html"), d3.html("./VizP3.svg")]).then(function([html, svgDocument]){
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");
  // console.log(svgNode);
  let container = document.querySelector("#visualization");
  // console.log(container);
  container.appendChild(svgNode);
  
    const selezImg= d3.selectAll("#img > g ");
    const selezZoom= d3.selectAll("#img_zoom > g ");
    const instruct = d3.select("#legenda> #instruct"); 
    const instructer = d3.select("#legenda> #instructer"); 
    selezZoom.attr('opacity', '0');
     const description = d3.select("#desc");
    
    const ritaglino= d3.select("#zoom_base> #frame_ritaglio > image");
    
    const tutto = d3.selectAll("#img,#NONE_qanon,#NONE_mkultra,#NONE_flat,#NONE_pizzagate,#NONE_area51,#NONE_5G,#img_zoom")
    
      
    selezImg.on("click",function(d, i, e){
        selezZoom.attr('opacity', '0')
    let sticker = this.id
    let num = String(sticker);
    
    let zoom = "z"+num.substr(1);
    
   console.log(sticker);
        console.log(num.substr(1))
        console.log(zoom)
          selezZoom.filter(function(d, i) {
              return (this.id === zoom)
    }).transition().attr('opacity', '1');
         instruct.style("opacity","0"); 
         instructer.style("opacity","1"); 
        description.style("opacity","0"); 
        
        
        
   
    });
    
    
    const svuota = d3.select("#sfondo");
    
    instructer.style("opacity","0"); 
    
    svuota.on("click",function(d, i, e){
  
        
    selezZoom.attr('opacity', '0'); 
    instruct.style("opacity","1"); 
         
    description.style("opacity","1"); 
    instructer.style("opacity","0"); 
    })
    
    
   

});
