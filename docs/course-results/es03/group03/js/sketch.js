





$('#eyez').hover(
  function () {
console.log("yoc")

      $('.c').toggleClass('hover');
    $('.pupil').toggleClass('hover');

$('.a').toggleClass('hover'); }
)



//html setup
var pupilsHTMLCollection = document.getElementsByClassName('pupil');
var pupilsArray = Array.from(pupilsHTMLCollection);

// console.log('pupilsArray', pupilsArray)


// input setup
var input={
  mouseX:{
    start:-window.innerWidth,
    end: window.innerWidth,
    current:0,
  },
  mouseY:{
    start:-window.innerHeight,
    end: window.innerHeight,
    current:0,
  }
};
input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

// output setup
var output ={
  x: {
    start: -40,
    end: 40,
    current:0,
  },
  y: {
    start: -30,
    end: 30,
    current:0,
  },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;



var handleMouseMove = function (event) {
  // mouse x input
  input.mouseX.current = event.clientX;
  input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) /  input.mouseX.range;

  // mouse y input
  input.mouseY.current = event.clientY;
  input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) /  input.mouseY.range;

  // output x
  output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
  output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);

  // apply output to html
  var a = 0.4 // pupilla
  var b = 0.25 //secondo
  var s = 0.35 // dimensione pupilla 3
  var t = 0.15  // più grande 1
  pupilsArray.forEach(function (pupil, k){
    p0.style.transform = 'translate('+output.x.current*s+'px, '+output.y.current*s+'px)'
    p3.style.transform = 'translate('+output.x.current*a+'px, '+output.y.current*a+'px)'
    p1.style.transform = 'translate('+output.x.current*b+'px, '+output.y.current*b+'px)'
    p2.style.transform = 'translate('+output.x.current*t+'px, '+output.y.current*t+'px)';

  });



  // if (input.mouseX.fraction > 1) {
  //   input.mouseX.fraction = 1;
  // }
  //  if (input.mouseX.fraction < 0) {
  //   input.mouseX.fraction = 0;
  // }

  //console.log('output.x.current',  output.x.current);
//   console.log('event.fraction Y',  input.mouseY.fraction);
}

var handleResize = function () {
  input.mouseX.end = window.innerWidth;
  input.mouseX.range = input.mouseX.end - input.mouseX.start;

  input.mouseY.end = window.innerHeight;
  input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener('mousemove', handleMouseMove);
window.addEventListener('resize', handleResize);
