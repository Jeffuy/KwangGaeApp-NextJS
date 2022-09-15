import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightResults = () => {
	const { status, red, blue, timerOn } = useContext(FightContext);

	return (
		<>
			<div className="fight-status__container">
				{timerOn && status && <h3>Combate Iniciado</h3>}
				{!timerOn && status && <h3>Combate en Pausa</h3>}
				{!timerOn && !status && <h3>Combate en Finalizado</h3>}
			</div>
			{!status && (
				<div className="fight-results__container">
					<div className="fight-results__container-result red">
						<p>{!status && red.score}</p>
						{!status && red.score > blue.score && <p className="winner">Winner!</p>}
					</div>
					<div className="fight-results__container-result blue">
						<p>{!status && blue.score}</p>
						{!status && blue.score > red.score && <p className="winner">Winner!</p>}
					</div>
				</div>
			)}
		</>
	);
};

export default FightResults;
