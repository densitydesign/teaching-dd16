let url = new URL(document.location);

let prev = url.searchParams.get('prev');

if (prev === 'Mex') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="mexico.html">
    <span class="backButton"><i class="fas fa-chevron-left"></i> MEXICO</span>
  </a>
        `
} else if (prev === 'Thai') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="thailand.html">
    <span class="backButton"><i class="fas fa-chevron-left"></i> THAILAND</span>
  </a>
        `
} else if (prev === 'Col') {
  document.getElementById("bellybtn").innerHTML = `
  <a href="colombia.html">
    <span class="backButton"><i class="fas fa-chevron-left"></i> COLOMBIA</span>
  </a>
        `
} else {
  document.getElementById("bellybtn").innerHTML = `
  <a href="belly.html">
    <span class="backButton"><i class="fas fa-chevron-left"></i> BELLY</span>
  </a>
        `
}
