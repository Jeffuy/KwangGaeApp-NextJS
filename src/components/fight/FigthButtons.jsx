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
			{pro && <FightButtonsPro />}
			{!pro && <FightButtonsNoob />}
			<FightTime />
			<div className="d-flex justify-content-center">
				{!timerOn && time < 20 && (
					<button className="btn btn-dark btn-lg mt-1 mb-3" type="button" onClick={status ? undefined : () => startFight()}>
						<i className="fa fa-play" />
					</button>
				)}
				{timerOn && (
					<>
						<button className="btn btn-dark btn-lg mt-1 mb-3 m-3" onClick={() => pauseFight()}>
							<i className="fa fa-pause" />
						</button>
						<button className="btn btn-dark btn-lg mt-1 mb-3 m-3" type="button" onClick={() => endFight()}>
							<i className="fa fa-stop" />
						</button>
					</>
				)}
				{!timerOn && time > 10 && (
					<>
						<button className="btn btn-dark btn-lg mt-1 mb-3" onClick={() => resumeFight()}>
							Resume
						</button>
					</>
				)}
			</div>
			<div className="d-flex justify-content-center">
				<button
					className="btn btn-warning btn-sm mb-4"
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
