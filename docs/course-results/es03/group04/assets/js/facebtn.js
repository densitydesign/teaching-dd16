let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("facebtn").innerHTML = `
          <a href="mexico.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> MEXICO</span>
          </a>
                `
} else if (prev === 'Thai') {
  document.getElementById("facebtn").innerHTML = `
          <a href="thailand.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> THAILAND</span>
          </a>
                `
} else if (prev === 'Col') {
  document.getElementById("facebtn").innerHTML = `
          <a href="colombia.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> COLOMBIA</span>
          </a>
                `
} else if (prev === 'Turk') {
  document.getElementById("facebtn").innerHTML = `
          <a href="turkey.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> TURKEY</span>
          </a>
                `
} else if (prev === 'SKor') {
  document.getElementById("facebtn").innerHTML = `
          <a href="southKorea.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> SOUTH KOREA</span>
          </a>
                `
} else if (prev === 'RDom') {
  document.getElementById("facebtn").innerHTML = `
          <a href="dominicanRep.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> DOMINICAN REPUBLIC</span>
          </a>
                `
} else {
  document.getElementById("facebtn").innerHTML = `
          <a href="face.html">
            <span class="backButton"><i class="fas fa-chevron-left"></i> FACE</span>
          </a>
                `
}
