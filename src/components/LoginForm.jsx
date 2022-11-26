import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginForm = () => {
	const router = useRouter();

	const [error, setError] = useState(false);

	const handleSubmit = async e => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		console.log(email, password);
		try {
			await signInWithEmailAndPassword(auth, email, password);
			router.push('/dashboard');
		} catch (err) {
			setError(true);
		}
	};

	return (
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">KwangGae</span>
				<span className="title">Login</span>
				<form onSubmit={handleSubmit}>
					<input id="" name="" placeholder="email" type="email" />
					<input placeholder="password" type="password" />
					<button>Sign in</button>
					{error && <span>Something went wrong</span>}
				</form>
				<p>
					¿No tienes una cuenta? <Link href="/register">Registrate</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
