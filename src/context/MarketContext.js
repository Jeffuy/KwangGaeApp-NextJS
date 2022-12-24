import { db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from 'firebase/firestore';
import { createContext, useState, useContext } from 'react';
import { AuthContext } from './AuthContext.js';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { stickers } from '@scripts/data/addStickers.js';

export const MarketContext = createContext();

export const MarketContextProvider = ({ children }) => {
	const { user, userData } = useContext(AuthContext);
	const totalStickers = stickers;

	const [userStickers, loadingUserStickers, errorUserStickers] = useDocumentData(doc(db, 'userStickers', user?.uid || ' '));

	const [newPack, setNewPack] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [percentage, setPercentage] = useState(0);

	async function percentageOfStickersOwned() {
		let totalStickersQuantity = totalStickers.length;
		let stickersOwned = 0;
		if (userStickers) {
			for (let i = 1; i <= 100; i++) {
				if (userStickers?.['quantity' + i] > 0) {
					stickersOwned++;
				}
			}
		}
		let total = ((stickersOwned / totalStickersQuantity) * 100).toFixed(0);
		await updateDoc(doc(db, 'users', user.uid), { completedPercentage: total });
		setPercentage(total);
	}

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
					if (randomGolden > 45) {
						random = Math.floor(Math.random() * getNewPack.length);
					}
				}

				let randomSticker = getNewPack[random];

				while (readyPack.includes(randomSticker)) {
					random = Math.floor(Math.random() * getNewPack.length);
					if (getNewPack[random].isGolden === true) {
						let randomGolden = Math.floor(Math.random() * 100);
						if (randomGolden > 45) {
							random = Math.floor(Math.random() * getNewPack.length);
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
		await percentageOfStickersOwned();
	}

	const giveFirst100Points = async () => {
		if (user && userData) {
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 50, firstTime: true }, { merge: true });
		}
	};
	const giveChristmas = async () => {
		if (user && userData) {
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 70, christmasBonus: true }, { merge: true });
		}
	};

	if (loadingUserStickers)
		return (
			<div className="loadingio-spinner-interwind-rsplu6pobz">
				<div className="ldio-4j9eyrs77kq">
					<div>
						<div>
							<div>
								<div />
							</div>
						</div>
						<div>
							<div>
								<div />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	if (errorUserStickers) return <div> Error </div>;

	return (
		<MarketContext.Provider
			value={{
				getStickersToGive,
				giveStickerToUser,
				newPack,
				clicked,
				giveFirst100Points,
				percentage,
				totalStickers,
				giveChristmas,
			}}
		>
			{children}
		</MarketContext.Provider>
	);
};
