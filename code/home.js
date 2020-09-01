import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
	<main id="main--home">
		{ _body }
	</main>
	<aside>
		<a href={ _relativeURL( `/syllabus/`, _ID ) }><div id="syllabus" className="link--booklet">
			<p>Syllabus</p>
		</div></a>
		<a href={ _relativeURL( `/starter-pack/`, _ID ) }><div id="pack" className="link--booklet">
			<p>Starter Pack</p>
		</div></a>
		<a href={ _relativeURL( `/course-results/`, _ID ) }><div id="course" className="link--booklet">
			<p>Course results</p>
		</div></a>
	</aside>

	</html>
);

export default Home;
