import React, { useContext } from 'react';
import { AuthContext } from '@context/AuthContext';

const Dashboard = () => {
	const { currentUser } = useContext(AuthContext);

	return (
		<>
			{currentUser ? <h1> Hello {currentUser.displayName} </h1> : <h1> You are not logged in </h1>}
			<button onClick={() => console.log(currentUser)}> HOLAAAA </button>
		</>
	);
};

export default Dashboard;
