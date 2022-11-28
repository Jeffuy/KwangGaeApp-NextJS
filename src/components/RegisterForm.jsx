import React, { useState, useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
//import { ref } from 'firebase/storage';
import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
// import Link from 'next/link';

const RegisterForm = () => {
	const { user, loading } = useContext(AuthContext);
	const [clicked, setClicked] = useState(false);

	const router = useRouter();
	const [error, setError] = useState(false);
	const [avatarUrl, setAvatarUrl] = useState('');

	const handleAvatarUrl = e => {
		setAvatarUrl(e.target.value);
	};

	const handleSubmit = async e => {
		e.preventDefault();
		const displayName = e.target[0].value;
		const email = e.target[1].value;
		const password = e.target[2].value;
		const confirmPassword = e.target[3].value;

		if (password !== confirmPassword) {
			setError('Las contraseñas no coinciden');
			return;
		} else {
			try {
				setClicked(true);
				const res = await createUserWithEmailAndPassword(auth, email, password);

				await setDoc(doc(db, 'users', res.user.uid), {
					uid: res.user.uid,
					displayName,
					email,
					avatarUrl,
					createdAt: new Date(),
				});
				router.push('/dashboard');
			} catch (error) {
				if (error.code === 'auth/email-already-in-use') {
					setError('El email ya está en uso');
				} else if (error.code === 'auth/invalid-email') {
					setError('El email no es válido');
				} else if (error.code === 'auth/weak-password') {
					setError('La contraseña debe tener al menos 6 caracteres');
				} else {
					setError(error.message);
				}
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
				<h1>Register</h1>
				<form onSubmit={handleSubmit}>
					<div className="register-form-group">
						<label htmlFor="username">Username:</label>
						<input id="username" name="username" placeholder="Username" type="text" />
						<label htmlFor="email">Email: </label>
						<input id="email" name="email" placeholder="Email" type="email" />
						<label htmlFor="password">Password</label>
						<input id="password" name="password" placeholder="Password" type="password" />
						<label htmlFor="password2">Confirm Password</label>
						<input id="password2" name="password2" placeholder="Confirm Password" type="password" />
						<div className="register-avatar-boxes">
							<div className="register-avatar-box">
								<label onClick={handleAvatarUrl}>
									<Image alt="avatar1" height={100} src="https://i.imgur.com/nmEa4QX.png" width={100} />
									<input defaultChecked name="avatar" type="radio" value="https://i.imgur.com/nmEa4QX.png" />
								</label>
							</div>
							<div className="register-avatar-box">
								<label onClick={handleAvatarUrl}>
									<Image alt="avatar2" height={100} src="https://i.imgur.com/6PZ8U3s.png" width={100} />
									<input name="avatar" type="radio" value="https://i.imgur.com/6PZ8U3s.png" />
								</label>
							</div>
							<div className="register-avatar-box">
								<label onClick={handleAvatarUrl}>
									<Image alt="avatar3" height={100} src="https://i.imgur.com/pL2AfZk.png" width={100} />
									<input name="avatar" type="radio" value="https://i.imgur.com/pL2AfZk.png" />
								</label>
							</div>
							<div className="register-avatar-box">
								<label onClick={handleAvatarUrl}>
									<Image alt="avatar4" height={100} src="https://i.imgur.com/ER2y2us.png" width={100} />
									<input name="avatar" type="radio" value="https://i.imgur.com/ER2y2us.png" />
								</label>
							</div>
						</div>
						{error && <p className="error">{error}</p>}
						{clicked ? <p>Creando tu cuenta...</p> : <button type="submit">Register</button>}
					</div>
				</form>
				<p>
					Already have an account? <a href="/login">Login</a>
				</p>
			</section>
			{/* LINK TO TEST
			<Link href="/test">
				<p>Test</p>
			</Link> */}
		</>
	);
};

export default RegisterForm;
