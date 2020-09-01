d3.select("#phase1").on("mouseover", () => {
  d3.select("#phase1 svg").style("transform", "rotate(-45deg) skew(30deg, 30deg)")
  d3.select("#phase1 .arrow").style("transform", "translateX(1rem)")
})

d3.select("#phase1").on("mouseout", () => {
  d3.select("#phase1 svg").style("transform", "scale(1)")
  d3.select("#phase1 .arrow").style("transform", "translateX(0rem)")
})

d3.select("#phase2").on("mouseover", () => {
  d3.select("#phase2 svg").style("transform", "rotate(-45deg) skew(30deg, 30deg)")
  d3.select("#phase2 .arrow").style("transform", "translateX(1rem)")
})

d3.select("#phase2").on("mouseout", () => {
  d3.select("#phase2 svg").style("transform", "scale(1)")
  d3.select("#phase2 .arrow").style("transform", "translateX(0rem)")
})

d3.select("#phase3").on("mouseover", () => {
  d3.select("#phase3 svg").style("transform", "rotate(-45deg) skew(30deg, 30deg)")
  d3.select("#phase3 .arrow").style("transform", "translateX(1rem)")
})

d3.select("#phase3").on("mouseout", () => {
  d3.select("#phase3 svg").style("transform", "scale(1)")
  d3.select("#phase3 .arrow").style("transform", "translateX(0rem)")
})

// let width = d3.select("#intro").node().getBoundingClientRect().width;
let width = d3.select("header").node().getBoundingClientRect().width / 5;
let height = 100;

let x0 = 60 * (Math.random());
let y0 = 60 * (Math.random());

let x = x0,
y = y0;

let svg = d3.select("#intro")
.append("svg")
.attr("width", width - 40)
.attr("height", height);

let path = d3.path();

path.moveTo(x, y);

let g = svg.append("g");

g.append("text")
.attr("x", x0)
.attr("y", y0)
.text("1")
.classed("text", true);

for (let i = 0; i < 14; i++) {
  x += 60 * (Math.random() - 0.54);
  y += 60 * (Math.random() - 0.54);

  if (x >= width) {
    x = width;
  }

  if (y >= height) {
    y = height;
  }

  if (x < 0) {
    x = width/2;
  }

  if (y < 0) {
    y = height/2;
  }

  path.lineTo(x, y);

  g.append("text")
  .attr("x", x)
  .attr("y", y)
  .text(i + 2)
  .classed("text", true);

}

g.append("path")
.attr("d", path)
.attr("fill", "none");

let length = d3.select("path").node().getTotalLength();

g.style("stroke-dasharray", length);


// Starter pack cover
let coverWidth = window.innerWidth - (window.innerWidth / 10),
coverHeight = window.innerHeight / 2;


const scaleX = d3.scaleBand()
.range([0, coverWidth])
.round("true")
.domain(["Syllabus", "Starter Pack", "Course Results"]);


let cover = d3.selectAll("#playground").append("svg")
.attr("width", coverWidth)
.attr("height", coverHeight);

var radialGradient = cover.append("defs")
  .append("radialGradient")
    .attr("id", "radial-gradient");

radialGradient.append("stop")
    .attr("offset", "0%")
    .attr("stop-color", "#404eff");

radialGradient.append("stop")
    .attr("offset", "100%")
    .attr("stop-color", "#ffdbee");

console.log(scaleX.step());

let nodes = [{
  id: "Syllabus",
  link: "/syllabus/",
},
{
  id: "Starter Pack",
  link: "/starter-pack/",
},
{
  id: "Course Results",
  link: "/course-results/",
}];

let links = [
  {
    source: "Syllabus",
    target: "Starter Pack"
  },
  {
    source: "Starter Pack",
    target: "Course Results"
  },
]

const simulation = d3.forceSimulation(nodes)
.force("link", d3.forceLink(links).id(d => d.id).distance(300))
.force("charge", d3.forceManyBody())
.force("x", d3.forceX(d => scaleX(d.id)))
.force("center", d3.forceCenter(coverWidth / 2, 180))
.force("collide", d3.forceCollide(coverWidth / 16).iterations(5))
.alpha(1)
.alphaDecay(0.02);


const drag = simulation => {

  function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(event,d) {
    d.fx = event.x;
    d.fy = event.y;
  }

  function dragended(event,d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3.drag()
  .on("start", dragstarted)
  .on("drag", dragged)
  .on("end", dragended);
}

const node = cover.selectAll("circle")
.data(nodes)
.enter()
.append("a")
.attr("xlink:href", d => d.link)
.append("circle")
.attr("cx", coverWidth / 2)
.attr("cy", 400 / 2)
.attr("r", d => 150)
.attr("fill", "url(#radial-gradient)")
.attr("stroke", "#404eff")
.call(drag(simulation));

const label = cover.selectAll("text")
    .append("text")
    .data(nodes)
    .join("text")
    .attr("dy", 0)
    .text(d => d.id)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .style("font-size", "1rem")
    .style("pointer-events", "none");

simulation.on("tick", () => {
  label
    .attr("x", d => d.x)
    .attr("y", d => d.y);
  node
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
});
