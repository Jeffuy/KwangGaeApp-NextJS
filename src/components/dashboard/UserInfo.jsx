import React, { useContext, useState, useEffect } from 'react';
import Compressor from 'compressorjs';
import { AuthContext } from '@context/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { storage, auth, db } from '../../firebase/firebase.js';
import { ref as storageRef, getDownloadURL, uploadBytes } from 'firebase/storage';
import { useUpdateProfile } from 'react-firebase-hooks/auth';
import { doc, setDoc } from 'firebase/firestore';

import Image from 'next/image';

const UserInfo = () => {
	const {
		user,
		loading,
		logout,
		userData,
		userDataLoading,
		userDataError,
		userPoints,
		userPointsLoading,
		userPointsError,

		userChallengesError,
		userChallengesLoading,

		valueLoading,
		valueError,
	} = useContext(AuthContext);

	const router = useRouter();

	//FIREBASE HOOKS //

	const profilePicture = storageRef(storage, `users/${user?.uid}/profilePicture.jpeg`);

	const profilePictureSmall = storageRef(storage, `users/${user?.uid}/profilePictureSmall.jpeg`);

	// eslint-disable-next-line no-unused-vars
	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

	const [editDisplayName, setEditDisplayName] = useState(false);
	const [editPhotoUrl, setEditPhotoUrl] = useState(false);

	const [displayName, setDisplayName] = useState(userData?.displayName);
	const [selectedFile, setSelectedFile] = useState(null);
	const [imageURL, setImageURL] = useState(userData?.photoURL);

	async function updateUserInfo(displayName) {
		await setDoc(doc(db, 'users', user.uid), { displayName }, { merge: true });
	}

	async function updatePhotoSmall(photoSmall) {
		await setDoc(doc(db, 'users', user.uid), { photoSmall }, { merge: true });
	}

	async function updatePhotoUrl(photoURL) {
		await setDoc(doc(db, 'users', user.uid), { photoURL }, { merge: true });
	}

	const upload = async (selectedFile, ref, size) => {
		if (selectedFile) {
			const result = await uploadBytes(ref, selectedFile).then(snapshot => {
				console.log('uploaded');
				getDownloadURL(snapshot.ref).then(url => {
					setImageURL(url);
					if (size == 'big') {
						updateProfile({ displayName, photoURL: url });
						updatePhotoUrl(url);
					} else if (size == 'small') {
						updatePhotoSmall(url);
					}
				});
			});
			if (result) {
				console.count('DONE');
			}
		}
	};

	const handleDisplayNameSubmit = async () => {
		updateUserInfo(displayName);
		const success = await updateProfile({ displayName });
		if (success) {
			setEditDisplayName(false);
			setDisplayName(userData?.displayName);
		}
	};

	const handleEditPhotoUrl = async () => {
		if (selectedFile) {
			const image = selectedFile;
			new Compressor(image, {
				quality: 0.2,
				success: compressedResult => {
					upload(compressedResult, profilePicture, 'big');
				},
			});

			const imageSmall = selectedFile;
			new Compressor(imageSmall, {
				quality: 0.05,
				success: compressedResult2 => {
					upload(compressedResult2, profilePictureSmall, 'small');
				},
			});
		}
		setSelectedFile(null);
		setEditPhotoUrl(false);
	};

	useEffect(() => {
		getDownloadURL(profilePicture).then(url => setImageURL(url));
		console.count('Efecto ');
	}, [userData]);

	if (loading || userDataLoading || userPointsLoading || valueLoading || userChallengesLoading) {
		return (
			<>
				<div>Loading...</div>
			</>
		);
	}

	if (updateProfileError || userDataError || userPointsError || valueError || userChallengesError) {
		return (
			<>
				<div>Hubo un error al actualizar el perfil</div>
			</>
		);
	}

	if (!user || !userData) {
		router.push('/login');
	}

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
				{!editPhotoUrl && (
					<div className="dashboard-profile-image">
						<Image priority alt="Imagen de perfil" layout="fill" src={imageURL || 'https://i.imgur.com/uBUfUOx.png'} />
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

						<button className="dashboard-save-button" onClick={() => handleEditPhotoUrl()}>
							Ok
						</button>
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
