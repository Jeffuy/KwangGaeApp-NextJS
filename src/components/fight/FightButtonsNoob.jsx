import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightButtonsNoob = () => {
	const { status, setShowError, lastRed, lastBlue, redScore, blueScore, redWarning, blueWarning } = useContext(FightContext);

	return (
		<div className="container d-flex justify-content-around">
			<div className="d-flex flex-column justify-content-around m-2 ">
				<button
					className="btn btn-danger btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? redScore(1) : setShowError(true);
					}}
				>
					Golpe de puño
				</button>

				<button
					className="btn btn-danger btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? redScore(2) : setShowError(true);
					}}
				>
					Patada zona media
				</button>

				<button
					className="btn btn-danger btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? redScore(3) : setShowError(true);
					}}
				>
					Patada zona alta
				</button>
				<button
					className="btn btn-danger btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? redWarning() : setShowError(true);
					}}
				>
					Advertencia
				</button>
				<button
					className="btn btn-danger btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? redScore(-1) : setShowError(true);
					}}
				>
					Punto en contra
				</button>
				<button className="btn btn-danger btn-lg mb-1" type="button" onClick={() => lastRed(status)}>
					Deshacer último
				</button>
			</div>

			{/* // EMPIEZA AZUL */}

			<div className="d-flex flex-column justify-content-around m-2">
				<button
					className="btn btn-primary btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? blueScore(1) : setShowError(true);
					}}
				>
					Golpe de puño
				</button>
				<button
					className="btn btn-primary btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? blueScore(2) : setShowError(true);
					}}
				>
					Patada zona media
				</button>
				<button
					className="btn btn-primary btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? blueScore(3) : setShowError(true);
					}}
				>
					Patada zona alta
				</button>
				<button
					className="btn btn-primary btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? blueWarning() : setShowError(true);
					}}
				>
					Advertencia
				</button>
				<button
					className="btn btn-primary btn-lg mb-1"
					type="button"
					onClick={() => {
						status ? blueScore(-1) : setShowError(true);
					}}
				>
					Punto en contra
				</button>
				<button className="btn btn-primary btn-lg mb-1" type="button" onClick={() => lastBlue(status)}>
					Deshacer último
				</button>
			</div>
		</div>
	);
};

export default FightButtonsNoob;
