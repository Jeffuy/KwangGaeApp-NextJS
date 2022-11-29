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
					<div className="dashboard-edit-display-name">
						<input defaultValue={userData?.displayName} name="displayName" placeholder="Nombre" type="text" onChange={e => setDisplayName(e.target.value)} />
						<button className="dashboard-save-button" onClick={() => handleDisplayNameSubmit()}>
							Ok
						</button>
					</div>
				)}
				{!editPhotoUrl && !downloadUrlLoading && (
					<div className="dashboard-profile-image">
						<Image priority alt="Imagen de perfil" layout="fill" src={actualUrl ? actualUrl : 'https://i.imgur.com/uBUfUOx.png'} />
						<i className="fas fa-edit" onClick={() => setEditPhotoUrl(true)} />
					</div>
				)}
				{editPhotoUrl && (
					<div className="dashboard-custom-file">
						<label className="custom-file-upload" htmlFor="file-upload">
							<i className="fas fa-cloud-upload-alt" /> <p>Subir imagen</p>
							<input
								id="file-upload"
								type="file"
								onChange={e => {
									const file = e.target.files ? e.target.files[0] : undefined;
									setSelectedFile(file);
								}}
							/>
						</label>

						{uploading && <p>Subiendo...</p>}
						{!uploading && (
							<button className="dashboard-save-button" onClick={() => handleEditPhotoUrl()}>
								Ok
							</button>
						)}
					</div>
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
					{/* censurar primeras letras */}
					<p>{user?.email.substring(0, 3) + '***' + user?.email.substring(user?.email.indexOf('@'))}</p>
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
					<button onClick={logout}>Salir</button>
				</div>
			</div>
		</>
	);
};

export default UserInfo;
