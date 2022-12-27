import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs, query, orderBy, limit } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../../firebase/firebase.js';

import Image from 'next/image';

const MarketRanking = () => {
	const { loading, userDataLoading } = useContext(AuthContext);
	const usersRef = collection(db, 'users');
	const q = query(usersRef, orderBy('completedPercentage', 'desc'), limit(10));

	//const [showRanking, setShowRanking] = useState(false);

	const [info, setInfo] = useState([]);
	const [done, setDone] = useState(false);

	const readCollection = async () => {
		setInfo([]);
		const results = [];

		const usersCollection = await getDocs(q);
		/* sort by completedPercentage */

		usersCollection.forEach(doc => {
			if (doc.data().displayName !== 'Guillermo')
				results.push({
					displayName: doc.data().displayName,
					photoSmall: doc.data().photoSmall,
					completedPercentage: doc.data().completedPercentage,
				});
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
		// <section className="challenges-ranking">
		// 	{info === [] ? (
		// 		<div>LOADING...</div>
		// 	) : (
		// 		<>
		// 			<h2>¿Quién ha completado más el album?</h2>
		// 			<div className="dashboard-ranking">
		// 				<div className="dashboard-ranking-first">
		// 					<p>Posición</p>
		// 					<p>
		// 						<b> Nombre</b>
		// 					</p>
		// 					<p>Porcentaje</p>
		// 					<p>Avatar</p>
		// 				</div>

		// 				{info?.map((result, index) => (
		// 					<React.Fragment key={index}>
		// 						<div className="dashboard-ranking-item">
		// 							<p>{index + 1}</p>
		// 							<p>
		// 								<b>{result.displayName.length > 20 ? result.displayName.substring(0, 15) + '...' : result.displayName}</b>
		// 							</p>
		// 							<p>{result.completedPercentage}%</p>
		// 							<div className="ranking-photo">
		// 								<Image priority alt="foto de perfil" layout="fill" src={result.photoSmall ? result.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
		// 							</div>
		// 						</div>
		// 					</React.Fragment>
		// 				))}
		// 			</div>
		// 		</>
		// 	)}
		// </section>

		<div className="market-ranking-card market-ranking-one">
			<div className="market-ranking-profile">
				<div className="market-ranking-person market-ranking-second">
					<div className="market-ranking-num">#2</div>
					<div className="market-ranking-photo">
						<Image alt="" className="market-ranking-photo" layout="fill" src={info[1].photoSmall} />
					</div>
					<p className="market-ranking-link">{info[1].displayName}</p>
					<p className="market-ranking-points">{info[1].completedPercentage}%</p>
				</div>
				<div className="market-ranking-person market-ranking-first">
					<div className="market-ranking-num">#1</div>
					<i className="fas fa-crown" />
					<div className="market-ranking-photo">
						<Image alt="" className="market-ranking-photo" layout="fill" src={info[0].photoSmall} />
					</div>
					<p className="market-ranking-link">{info[0].displayName}</p>
					<p className="market-ranking-points">{info[0].completedPercentage}%</p>
				</div>
				<div className="market-ranking-person market-ranking-third">
					<div className="market-ranking-num">#3</div>
					<div className="market-ranking-photo">
						<Image alt="" className="market-ranking-photo" layout="fill" src={info[2].photoSmall} />
					</div>
					<p className="market-ranking-link">{info[2].displayName}</p>
					<p className="market-ranking-points">{info[2].completedPercentage}%</p>
				</div>
			</div>

			{info.map(
				(result, index) =>
					index > 2 && (
						<div key={index + 1} className="market-ranking-rest">
							<div className="market-ranking-others market-ranking-flex">
								<div className="market-ranking-rank">
									<p className="market-ranking-num">#{index + 1}</p>
								</div>
								<div className="market-ranking-info market-ranking-flex">
									<div className="market-ranking-p_img">
										<Image alt="" className="market-ranking-p_img" layout="fill" src={result.photoSmall} />
									</div>
									<p className="market-ranking-link">{result.displayName.length > 10 ? result.displayName.substring(0, 10) + '...' : result.displayName}</p>
									<p className="market-ranking-points">{result.completedPercentage}%</p>
								</div>
							</div>
						</div>
					)
			)}
		</div>
	);
};

export default MarketRanking;
