import { db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDocs, getDoc, updateDoc } from 'firebase/firestore';
import { createContext, useState, useContext, useEffect } from 'react';
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
	const [timeLeft, setTimeLeft] = useState(0);
	const [lastClaim, setLastClaim] = useState(0);
	const [claimText, setClaimText] = useState('¡Reclama 4 puntos cada 6 horas!');
	const [messageQuiz, setMessageQuiz] = useState('¡Logueate para reclamar los puntos!');

	async function percentageOfStickersOwned() {
		if (user?.uid != 'ouqD9z5Fy7OoYD4pz8FZoBR5YNv1') {
			let totalStickersQuantity = totalStickers.length;
			let stickersOwned = 0;
			if (userStickers) {
				for (let i = 1; i <= 100; i++) {
					if (userStickers?.['quantity' + i] > 0) {
						stickersOwned++;
					}
				}
			}
			let total = parseInt(((stickersOwned / totalStickersQuantity) * 100).toFixed(0));
			if (total <= 9) {
				total = 0 + total;
			}
			await updateDoc(doc(db, 'users', user.uid), { completedPercentage: total });
			setPercentage(total);
		}
	}

	async function getStickersToGive() {
		const getNewPack = [];
		const readyPack = [];
		if (user && userData.availablePoints >= 10) {
			const stickerRef = totalStickers;
			stickerRef.forEach(doc => {
				getNewPack.push(doc);
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
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 75, newYear2023Bonus: true }, { merge: true });
		}
	};

	const firstQuiz = async () => {
		setClicked(true);
		console.log('clicked');
		if (user && userData && !userData.firstQuiz) {
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 100, firstQuiz: true, points: userData?.points + 100 }, { merge: true });
			setMessageQuiz('Has ganado 100 puntos');
		} else if (!user || !userData) {
			setMessageQuiz('Logueate para ganar los puntos');
		} else if (userData.firstQuiz) {
			setMessageQuiz('Ya has reclamado los puntos para este quiz');
		}
		setClicked(false);
	};

	const secondQuiz = async () => {
		setClicked(true);
		console.log('clicked');
		if (user && userData && !userData.secondQuiz) {
			setDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 50, secondQuiz: true, points: userData?.points + 50 }, { merge: true });
			setMessageQuiz('Has ganado 50 puntos');
		} else if (!user || !userData) {
			setMessageQuiz('Logueate para ganar los puntos');
		} else if (userData.firstQuiz) {
			setMessageQuiz('Ya has reclamado los puntos para este quiz');
		}
		setClicked(false);
	};

	const timeLeftToClaim = () => {
		if (lastClaim === 'first') {
			setTimeLeft('Reclama tus puntos');
		} else {
			let timeLeftUntilSixHours = lastClaim + 21600000 - new Date().getTime();
			let hours = Math.floor((timeLeftUntilSixHours % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
			let minutes = Math.floor((timeLeftUntilSixHours % (1000 * 60 * 60)) / (1000 * 60));
			let seconds = Math.floor((timeLeftUntilSixHours % (1000 * 60)) / 1000);
			/* si ya pasaron las 6 horas, ponle 0 a las horas, minutos y segundos */
			if (timeLeftUntilSixHours < 0) {
				hours = 0;
				minutes = 0;
				seconds = 0;
			}

			if (hours < 10) {
				hours = '0' + hours;
			}
			if (minutes < 10) {
				minutes = '0' + minutes;
			}
			if (seconds < 10) {
				seconds = '0' + seconds;
			}
			setTimeLeft('' + hours + ':' + minutes + ':' + seconds + '');
			if (timeLeftUntilSixHours < 0) {
				setTimeLeft('Reclama tus puntos');
			}
		}
	};

	const claimPoints = async () => {
		setClicked(true);
		if ((new Date() - lastClaim > 21600000 && new Date() > lastClaim) || lastClaim === 'first') {
			await updateDoc(doc(db, 'users', user.uid), { availablePoints: userData?.availablePoints + 4, lastClaim: new Date() });
			setClaimText('¡Has ganado 4 puntos!');
			setTimeLeft('Vuelve en 6 horas por más');
			setClicked(false);
		} else {
			setClaimText('¡No hagas trampa!');
			setClicked(false);
			console.log(new Date() - lastClaim);
		}
	};

	useEffect(() => {
		if (userData) {
			const interval = setInterval(() => {
				timeLeftToClaim();
			}, 1000);
			return () => clearInterval(interval);
		}
	});

	useEffect(() => {
		if (user && userData) {
			setLastClaim(userData?.lastClaim?.toDate().getTime() || 'first');
		}
	}, [user, userData]);

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
				timeLeft,
				claimPoints,
				claimText,
				messageQuiz,
				firstQuiz,
				secondQuiz,
			}}
		>
			{children}
		</MarketContext.Provider>
	);
};
