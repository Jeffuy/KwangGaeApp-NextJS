import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightButtonsPro = () => {
	const { status, setShowError, lastRed, lastBlue, redScore, blueScore, redWarning, blueWarning } = useContext(FightContext);

	return (
		<div className="container d-flex justify-content-around">
			<div className="d-flex flex-column justify-content-around m-2 ">
				<button
					className="btn btn-danger btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? redScore(1) : setShowError(true);
					}}
				>
					1 Punto
				</button>

				<button
					className="btn btn-danger btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? redScore(2) : setShowError(true);
					}}
				>
					2 Puntos
				</button>

				<button
					className="btn btn-danger btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? redScore(3) : setShowError(true);
					}}
				>
					3 Puntos
				</button>
				<button
					className="btn btn-danger btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? redWarning() : setShowError(true);
					}}
				>
					Advertencia
				</button>
				<button
					className="btn btn-danger btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? redScore(-1) : setShowError(true);
					}}
				>
					-1 Punto
				</button>
				<button className="btn btn-danger btn-lg mb-4" type="button" onClick={() => lastRed(status)}>
					Deshacer
				</button>
			</div>

			{/* // EMPIEZA AZUL */}

			<div className="d-flex flex-column justify-content-around m-2">
				<button
					className="btn btn-primary btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? blueScore(1) : setShowError(true);
					}}
				>
					1 Punto
				</button>
				<button
					className="btn btn-primary btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? blueScore(2) : setShowError(true);
					}}
				>
					2 Puntos
				</button>
				<button
					className="btn btn-primary btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? blueScore(3) : setShowError(true);
					}}
				>
					3 Puntos
				</button>
				<button
					className="btn btn-primary btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? blueWarning() : setShowError(true);
					}}
				>
					Advertencia
				</button>
				<button
					className="btn btn-primary btn-lg mb-4"
					type="button"
					onClick={() => {
						status ? blueScore(-1) : setShowError(true);
					}}
				>
					-1 Punto
				</button>
				<button className="btn btn-primary btn-lg mb-4" type="button" onClick={() => lastBlue(status)}>
					Deshacer
				</button>
			</div>
		</div>
	);
};

export default FightButtonsPro;
