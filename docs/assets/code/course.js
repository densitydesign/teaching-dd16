import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import PhaseOne from '../code/components/phase-01.js';
import PhaseTwo from '../code/components/phase-02.js';
import PhaseThree from '../code/components/phase-03.js';

const Home = ({ _body, _relativeURL, _ID }) => (
	<html>
			<main class="hero--text">
				<div>{ _body }</div>
			</main>
			<aside id="phases">
				<a href={ _relativeURL( '/course-results/es01/', _ID) }>
					<div id="phase1" className="link--phase">
					<PhaseOne width="200" style={{strokeWidth: 2}}/>
					<p>Phase 1</p>
					<div className="title">Data as Material</div>
					<div className="arrow">→</div>
				</div>
				</a>
				<a href={ _relativeURL( '/course-results/es02/', _ID) }>
					<div id="phase2" className="link--phase">
					<PhaseTwo width="200"/>
					<p>Phase 2</p>
					<div className="title">Data as Artifact</div>
					<div className="arrow">→</div>
					</div>
				</a>
				<a href={ _relativeURL( '/course-results/es03/', _ID) }>
					<div id="phase3" className="link--phase">
					<PhaseThree width="200"/>
					<p>Phase 3</p>
					<div className="title">Data Publics</div>
					<div className="arrow">→</div>
					</div>
				</a>

			</aside>
	</html>
);

export default Home;
