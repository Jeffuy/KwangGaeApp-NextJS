import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightResults = () => {
	const { status, red, blue, timerOn } = useContext(FightContext);

	return (
		<>
			<div className="container">
				{timerOn && status && <h3 className="mt-2 text-center text-white">Combate Iniciado</h3>}
				{!timerOn && status && <h3 className="mt-2 text-center text-white">Combate en Pausa</h3>}
				{!timerOn && !status && <h3 className="mt-2 text-center text-white">Combate en Finalizado</h3>}
			</div>
			<div className="container">
				<div className="row">
					<div className="col-6">
						<div className="text-center text-white" style={{ fontSize: 30, backgroundColor: 'red' }}>
							<p>{!status && red.score}</p>
							{!status && red.score > blue.score && (
								<p
									style={{
										fontSize: 15,
										backgroundColor: 'red',
										marginTop: '-22px',
									}}
								>
									Winner!
								</p>
							)}
						</div>
					</div>
					<div className="col-6">
						<div className="text-center text-white" style={{ fontSize: 30, backgroundColor: 'blue' }}>
							<p>{!status && blue.score}</p>
							{!status && blue.score > red.score && (
								<p
									style={{
										fontSize: 15,
										backgroundColor: 'blue',
										marginTop: '-22px',
									}}
								>
									Winner!
								</p>
							)}
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default FightResults;
