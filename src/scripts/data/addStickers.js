import { doc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase/firebase.js';

const stickers = [
	{ circular: true, isGolden: true, number: 1, isLegendary: false, url: 'https://i.imgur.com/CqCP2Lc.png' },
	{ vertical: true, isGolden: false, number: 2, isLegendary: false, url: 'https://i.imgur.com/GCYoXGU.jpg' },
	{ isGolden: false, number: 3, isLegendary: false, url: 'https://i.imgur.com/pfRVUuh.jpg' },
	{ isGolden: false, number: 4, isLegendary: false, url: 'https://i.imgur.com/hokJDpr.jpg' },
	{ isGolden: false, number: 5, isLegendary: false, url: 'https://i.imgur.com/h4sCUgp.jpg' },
	{ vertical: true, isGolden: false, number: 6, isLegendary: false, url: 'https://i.imgur.com/034OS5j.png' },
	{ vertical: true, isGolden: false, number: 7, isLegendary: false, url: 'https://i.imgur.com/H8Gi4m8.png' },
	{ vertical: false, isGolden: false, number: 8, isLegendary: false, url: 'https://i.imgur.com/6F2x6Z8.jpg' },
];

export async function setStickers() {
	for (let i = 0; i < stickers.length; i++) {
		const sticker = stickers[i];
		await setDoc(doc(db, 'stickers', sticker.number.toString()), sticker);
	}
}
