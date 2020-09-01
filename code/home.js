import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
	<main id="main--home">
		{ _body }
	</main>
	<aside>
	<div id="playground">
	</div>
	</aside>

	</html>
);

export default Home;
