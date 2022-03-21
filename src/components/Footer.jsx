import React from 'react';
import Link from 'next/link';

const Footer = () => {
	return (
		<div>
			<footer className="bg-light text-center p-2 mt-auto text-black sticky-bottom">
				<Link href="https://github.com/Jeffuy">
					<a className="h3" href="https://github.com/Jeffuy">
						JeffUy 2021 ©
					</a>
				</Link>
			</footer>
		</div>
	);
};

export default Footer;
