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
				if (getNewPack[random].isGolden === true) {
					let randomGolden = Math.floor(Math.random() * 100);
					if (randomGolden < 45) {
						console.log(randomGolden + ' LEGENDARIA');
					} else {
						random = Math.floor(Math.random() * getNewPack.length);
						console.log(randomGolden + 'NO LEGENDARIA');
					}
				}

				let randomSticker = getNewPack[random];

				while (readyPack.includes(randomSticker)) {
					random = Math.floor(Math.random() * getNewPack.length);
					if (getNewPack[random].isGolden === true) {
						let randomGolden = Math.floor(Math.random() * 100);
						if (randomGolden < 45) {
							console.log(randomGolden + ' LEGENDARIA');
						} else {
							random = Math.floor(Math.random() * getNewPack.length);
							console.log(randomGolden + 'NO LEGENDARIA');
						}
					}
					randomSticker = getNewPack[random];
				}

				readyPack.push(randomSticker);
			}
			setNewPack(readyPack);
		}
	}

	async function giveStickerToUser() {
		setClicked(true);
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

			if (newPack.length > 0) {
				await setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints - 10, usedPoints: userData?.usedPoints + 10 }, { merge: true });
			}
		}
		setClicked(false);
	}

	const giveFirst100Points = async () => {
		if (user && userData) {
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 50, firstTime: true }, { merge: true });
		}
	};

	return (
		<MarketContext.Provider
			value={{
				getStickersToGive,
				giveStickerToUser,
				newPack,
				clicked,
				giveFirst100Points,
			}}
		>
			{children}
		</MarketContext.Provider>
	);
};
