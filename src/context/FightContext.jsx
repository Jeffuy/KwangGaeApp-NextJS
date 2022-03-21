import React, { createContext, useState } from 'react';
import useScoreHook from '@hooks/useScoreHook';
import timer from '@scripts/timer';

const FightContext = createContext();

function FightProvider(props) {
	const [time, setTime] = useState('Presiona Start');
	const [showError, setShowError] = useState(false);
	const [runTime, setRunTime] = useState('');
	const [status, setStatus] = useState(false);

	const {
		item: red,
		lastItem: lastRed,
		addPoints: redScore,
		addWarning: redWarning,
		restartScore: redRestart,
		itemFinalScore: redFinalScore,
	} = useScoreHook({
		score: 0,
		last: 0,
		warnings: 0,
		discounts: 0,
	});

	const {
		item: blue,
		lastItem: lastBlue,
		addPoints: blueScore,
		addWarning: blueWarning,
		restartScore: blueRestart,
		itemFinalScore: blueFinalScore,
	} = useScoreHook({
		score: 0,
		last: 0,
		warnings: 0,
		discounts: 0,
	});

	const startFight = () => {
		timer.start();
		setStatus(true);

		blueRestart();
		redRestart();

		const updateTime = () => {
			const time = timer.write();
			setTime(time);
		};
		setRunTime(setInterval(updateTime, 10));
	};

	const endFight = () => {
		blueFinalScore();
		redFinalScore();

		setStatus(false);
		setRunTime(clearInterval(runTime));
		setTime(time);
		timer.reset();

		console.log(red, blue);
	};

	return (
		<FightContext.Provider
			value={{
				time,
				showError,
				startFight,
				endFight,
				status,
				red,
				blue,
				lastRed,
				lastBlue,
				redScore,
				blueScore,
				redWarning,
				blueWarning,
				setShowError,
			}}
		>
			{props.children}
		</FightContext.Provider>
	);
}

export { FightContext, FightProvider };
