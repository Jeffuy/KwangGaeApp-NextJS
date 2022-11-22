import React from 'react';
import { NextSeo } from 'next-seo';
import Patterns from '@scripts/data/patternInfo';
import Image from 'next/image';
import yellowStripe from '@images/yellow-stripe.png';
import greenStripe from '@images/green-stripe.png';
import blueStripe from '@images/blue-stripe.png';
import redStripe from '@images/red-stripe.png';
import blackStripe from '@images/black-stripe.png';
import yellowBelt from '@images/yellow-belt.png';
import greenBelt from '@images/green-belt.png';
import blueBelt from '@images/blue-belt.png';
import redBelt from '@images/red-belt.png';
import blackBelt from '@images/black-belt-first.png';
import blackBelt2 from '@images/black-belt-second.png';
import blackBelt3 from '@images/black-belt-third.png';
import blackBelt4 from '@images/black-belt-fourth.png';
import blackBelt5 from '@images/black-belt-fifth.png';
import blackBelt6 from '@images/black-belt-sixth.png';

const Formas = () => {
	const belts = [
		yellowStripe,
		yellowBelt,
		greenStripe,
		greenBelt,
		blueStripe,
		blueBelt,
		redStripe,
		redBelt,
		blackStripe,
		blackBelt,
		blackBelt,
		blackBelt,
		blackBelt2,
		blackBelt2,
		blackBelt2,
		blackBelt3,
		blackBelt3,
		blackBelt3,
		blackBelt4,
		blackBelt4,
		blackBelt4,
		blackBelt5,
		blackBelt5,
		blackBelt6,
	];

	return (
		<>
			<NextSeo description="Significados de las formas de Taekwondo ITF" title="Significado de las Formas" />
			<div className="dojang-formas">
				<h1>Formas</h1>
				{Patterns.map((pattern, index) => {
					return (
						<div key={pattern.name} className={`${index <= 4 ? 'odd' : 'even'} dojang-pattern-grid`}>
							<h2>{pattern.name}</h2>
							<div className="dojang-pattern-img">
								<Image alt={`cinturon de ${pattern.name}`} layout="fill" src={belts[index]} />
							</div>
							<div className="dojang-pattern-diagram">
								<h3>Diagrama:</h3>
								<div className="dojang-pattern-diagram-img">
									<Image alt={`Diagrama de ${pattern.name}`} layout="fill" src={pattern.diagram} />
								</div>
							</div>
							<div className="dojang-pattern-description">
								<h3>Descripción: </h3>
								<p>{pattern.description}</p>
							</div>
							<div className="dojang-pattern-movements">
								<h3>Movimientos:</h3>
								<p>{pattern.movements}</p>
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
};

export default Formas;
