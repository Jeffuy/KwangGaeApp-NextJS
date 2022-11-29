import React, { useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
import Menu from '@components/Menu';
import Footer from '@components/Footer';

const Layout = ({ children }) => {
	const { user, userData } = useContext(AuthContext);

	return (
		<>
			<div className="main-container">
				<Menu user={user} userData={userData} />
				{children}
				<Footer />
			</div>
		</>
	);
};

export default Layout;
