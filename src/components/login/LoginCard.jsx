import React, { useContext } from 'react';
import loginFunctions from 'scripts/libreryFunctions'

const LoginCard = () => {
	return (
		<>
			<div>
				<label htmlFor="username">
					Usuario
					<input type="text" id='username'/>
				</label>
				<br />
				<label htmlFor="password">
					Password
					<input type="password" id='password'/>
				</label>
				<br />
				<button onClick={() => {
					let username = document.getElementById('username').value
					let password = document.getElementById('password').value
					loginFunctions.verifyUser(username,password)
				}}>
					Login
				</button>
				
			</div>
			
		</>
	);
};

export default LoginCard;
