import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '@context/AuthContext';

import Image from 'next/image';

const Ranking = () => {
	const { userPointsLoading, getRankings, results } = useContext(AuthContext);

	//const [showRanking, setShowRanking] = useState(false);
	const [info, setInfo] = useState([]);

	useEffect(() => {
		getRankings();
		console.count('primero');
	}, []);

	useEffect(() => {
		const sub = () =>
			results.sort((a, b) => {
				return b.points - a.points;
			});
		console.count('segundo');
		setInfo(results);

		return () => {
			sub();
		};
	}, [results]);

	if (userPointsLoading) {
		return (
			<>
				<div>Loading...</div>
			</>
		);
	}

	return (
		<>
			<h3>Rankings</h3>

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
						<div>
							<Image priority alt={result.avatarUrl} height={40} src={result.avatarUrl} width={40} />
						</div>
					</div>
				))}
			</div>
		</>
	);
};

export default Ranking;
