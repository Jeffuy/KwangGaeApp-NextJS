import React from 'react';
import ChallengeContainer from '../containers/ChallengeContainer';
import { ChallengesProvider } from '@context/ChallengesContext';

function Challenge() {
	return (
		<ChallengesProvider>
			<ChallengeContainer />
		</ChallengesProvider>
	);
}

export default Challenge;
