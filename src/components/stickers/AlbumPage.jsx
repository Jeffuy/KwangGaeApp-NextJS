import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '@context/AuthContext';
import { doc, setDoc, getDoc, getDocs, collection } from '@firebase/firestore';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';

const AlbumPage = () => {
	const { user } = useContext(AuthContext);
	const [newPack, setNewPack] = useState([]);
	const [allStickers, setAllStickers] = useState([{}]);
	const [allStickersNumber, setAllStickersNumber] = useState([]);
	const [userActualStickers, setUserActualStickers] = useState([]);
	const [done, setDone] = useState(false);
	const [userOwnedStickers, setUserOwnedStickers] = useState([]);

	async function getAllCards() {
		const getAllStickers = [];
		const getAllStikersNumber = [];
		const stickerRef = await getDocs(collection(db, 'stickers'));
		stickerRef.forEach(doc => {
			getAllStickers.push(doc.data());
		});
		stickerRef.forEach(doc => {
			getAllStikersNumber.push(doc.data().number);
		});

		// getAllStickers.sort((a, b) => a.number - b.number);

		setAllStickers(getAllStickers);
		setAllStickersNumber(getAllStikersNumber);
	}

	async function checkIfUserHasCard() {
		console.log('allStickers', allStickers);
		console.log('allStickersId', allStickersNumber);
		const ownedCards = [];
		if (user) {
			const userStickers = await getDoc(doc(db, 'userStickers', user?.uid));
			const userStickersData = userStickers.data();
			setUserOwnedStickers(userStickersData);
			console.log('userStickersData', userStickersData);
			if (userStickersData) {
				for (let i = 0; i < allStickers.length; i++) {
					if (userStickersData['quantity' + allStickersNumber[i]]) {
						ownedCards.push(allStickers[i]);
					}
				}
			}
			setUserActualStickers(ownedCards);
			console.log('USER ACTUAL STICKERS', userActualStickers);
			console.log('las owned son', ownedCards);
		}
	}

	async function getStickersToGive() {
		const getNewPack = [];
		const readyPack = [];
		const stickerRef = await getDocs(collection(db, 'stickers'));
		stickerRef.forEach(doc => {
			getNewPack.push(doc.data().number);
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

	async function pasteSticker(number) {
		setDone(false);
		const userStickers = await getDoc(doc(db, 'userStickers', user?.uid));
		const userStickersData = userStickers.data();

		if (userStickersData) {
			await setDoc(
				doc(db, 'userStickers', user?.uid),
				{
					['pasted' + number]: true,
				},
				{ merge: true }
			);

			checkIfUserHasCard();
			setDone(true);
		}
	}

	async function giveStickerToUser() {
		console.log('EL NEW PACK ES', newPack);
		let quantity;
		let pasted = false;

		if (user) {
			const userStickers = await getDoc(doc(db, 'userStickers', user?.uid));

			for (let i = 0; i < newPack.length; i++) {
				try {
					quantity = userStickers.data()['quantity' + newPack[i]];
					pasted = userStickers.data()['pasted' + newPack[i]];
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

				let pastedField = 'pasted' + newPack[i];
				let quantityField = 'quantity' + newPack[i];
				await setDoc(doc(db, 'userStickers', user.uid), { [quantityField]: quantity + 1, [pastedField]: pasted }, { merge: true });
			}
		}
	}

	useEffect(() => {
		getAllCards();
		checkIfUserHasCard();
	}, [user, newPack, done]);

	useEffect(() => {
		checkIfUserHasCard();
	}, [allStickers]);

	useEffect(() => {
		giveStickerToUser();
	}, [newPack]);

	return (
		<section>
			<div className="album-page">
				{allStickers.map(sticker => (
					<div key={sticker.number} className="album-map-container">
						<div className="album-sticker">
							<p className={userActualStickers.includes(sticker) ? '' : 'album-sticker-number'}>{sticker.number}</p>

							<Image
								alt={sticker.uid}
								layout="fill"
								src={userActualStickers.includes(sticker) & userOwnedStickers?.['pasted' + sticker.number] ? sticker.url : 'https://i.imgur.com/kpoQKeK.jpg'}
							/>

							{!userOwnedStickers?.['pasted' + sticker.number] && userOwnedStickers?.['quantity' + sticker.number] > 0 && (
								<button className="album-sticker-pasted-button" onClick={() => pasteSticker(`${sticker.number}`)}>
									Pegar
								</button>
							)}
						</div>
					</div>
				))}
			</div>
			<button onClick={getStickersToGive}>Get stickers</button>
			<button onClick={checkIfUserHasCard}>Get stickers2</button>
			<button onClick={getAllCards}>Get stickers2</button>
		</section>
	);
};

export default AlbumPage;
