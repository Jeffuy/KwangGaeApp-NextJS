import React, { useState } from 'react';
import PatternStartMatchButton from '@components/pattern/PatternStartMatchButton';
import PatternMatchStatus from '@components/pattern/PatternMatchStatus';
import PatternResults from '@components/pattern/PatternResults';
import PatternLevelOne from '@components/pattern/PatternLevelOne';
import PatternLevelTwo from '@components/pattern/PatternLevelTwo';
import PatternLevelThree from '@components/pattern/PatternLevelThree';
import useScoreHook from '@hooks/useScoreHook';

const Pattern = () => {
	const {
		item: red,
		lastItem: redLast,
		addPoints: redScore,
		restartScore: restartRed,
	} = useScoreHook({
		score: 10,
		last: 0,
	});

	const {
		item: blue,
		lastItem: blueLast,
		addPoints: blueScore,
		restartScore: restartBlue,
	} = useScoreHook({
		score: 10,
		last: 0,
	});

	const [matchLevel, setMatchLevel] = useState(0);
	const [matchStatus, setMatchStatus] = useState('Match Ended');

	const [redQuantity, setRedQuantity] = useState(0);
	const [blueQuantity, setBlueQuantity] = useState(0);

	const changeLevel = (lvlInt, lvlStr) => {
		setMatchLevel(lvlInt);
		setMatchStatus(lvlStr);
		setRedQuantity(0);
		setBlueQuantity(0);

		if (lvlInt === 1) {
			restartRed();
			restartBlue();
		}
	};

	return (
		<section className="container d-flex flex-column min-vh-100">
			<PatternMatchStatus status={matchStatus} />
			{matchLevel == 0 && <PatternResults blue={blue} red={red} />}
			{matchLevel == 0 && <PatternStartMatchButton changeLevel={changeLevel} />}
			{matchLevel == 1 && (
				<PatternLevelOne
					blue={blue}
					blueLast={blueLast}
					blueQuantity={blueQuantity}
					blueScore={blueScore}
					changeLevel={changeLevel}
					red={red}
					redLast={redLast}
					redQuantity={redQuantity}
					redScore={redScore}
					setBlueQuantity={setBlueQuantity}
					setRedQuantity={setRedQuantity}
				/>
			)}
			{matchLevel == 2 && (
				<PatternLevelTwo
					blue={blue}
					blueLast={blueLast}
					blueQuantity={blueQuantity}
					blueScore={blueScore}
					changeLevel={changeLevel}
					red={red}
					redLast={redLast}
					redQuantity={redQuantity}
					redScore={redScore}
					setBlueQuantity={setBlueQuantity}
					setRedQuantity={setRedQuantity}
				/>
			)}
			{matchLevel == 3 && (
				<PatternLevelThree
					blue={blue}
					blueLast={blueLast}
					blueQuantity={blueQuantity}
					blueScore={blueScore}
					changeLevel={changeLevel}
					red={red}
					redLast={redLast}
					redQuantity={redQuantity}
					redScore={redScore}
					setBlueQuantity={setBlueQuantity}
					setRedQuantity={setRedQuantity}
				/>
			)}
		</section>
	);
};

export default Pattern;
