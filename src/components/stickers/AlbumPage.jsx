import React, { useState, useEffect } from 'react';
import { doc, collection, updateDoc } from '@firebase/firestore';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';
import Link from 'next/link';

const AlbumPage = ({ user, loading }) => {
	const [userId, setUserId] = useState('ly7S2mIBXrXSwoXvKgsj');

	// eslint-disable-next-line no-unused-vars
	const [cardList, loadingCardList, errorCardList, snapshotCardList] = useCollectionData(collection(db, 'stickers'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	console.log('HOLA ', user?.uid);

	// eslint-disable-next-line no-unused-vars
	const [userStickers, loadingUserStickers, errorUserStickers, snapshotUserStickers] = useDocumentData(doc(db, 'userStickers', userId), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const pasteSticker = async stickerNumber => {
		await updateDoc(doc(db, 'userStickers', userId), {
			['pasted' + stickerNumber]: true,
		});
	};

	useEffect(() => {
		if (user?.uid) {
			setUserId(user.uid);
		}
	}, [user]);

	if ((loadingCardList, loading, loadingUserStickers)) {
		return <p>Loading...</p>;
	}

	console.log(userStickers);

	return (
		<section>
			<div className="album-page">
				{cardList.map(sticker => (
					<div key={sticker.number} className="album-map-container">
						<div className={`${sticker.vertical ? 'album-sticker-vertical' : 'album-sticker'} ${sticker.circular ? 'album-sticker-circular' : ''}`}>
							<p className={userStickers['quantity' + sticker.number] && !userStickers['pasted' + sticker.number] ? 'album-sticker-number' : 'album-sticker-number-clicked'}>
								{sticker.number}
							</p>
							<Image
								alt={sticker.number}
								className={userStickers['quantity' + sticker.number] && userStickers['pasted' + sticker.number] ? 'album-image-clicked' : 'album-image-not-clicked'}
								layout="fill"
								src={sticker.url}
							/>
							{userStickers['quantity' + sticker.number] && !userStickers['pasted' + sticker.number] && (
								<button className="album-sticker-pasted-button" onClick={() => pasteSticker(`${sticker.number}`)}>
									Pegar
								</button>
							)}
							<Image
								priority
								alt={sticker.number}
								className={userStickers['pasted' + sticker.number] ? 'album-image-clicked-back' : 'album-image-not-clicked-back'}
								layout="fill"
								src={`${sticker.circular ? 'https://i.imgur.com/GDWAqoq.png' : 'https://i.imgur.com/rwYWQuA.png'} `}
							/>
						</div>
					</div>
				))}

				{/* {allStickers.map(sticker => (
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
				))}*/}
			</div>
			<Link passHref href="/Market">
				<button className="album-market-button">Ir a comprar sobres</button>
			</Link>
		</section>
	);
};

export default AlbumPage;
