import React from 'react';
import FightContainer from '@containers/FightContainer';
import { FightProvider } from '@context/FightContext';

function Fight() {
	return (
		<FightProvider>
			<FightContainer />
		</FightProvider>
	);
}

export default Fight;
