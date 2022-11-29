import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@context/AuthContext';

//import Link from 'next/link';

import Image from 'next/image';

const UserInfo = () => {
	const { user, logout, userData, userPoints, updateProfile, updateUserInfo, downloadUrl, downloadUrlLoading, upload, uploading } = useContext(AuthContext);

	const [editDisplayName, setEditDisplayName] = useState(false);
	const [editPhotoUrl, setEditPhotoUrl] = useState(false);

	const [actualUrl, setActualUrl] = useState(downloadUrl);

	const [displayName, setDisplayName] = useState(userData?.displayName);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleDisplayNameSubmit = async () => {
		updateUserInfo(displayName, user?.email, 'https://i.imgur.com/nmEa4QX.png');
		const success = await updateProfile({ displayName });
		if (success) {
			setEditDisplayName(false);
		}
	};

	const handleEditPhotoUrl = async () => {
		const success = upload(selectedFile);
		if (success) {
			updateProfile({ displayName, photoURL: downloadUrl });
			updateUserInfo(displayName, user?.email, downloadUrl);
			setEditPhotoUrl(false);
			setSelectedFile(null);
		}
	};

	useEffect(() => {
		const wait = setTimeout(() => {
			setActualUrl(downloadUrl);
		}, 1000);
		return () => clearTimeout(wait);
	});

	return (
		<>
			<div className="dashboard-profile-card">
				{!editDisplayName && (
					<>
						{user?.displayName != null ? <h1> Hello {user?.displayName} </h1> : <h1> Hello {userData?.displayName} </h1>}

						<p onClick={() => setEditDisplayName(true)}>edit</p>
					</>
				)}
				{editDisplayName && (
					<>
						<input defaultValue={userData?.displayName} name="displayName" placeholder="Nombre" type="text" onChange={e => setDisplayName(e.target.value)} />
						<button onClick={() => handleDisplayNameSubmit()}>save</button>
					</>
				)}
				{!editPhotoUrl && !downloadUrlLoading && (
					<div className="dashboard-profile-image" onClick={() => setEditPhotoUrl(true)}>
						<Image priority alt="Imagen de perfil" layout="fill" src={actualUrl ? actualUrl : 'https://i.imgur.com/uBUfUOx.png'} />
					</div>
				)}
				{editPhotoUrl && (
					<>
						<input
							type="file"
							onChange={e => {
								const file = e.target.files ? e.target.files[0] : undefined;
								setSelectedFile(file);
							}}
						/>
						{uploading && <p>Uploading...</p>}
						{!uploading && <button onClick={() => handleEditPhotoUrl()}>Save</button>}
					</>
				)}

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
