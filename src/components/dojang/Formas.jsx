import React from 'react';
import { NextSeo } from 'next-seo';
import Patterns from '@scripts/data/patternInfo';
import Image from 'next/image';
import yellowStripe from '@images/yellow-stripe.png';

const Formas = () => {
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
								<Image alt={`cinturon de ${pattern.name}`} layout="fill" src={yellowStripe} />
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
