import React from 'react';
import MarketContainer from '@containers/MarketContainer';
import { MarketContextProvider } from '@context/MarketContext';

const Market = () => {
	return (
		<MarketContextProvider>
			<MarketContainer />
		</MarketContextProvider>
	);
};

export default Market;
