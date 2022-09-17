import React, { useContext, useState } from 'react';
import { FightContext } from '@context/FightContext';
import FightButtonsPro from '@components/fight/FightButtonsPro';
import FightButtonsNoob from '@components/fight/FightButtonsNoob';
import FightTime from '@components/fight/FightTime';

const FigthButtons = () => {
	const { status, startFight, endFight, timerOn, pauseFight, time, resumeFight } = useContext(FightContext);

	const [pro, setPro] = useState(false);

	return (
		<>
			<FightTime />
			{!pro && status && <FightButtonsPro />}
			{pro && status && <FightButtonsNoob />}
			<div className="fight-buttons-container">
				{!timerOn && time < 20 && (
					<button type="button" onClick={status ? undefined : () => startFight()}>
						<i className="fa fa-play" />
					</button>
				)}
				{timerOn && (
					<>
						<button onClick={() => pauseFight()}>
							<i className="fa fa-pause" />
						</button>
						<button type="button" onClick={() => endFight()}>
							<i className="fa fa-stop" />
						</button>
					</>
				)}
				{!timerOn && time > 10 && (
					<>
						<button onClick={() => resumeFight()}>Resume</button>
					</>
				)}
			</div>
			<div className="fight-mode-container">
				<button
					type="button"
					onClick={() => {
						setPro(!pro);
					}}
				>
					Cambiar modo
				</button>
			</div>
		</>
	);
};

export default FigthButtons;
