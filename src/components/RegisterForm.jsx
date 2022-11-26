import React from 'react';

const RegisterForm = () => {
	return (
		<>
			<section className="register">
				<h1>Register</h1>
				<form action="">
					<div className="register-form-group">
						<label htmlFor="username">Username:</label>
						<input id="username" name="username" placeholder="Username" type="text" />
						<label htmlFor="email">Email: </label>
						<input id="email" name="email" placeholder="Email" type="email" />
						<label htmlFor="password">Password</label>
						<input id="password" name="password" placeholder="Password" type="password" />
						<label htmlFor="password2">Confirm Password</label>
						<input id="password2" name="password2" placeholder="Confirm Password" type="password" />
						<button type="submit">Register</button>
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
