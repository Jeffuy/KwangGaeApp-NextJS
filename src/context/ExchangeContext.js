import { db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';
import { createContext, useState, useContext } from 'react';
import { useDocumentData } from 'react-firebase-hooks/firestore';

import { AuthContext } from './AuthContext.js';

//import { stickers } from '@scripts/data/addStickers.js';

export const ExchangeContext = createContext();

export const ExchangeContextProvider = ({ children }) => {
	const { user, userData } = useContext(AuthContext);

	const [userStickers] = useDocumentData(doc(db, 'userStickers', user?.uid || 'ly7S2mIBXrXSwoXvKgsj'));

	//const totalStickers = stickers;

	const [trades, setTrades] = useState([]);
	const [clicked, setClicked] = useState(false);
	const [message, setMessage] = useState('');
	const [exchangeMessage, setExchangeMessage] = useState('');

	const getAllTrades = async () => {
		const result = [];
		const allExchanges = await getDocs(collection(db, 'stickerTrades'));
		allExchanges.forEach(doc => {
			let document = { ...doc.data(), uid: doc.id };
			result.push(document);
		});
		setTrades(result);
		console.log(trades);
	};

	const createTrade = async (sticker, asked) => {
		setClicked(true);
		let quantityField = 'quantity' + sticker;
		console.log(quantityField);
		if (userStickers[quantityField] > 1 && userData.availablePoints >= 5) {
			const trade = {
				stickerOffered: sticker,
				userCreated: userData.uid,
				userCreatedName: userData.displayName,
				userCreatedPhoto: userData.photoSmall,
				stickersAsked: asked,
				createdAt: new Date(),
				ended: false,
			};
			await setDoc(doc(db, 'stickerTrades', trade.createdAt.toString()), trade, { merge: true });
			await updateDoc(doc(db, 'users', user.uid), {
				availablePoints: userData.availablePoints - 5,
				usedPoints: userData.usedPoints + 5,
			});
			await updateDoc(doc(db, 'userStickers', user.uid), {
				[quantityField]: userStickers[quantityField] - 1,
			});

			setClicked(false);
			setMessage('Intercambio creado correctamente');
		} else {
			setMessage('No tienes suficientes puntos o stickers para hacer el intercambio');

			setClicked(false);
		}
	};

	const readTrade = async uid => {
		console.log(uid);
		const trade = await getDoc(doc(db, 'stickerTrades', uid));
		console.log(trade.data());
	};

	const cancelTrade = async uid => {
		setClicked(true);
		const tradeData = await getDoc(doc(db, 'stickerTrades', uid));
		const trade = tradeData.data();
		console.log(trade);
		let quantityField = 'quantity' + trade.stickerOffered;
		if (user.uid === trade.userCreated) {
			console.log(uid);
			// eslint-disable-next-line no-unused-vars
			const setCancel = await setDoc(doc(db, 'stickerTradesFinished', new Date().toString()), { trade, cancelled: true, cancelledDate: new Date() }, { merge: true });
			console.log('cancelled');
			// eslint-disable-next-line no-unused-vars
			const deleteTrade = await deleteDoc(doc(db, 'stickerTrades', uid));
			console.log('deleted');
			// eslint-disable-next-line no-unused-vars
			const updateUserStickers = await updateDoc(doc(db, 'userStickers', user.uid), { [quantityField]: userStickers[quantityField] + 1 });
			console.log('sticker added');
			// eslint-disable-next-line no-unused-vars
			const updateUserPoints = await updateDoc(doc(db, 'users', user.uid), {
				availablePoints: userData.availablePoints + 5,
				usedPoints: userData.usedPoints - 5,
			});
			console.log('points added');
		}
		getAllTrades();
		setClicked(false);
	};

	const performTrade = async (stickerToGive, trade) => {
		setExchangeMessage('');
		setClicked(true);
		let quantityFieldOriginalUser = 'quantity' + stickerToGive;
		let quantityFieldNewUserSubstract = 'quantity' + stickerToGive;
		let quantityFieldNewUserAdd = 'quantity' + trade.stickerOffered;
		if (stickerToGive > 0 && userData.availablePoints >= 5 && userStickers[quantityFieldNewUserSubstract] > 1) {
			// Sacar puntos al nuevo usuario
			// eslint-disable-next-line no-unused-vars
			const substractUserPoints = await updateDoc(doc(db, 'users', user.uid), {
				availablePoints: userData.availablePoints - 5,
				usedPoints: userData.usedPoints + 5,
			});

			// encontrar cantidad actual de stickers del usuario nuevo
			let oldQuantity = userStickers['quantity' + trade.stickerOffered];
			console.log('oldQuantity', oldQuantity);
			if (oldQuantity === undefined) {
				// eslint-disable-next-line no-unused-vars
				oldQuantity = 0;
				console.log('oldQuantity IF', oldQuantity);
			}

			// encontrar cantidad actual de stickers del usuario que creo el intercambio
			let oldQuantityOriginalUser = await getDoc(doc(db, 'userStickers', trade.userCreated));

			let oldQuantityOriginalUserData = oldQuantityOriginalUser.data()['quantity' + stickerToGive];
			if (oldQuantityOriginalUserData === undefined) {
				oldQuantityOriginalUserData = 0;

				console.log('oldQuantityOriginalUserData IF', oldQuantityOriginalUserData);
			}
			console.log('oldQuantityOriginalUserData', oldQuantityOriginalUserData);

			// Sacar sticker al nuevo usuario
			// eslint-disable-next-line no-unused-vars
			const substractUserSticker = await updateDoc(doc(db, 'userStickers', user.uid), {
				[quantityFieldNewUserSubstract]: userStickers[quantityFieldNewUserSubstract] - 1,
			});

			// Dar sticker al nuevo usuario
			// eslint-disable-next-line no-unused-vars
			const giveStickerToNewUser = await updateDoc(doc(db, 'userStickers', user.uid), {
				[quantityFieldNewUserAdd]: oldQuantity + 1,
			});

			// Dar puntos al usuario que creo el intercambio
			// eslint-disable-next-line no-unused-vars
			const giveStickerToOriginalUser = await updateDoc(doc(db, 'userStickers', trade.userCreated), {
				[quantityFieldOriginalUser]: oldQuantityOriginalUserData + 1,
			});

			// Dar por terminado el intercambio
			// eslint-disable-next-line no-unused-vars
			const endTrade = await setDoc(
				doc(db, 'stickerTradesFinished', new Date().toString()),
				{ trade, ended: true, endedDate: new Date(), acceptedBy: user.uid, acceptedByDisplayName: userData.displayName, acceptedByPhoto: userData.photoSmall, givenSticker: stickerToGive },
				{ merge: true }
			);

			// Borrar el intercambio
			// eslint-disable-next-line no-unused-vars
			const deleteTrade = await deleteDoc(doc(db, 'stickerTrades', trade.uid));
			getAllTrades();
		} else {
			setExchangeMessage('No tienes suficientes puntos o stickers para hacer el intercambio');
		}

		setClicked(false);
	};

	return (
		<ExchangeContext.Provider
			value={{
				clicked,
				getAllTrades,
				createTrade,
				message,
				trades,
				setMessage,
				readTrade,
				cancelTrade,
				performTrade,
				exchangeMessage,
			}}
		>
			{children}
		</ExchangeContext.Provider>
	);
};
