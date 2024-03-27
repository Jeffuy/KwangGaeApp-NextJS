import React, { useState } from 'react';
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
import { formasPriSegTerCuarto } from '@scripts/data/patternsList';

const PatternRoulette = () => {
	const [winningIndex, setWinningIndex] = useState(null);
	const [totalDegrees, setTotalDegrees] = useState(0);
	const [winningText, setWinningText] = useState('Gira la Ruleta!');
	const [selectedPatterns, setSelectedPatterns] = useState(
		formasPriSegTerCuarto.reduce((acc, forma) => {
			acc[forma] = true;
			return acc;
		}, {})
	);

	const handlePatternChange = forma => {
		setSelectedPatterns(prevSelectedPatterns => ({
			...prevSelectedPatterns,
			[forma]: !prevSelectedPatterns[forma]
		}));
	};

	const filteredFormas = formasPriSegTerCuarto.filter(forma => selectedPatterns[forma]);
	const segments = filteredFormas.length;
	const degreesPerSegment = 360 / segments;

	const beltImages = [
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
	];

	const spinWheel = () => {
		setWinningIndex(null);
		const spins = Math.floor(Math.random() * 10 + 4);
		const degrees = spins * 360;
		const extraDegrees = Math.floor(Math.random() * 360);
		const total = degrees + extraDegrees;
		setTotalDegrees(total);

		setTimeout(() => {
			const winningSegment = Math.floor((total % 360) / degreesPerSegment + 0.5) % segments;
			const adjustedWinningSegment = (segments - winningSegment) % segments;

			setWinningText(`La forma elegida es ${filteredFormas[adjustedWinningSegment]}!`);
			setWinningIndex(filteredFormas.findIndex(f => f === filteredFormas[adjustedWinningSegment]));
		}, 2100);
	};

	return (
		<div className="rouletteMain">
			<div className="patternChecklist">
				{formasPriSegTerCuarto.map((forma, index) => (
					<label key={index}>
						<input checked={!!selectedPatterns[forma]} type="checkbox" onChange={() => handlePatternChange(forma)} />
						{forma}
					</label>
				))}
			</div>
			<div className="rouletteContainer">
				<div className="spinBtn" onClick={spinWheel}>Spin</div>
				<div className="wheel" style={{ transform: `rotate(${totalDegrees}deg)` }}>
					{filteredFormas.map((forma, index) => {
						const isSelected = selectedPatterns[forma];
						const beltImageIndex = formasPriSegTerCuarto.findIndex(f => f === forma);
						const rotationDegree = degreesPerSegment * index;
						return (
							<div
								key={index}
								className={`rouletteOption ${index % 3 === 0 ? 'rouletteBackgroundBlack' : index % 3 === 1 ? 'rouletteBackgroundWhite' : 'rouletteBackgroundGray'} ${
									winningIndex === index && isSelected ? 'highlight' : ''
								}`}
								style={{
									'--i': index + 1,
									transform: `rotate(${rotationDegree}deg)`,
									transformOrigin: 'bottom right',
								}}>
								<figure className="rouletteBelt">
									<Image alt={forma} height={50} layout='fixed' src={beltImages[beltImageIndex % beltImages.length]} width={50} />
								</figure>
								<span>{forma}</span>
							</div>
						);
					})}
				</div>
			</div>
			<div className="resultContainer">
				<p id="resultText" >{winningText}</p>
			</div>
		</div>
	);
};

export default PatternRoulette;
