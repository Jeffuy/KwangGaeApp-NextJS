import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className="footer-container">
			<Link passHref href="https://github.com/Jeffuy">
				<a className="footer-link" target="_blank">
					JeffUy 2021-24 ©
				</a>
			</Link>
		</footer>
	);
};

export default Footer;
