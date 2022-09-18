import React, { createContext, useState } from 'react';
import useScoreHook from '@hooks/useScoreHook';
import useTimerHook from '@hooks/useTimerHook';
import * as gtag from '../lib/gtag';

const FightContext = createContext();

function FightProvider(props) {
	const [showError, setShowError] = useState(false);
	//const [runTime, setRunTime] = useState('');
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

	const { time, setTimerOn, setTime, timerOn } = useTimerHook();

	const startFight = () => {
		setStatus(true);
		blueRestart();
		redRestart();
		setTimerOn(true);
		gtag.event({
			action: 'start_fight',
			category: 'fight',
			label: 'fight started',
			value: 'Playing cards',
		});
	};

	const pauseFight = () => {
		setTimerOn(false);
	};

	const resumeFight = () => {
		setTimerOn(true);
	};

	const endFight = () => {
		blueFinalScore();
		redFinalScore();
		setStatus(false);
		setTimerOn(false);
		setTime(0);
	};

	return (
		<FightContext.Provider
			value={{
				time,
				timerOn,
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
				pauseFight,
				resumeFight,
			}}
		>
			{props.children}
		</FightContext.Provider>
	);
}

export { FightContext, FightProvider };
