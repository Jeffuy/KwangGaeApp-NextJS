import React from 'react';
import PrizeContainer4 from '@containers/PrizeContainer4';
import { MarketContextProvider } from '@context/MarketContext';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers.js';

const Prize3 = () => {
	return (
		<>
			<NextSeo description="Sitio para comprar sobres de figuritas para el album de Taekwondo" title="Mercado" />
			<MarketContextProvider>
				<PrizeContainer4 cardList={stickers} />
			</MarketContextProvider>
		</>
	);
};

export default Prize3;
