import PropTypes from 'prop-types';
import React from 'react';

import Footer from '../code/components/footer.js';

const Page = ({ title, stylesheet, header, main, footer, script, _relativeURL, _ID }) => (
	<html lang="en">
	<head>
	<title>DensityDesign Final Synthesis Design Studio 2019/2020 - { title }</title>
	<meta charSet="utf-8" />
	<meta httpEquiv="x-ua-compatible" content="ie=edge" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />

	<meta name="author" content="DensityDesign Research Lab" />
  <meta name="description" content="Official website of the DensityDesign Final Synthesis Design Studio, 2019/2020" />
  <meta property="og:title" content="DensityDesign F.S.D.S 2019/2020" />
  <meta property="og:description" content="Official website of the DensityDesign Final Synthesis Design Studio, 2019/2020" />
  <meta property="og:image" content="https://densitydesign.github.io/teaching-dd15/assets/img/meta-main-1.png" />
  <meta property="og:url" content="https://densitydesign.github.io/teaching-dd15/" />
	<meta property="og:type" content="website" />

  <meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:site" content="@densitydesign" />
	<meta name="twitter:creator" content="@densitydesign" />
  <meta property="og:site_name" content="DensityDesign F.S.D.S 2019/2020" />
	<meta name="twitter:image:src" content="https://densitydesign.github.io/teaching-dd15/assets/img/meta-main-1.png" />
	<meta name="twitter:image:width" content= "280" />
	<meta name="twitter:image:height" content= "480" />
  <meta name="twitter:image:alt" content="Official website of the DensityDesign Final Synthesis Design Studio, 2019/2020" />

	<link rel="apple-touch-icon" sizes="180x180" href="https://densitydesign.github.io/teaching-dd15/apple-touch-icon.png" />
	<link rel="icon" type="image/png" sizes="32x32" href="https://densitydesign.github.io/teaching-dd15/favicon-32x32.png" />
	<link rel="icon" type="image/png" sizes="16x16" href="https://densitydesign.github.io/teaching-dd15/favicon-16x16.png" />
	<link rel="manifest" href="https://densitydesign.github.io/teaching-dd15/site.webmanifest" />
	<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#bfd1e5" />
	<meta name="msapplication-TileColor" content="#bfd1e5" />
	<meta name="theme-color" content="#bfd1e5" />

	{
		stylesheet != undefined
		? ( <link rel="stylesheet" href={ _relativeURL( `/assets/css/${ stylesheet }.css`, _ID ) } /> )
		: null
	}

	<link href="https://fonts.googleapis.com/css?family=DM+Sans:400,400i,700&display=swap" rel="stylesheet" />
	<link href="https://fonts.googleapis.com/css?family=Crimson+Pro:400,400i&display=swap" rel="stylesheet" />
	<link rel="stylesheet" href={ _relativeURL( `/assets/css/site.css`, _ID ) } />
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-5816319-18" />
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.1/jquery.min.js"></script>
	<script src='https://ajax.googleapis.com/ajax/libs/jqueryui/1.8.5/jquery-ui.min.js'></script>
	<script src="https://d3js.org/d3.v5.js"></script>
	<script src="https://d3js.org/d3-path.v1.min.js"></script>
	<script src="https://d3js.org/d3-force.v2.min.js"></script>
	<script src="https://d3js.org/d3-contour.v1.min.js"></script>
	<script src="https://kit.fontawesome.com/88c3e70171.js"></script>

	<script
		dangerouslySetInnerHTML={{ __html:
			`window.dataLayer = window.dataLayer || [];
		  function gtag(){dataLayer.push(arguments);}
		  gtag('js', new Date());

		  gtag('config', 'UA-5816319-18');`
			}}
		/>

	</head>
	<body>
	<header role="banner">
	<div className="container">
	<a href={ _relativeURL( `/`, _ID ) }><div id="intro"></div></a>
	<div id="course--title"><a href={ _relativeURL( `/`, _ID ) }><p className="branding">DD15</p>
	<p>Final Synthesis Design Studio</p>
	<p>2019/2020</p></a></div>
	</div>
	</header>
	<div className="container">

	{ main }
	</div>

	<Footer />
	<script src={ _relativeURL( `/assets/js/script.js`, _ID ) } />
	<script src={ _relativeURL( `/assets/js/toc.js`, _ID ) } />
	</body>
	</html>
);

Page.propTypes = {
	/**
	* title: Homepage
	*/
	title: PropTypes.string.isRequired,

	/**
	* main: (partials)(5)
	*/
	main: PropTypes.node.isRequired,
};

Page.defaultProps = {};

export default Page;
