import React, { useContext } from 'react';
import { ChallengesContext } from '@context/ChallengesContext';

const ChallengeRestart = () => {
	const { restartChallenges, restartPoints } = useContext(ChallengesContext);
	return (
		<div className="challenges-restart-container">
			<button
				type="button"
				onClick={() => {
					restartChallenges(), restartPoints();
				}}
			>
				REINICIAR TODO
			</button>

			<p>
				<b>(esta opción no se puede deshacer)</b>
			</p>
		</div>
	);
};

export default ChallengeRestart;
