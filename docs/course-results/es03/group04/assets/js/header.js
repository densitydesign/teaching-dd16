document.getElementById("header").innerHTML = `
<div class="sticky-top">
  <header class="">
  <nav class=" d-flex align-items-center justify-content-between paddingNav">


    <div>
      <span id="sidebarCollapse" class="marginNavSx"><i class="fas fa-bars"></i></span>
    </div>

    <div><a class="nav-item nav-link" href="../home.html"><img src="../assets/svg/logo_Header.svg" class="img-fluid logo" alt="Responsive image"></a></div>
    <div>
      <a href="./about.html" style="color:white;"><span id="" class="marginNavDx"><i class="fas fa-question"></i></span></a>
    </div>
  </nav>
  </header>



</div>

<div>
  <!-- Sidebar  -->
  <nav id="sidebar">
    <div id="dismiss" class="d-flex align-items-center justify-content-center">
      <i class="fas fa-arrow-left"></i>
    </div>

    <div class="sidebar-header">

    </div>

    <ul class="list-unstyled components">

      <li class="active">

      </li>
      <li>
    <a class="marginMenu" href="../index.html"><span class="secCat">INTRO</span></a>
        <a class="marginMenu" href="#pageSubmenu" data-toggle="collapse" aria-expanded="false"><span class="secCat">BODY</span> <i class="fas fa-chevron-down"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu">
          <li>
            <a href="./belly.html">Belly</a>
          </li>
          <li>
            <a href="./breast.html">Breast</a>
          </li>
          <li>
            <a href="./butt.html">Butt</a>
          </li>
          <li>
            <a href="./eye.html">Eye</a>
          </li>
          <li>
            <a href="./face.html">Face</a>
          </li>
          <li>
            <a href="./hair.html">Hair</a>
          </li>
          <li>
            <a href="./nose.html">Nose</a>
          </li>
          <li>
            <a href="./teeth.html">Teeth</a>
          </li>
        </ul>

      </li>

      <li>
        <a class="marginMenu" href="#pageSubmenu1" data-toggle="collapse" aria-expanded="false"><span class="secCat">COUNTRY</span> <i class="fas fa-chevron-down"></i></a>
        <ul class="collapse list-unstyled" id="pageSubmenu1">
        <li>
          <a href="./colombia.html">Colombia</a>
        </li>
        <li>
          <a href="./dominicanRep.html">Dominican Republic</a>
        </li>
        <li>
          <a href="./mexico.html">Mexico</a>
        </li>
        <li>
          <a href="./southKorea.html">South Korea</a>
        </li>
        <li>
          <a href="./thailand.html">Thailand</a>
        </li>
        <li>
          <a href="./turkey.html">Turkey</a>
        </li>
        </ul>
        <a class="marginMenu" href="./about.html"><span class="secCat">ABOUT</span></a>

      </li>
    </ul>

  </nav>
</div>
      `
