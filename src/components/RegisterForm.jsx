import React, { useState, useEffect } from 'react';
import { useCreateUserWithEmailAndPassword, useUpdateProfile, useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'next/router';
import { auth, db } from '../firebase/firebase.js';
import { collection, doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

const RegisterForm = () => {
	const router = useRouter();

	// FIREBASE HOOKS //

	const [user, loading] = useAuthState(auth);
	// eslint-disable-next-line no-unused-vars
	const [createUserWithEmailAndPassword, createLoading, userReg, error] = useCreateUserWithEmailAndPassword(auth);
	const [updateProfile] = useUpdateProfile(auth);
	const usersRef = collection(db, 'users');

	const [chosenAvatar, setChosenAvatar] = useState(1);
	const [avatarUrl, setAvatarUrl] = useState('https://i.imgur.com/nmEa4QX.png');
	const [clicked, setClicked] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');

	const handleAvatarUrl = e => {
		setAvatarUrl(e.target.value);
	};

	const handleChosenAvatar = index => {
		setChosenAvatar(index);
	};

	useEffect(() => {
		const start = () => {
			if (error?.message === 'Firebase: Error (auth/email-already-in-use).') {
				setErrorMessage('El mail ya esta en uso');
			} else if (error?.message === 'Firebase: Error (auth/invalid-email).') {
				setErrorMessage('El mail no es valido');
			} else if (error?.message === 'Firebase: Password should be at least 6 characters (auth/weak-password).') {
				setErrorMessage('La contraseña debe tener al menos 6 caracteres');
			}
		};
		return start();
	}, [error?.message]);

	const handleSubmit = async e => {
		e.preventDefault();
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const confirmPassword = e.target[3].value;

		if (password !== confirmPassword) {
			setErrorMessage('Las contraseñas no coinciden');
			return;
		} else {
			setClicked(true);

			try {
				const res = await createUserWithEmailAndPassword(email, password);

				await updateProfile({ displayName, photoURL: avatarUrl });

				await setDoc(doc(usersRef, res?.user?.uid), {
					uid: res?.user.uid,
					displayName,
					email,
					avatarUrl,
					createdAt: new Date(),
					photoURL: 'https://i.imgur.com/uBUfUOx.png',
					photoSmall: 'https://i.imgur.com/uBUfUOx.png',
					points: 0,
					usedPoints: 0,
					availablePoints: 0,
				});
				router.push('/dashboard');
			} catch (error) {
				setClicked(false);
			}
		}
	};

	if (loading) {
		return <div>Loading...</div>;
	}

	if (user) {
		router.push('/dashboard');
	}

	return (
		<>
			<section className="register">
				<h1>Crea tu cuenta</h1>
				<form onSubmit={handleSubmit}>
					<div className="register-form-group">
						<div className="register-form-inputs">
							<label htmlFor="username">Nombre de usuario:</label>
							<input id="username" name="username" placeholder="Username" type="text" />
							<label htmlFor="email">Email: </label>
							<input id="email" name="email" placeholder="Email" type="email" />
							<label htmlFor="password">Contraseña: </label>
							<input id="password" name="password" placeholder="Password" type="password" />
							<label htmlFor="password2">Confirma tu contraseña: </label>
							<input id="password2" name="password2" placeholder="Confirm Password" type="password" />
						</div>
						<div className="register-avatar-boxes">
							<h2>Elige tu avatar:</h2>
							<div className={`register-avatar-box ${chosenAvatar == 1 && 'register-avatar-choose'}`}>
								<label onClick={() => handleChosenAvatar(1)}>
									<Image alt="avatar1" layout="fill" src="https://i.imgur.com/nmEa4QX.png" />
									<input defaultChecked name="avatar" type="radio" value="https://i.imgur.com/nmEa4QX.png" onClick={handleAvatarUrl} />
								</label>
							</div>
							<div className={`register-avatar-box ${chosenAvatar == 2 && 'register-avatar-choose'}`}>
								<label onClick={() => handleChosenAvatar(2)}>
									<Image alt="avatar2" layout="fill" src="https://i.imgur.com/6PZ8U3s.png" />
									<input name="avatar" type="radio" value="https://i.imgur.com/6PZ8U3s.png" onClick={handleAvatarUrl} />
								</label>
							</div>
							<div className={`register-avatar-box ${chosenAvatar == 3 && 'register-avatar-choose'}`}>
								<label onClick={() => handleChosenAvatar(3)}>
									<Image alt="avatar3" layout="fill" src="https://i.imgur.com/pL2AfZk.png" />
									<input name="avatar" type="radio" value="https://i.imgur.com/pL2AfZk.png" onClick={handleAvatarUrl} />
								</label>
							</div>
							<div className={`register-avatar-box ${chosenAvatar == 4 && 'register-avatar-choose'}`}>
								<label onClick={() => handleChosenAvatar(4)}>
									<Image alt="avatar4" layout="fill" src="https://i.imgur.com/ER2y2us.png" />
									<input name="avatar" type="radio" value="https://i.imgur.com/ER2y2us.png" onClick={handleAvatarUrl} />
								</label>
							</div>
						</div>
						{errorMessage && <p className="register-form-error">{errorMessage}</p>}
						{clicked ? <p>Creando tu cuenta...</p> : <button type="submit">Registrame!</button>}
					</div>
				</form>
				<p>
					Ya tienes una cuenta?{'   '}
					<Link passHref href="/login">
						<a href="/login">Ingresa</a>
					</Link>
				</p>
			</section>
		</>
	);
};

export default RegisterForm;
