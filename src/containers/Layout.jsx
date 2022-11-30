import React from 'react';

import Menu from '@components/Menu';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
	return (
		<>
			<div className="main-container">
				<Menu />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
