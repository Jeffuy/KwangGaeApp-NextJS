import React, { useState } from 'react';
import { doc } from '@firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
// import { setStickers } from '@scripts/data/addStickers';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';
import Link from 'next/link';

const RepeatsMain = ({ cardList, user, loading }) => {
	const [expand, setExpand] = useState(0);

	const expandSticker = number => {
		expand === number ? setExpand(0) : setExpand(number);
	};

	const [userStickers, loadingUserStickers] = useDocumentData(doc(db, 'userStickers', user.uid), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	if (loadingUserStickers || loading)
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

	return (
		<section className="repeats">
			<h1> Tus figuritas repetidas </h1>
			<div className="repeats-container">
				{cardList &&
					cardList.length > 1 &&
					cardList.map(sticker => (
						<React.Fragment key={sticker.id}>
							{userStickers?.['quantity' + sticker.number] > 1 && (
								<div
									className={`${expand === sticker.number && !sticker.vertical ? 'repeats-expanded' : ''} ${
										expand === sticker.number && sticker.vertical ? 'repeats-expanded-vertical' : ''
									} ${expand != 0 && expand != sticker.number ? 'repeats-hidden' : ''}`}
									onClick={() => expandSticker(sticker.number)}
								>
									<div
										className={`${sticker.vertical ? 'repeats-sticker-vertical' : 'repeats-sticker'} ${sticker.circular ? 'repeats-sticker-circular' : ''} ${
											sticker.isGolden ? 'border-golden' : ''
										}`}
									>
										<p className="repeats-sticker-number-clicked">{sticker.number}</p>

										<p className="repeats-quantity">x{userStickers['quantity' + sticker.number] - 1}</p>

										<Image alt={sticker.number} className="album-image-clicked" layout="fill" src={sticker.url} />
									</div>
								</div>
							)}
						</React.Fragment>
					))}
				<div className="album-repeats-button">
					<Link passHref href="/Market">
						<button>Ir a comprar sobres</button>
					</Link>

					<Link passHref href="/Album">
						<button>Ir al album</button>
					</Link>
				</div>
			</div>

			{/* <button onClick={setStickers}> Set stickers</button> */}
		</section>
	);
};

export default RepeatsMain;
