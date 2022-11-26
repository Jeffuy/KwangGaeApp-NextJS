import React, { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

import Image from 'next/image';

const Dashboard = () => {
	const { userData } = useContext(AuthContext);

	return (
		<>
			{userData ? (
				<div>
					<h1> Hello {userData.displayName} </h1>
					<p>
						Tu avatar es <Image priority alt={userData.avatarUrl} height={100} src={userData.avatarUrl} width={100} />
					</p>
					<p> Eres miembro desde Ayer </p>
				</div>
			) : (
				<h1> You are not logged in </h1>
			)}
			<button onClick={() => console.log(userData)}> HOLAAAA </button>
		</>
	);
};

export default Dashboard;
