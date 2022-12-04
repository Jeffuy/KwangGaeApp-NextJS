import React, { useContext, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../../firebase/firebase.js';


import Image from 'next/image';

const Ranking = () => {
	const { loading, userDataLoading } = useContext(AuthContext);

	//const [showRanking, setShowRanking] = useState(false);
	const [points, setPoints] = useState([]);
	const [info, setInfo] = useState([]);
	const [done, setDone] = useState(false);

	const readCollection = async () => {
		setPoints([]);
		setInfo([]);
		const querySnapshot = await getDocs(collection(db, 'userPoints'));
		querySnapshot.forEach(doc => {
			setPoints(prevPoints => [...prevPoints, doc.data()]);
		});
		const results = [];
		const querySnapshot2 = await getDocs(collection(db, 'users'));
		querySnapshot2.forEach(doc => {
			for (let i = 0; i < points.length; i++) {
				if (points[i].uid === doc.data().uid) {
					results.push({ displayName: doc.data().displayName, photoSmall: doc.data().photoSmall, points: points[i].points });
				}
			}
		});
		results.sort((a, b) => b.points - a.points);
		setInfo(results);
		setDone(true);
	};

	useEffect(() => {
		readCollection();
		console.count('primero');
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
			<h2>Ranking de puntos de Challenges</h2>
			<div className="dashboard-ranking">
				<div className="dashboard-ranking-first">
					<p>Posición</p>
					<p>
						<b> Nombre</b>
					</p>
					<p>Puntos</p>
					<p>Avatar</p>
				</div>

				{info?.map((result, index) => (
					<div key={index} className="dashboard-ranking-item">
						<p>{index + 1}</p>
						<p>
							<b>{result.displayName}</b>
						</p>
						<p>{result.points}</p>
						<div className="ranking-photo">
							<Image priority alt="foto de perfil" layout="fill" src={result.photoSmall ? result.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
						</div>
					</div>
				))}
			</div>
		</section>
	);
};

export default Ranking;
