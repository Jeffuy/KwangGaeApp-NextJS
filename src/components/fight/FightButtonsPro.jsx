import React, { useContext, useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { FightContext } from '@context/FightContext';

const FightButtonsPro = () => {
	const { status, setShowError, lastRed, lastBlue, redScore, blueScore, redWarning, blueWarning } = useContext(FightContext);
	const [showPointRed1, setShowPointRed1] = useState({ x: 0, y: 0, show: false });
	const [showPointRed2, setShowPointRed2] = useState({ x: 0, y: 0, show: false });
	const [showPointRed3, setShowPointRed3] = useState({ x: 0, y: 0, show: false });
	const [showPointBlue1, setShowPointBlue1] = useState({ x: 0, y: 0, show: false });
	const [showPointBlue2, setShowPointBlue2] = useState({ x: 0, y: 0, show: false });
	const [showPointBlue3, setShowPointBlue3] = useState({ x: 0, y: 0, show: false });

	const handleClick = (event, point, updateScore, setShowPoint) => {
		if (!status) {
			setShowError(true);
			return;
		}

		const { pageX, pageY } = event;
		updateScore(point);
		setShowPoint({ x: pageX, y: pageY, show: true });

		setTimeout(() => {
			setShowPoint((prevState) => ({ ...prevState, show: false }));
		}, 5000);
	};

	const FloatingText = ({ x, y, text, show }) => (
		<CSSTransition
			in={show} // Reemplazar 'in' con la propiedad 'show' recibida
			timeout={100000}
			classNames="float"
			unmountOnExit
		>
			<div
				
				style={{
					position: "absolute",
					left: x + "px",
					top: y + "px",
					fontSize: "1.5rem",
					fontWeight: "bold",
					color: "rgba(0, 0, 0, 0.8)",
					pointerEvents: "none",
					zIndex: 1000,
				}}
			>
				{text}
			</div>
		</CSSTransition>
	);

	return (
		<div className="fight-buttons__container">

			{showPointRed1.show && (
				<TransitionGroup>
					<FloatingText key="red1" x={showPointRed1.x} y={showPointRed1.y} text="+1" show={showPointRed1.show} />
				</TransitionGroup>
			)}
			{showPointRed2.show && (
				<TransitionGroup>
					<FloatingText key="red2" x={showPointRed2.x} y={showPointRed2.y} text="+2" show={showPointRed2.show} />
				</TransitionGroup>
			)}
			{showPointRed3.show && (
				<TransitionGroup>
					<FloatingText key="red3" x={showPointRed3.x} y={showPointRed3.y} text="+3" show={showPointRed3.show} />
				</TransitionGroup>
			)}
			{showPointBlue1.show && (
				<TransitionGroup>
					<FloatingText key="blue1" x={showPointBlue1.x} y={showPointBlue1.y} text="+1" show={showPointBlue1.show} />
				</TransitionGroup>
			)}
			{showPointBlue2.show && (
				<TransitionGroup>
					<FloatingText key="blue2" x={showPointBlue2.x} y={showPointBlue2.y} text="+2" show={showPointBlue2.show} />
				</TransitionGroup>
			)}
			{showPointBlue3.show && (
				<TransitionGroup>
					<FloatingText key="blue3" x={showPointBlue3.x} y={showPointBlue3.y} text="+3" show={showPointBlue3.show} />
				</TransitionGroup>
			)}

			<div className="fight-buttons__column">
				<div className="fight-buttons-points">
					<button
						className="fight-buttons__button red"
						type="button"
						onClick={(event) => handleClick(event, 1, redScore, setShowPointRed1)}
					>
						1 Punto
					</button>

					<button
						className="fight-buttons__button red"
						type="button"
						onClick={(event) => handleClick(event, 2, redScore, setShowPointRed2)}
					>
						2 Puntos
					</button>

					<button
						className="fight-buttons__button red"
						type="button"
						onClick={(event) => handleClick(event, 3, redScore, setShowPointRed3)}
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
						onClick={(event) => handleClick(event, 1, blueScore, setShowPointBlue1)}
					>
						1 Punto
					</button>
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={(event) => handleClick(event, 2, blueScore, setShowPointBlue2)}
					>
						2 Puntos
					</button>
					<button
						className="fight-buttons__button blue"
						type="button"
						onClick={(event) => handleClick(event, 3, blueScore, setShowPointBlue3)}
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
