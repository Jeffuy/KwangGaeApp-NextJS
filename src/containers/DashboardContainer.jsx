import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';
import UserInfo from '@components/dashboard/UserInfo';

import Image from 'next/image';

const DashboardContainer = () => {
	const { user, loading, logout, userData, userDataLoading, userPointsLoading, sortRankings, results } = useContext(AuthContext);

	const [showRanking, setShowRanking] = useState(false);

	const router = useRouter();

	if (loading || userDataLoading || userPointsLoading || userPointsLoading) {
		return (
			<>
				<div>Loading...</div>
				<button style={{ display: 'block', margin: '15px' }} onClick={logout}>
					Logout
				</button>
			</>
		);
	}

	if (!user || !userData) {
		router.push('/login');
		return <div>Loading...</div>;
	}

	const handleShowRankings = async () => {
		await sortRankings();
		setShowRanking(true);
	};

	if (user?.uid) {
		return (
			<section className="dashboard-main">
				<UserInfo />

				<h3>Rankings</h3>
				{showRanking ? (
					<>
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
							{results?.map((result, index) => (
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
				) : (
					<div>
						<button onClick={() => handleShowRankings()}>Mostrar rankings</button>
					</div>
				)}

				<button onClick={() => setShowRanking(!showRanking)}> HOLAAAA </button>
			</section>
		);
	}
};

export default DashboardContainer;
