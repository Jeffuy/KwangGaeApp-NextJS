import React, { useState, useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.js';
import Link from 'next/link';
import { useRouter } from 'next/router';

const LoginForm = () => {
	const router = useRouter();
	const { user, loading } = useContext(AuthContext);

	const [error, setError] = useState('');

	const handleSubmit = async e => {
		e.preventDefault();
		const email = e.target[0].value;
		const password = e.target[1].value;
		try {
			// eslint-disable-next-line no-unused-vars
			const result = await signInWithEmailAndPassword(auth, email, password);
			router.push('/dashboard');
		} catch (err) {
			if (err.code === 'auth/wrong-password') {
				setError('Contraseña incorrecta');
			} else if (err.code === 'auth/user-not-found') {
				setError('Usuario no encontrado');
			} else {
				setError('Error al iniciar sesión');
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
		<div className="formContainer">
			<div className="formWrapper">
				<span className="logo">KwangGae</span>
				<span className="title">Login</span>
				<form onSubmit={handleSubmit}>
					<input id="" name="" placeholder="email" type="email" />
					<input placeholder="password" type="password" />
					<button>Sign in</button>
					{error && <span>{error}</span>}
				</form>
				<p>
					¿No tienes una cuenta?
					<Link passHref href="/register">
						<b>Registrate</b>
					</Link>
				</p>
			</div>
		</div>
	);
};

export default LoginForm;
