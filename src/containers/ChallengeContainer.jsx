import React, { useContext } from 'react';

import { ChallengesContext } from '@context/ChallengesContext';
import ChallengeItem from '@components/challenges/ChallengeItem';
import ChallengeCounter from '@components/challenges/ChallengeCounter';
import ChallengeGet from '@components/challenges/ChallengeGet';
import ChallengeRestart from '@components/challenges/ChallengeRestart';

const ChallengeContainer = () => {
	const { challenges, onCompleteChallenge, onDeleteChallenge } = useContext(ChallengesContext);

	return (
		<>
			<section className="challenges-container">
				<ChallengeCounter />

				{challenges.map(challenge => (
					<ChallengeItem
						key={challenge.text}
						completed={challenge.completed}
						points={challenge.points}
						text={challenge.text}
						type={challenge.type}
						onComplete={() => onCompleteChallenge(challenge.text)}
						onDelete={() => onDeleteChallenge(challenge.text)}
					/>
				))}

				<ChallengeGet />
				<ChallengeRestart />
			</section>
		</>
	);
};

export default ChallengeContainer;
