import React, { useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
//import { setStickers, giveStickers } from '@scripts/data/addStickers.js';

const Test = () => {
	const { value } = useContext(AuthContext);

	value?.docs.map(doc => {
		console.log(doc.data());
	});
	return (
		// links to login, dasbhboard and register
		<div>
			<h1>Test</h1>
			{/* <button onClick={() => giveStickers()}>Set stickers</button> */}
		</div>
	);
};

export default Test;
