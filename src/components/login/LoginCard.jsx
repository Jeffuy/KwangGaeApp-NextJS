import React from 'react';

const LoginCard = () => {
	return (
		<>
			<div>
				<label htmlFor="">
					Usuario
					<input type="text" />
				</label>
				<br />
				<label htmlFor="">
					Password
					<input type="password" />
				</label>
				<br />
				<button>Login</button>
			</div>
		</>
	);
};

export default LoginCard;
