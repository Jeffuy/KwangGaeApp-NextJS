import React, { useState, useEffect } from 'react';
import { doc, collection, updateDoc } from '@firebase/firestore';
import { useCollectionData, useDocumentData } from 'react-firebase-hooks/firestore';
// import { setStickers } from '@scripts/data/addStickers';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';
import Link from 'next/link';

const AlbumPage1 = ({ user, loading }) => {
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
		<section className="album-page1-bg">
			<div className="album-page">
				{cardList.map(sticker => (
					<React.Fragment key={sticker.number}>
						{sticker.number <= 8 && (
							<div className={`sticker${sticker.number} ${userStickers?.['pasted' + sticker.number] ? 'sticker-pasted' : ''}`}>
								<div className={`${sticker.vertical ? 'album-sticker-vertical' : 'album-sticker'} ${sticker.circular ? 'album-sticker-circular' : ''} `}>
									<div className={userStickers?.['pasted' + sticker.number] & !sticker.circular ? 'album-sticker-border' : 'album-sticker-not-border'}>
										<p
											className={
												(!userStickers?.['quantity' + sticker.number] && !userStickers?.['pasted' + sticker.number]) ||
												(userStickers?.['quantity' + sticker.number] > 0 && !userStickers?.['pasted' + sticker.number])
													? 'album-sticker-number'
													: 'album-sticker-number-clicked'
											}
										>
											{sticker.number}
										</p>
										<Image
											alt={sticker.number}
											className={userStickers?.['quantity' + sticker.number] && userStickers['pasted' + sticker.number] ? 'album-image-clicked' : 'album-image-not-clicked'}
											layout="fill"
											src={sticker.url}
										/>
										{userStickers?.['quantity' + sticker.number] && !userStickers?.['pasted' + sticker.number] && (
											<button className="album-sticker-pasted-button" onClick={() => pasteSticker(`${sticker.number}`)}>
												Pegar
											</button>
										)}
										<Image
											priority
											alt={sticker.number}
											className={userStickers?.['pasted' + sticker.number] ? 'album-image-clicked-back' : 'album-image-not-clicked-back'}
											layout="fill"
											src={`${sticker.circular ? 'https://i.imgur.com/GDWAqoq.png' : 'https://i.imgur.com/rwYWQuA.png'} `}
										/>
									</div>
								</div>
							</div>
						)}
					</React.Fragment>
				))}
			</div>
			<div className="album-market-button">
				<Link passHref href="/Market">
					<button className="album-market-button">Ir a comprar sobres</button>
				</Link>
			</div>
			{/* <button onClick={setStickers}> Set stickers</button> */}
		</section>
	);
};

export default AlbumPage1;
