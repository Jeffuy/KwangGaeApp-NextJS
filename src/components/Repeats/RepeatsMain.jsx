import React, { useState, useContext } from 'react';
import { doc } from '@firebase/firestore';
import { useDocumentData } from 'react-firebase-hooks/firestore';
import { ExchangeContext } from '@context/ExchangeContext';
// import { setStickers } from '@scripts/data/addStickers';
import { db } from '../../firebase/firebase.js';
import Image from 'next/image';
import Link from 'next/link';

const RepeatsMain = ({ cardList, user, loading }) => {
	const { createTrade, message, clicked, setMessage } = useContext(ExchangeContext);

	const [userStickers, loadingUserStickers] = useDocumentData(doc(db, 'userStickers', user?.uid || 'ly7S2mIBXrXSwoXvKgsj'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [selected, setSelected] = useState(0);
	const [firstOption, setFirstOption] = useState(1);
	const [secondOption, setSecondOption] = useState(1);
	const [thirdOption, setThirdOption] = useState(1);

	const handleBack = () => {
		setMessage('');
		setSelected(0);
	};

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
			{selected == 0 && <h1> Selecciona la figurita que quieras cambiar </h1>}
			<div className="repeats-container">
				{cardList &&
					cardList.length > 1 &&
					selected == 0 &&
					cardList.map(sticker => (
						<React.Fragment key={sticker.number}>
							{userStickers?.['quantity' + sticker.number] > 1 && (
								<div
									className={`${sticker.vertical ? 'repeats-sticker-vertical' : 'repeats-sticker'} ${sticker.circular ? 'repeats-sticker-circular' : ''} ${
										sticker.isGolden ? 'border-golden' : ''
									}`}
									onClick={() => setSelected(sticker.number)}
								>
									<p className="repeats-sticker-number-clicked">{sticker.number}</p>

									<p className="repeats-quantity">x{userStickers['quantity' + sticker.number] - 1}</p>

									<Image alt={sticker.number} className="album-image-clicked" layout="fill" src={sticker.url} />
								</div>
							)}
						</React.Fragment>
					))}
			</div>
			{selected != 0 && (
				<>
					<h1 className="exchange-title">Selecciona hasta tres figuritas que aceptas a cambio</h1>
					<div className="repeats-exchange-container">
						<div className="repeats-section">
							<span>Darás: </span>
							<div
								className={`${cardList[selected - 1].vertical ? 'exchange-sticker-vertical' : 'exchange-sticker'} ${
									cardList[selected - 1].circular ? 'exchange-sticker-circular' : ''
								} ${cardList[selected - 1].isGolden ? 'exchange-border-golden' : ''}`}
								onClick={() => setSelected(cardList[selected - 1].number)}
							>
								<Image alt={cardList[selected - 1].number} layout="fill" src={cardList[selected - 1].url} />
							</div>
							<button onClick={() => setSelected(0)}>Cambiar selección</button>
						</div>
						<div className="repeats-section">
							<i className="fas fa-sync" />
						</div>
						<div className="repeats-section">
							<span>Recibirás:</span>
							<div className="exchange-choice">
								<div>
									<select id="firstChoice" name="firstChoice" onChange={e => setFirstOption(e.target.value)}>
										<option checked value="0">
											Primer Opción
										</option>
										{[...Array(cardList.length).keys()].map(i => (
											<option key={i} value={i + 1}>
												{i + 1}
											</option>
										))}
									</select>
								</div>
								<div className="exchange-img-mini">
									<Image alt={cardList[firstOption].number} height={50} src={cardList[firstOption - 1].url} width={50} />
								</div>
							</div>
							<div className="exchange-choice">
								<div>
									<select id="secondChoice" name="secondChoice" onChange={e => setSecondOption(e.target.value)}>
										<option checked value="0">
											Segunda Opción
										</option>
										{[...Array(cardList.length).keys()].map(i => (
											<option key={i} value={i + 1}>
												{i + 1}
											</option>
										))}
									</select>
								</div>
								<div className="exchange-img-mini">
									<Image alt={cardList[secondOption].number} height={50} src={cardList[secondOption - 1].url} width={50} />
								</div>
							</div>
							<div className="exchange-choice">
								<div>
									<select id="thirdChoice" name="thirdChoice" onChange={e => setThirdOption(e.target.value)}>
										<option checked value="0">
											Tercer Opción
										</option>
										{[...Array(cardList.length).keys()].map(i => (
											<option key={i} value={i + 1}>
												{i + 1}
											</option>
										))}
									</select>
								</div>
								<div className="exchange-img-mini">
									<Image alt={cardList[thirdOption].number} height={50} src={cardList[thirdOption - 1].url} width={50} />
								</div>
							</div>
						</div>
					</div>
					<div className="exchange-confirm">
						<p>Recuerda que crear el intercambio costará 5 puntos y perderás la figurita que hayas seleccionado</p>
						{message == '' && !clicked && <button onClick={() => createTrade(selected, [firstOption, secondOption, thirdOption])}>Crear intercambio</button>}
						{message != '' && (
							<>
								<p className="exchange-error-message">{message}</p>
								<div>
									<button onClick={() => handleBack()}>Volver</button>
									<Link passHref href="/Trades">
										<button>Ver intercambios</button>
									</Link>
								</div>
							</>
						)}
					</div>
				</>
			)}
			<div className="album-repeats-button">
				<Link passHref href="/Market">
					<button>Ir a comprar sobres</button>
				</Link>
				<Link passHref href="/Album">
					<button>Ir al album</button>
				</Link>
				<Link passHref href="/Trades">
					<button>Ver intercambios</button>
				</Link>
			</div>

			{/* <button onClick={setStickers}> Set stickers</button> */}
		</section>
	);
};

export default RepeatsMain;
