import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, getDoc, doc } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../../firebase/firebase.js';

import Image from 'next/image';

const MarketRanking = ({ cardList }) => {
	const { loading, userDataLoading } = useContext(AuthContext);

	//const [showRanking, setShowRanking] = useState(false);

	const [info, setInfo] = useState([]);
	const [done, setDone] = useState(false);

	const readCollection = async () => {
		setInfo([]);
		const results = [];
		let cardListQuantity = cardList?.length;
		const usersCollection = await getDocs(collection(db, 'users'));
		usersCollection.forEach(doc => {
			results.push({ displayName: doc.data().displayName, photoSmall: doc.data().photoSmall, uid: doc.data().uid });
		});
		for (let i = 0; i < results.length; i++) {
			try {
				let stickersOwned = 0;
				const usersStickersCollection = await getDoc(doc(db, 'userStickers', results[i].uid));
				const data = usersStickersCollection.data();
				if (data && results[i].uid != 'ouqD9z5Fy7OoYD4pz8FZoBR5YNv1') {
					stickersOwned = Object.keys(data).length / 2;
				}

				let total = ((stickersOwned / cardListQuantity) * 100).toFixed(0);
				results[i].percentage = total;
			} catch (error) {
				console.log(error);
			}
		}

		results.sort((a, b) => b.percentage - a.percentage);
		setInfo(results);
		setDone(true);
	};

	useEffect(() => {
		const sub = readCollection();
		return () => sub;
	}, [done]);

	if (loading || userDataLoading || info.length === 0) {
		return (
			<>
				<div className="lds-spinner">
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
					<div />
				</div>
			</>
		);
	}

	return (
		<section className="challenges-ranking">
			{info === [] ? (
				<div>LOADING...</div>
			) : (
				<>
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
							<React.Fragment key={index}>
								{result.percentage > 0 ? (
									<div className="dashboard-ranking-item">
										<p>{index + 1}</p>
										<p>
											<b>{result.displayName.length > 20 ? result.displayName.substring(0, 15) + '...' : result.displayName}</b>
										</p>
										<p>{result.percentage}%</p>
										<div className="ranking-photo">
											<Image priority alt="foto de perfil" layout="fill" src={result.photoSmall ? result.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
										</div>
									</div>
								) : (
									<></>
								)}
							</React.Fragment>
						))}
					</div>
				</>
			)}
		</section>
	);
};

export default MarketRanking;
