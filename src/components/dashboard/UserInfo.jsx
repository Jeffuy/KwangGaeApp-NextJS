import React, { useContext, useState } from 'react';

import { AuthContext } from '@context/AuthContext';

//import Link from 'next/link';

import Image from 'next/image';

const UserInfo = () => {
	const { user, logout, userData, userPoints, updateProfile } = useContext(AuthContext);

	const [edit, setEdit] = useState(false);

	const [displayName, setDisplayName] = useState(userData?.displayName);

	const handleSubmit = async () => {
		const success = await updateProfile({ displayName });
		if (success) {
			setEdit(false);
			console.log(user);
		}
	};

	return (
		<>
			<div className="dashboard-profile-card">
				{!edit && (
					<>
						{user?.displayName != null ? <h1> Hello {user?.displayName} </h1> : <h1> Hello {userData?.displayName} </h1>}

						<p onClick={() => setEdit(true)}>edit</p>
					</>
				)}
				{edit && (
					<>
						<input defaultValue={userData?.displayName} name="displayName" placeholder="Nombre" type="text" onChange={e => setDisplayName(e.target.value)} />
						<button onClick={() => handleSubmit()}>save</button>
					</>
				)}

				<div className="dashboard-profile-image">
					<Image priority alt={user?.photoURL ? user?.photoURL : userData.avatarUrl} height={100} src={user?.photoURL ? user?.photoURL : userData?.avatarUrl} width={100} />
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
