import React, { useState, useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/router';
//import { ref } from 'firebase/storage';
import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import Image from 'next/image';
import Link from 'next/link';

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
			alert('Passwords do not match');
			return;
		} else {
			try {
				setClicked(true);
				const res = await createUserWithEmailAndPassword(auth, email, password);

				// const userRef = doc(db, 'users', res.user.uid);
				// const userDoc = {
				// 	uid: res.user.uid,
				// 	displayName,
				// 	email,
				// 	avatarUrl,
				// 	createdAt: new Date(),
				// };
				// await updateProfile(res.user, {
				// 	displayName,
				// 	avatarUrl,
				// 	createdAt: new Date(),
				// });

				await setDoc(doc(db, 'users', res.user.uid), {
					uid: res.user.uid,
					displayName,
					email,
					avatarUrl,
					createdAt: new Date(),
				});

				router.push('/dashboard');
			} catch (error) {
				setError(true);
				console.error(error);
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
								<Image alt="avatar1" height={100} src="https://i.imgur.com/nmEa4QX.png" width={100} onClick={handleAvatarUrl} />
								<input defaultChecked name="avatar" type="radio" value="https://i.imgur.com/nmEa4QX.png" />
							</div>
							<div className="register-avatar-box">
								<Image alt="avatar2" height={100} src="https://i.imgur.com/6PZ8U3s.png" width={100} />
								<input name="avatar" type="radio" value="https://i.imgur.com/6PZ8U3s.png" onClick={handleAvatarUrl} />
							</div>
							<div className="register-avatar-box">
								<Image alt="avatar3" height={100} src="https://i.imgur.com/pL2AfZk.png" width={100} />
								<input name="avatar" type="radio" value="https://i.imgur.com/pL2AfZk.png" onClick={handleAvatarUrl} />
							</div>
							<div className="register-avatar-box">
								<Image alt="avatar4" height={100} src="https://i.imgur.com/ER2y2us.png" width={100} />
								<input name="avatar" type="radio" value="https://i.imgur.com/ER2y2us.png" onClick={handleAvatarUrl} />
							</div>
						</div>
						{error && <p className="error">Something went wrong</p>}
						<button disabled={clicked} type="submit">
							{clicked ? 'Loading...' : 'Register'}
						</button>

						{error && <span>Something went wrong</span>}
					</div>
				</form>
				<p>
					Already have an account? <a href="/login">Login</a>
				</p>
			</section>
			{/* LINK TO TEST	 */}
			<Link href="/test">
				<p>Test</p>
			</Link>
		</>
	);
};

export default RegisterForm;
