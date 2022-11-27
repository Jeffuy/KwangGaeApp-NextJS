import React from 'react';
import Link from 'next/link';

const Test = () => {
	return (
		// links to login, dasbhboard and register
		<div>
			<Link href="/login">
				<p>Login</p>
			</Link>
			<Link href="/dashboard">
				<p>Dashboard</p>
			</Link>
			<Link href="/register">
				<p>Register</p>
			</Link>
		</div>
	);
};

export default Test;
