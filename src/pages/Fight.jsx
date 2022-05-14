import React from 'react';
import { NextSeo } from 'next-seo';
import FightContainer from '@containers/FightContainer';
import { FightProvider } from '@context/FightContext';

function Fight() {
	return (
		<>
			<NextSeo description="Arbitraje de combates de Taekwon-Do ITF" title="Arbitraje de lucha" />

			<FightProvider>
				<FightContainer />
			</FightProvider>
		</>
	);
}

export default Fight;
