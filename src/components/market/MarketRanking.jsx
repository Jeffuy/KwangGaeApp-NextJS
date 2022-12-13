import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { MarketContext } from '@context/MarketContext.js';
import { db } from '../../firebase/firebase.js';

import Image from 'next/image';

const MarketRanking = () => {
	const { loading, userDataLoading } = useContext(AuthContext);
	const { totalStickers, setLoadingPercentage } = useContext(MarketContext);

	//const [showRanking, setShowRanking] = useState(false);

	const [info, setInfo] = useState([]);
	const [done, setDone] = useState(false);

	const readCollection = async () => {
		setLoadingPercentage(true);
		setInfo([]);
		const results = [];
		let totalStickersQuantity = totalStickers.length;
		const querySnapshot2 = await getDocs(collection(db, 'users'));
		querySnapshot2.forEach(doc => {
			results.push({ displayName: doc.data().displayName, photoSmall: doc.data().photoSmall, uid: doc.data().uid });
		});
		for (let i = 0; i < results.length; i++) {
			try {
				let stickersOwned = 0;
				const querySnapshot = await getDoc(doc(db, 'userStickers', results[i].uid));
				const data = querySnapshot.data();
				if (data && results[i].uid != 'ouqD9z5Fy7OoYD4pz8FZoBR5YNv1') {
					for (let j = 1; j <= totalStickersQuantity; j++) {
						if (data['quantity' + j] > 0) {
							stickersOwned++;
						}
					}
				}

				let total = ((stickersOwned / totalStickersQuantity) * 100).toFixed(0);
				results[i].percentage = total;
			} catch (error) {
				console.log(error);
			}
		}

		results.sort((a, b) => b.percentage - a.percentage);
		setInfo(results);
		setDone(true);
		setLoadingPercentage(false);
	};

	useEffect(() => {
		const sub = readCollection();
		return () => sub;
	}, [done]);

	if (loading || userDataLoading) {
		return (
			<>
				<div>Loading...</div>
			</>
		);
	}

	return (
		<section className="challenges-ranking">
			<h2>¿Quién ha completado más el album?</h2>
			<div className="dashboard-ranking">
				<div className="dashboard-ranking-first">
					<p>Posición</p>
					<p>
						<b> Nombre</b>
					</p>
					<p>Porcentaje</p>
					<p>Avatar</p>
				</div>

				{info?.map((result, index) => (
					<div key={index} className="dashboard-ranking-item">
						{result.percentage > 0 ? (
							<>
								<p>{index + 1}</p>
								<p>
									<b>{result.displayName}</b>
								</p>
								<p>{result.percentage}%</p>
								<div className="ranking-photo">
									<Image priority alt="foto de perfil" layout="fill" src={result.photoSmall ? result.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
								</div>
							</>
						) : (
							<></>
						)}
					</div>
				))}
			</div>
		</section>
	);
};

export default MarketRanking;
