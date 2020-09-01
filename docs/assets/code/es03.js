import PropTypes, { Fragment } from 'prop-types';
import React from 'react';

import PhaseThree from '../code/components/phase-03.js';

const phase = 3;

const Home = ({ _body, _relativeURL, _parseYaml, groups, _ID }) => (
	<html>
		<main id="right--align">
		<div className="phases--navigation">
			<div className="before"><a href={ _relativeURL('/course-results/es0' + (phase - 1), _ID)}><button>Data as Artifact</button></a></div>
			<div className="all"><a href={ _relativeURL('/course-results/', _ID)}><button>All phases</button></a></div>
		</div>
		<div id="phase3" className="link--phase">
			<PhaseThree width="350" style={{strokeWidth: 1.5}}/>
			<p>Phase 3</p>
			<div className="title" style={{ marginBottom: "2rem", fontSize: "2rem" }}>Data Publics</div>
		</div>
		<div class="hero--text">{ _body }</div>
		</main>
			<main className="hero--text">
				<div className="projects--directory">
	 			 {
	 				 Object.keys(groups).map((item, i) => (
						 <>
						 <div key={item} id={groups[item].group} class="project--block">
						 <div class="project--cover phase--2" key={item} style={{
							 backgroundImage: `url(${groups[item].image})`
						 }}>
						 <div className="project--meta">
						 <h3 key={item}>{"Group " + (i + 1)}</h3>
						 <h2 key={item}><a key={item} href={ _relativeURL( '/course-results/es01/', _ID), groups[item].group} target="_blank">{groups[item].title}</a></h2>
						 <h3 key={item}>{groups[item].subtitle}</h3>
						 <p className="project--members" key={item}>{groups[item].names}</p>
						 </div>
						 </div>

						 <p className="project--description" key={item}>{groups[item].desc}</p>
						 </div>
						 </>
	 				 ))
	 			 }
 			 </div>
			</main>
			<aside id="single--phase">
				<div id="projects--aside">
					<h4>All Projects</h4>
					<ul className="projects--links">
						{
							Object.keys(groups).map(item => (
								<>
								<a key={item} href={"#" + groups[item].group}>
								<li className="group--link" key={item}><p>{groups[item].title}</p></li>
								</a>
								</>
							))
						}
					</ul>
				</div>
			</aside>
	</html>
);

export default Home;
