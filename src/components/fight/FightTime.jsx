import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';

const FightTime = () => {
	const { time } = useContext(FightContext);

	return (
		<div className="container text-center row mb-5 text-white">
			<div className="col">
				<span style={{ fontSize: 20 }}>{time}</span>
			</div>
		</div>
	);
};

export default FightTime;
