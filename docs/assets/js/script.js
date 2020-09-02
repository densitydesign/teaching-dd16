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
let width = d3.select("header").node().getBoundingClientRect().width / 8;
let height = width;

// let x0 = 60 * (Math.random());
// let y0 = 60 * (Math.random());

// let x = x0,
//     y = y0;

let svg = d3.select("#intro")
.append("svg")
.attr("width", width)
.attr("height", height);

// let path = d3.path();

let g = svg.append("g");

// g.append("text")
// .attr("x", x0)
// .attr("y", y0)
// .text("1")
// .classed("text", true);
const xScale = d3.scalePoint([0,1,2,3],[width*0.25,width*0.85]).padding(0.5)
const yScale = d3.scalePoint([0,1,2,3],[height*0.1,height*0.49]).padding(0.5)
const rScale = d3.scaleLinear([1,16],[width/24,width/8])
const darkColor = d3.color(getComputedStyle(document.documentElement).getPropertyValue('--accent')).darker(2)
const lightColor = getComputedStyle(document.documentElement).getPropertyValue('--accent')
const colScale = d3.scaleLinear([1,16],[darkColor, lightColor])

let index = 0;
// x=0;
// y=0;

// path.moveTo(xScale(0), yScale(0));

let data=Array.from( Array(16), (x,i)=>i+1).sort(() => Math.random() - 0.5)

for (let i = 0; i <4; i++) {

  for (let j=0; j<4; j++) {

    // x += 60 * (Math.random() - 0.54);
    // y += 60 * (Math.random() - 0.54);

    // if (x >= width) {
    //   x = width;
    // }

    // if (y >= height) {
    //   y = height;
    // }

    // if (x < 0) {
    //   x = width/2;
    // }

    // if (y < 0) {
    //   y = height/2;
    // }

    const x=xScale(j);
    const y=yScale(i);
    const nn = data[index]

    data[index] = {
      x:x,
      y:y,
      r:rScale(nn),
      color:colScale(nn),
      n:nn
    }

    // path.lineTo(x, y);

    // g.append("circle")
    //   .attr("cx",x)
    //   .attr("cy",y)
    //   .attr("r",rScale(nn))
    //   .attr("fill",colScale(nn))

    // g.append("text")
    //   .attr("x", x)
    //   .attr("y", y)
    //   .attr("fill", getComputedStyle(document.documentElement).getPropertyValue('--background'))
    //   .text(nn)
    //   .classed("text", true);

    index++;
  }

}

data = data.sort((a,b)=>b.n-a.n)

g.selectAll('circle').data(data).enter().append('circle')
    .attr("cx",d=>d.x)
    .attr("cy",d=>d.y)
    .attr("r",d=>d.r)
    .attr("fill",d=>d.color);

g.selectAll('text').data(data).enter().append('text')
    .classed("text", true)
    .attr("x",d=>d.x)
    .attr("y",d=>d.y)
    .attr("fill", getComputedStyle(document.documentElement).getPropertyValue('--background'))
    .text(d=>d.n)

// g.append("path")
// .attr("d", path)
// .attr("fill", "none");

// let length = d3.select("path").node().getTotalLength();

// g.style("stroke-dasharray", length);


// Starter pack cover
let coverWidth = window.innerWidth - (window.innerWidth / 10),
coverHeightD = 550,
coverHeightM = 400;

var x = window.matchMedia("(max-width: 700px)")

const scaleX = d3.scaleBand()
.range([0, coverWidth])
.round("true")
.domain(["Syllabus", "Starter Pack", "Course Results"]);

const sizeDesktop = d3.scaleSqrt()
.range([0, 170])
.domain([0,1]);

const sizeMobile = d3.scaleSqrt()
.range([0, 80])
.domain([0,1]);

let cover = d3.selectAll("#playground").append("svg")
.attr("width", coverWidth)
.attr("height", () => {
    if (x.matches) { return coverHeightM }
    else { return coverHeightD }
});

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
  link: "/teaching-dd16/syllabus/",
  r: 1
},
{
  id: "Starter Pack",
  link: "/teaching-dd16/starter-pack/",
  r: 1
},
{
  id: "Course Results",
  link: "/teaching-dd16/course-results/",
  r: 0.2
}
];

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
.force("link", d3.forceLink(links).id(d => d.id).distance(200))
.force("charge", d3.forceManyBody())
.force("x", d3.forceX(d => scaleX(d.id)))
.force("center", d3.forceCenter(d3.select("#playground svg").node().getBoundingClientRect().width / 2, d3.select("#playground svg").node().getBoundingClientRect().height / 2))
.force("collide", d3.forceCollide(d => {
  if (x.matches) { return sizeMobile(d.r) + 10 }
  else { return sizeDesktop(d.r) + 10 }
}).iterations(5))
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
.attr("r", d => {
  if (x.matches) { return sizeMobile(d.r) }
  else { return sizeDesktop(d.r) }
})
.attr("fill", "url(#radial-gradient)")
.attr("stroke", "#404eff")
.call(drag(simulation));

node.on('mouseenter', function(d, i) {
      d3.select(this)
        .transition()
        .ease(d3.easeCubicOut)
        .attr('r', d => sizeDesktop(d.r) + 10);
    })
    .on('mouseleave', function(d, i) {
          d3.select(this)
            .transition()
            .ease(d3.easeCubicOut)
            .attr('r', d => sizeDesktop(d.r));
        });

const label = cover.selectAll("text")
    .append("text")
    .data(nodes)
    .join("text")
    .attr("dy", 0)
    .text(d => d.id)
    .attr("text-anchor", "middle")
    .attr("alignment-baseline", "middle")
    .style("font-size", "1.1rem")
    .style("text-transform", "uppercase")
    .style("font-weight", 700)
    .style("fill", "#000000")
    .style("pointer-events", "none");

simulation.on("tick", () => {
  label
    .attr("x", d => d.x)
    .attr("y", d => d.y);
  node
  .attr("cx", d => d.x)
  .attr("cy", d => d.y)
});
