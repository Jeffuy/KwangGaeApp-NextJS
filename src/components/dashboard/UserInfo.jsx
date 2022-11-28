import React, { useContext } from 'react';

import { AuthContext } from '@context/AuthContext';

//import Link from 'next/link';

import Image from 'next/image';

const UserInfo = () => {
	const { logout, userData, userPoints } = useContext(AuthContext);

	return (
		<>
			<div className="dashboard-profile-card">
				<h1> Hello {userData?.displayName} </h1>
				<div className="dashboard-profile-image">
					<Image priority alt={userData?.avatarUrl} layout="fill" src={userData?.avatarUrl} />
				</div>
				<div className="dashboard-profile-grid">
					<p>Miembro desde:</p>
					<p>
						{userData?.createdAt.toDate().toLocaleDateString('es-ES')}
						{/* a las{' '}
						{userData?.createdAt.toDate().toLocaleTimeString('es-ES', {
							hour: '2-digit',
							minute: '2-digit',
						})} */}
					</p>
					<p>Correo electrónico:</p>
					<p>{userData?.email}</p>
					<p>Puntos por desafíos:</p>
					{userPoints?.points ? (
						<p>{userPoints.points}</p>
					) : (
						<>
							<p style={{ display: 'inline-block' }}>0 </p>

							{/* <Link passHref href="/Challenge">
							<button>
								<a style={{ cursor: 'pointer', display: 'inline-block', margin: '10px' }}>¡Comienza a completar desafíos!</a>
							</button>
						</Link> */}
						</>
					)}
				</div>
			</div>
			<button style={{ display: 'block', margin: '15px' }} onClick={logout}>
				Logout
			</button>
		</>
	);
};

export default UserInfo;
