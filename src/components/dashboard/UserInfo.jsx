import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@context/AuthContext';
import Link from 'next/link';

import Image from 'next/image';

const UserInfo = () => {
	const { user, logout, userData, userPoints, updateProfile, updateUserInfo, downloadUrl, downloadUrlLoading, upload, uploading } = useContext(AuthContext);

	const [editDisplayName, setEditDisplayName] = useState(false);
	const [editPhotoUrl, setEditPhotoUrl] = useState(false);

	const [actualUrl, setActualUrl] = useState(downloadUrl);

	const [displayName, setDisplayName] = useState(userData?.displayName);
	const [selectedFile, setSelectedFile] = useState(null);

	const handleDisplayNameSubmit = async () => {
		updateUserInfo(displayName, user?.email);
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
					<div>
						{user?.displayName != null ? <h1> Hola {user?.displayName} </h1> : <h1> Hola {userData?.displayName} </h1>}
						<i className="fas fa-edit" onClick={() => setEditDisplayName(true)} />
					</div>
				)}
				{editDisplayName && (
					<>
						<input defaultValue={userData?.displayName} name="displayName" placeholder="Nombre" type="text" onChange={e => setDisplayName(e.target.value)} />
						<button onClick={() => handleDisplayNameSubmit()}>save</button>
					</>
				)}
				{!editPhotoUrl && !downloadUrlLoading && (
					<div className="dashboard-profile-image">
						<Image priority alt="Imagen de perfil" layout="fill" src={actualUrl ? actualUrl : 'https://i.imgur.com/uBUfUOx.png'} />
						<i className="fas fa-edit" onClick={() => setEditPhotoUrl(true)} />
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
					<p>
						Puntos por <Link href="/Challenge"> desafíos:</Link>
					</p>
					{userPoints?.points ? (
						<p>{userPoints.points}</p>
					) : (
						<>
							<p style={{ display: 'inline-block' }}>0 </p>
						</>
					)}
					<button onClick={logout}>Logout</button>
				</div>
			</div>
		</>
	);
};

export default UserInfo;
