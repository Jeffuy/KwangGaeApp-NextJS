import React from 'react';
import MarketContainer from '@containers/MarketContainer';
import { MarketContextProvider } from '@context/MarketContext';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers.js';

const Market = () => {
	return (
		<>
			<NextSeo description="Sitio para comprar sobres de figuritas para el album de Taekwondo" title="Mercado" />
			<MarketContextProvider>
				<MarketContainer cardList={stickers} />
			</MarketContextProvider>
		</>
	);
};

export default Market;
