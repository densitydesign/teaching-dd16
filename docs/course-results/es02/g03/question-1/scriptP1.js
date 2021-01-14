let postData = Array;
d3.json("p1.json").then(function(data){ 
    postData = data;
    console.log(postData)});



// this is the Javascript file
console.log("Script is loaded!");
Promise.all([d3.html("./question.html"), d3.html("./VizP1.svg")]).then(function([html, svgDocument]){
  const questionContent = d3.select(html).selectAll('body > *');
  questionContent.each(function(d){
      d3.select("#question-container").node().appendChild(this);
  });
  let svgNode = svgDocument.querySelector("svg");

  let container = document.querySelector("#visualization");

  container.appendChild(svgNode);
    
    const qanonFrames = d3.select("#qanon_frames");
    const qanonImg = d3.select("#qanon");
    const pizzagateFrames = d3.select("#pizzagate_frames");
    const pizzagateImg = d3.select("#pizzagate");
    const stcFrames = d3.select("#savethechildren_frames");
    const stcImg = d3.select("#savethechildren");
    const nomaskImg = d3.select("#no_mask");
    const nomaskFrames = d3.select("#no_mask_frames");
    const deepstateImg = d3.select("#deepstate");
    const deepstateFrames = d3.select("#deepstate_frames");
    const plandemicImg = d3.select("#plandemic"); 
    const plandemicFrames = d3.select("#plandemic_frames");
    const othersImg = d3.select("#others");
    const othersFrames = d3.select("#others_frames");
    const awakeningImg = d3.select("#awakening");
    const awakeningFrames = d3.select("#awakening_frames");
    const novaxImg = d3.select("#no_vax");
    const novaxFrames = d3.select("#no_vax_frames");
    const tutto = d3.selectAll("#no_vax,#awakening,#others,#plandemic,#deepstate,#no_mask,#savethechildren,#pizzagate,#qanon")
 
    highlight = function (illu){
        illu.on("mouseover",function(){
        var selector = this;
        tutto.filter(function(d, i) {
            return (this !== selector);
        }).transition().style('opacity', '0.1');
        d3.select(this).attr('opacity', '1.0');
        console.log("lucone");
        })
        illu.on("mouseleave",function(){
        tutto.transition().style("opacity", "1");
        })};
        
                           
    
    
    highlight(qanonImg);
    highlight(pizzagateImg);
    highlight(stcImg);
    highlight(nomaskImg);
    highlight(plandemicImg);
    highlight(deepstateImg);
    highlight(othersImg);
    highlight(awakeningImg);
    highlight(novaxImg);
    
    
    

    const selezVax= d3.selectAll("#no_vax > g ");
    const selezMask= d3.selectAll("#no_mask > g ");
    const selezAwake= d3.selectAll("#awakening > g ");
    const selezPizza= d3.selectAll("#pizzagate > g ");
    const selezQ= d3.selectAll("#qanon > g ");
    const selezSave= d3.selectAll("#savethechildren > g ");
    const selezothers= d3.selectAll("#others > g ");
    const selezDeep= d3.selectAll("#deepstate > g ");
    const selezPlan= d3.selectAll("#plandemic > g ");
    
    const ritaglino= d3.select("#LEGENDA> #frame_ritaglio > g > image");
    const typeofConsp= d3.select("#LEGENDA> #consp");
    const likes= d3.select("#LEGENDA> #nlikes");
    const typeofImg= d3.select("#LEGENDA> #typeofimage");
    const profilo= d3.select("#LEGENDA > #profile");
    const fllw = d3.select("#LEGENDA>  #Followers");
    const instruct = d3.select("#LEGENDA> #instruct"); 
    const instructer = d3.select("#LEGENDA> #instructer"); 
    const svuota = d3.select("#sfondo");
    const goblin = d3.selectAll("#goblin_solution > rect");
    const ee = d3.selectAll("#LEGENDA > #easteregg");
    instructer.style("opacity","0"); 
    
    svuota.on("click",function(d, i, e){
        
    ritaglino.attr("xlink:href","./Links/memetti.jpg");   typeofConsp.text("-");
    likes.text("-");
    fllw.text("-");
    typeofImg.text("-");
    profilo.text("-");
    instruct.style("opacity","1"); 
    instructer.style("opacity","0"); 
    }),
        
        
    polkaCat = function (selez){
        
    selez.on("click",function(d, i, e){
    let post = this.id
    ritaglino.attr("xlink:href","Links/"+post+".jpg");
    let postino = postData.filter(function (el) {
    return el.id === post ;
            })
    
    let consp = postino[0].toc;
    let nlikes = postino[0].likes;
    let timage = postino[0].top;
    let prof = postino[0].profile;
    let seguito = postino[0].followers;
  
    instruct.style("opacity","0");   
    typeofConsp.text(consp);
    likes.text(nlikes);
    fllw.text(seguito);
    typeofImg.text(timage);
    profilo.text(prof);
    console.log("funziona");
    console.log(seguito);
    console.log(postino[0].followers)
    console.log(postino);
    console.log(postino[0].toc);
    instructer.style("opacity","1");
    })};
        
    
    ee.on("click",function(d, i, e){
    ritaglino.attr("xlink:href","Links/group03.jpg");
    instruct.style("opacity","0");     
    typeofConsp.text("easteregg");
    likes.text("2many");
    fllw.text("30mln");
    typeofImg.text("teamsscreenshot");
    profilo.text("Group03");
    instructer.style("opacity","1");
    });
        

     polkaCat(selezVax);
     polkaCat(selezothers);
     polkaCat(selezMask);
     polkaCat(selezAwake);
     polkaCat(selezDeep);
     polkaCat(selezPizza);
     polkaCat(selezPlan);
     polkaCat(selezQ);
     polkaCat(selezSave);
     polkaCat(goblin);
    
    
   
});
