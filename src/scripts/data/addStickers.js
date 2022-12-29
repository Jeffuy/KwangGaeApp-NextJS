import { doc, setDoc } from '@firebase/firestore';
import { db } from '../../firebase/firebase.js';

export const stickers = [
	{ circular: true, isGolden: true, number: 1, isLegendary: false, url: 'https://i.imgur.com/CqCP2Lc.png' },
	{ vertical: true, isGolden: false, number: 2, isLegendary: false, url: 'https://i.imgur.com/GCYoXGU.jpg' },
	{ isGolden: false, number: 3, isLegendary: false, url: 'https://i.imgur.com/pfRVUuh.jpg' },
	{ isGolden: false, number: 4, isLegendary: false, url: 'https://i.imgur.com/hokJDpr.jpg' },
	{ isGolden: false, number: 5, isLegendary: false, url: 'https://i.imgur.com/h4sCUgp.jpg' },
	{ vertical: true, isGolden: false, number: 6, isLegendary: false, url: 'https://i.imgur.com/034OS5j.png' },
	{ vertical: true, isGolden: false, number: 7, isLegendary: false, url: 'https://i.imgur.com/H8Gi4m8.png' },
	{ vertical: false, isGolden: false, number: 8, isLegendary: false, url: 'https://i.imgur.com/6F2x6Z8.jpg' },
	{ vertical: false, isGolden: false, number: 9, isLegendary: false, url: 'https://i.imgur.com/ro6cDqP.jpg.jpg' },
	{ vertical: false, isGolden: false, number: 10, isLegendary: false, url: 'https://i.imgur.com/I0gTSTw.jpg.jpg' },
	{ vertical: false, isGolden: false, number: 11, isLegendary: false, url: 'https://i.imgur.com/GIjYr9D.jpg' },
	{ vertical: false, isGolden: true, number: 12, isLegendary: false, url: 'https://i.imgur.com/RIsyKLL.jpg' },
	{ vertical: false, isGolden: false, number: 13, isLegendary: false, url: 'https://i.imgur.com/w4oA5B5.jpg' },
	{ vertical: false, isGolden: false, number: 14, isLegendary: false, url: 'https://i.imgur.com/2mXDYYw.jpg' },
	{ vertical: false, isGolden: false, number: 15, isLegendary: false, url: 'https://i.imgur.com/xEyy7CO.jpg' },
	{ vertical: false, isGolden: true, number: 16, isLegendary: false, url: 'https://i.imgur.com/Y7oGUjF.jpg' },
	{ vertical: false, isGolden: false, number: 17, isLegendary: false, url: 'https://i.imgur.com/NGd0Zil.jpg' },
	{ vertical: false, isGolden: false, number: 18, isLegendary: false, url: 'https://i.imgur.com/0jxsuDW.jpg' },
	{ vertical: false, isGolden: false, number: 19, isLegendary: false, url: 'https://i.imgur.com/h3YJgJZ.jpg' },
	{ vertical: false, isGolden: false, number: 20, isLegendary: false, url: 'https://i.imgur.com/TT1ugfw.jpg' },
	{ vertical: false, isGolden: false, number: 21, isLegendary: false, url: 'https://i.imgur.com/nART5fz.jpg' },
	{ vertical: false, isGolden: false, number: 22, isLegendary: false, url: 'https://i.imgur.com/WJNqFjH.jpg' },
	{ vertical: false, isGolden: false, number: 23, isLegendary: false, url: 'https://i.imgur.com/FCfmeGo.jpg' },
	{ vertical: false, isGolden: false, number: 24, isLegendary: false, url: 'https://i.imgur.com/LQES1ZU.jpg' },
	{ vertical: false, isGolden: false, number: 25, isLegendary: false, url: 'https://i.imgur.com/Z7K29o9.jpg' },
	{ vertical: false, isGolden: false, number: 26, isLegendary: false, url: 'https://i.imgur.com/SyvylmI.jpg' },
	{ vertical: false, isGolden: false, number: 27, isLegendary: false, url: 'https://i.imgur.com/z0ozQYF.jpg' },
	{ vertical: false, isGolden: false, number: 28, isLegendary: false, url: 'https://i.imgur.com/tZEPJy8.jpg' },
	{ vertical: false, isGolden: false, number: 29, isLegendary: false, url: 'https://i.imgur.com/dJFmcFk.png' },
	{ vertical: false, isGolden: false, number: 30, isLegendary: false, url: 'https://i.imgur.com/yFjNFDw.png' },
	{ vertical: false, isGolden: false, number: 31, isLegendary: false, url: 'https://i.imgur.com/XjmgNxr.jpg' },
	{ vertical: false, isGolden: false, number: 32, isLegendary: false, url: 'https://i.imgur.com/9OEBngV.jpg' },
	{ vertical: false, isGolden: true, number: 33, isLegendary: false, url: 'https://i.imgur.com/5uXMEYy.jpg' },
	{ vertical: false, isGolden: true, number: 34, isLegendary: false, url: 'https://i.imgur.com/8yDysAR.jpg' },
	{ vertical: false, isGolden: false, number: 35, isLegendary: false, url: 'https://i.imgur.com/t94MYia.jpg' },
	{ vertical: false, isGolden: false, number: 36, isLegendary: false, url: 'https://i.imgur.com/iAQufiz.jpg' },
	{ vertical: false, isGolden: false, number: 37, isLegendary: false, url: 'https://i.imgur.com/2FOrPzz.jpg' },
	{ vertical: false, isGolden: false, number: 38, isLegendary: false, url: 'https://i.imgur.com/WMkrkCA.jpg' },
	{ vertical: false, isGolden: false, number: 39, isLegendary: false, url: 'https://i.imgur.com/JNwi2jn.jpg' },
	{ vertical: false, isGolden: false, number: 40, isLegendary: false, url: 'https://i.imgur.com/4dziKVl.jpg' },
	{ vertical: false, isGolden: false, number: 41, isLegendary: false, url: 'https://i.imgur.com/hByUFwX.jpg' },
	{ vertical: false, isGolden: false, number: 42, isLegendary: false, url: 'https://i.imgur.com/ufSVP3i.jpg' },
	{ vertical: false, isGolden: false, number: 43, isLegendary: false, url: 'https://i.imgur.com/hOk2WVp.jpg' },
	{ vertical: false, isGolden: false, number: 44, isLegendary: false, url: 'https://i.imgur.com/RlyOYNr.jpg' },
	{ vertical: false, isGolden: true, number: 45, isLegendary: false, url: 'https://i.imgur.com/tk5WT15.jpg' },
	{ vertical: false, isGolden: true, number: 46, isLegendary: false, url: 'https://i.imgur.com/MPwXuSV.jpg' },
	{ vertical: false, isGolden: true, number: 47, isLegendary: false, url: 'https://i.imgur.com/ALTYC8Q.jpg' },
	{ vertical: false, isGolden: true, number: 48, isLegendary: false, url: 'https://i.imgur.com/8PlaOtC.jpg' },
	{ vertical: true, isGolden: false, number: 49, isLegendary: false, url: 'https://i.imgur.com/PjlrybY.jpg' },
	{ vertical: false, isGolden: false, number: 50, isLegendary: false, url: 'https://i.imgur.com/czYSNLq.png' },
	{ vertical: false, isGolden: false, number: 51, isLegendary: false, url: 'https://i.imgur.com/eIPNMw3.png' },
	{ vertical: false, isGolden: false, number: 52, isLegendary: false, url: 'https://i.imgur.com/EL9OIyQ.jpg' },
	{ vertical: false, isGolden: false, number: 53, isLegendary: false, url: 'https://i.imgur.com/3KNhjr8.jpg' },
	{ vertical: false, isGolden: true, number: 54, isLegendary: false, url: 'https://i.imgur.com/OKkFKpV.jpg' },
	{ vertical: false, isGolden: false, number: 55, isLegendary: false, url: 'https://i.imgur.com/63StGgl.jpg' },
	{ vertical: false, isGolden: false, number: 56, isLegendary: false, url: 'https://i.imgur.com/xO5Zqpe.jpg' },
	{ vertical: false, isGolden: false, number: 57, isLegendary: false, url: 'https://i.imgur.com/5e6V541.jpg' },
	{ vertical: false, isGolden: false, number: 58, isLegendary: false, url: 'https://i.imgur.com/pPRDA37.jpg' },
	{ vertical: false, isGolden: false, number: 59, isLegendary: false, url: 'https://i.imgur.com/GOBvIs9.jpg' },
	{ vertical: false, isGolden: false, number: 60, isLegendary: false, url: 'https://i.imgur.com/nVU9Yhc.jpg' },
	{ vertical: false, isGolden: false, number: 61, isLegendary: false, url: 'https://i.imgur.com/GhioCjm.jpg' },
	{ vertical: false, isGolden: false, number: 62, isLegendary: false, url: 'https://i.imgur.com/YeU4nb4.jpg' },
	{ vertical: false, isGolden: true, number: 63, isLegendary: false, url: 'https://i.imgur.com/9Zj4riu.png' },
	{ vertical: false, isGolden: true, number: 64, isLegendary: false, url: 'https://i.imgur.com/QhMZJNb.png' },
	{ vertical: false, isGolden: false, number: 65, isLegendary: false, url: 'https://i.imgur.com/RTALn2r.jpg' },
];

export async function setStickers() {
	for (let i = 0; i < stickers.length; i++) {
		const sticker = stickers[i];
		await setDoc(doc(db, 'stickers', sticker.number.toString()), sticker), { merge: true };
	}
}

export async function giveStickers() {
	for (let i = 0; i < stickers.length; i++) {
		const sticker = stickers[i];
		let quantityField = 'quantity' + sticker.number;
		await setDoc(doc(db, 'userStickers', 'ouqD9z5Fy7OoYD4pz8FZoBR5YNv1'), { [quantityField]: 1 }, { merge: true });
	}
}
