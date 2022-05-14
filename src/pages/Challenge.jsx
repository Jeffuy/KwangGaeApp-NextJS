import React from 'react';
import { NextSeo } from 'next-seo';
import ChallengeContainer from '../containers/ChallengeContainer';
import { ChallengesProvider } from '@context/ChallengesContext';

function Challenge() {
	return (
		<>
			<NextSeo description="Desafíos para combates de Taekwon-Do ITF" title="Desafíos de lucha" />
			<ChallengesProvider>
				<ChallengeContainer />
			</ChallengesProvider>
		</>
	);
}

export default Challenge;
