import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';

import Link from 'next/link';

import Image from 'next/image';

const Dashboard = () => {
	const { user, loading, logout, userData, userDataLoading, userPoints, userPointsLoading } = useContext(AuthContext);

	console.log(userData);

	const router = useRouter();

	if (loading || userDataLoading || !userData || userPointsLoading) {
		setTimeout(() => {
			router.push('/login');
		}, 5000);
		return <div>Loading...</div>;
	}

	if (!user) {
		router.push('/login');
		return <p>Not logged in</p>;
	}

	if (user?.uid) {
		return (
			<div>
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

				<Link href="/test">
					<p>Test</p>
				</Link>

				<button onClick={() => console.log(userData)}> HOLAAAA </button>
			</div>
		);
	}
};

export default Dashboard;
