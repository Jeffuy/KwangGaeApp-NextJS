import React, { useContext, useEffect } from 'react';
import { doc } from '@firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { ExchangeContext } from '@context/ExchangeContext';
//import { setStickers } from '@scripts/data/addStickers';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';
import Link from 'next/link';

const TradesMain = ({ cardList, user, loading }) => {
	const { getAllTrades, trades, clicked, cancelTrade, performTrade, exchangeMessage } = useContext(ExchangeContext);

	const [userStickers, loadingUserStickers] = useDocumentData(doc(db, 'userStickers', user?.uid || 'ly7S2mIBXrXSwoXvKgsj'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const handleSubmit = async (e, trade) => {
		e.preventDefault();
		let tradeId = 0;
		if (e.target[0].checked) tradeId = e.target[0].value;
		if (e.target[1].checked) tradeId = e.target[1].value;
		if (e.target[2].checked) tradeId = e.target[2].value;

		performTrade(tradeId, trade);
	};

	useEffect(() => {
		getAllTrades();
		console.count('TradesMain');
	}, []);

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

	if (!user) {
		return (
			<div>
				<h2>No estas logueado</h2>
			</div>
		);
	}

	return (
		<section className="trades-main-container">
			<h1>Intercambios</h1>
			<div className="exchange-confirm">
				<p>Recuerda que aceptar el intercambio costará 5 puntos y perderás la figurita que hayas seleccionado</p>
			</div>
			{trades?.length > 0 ? (
				<div className="trades-list-container">
					<div className="trade-list-item">
						<h3>Creador</h3>
						<h3>Fecha</h3>
						<h3>Ofrece</h3>
						<h3>Recibe</h3>
					</div>
					{trades?.map(trade => (
						<React.Fragment key={trade.createdAt}>
							{/* {trade.userCreated !== user.uid && ( */}
							<div className="trade-list-item">
								<div className="trade-list-item-user-photo">
									<p>{trade.userCreatedName}</p>
									<div className="trade-list-user-photo-container">
										<Image alt={trade.userCreatedPhoto} layout="fill" src={trade.userCreatedPhoto} />
									</div>
								</div>
								<div className="trade-list-item-time">
									<p>{trade.createdAt.toDate().toLocaleDateString('es-UY')}</p>
									<p>{trade.createdAt.toDate().toLocaleTimeString('es-UY')}</p>
								</div>
								<div className="trade-list-item-image">
									<div className={cardList[trade.stickerOffered - 1].isGolden ? 'border-golden' : ''}>
										{!userStickers[`quantity${trade.stickerOffered}`] && <p>TE FALTA!</p>}
										<Image alt={cardList[trade.stickerOffered - 1].url} layout="fill" src={cardList[trade.stickerOffered - 1].url} />
									</div>
								</div>
								<div className="trade-list-item-image-asked">
									<form onSubmit={e => handleSubmit(e, trade)}>
										<div>
											<label className={userStickers[`quantity${trade.stickersAsked[0]}`] > 1 ? '' : 'trade-item-unavailable'}>
												<Image
													alt={cardList[trade.stickersAsked[0] - 1].url}
													className={cardList[trade.stickersAsked[2] - 1].isGolden ? 'border-golden' : ''}
													height={30}
													src={cardList[trade.stickersAsked[0] - 1].url}
													width={30}
												/>
												<input disabled={userStickers[`quantity${trade.stickersAsked[0]}`] < 2} name="sticker" type="radio" value={`${trade.stickersAsked[0]}`} />
											</label>

											<label className={userStickers[`quantity${trade.stickersAsked[1]}`] > 1 ? '' : 'trade-item-unavailable'}>
												<Image
													alt={cardList[trade.stickersAsked[1] - 1].url}
													className={cardList[trade.stickersAsked[0] - 1].isGolden ? 'border-golden' : ''}
													height={30}
													src={cardList[trade.stickersAsked[1] - 1].url}
													width={30}
												/>
												<input disabled={userStickers[`quantity${trade.stickersAsked[1]}`] < 2} name="sticker" type="radio" value={`${trade.stickersAsked[1]}`} />
											</label>
											<label className={`${userStickers[`quantity${trade.stickersAsked[2]}`] > 1 ? '' : 'trade-item-unavailable'} `}>
												<Image
													alt={cardList[trade.stickersAsked[2] - 1].url}
													className={cardList[trade.stickersAsked[1] - 1].isGolden ? 'border-golden' : ''}
													height={30}
													src={cardList[trade.stickersAsked[2] - 1].url}
													width={30}
												/>
												<input disabled={userStickers[`quantity${trade.stickersAsked[2]}`] < 2} name="sticker" type="radio" value={`${trade.stickersAsked[2]}`} />
											</label>
										</div>
										<div className="trades-accept-button">
											{!clicked && (
												<>{user.uid === trade.userCreated ? <button onClick={() => cancelTrade(trade.uid)}>cancelar</button> : <button type="submit">Acceptar</button>}</>
											)}
										</div>
									</form>
									{exchangeMessage != '' && <p>{exchangeMessage}</p>}
								</div>
							</div>
						</React.Fragment>
					))}
				</div>
			) : (
				<p>No hay intercambios disponibles</p>
			)}
			<div className="album-repeats-button">
				<Link passHref href="/Market">
					<button>Ir a comprar sobres</button>
				</Link>

				<Link passHref href="/Album">
					<button>Ir al album</button>
				</Link>
				<Link passHref href="/Repeats">
					<button>Ver mis repetidas</button>
				</Link>
			</div>

			{/* <button onClick={setStickers}> Set stickers</button> */}
		</section>
	);
};

export default TradesMain;
