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
		<section className="login-section">
			<div className="login-section-items">
				<h1>Kwang-Gae</h1>
				<span>Ingresa</span>
				<form className="login-form" onSubmit={handleSubmit}>
					<label htmlFor="email">Email: </label>
					<input id="email" name="email" placeholder="email" type="email" />
					<label htmlFor="password">Contraseña: </label>
					<input id="password" name="password" placeholder="password" type="password" />
					<button>Ingresa</button>
					{error && <p className="login-form-error">{error}</p>}
				</form>
				<p>
					¿No tienes una cuenta? {'   '}
					<Link passHref href="/register">
						<a href="/">Registrate</a>
					</Link>
				</p>
			</div>
		</section>
	);
};

export default LoginForm;
