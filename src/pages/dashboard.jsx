import React, { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';

import Image from 'next/image';

const Dashboard = () => {
	const { userData, firebaseLogout, isLogged } = useContext(AuthContext);

	const router = useRouter();

	const logout = () => {
		firebaseLogout();
		router.push('/login');
	};

	useEffect(() => {
		if (!isLogged) {
			router.push('/login');
		}
	}, []);

	return (
		<>
			{isLogged ? (
				<div>
					<h1> Hello {userData.displayName} </h1>
					<p>
						Tu avatar es <Image priority alt={userData.avatarUrl} height={100} src={userData.avatarUrl} width={100} />
					</p>
					<p> Eres miembro desde Ayer </p>
					<button onClick={() => logout()}> Logout </button>
				</div>
			) : (
				<> Loading </>
			)}
			<button onClick={() => console.log(userData)}> HOLAAAA </button>
		</>
	);
};

export default Dashboard;
