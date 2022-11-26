import React, { useState } from 'react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { useRouter } from 'next/router';
//import { ref } from 'firebase/storage';
import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc } from 'firebase/firestore';

const RegisterForm = () => {
	const router = useRouter();
	const [error, setError] = useState(false);

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
				const res = await createUserWithEmailAndPassword(auth, email, password);

				const userRef = doc(db, 'users', res.user.uid);
				const userDoc = {
					uid: res.user.uid,
					displayName,
					email,
					createdAt: new Date(),
				};
				await updateProfile(res.user, {
					displayName,
				});
				await setDoc(userRef, userDoc);
				router.push('/dashboard');
			} catch (error) {
				setError(true);
				console.error(error);
			}
		}
	};

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
						<button>Register</button>
						{error && <span>Something went wrong</span>}
					</div>
				</form>
				<p>
					Already have an account? <a href="/login">Login</a>
				</p>
			</section>
		</>
	);
};

export default RegisterForm;
