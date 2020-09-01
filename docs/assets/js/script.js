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

let bookletWidth = d3.select(".link--booklet").node().getBoundingClientRect().width,
bookletHeight = d3.select(".link--booklet").node().getBoundingClientRect().height;

let cover = d3.selectAll(".link--booklet").append("svg")
.attr("width", bookletWidth)
.attr("height", bookletHeight);

var numNodes = 300;
var nodes = d3.range(numNodes).map(function(d) {
  return {radius: 3 + Math.random() * 35}
})

var simulation = d3.forceSimulation(nodes)
.force('charge', d3.forceManyBody().strength(1))
.force('center', d3.forceCenter(bookletWidth / 2, bookletHeight / 2))
.force('collision', d3.forceCollide().radius(function(d) {
  return d.radius + 1
}))
.on('tick', ticked);


function ticked() {

  var p = d3.select('#pack svg')
  .selectAll('circle')
  .data(nodes)

  p.enter()
  .append('circle')
  .attr('r', function(d) {
    return d.radius
  })
  .merge(p)
  .attr('cx', function(d) {
    return d.x
  })
  .attr('cy', function(d) {
    return d.y
  })
  .classed("circles", true)

  p.exit().remove()

}

// Syllabus cover
let syllabus = d3.select("#syllabus svg")
.append("g");

// Populate a grid of n×m values where -2 ≤ x ≤ 2 and -2 ≤ y ≤ 1.
var n = Math.round(bookletWidth), m = Math.round(bookletHeight), values = new Array(n * m);
// for (var j = 0.5, k = 0; j < m; ++j) {
//   for (var i = 0.5; i < n; ++i, ++k) {
//     values[k] = goldsteinPrice(i / n * 4 - 2, 1 - j / m * 3);
//   }
// }

for (var j = 0, k = 0; j < m; ++j) {
  for (var i = 0; i < n; ++i, ++k) {
    values[k] = j * k * (i / j);
  }
}

// Compute the contour polygons at log-spaced intervals; returns an array of MultiPolygon.
var contours = d3.contours()
.size([n, m])
.thresholds(d3.range(2, 21).map(p => Math.pow(3, p)))
(values);

syllabus.selectAll("path")
.data(contours)
.enter()
.append("path")
.attr("d", d3.geoPath())
.attr("fill", "none")
.classed("stroke", true)
.attr("stroke-linejoin", "round");

// Course Results cover

let course = d3.select("#course svg")
.append("g");

for (let x = 0; x < bookletWidth; x += (bookletWidth/5)) {
  for (let y = 0; y < bookletHeight; y += (bookletWidth/5)) {
    course.append("rect")
    .attr("x", x)
    .attr("y", y)
    .attr("width", bookletWidth)
    .attr("height", bookletHeight)
    .attr("fill", "none")
    .classed("stroke", true);
  }
}
