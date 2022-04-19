import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightTime = () => {
	const { time } = useContext(FightContext);

	return (
		<div className="d-flex justify-content-center mb-2 h2">
			<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
			<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
			<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
		</div>
	);
};

export default FightTime;
