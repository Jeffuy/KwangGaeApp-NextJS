import React, { useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';

const Test = () => {
	const { value } = useContext(AuthContext);

	value?.docs.map(doc => {
		console.log(doc.data());
	});
	return (
		// links to login, dasbhboard and register
		<div>
			<h1>Test</h1>
			{value?.docs.map(doc => (
				<React.Fragment key={doc.id}>{JSON.stringify(doc.data())}, </React.Fragment>
			))}
		</div>
	);
};

export default Test;
