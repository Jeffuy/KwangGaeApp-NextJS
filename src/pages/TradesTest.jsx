import React from 'react';
import { NextSeo } from 'next-seo';
//import TradesContainer from '@containers/TradesContainer';
import { ExchangeContextProvider } from '@context/ExchangeContext';
// import { collection, getDocs } from '@firebase/firestore';
//import { AuthContext } from '@context/AuthContext.js';
//import { stickers } from '@scripts/data/addStickers';

// import { setStickers } from '@scripts/data/addStickers';
// import { db } from '../firebase/firebase.js';

function Repeats() {
	//const { user, loading } = useContext(AuthContext);

	return (
		<>
			<NextSeo description="Cambios de Figuritas de Taekwon-Do ITF" title="Cambios" />
			<ExchangeContextProvider>
				<p>EN mantenimiento</p>
			</ExchangeContextProvider>
		</>
	);
}

export default Repeats;

// export const getStaticProps = async () => {
// 	const cardList = await cardList;
// 	return {
// 		props: {
// 			cardList,
// 		},
// 	};
// };
