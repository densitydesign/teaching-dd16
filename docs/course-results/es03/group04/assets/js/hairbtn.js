let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="mexico.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> MEXICO</span>
          </a>
                `
} else if (prev === 'Thai') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="thailand.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> THAILAND</span>
          </a>
                `
} else if (prev === 'Col') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="colombia.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> COLOMBIA</span>
          </a>
                `
} else if (prev === 'Turk') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="turkey.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> TURKEY</span>
          </a>
                `
} else if (prev === 'SKor') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="southKorea.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> SOUTH KOREA</span>
          </a>
                `
} else if (prev === 'RDom') {
  document.getElementById("hairbtn").innerHTML = `
          <a href="dominicanRep.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> DOMINICAN REPUBLIC</span>
          </a>
                `
} else {
  document.getElementById("hairbtn").innerHTML = `
          <a href="hair.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> HAIR</span>
          </a>
                `
}
