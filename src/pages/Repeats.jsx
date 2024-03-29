import React, { useContext } from 'react';
import { NextSeo } from 'next-seo';
import RepeatsContainer from '@containers/RepeatsContainer';
import { ExchangeContextProvider } from '@context/ExchangeContext';
// import { collection, getDocs } from '@firebase/firestore';
import { AuthContext } from '@context/AuthContext.js';
import { stickers } from '@scripts/data/addStickers';

// import { setStickers } from '@scripts/data/addStickers';
// import { db } from '../firebase/firebase.js';

function Repeats() {
	const { user, loading } = useContext(AuthContext);

	return (
		<>
			<NextSeo description="Figuritas del album de Taekwondo ITF" title="Repetidas" />
			<ExchangeContextProvider>
				<RepeatsContainer cardList={stickers} loading={loading} user={user} />
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
