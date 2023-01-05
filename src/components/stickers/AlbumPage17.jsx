import React, { useState, useEffect } from 'react';
import { doc, updateDoc } from '@firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
// import { setStickers } from '@scripts/data/addStickers';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';

const AlbumPage17 = ({ user, loading, cardList }) => {
	const [userId, setUserId] = useState('ly7S2mIBXrXSwoXvKgsj');
	const [expand, setExpand] = useState(0);

	// eslint-disable-next-line no-unused-vars
	const [userStickers, loadingUserStickers, errorUserStickers, snapshotUserStickers] = useDocumentData(doc(db, 'userStickers', userId), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const pasteSticker = async stickerNumber => {
		await updateDoc(doc(db, 'userStickers', userId), {
			['pasted' + stickerNumber]: true,
		});
	};

	const expandSticker = number => {
		expand === number ? setExpand(0) : setExpand(number);
	};

	useEffect(() => {
		if (user?.uid) {
			setUserId(user.uid);
		}
	}, [user]);

	if ((loading, loadingUserStickers)) {
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
	}

	return (
		<section className="album-page4-bg">
			<h2 className="album-page-title"> Examen Setiembre 2022 (2/2)</h2>
			<div className={` ${expand != 0 ? 'album-page-expand' : 'album-page'}`}>
				{cardList?.map(sticker => (
					<React.Fragment key={sticker.number}>
						{sticker.number <= 151 && sticker.number >= 140 ? (
							<>
								{(sticker.number === 142 || sticker.number === 144 || sticker.number === 146 || sticker.number === 148 || sticker.number === 150) && (
									<div className={` ${expand != 0 ? '' : 'album-break'}`} />
								)}
								<div className={`sticker${sticker.number}`}>
									<div
										className={`${userStickers?.['pasted' + sticker.number] ? 'sticker-pasted' : ''}  ${sticker.vertical ? 'album-sticker-vertical' : 'album-sticker'} ${
											sticker.circular ? 'album-sticker-circular' : ''
										} ${expand === sticker.number ? 'sticker-expanded' : ''}  ${sticker.isGolden ? 'album-border-golden' : ''} ${
											sticker.vertical && expand === sticker.number ? 'sticker-expanded-vertical' : ''
										} ${expand != 0 && expand != sticker.number ? 'sticker-hidden' : ''}`}
										onClick={() => expandSticker(sticker.number)}
									>
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
										{sticker.isGolden && (
											<Image
												priority
												alt={sticker.number}
												className={userStickers?.['pasted' + sticker.number] ? 'album-image-clicked-back' : 'album-image-not-clicked-back'}
												layout="fill"
												src="https://i.imgur.com/cUExjUi.png"
											/>
										)}
										{!sticker.isGolden && (
											<Image
												priority
												alt={sticker.number}
												className={userStickers?.['pasted' + sticker.number] ? 'album-image-clicked-back' : 'album-image-not-clicked-back'}
												layout="fill"
												src="https://i.imgur.com/SHZIJ6Y.png"
											/>
										)}
									</div>
								</div>
							</>
						) : (
							''
						)}
					</React.Fragment>
				))}
			</div>

			{/* <button onClick={setStickers}> Set stickers</button> */}
		</section>
	);
};

export default AlbumPage17;
