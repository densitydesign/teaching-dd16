import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
	<main id="main--home">
		{ _body }
		<div id="playground">
		</div>
	</main>

	</html>
);

export default Home;
