import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<footer className="footer-container">
				<Link passHref href="https://github.com/Jeffuy">
					<a className="footer-link" target="_blank">
						JeffUy 2021-22 ©
					</a>
				</Link>
			</footer>
		</div>
	);
};

export default Footer;
