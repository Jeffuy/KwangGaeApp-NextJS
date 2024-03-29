import React, { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import MarketRanking from './MarketRanking.jsx';
import { AuthContext } from '@context/AuthContext';
import { MarketContext } from '@context/MarketContext';
import NewPack from './NewPack.jsx';

const MarketMain = ({ cardList }) => {
	const { user, loading, userData, userDataLoading } = useContext(AuthContext);
	const { newPack, clicked, giveStickerToUser, getStickersToGive, giveFirst100Points, percentage, timeLeft, claimPoints, claimText } = useContext(MarketContext);

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

	if ((loading, userDataLoading)) {
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
			{message != '' && <p className="fifty-points-award">{message}</p>}
			{/* <span className="market-special-event">
				Evento especial de fin de año!
				<ul>
					<li>
						<i className="fas fa-candy-cane" />6 Puntos cada 6 Horas
					</li>
					<li>
						<i className="fas fa-candy-cane" />
						Intercambios por solo 3 puntos
					</li>
					<li>
						<i className="fas fa-candy-cane" />
						75 puntos gratis
					</li>
				</ul>
			</span> */}
			<div className="market-quiz-event-container">
				<div className="market-quiz-event">
					<h2> Primer desafío </h2>
					<p>Valor: 100 puntos</p>
					<b>Nota: Es sumamente díficil. Mejor para hacer de a 2</b>
					<p>
						Para resolverlo entra aquí:{' '}
						<a href="https://2solve.me/quiz/a08002d1/kwang-gae-puzzle-1" rel="noreferrer" target="_blank">
							Desafío #1
						</a>
					</p>
				</div>

				<div className="market-quiz-event">
					<h2> Desafío fácil </h2>
					<p>Valor: 50 puntos</p>
					<b>Nota: Es más fácil que el anterior</b>
					<p>
						Para resolverlo entra aquí:{' '}
						<a href="https://2solve.me/quiz/4050c321/segundo-desafío-por-50-puntos-para-comprar-figuritas" rel="noreferrer" target="_blank">
							Desafío #2
						</a>
					</p>
				</div>
				<div className="market-quiz-event">
					<h2> Laberinto </h2>
					<p>Valor: 100 puntos</p>
					<b>Nota: Te vas a perder</b>
					<p>
						Para resolverlo entra aquí:{' '}
						<a href="https://2solve.me/quiz/7080b322/laberinto-1" rel="noreferrer" target="_blank">
							Desafío #3
						</a>
					</p>
				</div>
				<div className="market-quiz-event">
					<h2> Desafío de juegos! </h2>
					<p>Valor: 100 puntos</p>
					<b>Nota: Muchos juegos.</b>
					<p>
						Para resolverlo entra aquí:{' '}
						<a href="https://2solve.me/quiz/40a05456/desaf%C3%ADo-4-por-100-puntos" rel="noreferrer" target="_blank">
							Desafío #4
						</a>
					</p>
				</div>
			</div>

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
				<span className="market-claim-rewards"> {claimText} </span>
				{!clicked && (
					<>
						<button className="market-claim-points-button" disabled={clicked || timeLeft != 'Reclama tus puntos'} onClick={claimPoints}>
							{timeLeft != 'Reclama tus puntos' ? `Espera ${timeLeft}` : 'Reclamar puntos'}
						</button>
					</>
				)}
			</div>
			<NewPack newPack={newPack} />
			<div className="album-repeats-button">
				<Link passHref href="/Album">
					<button>Ir al album</button>
				</Link>
				<Link passHref href="/Trades">
					<button>Ver intercambios</button>
				</Link>
				<Link passHref href="/Repeats">
					<button>Ver mis repetidas</button>
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
			{/* button para mostrar el ranking */}

			<div className="show-ranking-button">
				<button className="show-ranking-button" onClick={() => setShowRanking(!showRanking)}>
					{!showRanking ? 'Ver top 10' : 'Ocultar'}
				</button>
			</div>

			{showRanking && <MarketRanking cardList={cardList} />}
		</section>
	);
};

export default MarketMain;
