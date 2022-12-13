import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MarketRanking from './MarketRanking.jsx';
import { AuthContext } from '@context/AuthContext';
import { MarketContext } from '@context/MarketContext';
import NewPack from './NewPack.jsx';

const MarketMain = () => {
	const { user, loading, userData, userDataLoading } = useContext(AuthContext);
	const { newPack, clicked, giveStickerToUser, getStickersToGive, giveFirst100Points, percentage, loadingPercentage } = useContext(MarketContext);

	const [showRanking, setShowRanking] = useState(false);

	const [message, setMessage] = useState('');

	useEffect(() => {
		if (!userData?.firstTime) {
			giveFirst100Points();
			setMessage('Has recibido 50 puntos de regalo para comprar tus primeros sobres!');
		}
	}, [userData]);

	useEffect(() => {
		const sub = giveStickerToUser();
		return () => sub;
	}, [newPack]);

	useEffect(() => {
		if (!loadingPercentage) {
			setShowRanking(true);
		}
	}, [loadingPercentage]);

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
			<p className="fifty-points-award">{message}</p>

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
			<div className="album-market-button">
				<Link passHref href="/Album">
					<div className="market-link">
						<a>Ir al album</a>
					</div>
				</Link>
			</div>
			{/* El div ira cambiando de color a medida que el porcentaje crezca */}
			<div
				className="album-percentage"
				style={{
					// crea un degradado de acuerdo al porcentaje
					background: `linear-gradient(to right, #00adee ${percentage}%, #212529 ${percentage}%)`,
				}}
			>
				<b>¡Has completado un {percentage}% del álbum!</b>
			</div>
			{showRanking && <MarketRanking />}
		</section>
	);
};

export default MarketMain;
