import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightButtonsPro = () => {
	const { status, setShowError, lastRed, lastBlue, redScore, blueScore, redWarning, blueWarning } = useContext(FightContext);

	return (
		<div className="fight-buttons__container">
			<div className="fight-buttons__column">
				<div className="fight-buttons-points">
					<button
						className="fight-buttons__button red"
						type="button"
						onClick={() => {
							status ? redScore(1) : setShowError(true);
						}}
					>
						1 Punto
					</button>

					<button
						className="fight-buttons__button red"
						type="button"
						onClick={() => {
							status ? redScore(2) : setShowError(true);
						}}
					>
						2 Puntos
					</button>

					<button
						className="fight-buttons__button red"
						type="button"
						onClick={() => {
							status ? redScore(3) : setShowError(true);
						}}
					>
						3 Puntos
					</button>
				</div>
				<div className="fight-buttons-others">
					<button
						className="fight-buttons__button red"
						type="button"
						onClick={() => {
							status ? redWarning() : setShowError(true);
						}}
					>
						Advertencia
					</button>
					<button
						className="fight-buttons__button red"
						type="button"
						onClick={() => {
							status ? redScore(-1) : setShowError(true);
						}}
					>
						Punto en contra
					</button>
					<button className="fight-buttons__button red" type="button" onClick={() => lastRed(status)}>
						Deshacer último
					</button>
				</div>
			</div>

			{/* // EMPIEZA AZUL */}

			<div className="fight-buttons__column">
				<div className="fight-buttons-points">
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={() => {
							status ? blueScore(1) : setShowError(true);
						}}
					>
						1 Punto
					</button>
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={() => {
							status ? blueScore(2) : setShowError(true);
						}}
					>
						2 Puntos
					</button>
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={() => {
							status ? blueScore(3) : setShowError(true);
						}}
					>
						3 Puntos
					</button>
				</div>
				<div className="fight-buttons-others">
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={() => {
							status ? blueWarning() : setShowError(true);
						}}
					>
						Advertencia
					</button>
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={() => {
							status ? blueScore(-1) : setShowError(true);
						}}
					>
						Punto en contra
					</button>
					<button className="fight-buttons__button blue" type="button" onClick={() => lastBlue(status)}>
						Deshacer último
					</button>
				</div>
			</div>
		</div>
	);
};

export default FightButtonsPro;
