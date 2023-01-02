import React from 'react';
import PrizeContainer2 from '@containers/PrizeContainer2';
import { MarketContextProvider } from '@context/MarketContext';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers.js';

const Prize2 = () => {
	return (
		<>
			<NextSeo description="Sitio para comprar sobres de figuritas para el album de Taekwondo" title="Mercado" />
			<MarketContextProvider>
				<PrizeContainer2 cardList={stickers} />
			</MarketContextProvider>
		</>
	);
};

export default Prize2;
