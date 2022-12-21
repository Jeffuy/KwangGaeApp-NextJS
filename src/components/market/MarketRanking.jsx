import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../../firebase/firebase.js';

import Image from 'next/image';

const MarketRanking = () => {
	const { loading, userDataLoading } = useContext(AuthContext);
	const usersRef = collection(db, 'users');
	const q = query(usersRef, orderBy('completedPercentage', 'desc'), limit(11));

	//const [showRanking, setShowRanking] = useState(false);

	const [info, setInfo] = useState([]);
	const [done, setDone] = useState(false);

	const readCollection = async () => {
		setInfo([]);
		const results = [];

		const usersCollection = await getDocs(q);
		/* sort by completedPercentage */

		usersCollection.forEach(doc => {
			if (doc.data().displayName !== 'Guillermo') results.push({ displayName: doc.data().displayName, photoSmall: doc.data().photoSmall, completedPercentage: doc.data().completedPercentage });
		});

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
								<div className="dashboard-ranking-item">
									<p>{index + 1}</p>
									<p>
										<b>{result.displayName.length > 20 ? result.displayName.substring(0, 15) + '...' : result.displayName}</b>
									</p>
									<p>{result.completedPercentage}%</p>
									<div className="ranking-photo">
										<Image priority alt="foto de perfil" layout="fill" src={result.photoSmall ? result.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
									</div>
								</div>
							</React.Fragment>
						))}
					</div>
				</>
			)}
		</section>
	);
};

export default MarketRanking;
