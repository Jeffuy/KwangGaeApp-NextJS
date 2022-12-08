import { db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDocs, getDoc } from 'firebase/firestore';
import { createContext, useState, useContext } from 'react';
import { AuthContext } from './AuthContext.js';

export const MarketContext = createContext();

export const MarketContextProvider = ({ children }) => {
	const { user, userData } = useContext(AuthContext);

	const [newPack, setNewPack] = useState([]);
	const [clicked, setClicked] = useState(false);

	async function getStickersToGive() {
		const getNewPack = [];
		const readyPack = [];
		if (user && userData.availablePoints >= 10) {
			const stickerRef = await getDocs(collection(db, 'stickers'));
			stickerRef.forEach(doc => {
				getNewPack.push(doc.data());
			});

			for (let i = 0; i < 3; i++) {
				let random = Math.floor(Math.random() * getNewPack.length);
				let randomSticker = getNewPack[random];

				while (readyPack.includes(randomSticker)) {
					random = Math.floor(Math.random() * getNewPack.length);
					randomSticker = getNewPack[random];
				}

				readyPack.push(randomSticker);
			}
			setNewPack(readyPack);
		}
	}

	async function giveStickerToUser() {
		setClicked(true);
		console.log('EL NEW PACK ES', newPack);
		let quantity;
		let pasted = false;
		if (user) {
			const userStickers = await getDoc(doc(db, 'userStickers', user?.uid));

			for (let i = 0; i < newPack.length; i++) {
				try {
					quantity = userStickers.data()['quantity' + newPack[i].number];
					pasted = userStickers.data()['pasted' + newPack[i].number];
				} catch (error) {
					quantity = 0;
					pasted = false;
				}
				if (quantity === undefined) {
					quantity = 0;
				}
				if (pasted === undefined) {
					pasted = false;
				}

				let pastedField = 'pasted' + newPack[i].number;
				let quantityField = 'quantity' + newPack[i].number;
				await setDoc(doc(db, 'userStickers', user.uid), { [quantityField]: quantity + 1, [pastedField]: pasted }, { merge: true });
			}
			await setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints, usedPoints: userData?.usedPoints }, { merge: true });
		}
		setClicked(false);
	}

	return (
		<MarketContext.Provider
			value={{
				getStickersToGive,
				giveStickerToUser,
				newPack,
				clicked,
			}}
		>
			{children}
		</MarketContext.Provider>
	);
};
