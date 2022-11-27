import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';

import Link from 'next/link';

import Image from 'next/image';

const Dashboard = () => {
	const { user, loading, logout, userData, userDataLoading, userPoints, userPointsLoading, sortRankings, results } = useContext(AuthContext);

	const [showRanking, setShowRanking] = useState(false);

	const router = useRouter();

	if (loading || userDataLoading || !userData || userPointsLoading) {
		setTimeout(() => {
			router.push('/login');
		}, 5000);
		return <div>Loading...</div>;
	}

	const handleShowRankings = async () => {
		await sortRankings();
		setShowRanking(true);
	};

	if (!user) {
		router.push('/login');
		return <p>Not logged in</p>;
	}

	if (user?.uid) {
		return (
			<section className="dashboard-main">
				<h1> Hello {userData.displayName} </h1>
				<p>
					Tu avatar es <Image priority alt={userData.avatarUrl} height={100} src={userData.avatarUrl} width={100} />
				</p>
				<p>
					Eres miembro desde el {userData.createdAt.toDate().toLocaleDateString('es-ES')} a las{' '}
					{userData.createdAt.toDate().toLocaleTimeString('es-ES', {
						hour: '2-digit',
						minute: '2-digit',
					})}
				</p>

				{userPoints?.points ? (
					<p>
						Tienes <b>{userPoints.points}</b> puntos por desafíos completados!
					</p>
				) : (
					<>
						<p style={{ display: 'inline' }}>No tienes puntos por desafíos completados. </p>

						<Link passHref href="/Challenge">
							<p style={{ cursor: 'pointer', display: 'inline' }}>¡Comienza a completar desafíos!</p>
						</Link>
					</>
				)}
				<button style={{ display: 'block' }} onClick={logout}>
					Logout
				</button>

				<Link passhref href="/test">
					<a href="">Test</a>
				</Link>

				<h3>Rankings</h3>
				{showRanking ? (
					<>
						<h2>Ranking de puntos</h2>
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

export default Dashboard;
