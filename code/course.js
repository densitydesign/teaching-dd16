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
			<a href={ _relativeURL( `/course-results/es01`, _ID ) }>
					<div id="phase1" className="link--phase">
					<img src={ _relativeURL( '/assets/img/phase-glyphs/stroke_phase_1.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<img className="hover--accent" src={ _relativeURL( '/assets/img/phase-glyphs/phase_1_hover.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<p>Phase 1</p>
					<div className="title">Data as Material</div>
					<div className="arrow">→</div>
				</div>
				</a>
				<a href={ _relativeURL( `/course-results/es02`, _ID ) }>
					<div id="phase2" className="link--phase">
					<img src={ _relativeURL( '/assets/img/phase-glyphs/stroke_phase_2.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<img className="hover--accent" src={ _relativeURL( '/assets/img/phase-glyphs/phase_2_hover.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<p>Phase 2</p>
					<div className="title">Data as Artifact</div>
					<div className="arrow">→</div>
					</div>
				</a>
				<a href={ _relativeURL( `/course-results/es03`, _ID ) }>
					<div id="phase3" className="link--phase" style={{ opacity: 0.5 }}>
					<img src={ _relativeURL( '/assets/img/phase-glyphs/stroke_phase_3.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<img className="hover--accent" src={ _relativeURL( '/assets/img/phase-glyphs/phase_3_hover.png', _ID)}
					style={{ width: "180px", position: "absolute" }}/>
					<p>Phase 3</p>
					<div className="title">Data Publics</div>
					<div className="arrow">→</div>
					</div>
				</a>
			</aside>
	</html>
);

export default Home;
