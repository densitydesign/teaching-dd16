import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import Drawer from "../code/components/toc-button.js"

const Syllabus = ({ _body, _relativeURL, _ID }) => (
	<html>
	<Drawer text="Contents"/>
	<aside id="syllabus--aside">
	<div id="table--of--content">
	</div>
	<a className="external--link" href="https://www11.ceda.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?&evn_default=evento&c_classe=711242&polij_device_category=DESKTOP&__pj0=0&__pj1=1d66ef3d240ce3c2c72179cd04e6221a" target="_blank"><i className="fas fa-external-link-square-alt"></i> Course Manifesto</a>
	</aside>
	<main id="right--align">
	{ _body }
	</main>
	<script src={ _relativeURL( `/assets/js/toc.js`, _ID ) } />
	</html>
);

export default Syllabus;
