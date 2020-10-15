import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
	<aside id="syllabus--aside">
	<a className="external--link" href="https://drive.google.com/drive/folders/1t6vAbJr_DFjSYYWtmTi0JjYdQ1M5WoDD?usp=sharing"
	target="_blank"><i className="fas fa-external-link-square-alt"></i> Course Folder</a>
	<a className="external--link" href="https://docs.google.com/spreadsheets/d/1BttolZirenBEh6MsBI5uF2tnJPakOgUvH2g6C2wiJiE/edit?usp=sharing"
	target="_blank"><i className="fas fa-external-link-square-alt"></i> Course Calendar</a>
</aside>
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
