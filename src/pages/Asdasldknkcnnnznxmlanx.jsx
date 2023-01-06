import React from 'react';
import PrizeContainer3 from '@containers/PrizeContainer3';
import { MarketContextProvider } from '@context/MarketContext';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers.js';

const Prize3 = () => {
	return (
		<>
			<NextSeo description="Sitio para comprar sobres de figuritas para el album de Taekwondo" title="Mercado" />
			<MarketContextProvider>
				<PrizeContainer3 cardList={stickers} />
			</MarketContextProvider>
		</>
	);
};

export default Prize3;
