import React, { useContext } from 'react';
import { ChallengesContext } from '@context/ChallengesContext';

const ChallengeGet = () => {
	const { getChallenge } = useContext(ChallengesContext);

	return (
		<div>
			<button className="btn-special" onClick={getChallenge}>
				DAME UN DESAFÍO
			</button>
		</div>
	);
};

export default ChallengeGet;
