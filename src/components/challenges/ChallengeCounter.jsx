import React, { useContext } from 'react';
import { ChallengesContext } from '@context/ChallengesContext';

const ChallengeCounter = () => {
	const { challenges, totalPoints } = useContext(ChallengesContext);

	const completedChallenges = challenges.filter(challenge => !!challenge.completed).length;
	const totalChallenges = challenges.length;

	return (
		<h2 className="challenges-counter">
			Completado: <b>{completedChallenges}</b> de <b>{totalChallenges}</b> desafíos. <br /> Puntos totales: <b>{totalPoints}</b>.
		</h2>
	);
};

export default ChallengeCounter;
