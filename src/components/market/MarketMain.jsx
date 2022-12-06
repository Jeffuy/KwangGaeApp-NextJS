import React, { useContext, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AuthContext } from '@context/AuthContext';
import { getDoc, setDoc, doc, getDocs, collection } from '@firebase/firestore';
import { db } from '../../firebase/firebase.js';
import NewPack from './NewPack.jsx';

const MarketMain = () => {
	const { user, loading, userData, userDataLoading } = useContext(AuthContext);
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

	useEffect(() => {
		const sub = giveStickerToUser();
		return () => sub;
	}, [newPack]);

	if ((loading, userDataLoading)) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return (
			<div>
				<h2>No estas logueado</h2>
			</div>
		);
	}

	return (
		<section className="market-section">
			<h1>Comprar un sobre de figuritas</h1>
			<div className="market-grid">
				<div className="market-image-container">
					<Image alt="album" layout="fill" src="https://i.imgur.com/d1qiA9x.png" />
				</div>
				{!clicked && userData?.availablePoints >= 10 && <button onClick={getStickersToGive}>Abrir sobre</button>}
				{!clicked && userData?.availablePoints < 10 && <p>No tienes suficientes puntos!</p>}
				<div className="market-items-description">
					<p>Coste: 10pts (tienes {userData?.availablePoints}) </p>
					<p>Contiene: 3 figuritas</p>
				</div>
			</div>
			<NewPack newPack={newPack} />
			<Link passHref href="/Album">
				<div className="market-link">
					<a>Ir al album</a>
				</div>
			</Link>
		</section>
	);
};

export default MarketMain;
