import React from 'react';
import PrizeContainer from '@containers/PrizeContainer';
import { MarketContextProvider } from '@context/MarketContext';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers.js';

const Prize = () => {
	return (
		<>
			<NextSeo description="Sitio para comprar sobres de figuritas para el album de Taekwondo" title="Mercado" />
			<MarketContextProvider>
				<PrizeContainer cardList={stickers} />
			</MarketContextProvider>
		</>
	);
};

export default Prize;
