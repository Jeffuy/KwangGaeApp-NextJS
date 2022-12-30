// import React, { useContext } from 'react';
// import { AuthContext } from '@context/AuthContext.js';
// import { setStickers, giveStickers } from '@scripts/data/addStickers.js';
// import { db } from '../firebase/firebase.js';
// import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from 'firebase/firestore';
// import { createContext, useState } from 'react';

// import { useDocumentData } from 'react-firebase-hooks/firestore';
// import { stickers } from '@scripts/data/addStickers.js';
const Test = () => {
	// const { value } = useContext(AuthContext);
	// const totalStickers = stickers;

	// const readCollection = async () => {
	// 	const results = [];
	// 	let totalStickersQuantity = totalStickers.length;
	// 	const querySnapshot2 = await getDocs(collection(db, 'users'));
	// 	querySnapshot2.forEach(doc => {
	// 		results.push({ displayName: doc.data().displayName, photoSmall: doc.data().photoSmall, uid: doc.data().uid });
	// 	});
	// 	for (let i = 0; i < results.length; i++) {
	// 		try {
	// 			let stickersOwned = 0;
	// 			const querySnapshot = await getDoc(doc(db, 'userStickers', results[i].uid));
	// 			const data = querySnapshot.data();
	// 			if (data && results[i].uid != 'ouqD9z5Fy7OoYD4pz8FZoBR5YNv1') {
	// 				for (let j = 1; j <= totalStickersQuantity; j++) {
	// 					if (data['quantity' + j] > 0) {
	// 						stickersOwned++;
	// 					}
	// 				}
	// 			}

	// 			let total = ((stickersOwned / totalStickersQuantity) * 100).toFixed(0);
	// 			if (total <= 9) {
	// 				total = '0' + total;
	// 			}
	// 			await updateDoc(doc(db, 'users', results[i].uid), { completedPercentage: total });
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	}
	// };

	// value?.docs.map(doc => {
	// 	console.log(doc.data());
	// });
	return (
		// links to login, dasbhboard and register
		<div>
			<h1>Test</h1>
			{/* <button onClick={() => readCollection()}>Set stickers</button> */}
		</div>
	);
};

export default Test;
