import React, { useState } from 'react';
import Image from 'next/image';
import yellowStripe from '@images/yellow-stripe.png';
import greenStripe from '@images/green-stripe.png';
import blueStripe from '@images/blue-stripe.png';
import redStripe from '@images/red-stripe.png';
import blackStripe from '@images/black-stripe.png';
import yellowBelt from '@images/yellow-belt.png';
import greenBelt from '@images/green-belt.png';
import blueBelt from '@images/blue-belt.png';
import redBelt from '@images/red-belt.png';
import blackBelt from '@images/black-belt-first.png';
import blackBelt2 from '@images/black-belt-second.png';
import blackBelt3 from '@images/black-belt-third.png';
import blackBelt4 from '@images/black-belt-fourth.png';


const PatternRoulette = () => {

	const [winningIndex, setWinningIndex] = useState(null);
	const [totalDegrees, setTotalDegrees] = useState(0);
	const [winningText, setWinningText] = useState('Gira la Ruleta!');
	const segments = 21; // Reemplazar con el número real de segmentos si es diferente
	const degreesPerSegment = 360 / segments;

	const spinWheel = () => {
		setWinningIndex(null);
		const spins = Math.floor(Math.random() * 10 + 10);
		const degrees = spins * 360;
		const extraDegrees = Math.floor(Math.random() * 360);
		const total = degrees + extraDegrees;
		setTotalDegrees(total);

		setTimeout(() => {
			const winningSegment = Math.floor(((total % 360) / degreesPerSegment) + 0.5) % segments;
			const adjustedWinningSegment = (segments - winningSegment) % segments;
			// Suponiendo que tienes un arreglo de nombres de opciones que coinciden con tus segmentos
			const options = ['Chon-ji', 'Dan-Gun', 'Do-San', 'Won-Hyo', 'Yul-Gok', 'Joon-Gun', 'Toi-Gye', 'Hwa-Rang', 'Choong-Moo', 'Kwang-Gae', 'Po-Eun', 'Ge-Baek', 'Eui-Am', 'Choong-Jang', 'Juche', 'Sam-Il', 'Yoo-Sin', 'Choi-Yong', 'Yon-Gae', 'Ul-Ji', 'Moon-Moo'];
			setWinningText(`La forma elegida es ${options[adjustedWinningSegment]}!`);
			setWinningIndex(adjustedWinningSegment);
		}, 3000);
	};

	return (
		<div className="rouletteMain">
			<div className="rouletteContainer">
				<div className="spinBtn" onClick={spinWheel}>Spin</div>
				<div className="wheel" style={{ transform: `rotate(${totalDegrees}deg)`}}>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 0 ? 'highlight' : ''}`} style={{ '--i': 1 }}>
						<figure className="rouletteBelt">
							<Image src={yellowStripe} alt="Chon-ji" layout='fixed' width={50} height={50} />
						</figure>
						<span>Chon-ji</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 1 ? 'highlight' : ''}`} style={{ '--i': 2 }}>
						<figure className="rouletteBelt">
							<Image src={yellowBelt} alt="Dan-gun" layout='fixed' width={50} height={50} />
						</figure>
						<span>Dan-Gun</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 2 ? 'highlight' : ''}`} style={{ '--i': 3 }}>
						<figure className="rouletteBelt">
							<Image src={greenStripe} alt="Do-San" layout='fixed' width={50} height={50} />
						</figure>
						<span>Do-San</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 3 ? 'highlight' : ''}`} style={{ '--i': 4 }}>
						<figure className="rouletteBelt">
							<Image src={greenBelt} alt="Won-Hyo" layout='fixed' width={50} height={50} />
						</figure>
						<span>Won-Hyo</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 4 ? 'highlight' : ''}`} style={{ '--i': 5 }}>
						<figure className="rouletteBelt">
							<Image src={blueStripe} alt="Yul-Gok" layout='fixed' width={50} height={50} />
						</figure>
						<span>Yul-Gok</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 5 ? 'highlight' : ''}`} style={{ '--i': 6 }}>
						<figure className="rouletteBelt">
							<Image src={blueBelt} alt="Joon-Gun" layout='fixed' width={50} height={50} />
						</figure>
						<span>Joon-Gun</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 6 ? 'highlight' : ''}`} style={{ '--i': 7 }}>
						<figure className="rouletteBelt">
							<Image src={redStripe} alt="Toi-Gye" layout='fixed' width={50} height={50} />
						</figure>
						<span>Toi-Gye</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 7 ? 'highlight' : ''}`} style={{ '--i': 8 }}>
						<figure className="rouletteBelt">
							<Image src={redBelt} alt="Hwa-Rang" layout='fixed' width={50} height={50} />
						</figure>
						<span>Hwa-Rang</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 8 ? 'highlight' : ''}`} style={{ '--i': 9 }}>
						<figure className="rouletteBelt">
							<Image src={blackStripe} alt="Choong-Moo" layout='fixed' width={50} height={50} />
						</figure>
						<span>Choong-Moo</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 9 ? 'highlight' : ''}`} style={{ '--i': 10 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt} alt="Kwang-Gae" layout='fixed' width={50} height={50} />
						</figure>
						<span>Kwang-Gae</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 10 ? 'highlight' : ''}`} style={{ '--i': 11 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt} alt="Po-Eun" layout='fixed' width={50} height={50} />
						</figure>
						<span>Po-Eun</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 11 ? 'highlight' : ''}`} style={{ '--i': 12 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt} alt="Ge-Baek" layout='fixed' width={50} height={50} />
						</figure>
						<span>Ge-Baek</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 12 ? 'highlight' : ''}`} style={{ '--i': 13 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt2} alt="Eui-Am" layout='fixed' width={50} height={50} />
						</figure>
						<span>Eui-Am</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 13 ? 'highlight' : ''}`} style={{ '--i': 14 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt2} alt="Choong-Jang" layout='fixed' width={50} height={50} />
						</figure>
						<span>Choong-Jang</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 14 ? 'highlight' : ''}`} style={{ '--i': 15 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt2} alt="Juche" layout='fixed' width={50} height={50} />
						</figure>
						<span>Juche</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 15 ? 'highlight' : ''}`} style={{ '--i': 16 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt3} alt="Sam-Il" layout='fixed' width={50} height={50} />
						</figure>
						<span>Sam-Il</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 16 ? 'highlight' : ''}`} style={{ '--i': 17 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt3} alt="Yoo-Sin" layout='fixed' width={50} height={50} />
						</figure>
						<span>Yoo-Sin</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 17 ? 'highlight' : ''}`} style={{ '--i': 18 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt3} alt="Choi-Yong" layout='fixed' width={50} height={50} />
						</figure>
						<span>Choi-Yong</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundBlack ${winningIndex === 18 ? 'highlight' : ''}`} style={{ '--i': 19 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt4} alt="Yon-Gae" layout='fixed' width={50} height={50} />
						</figure>
						<span>Yon-Gae</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundWhite ${winningIndex === 19 ? 'highlight' : ''}`} style={{ '--i': 20 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt4} alt="Ul-Ji" layout='fixed' width={50} height={50} />
						</figure>
						<span>Ul-Ji</span>
					</div>
					<div className={`rouletteOption rouletteBackgroundGray ${winningIndex === 20 ? 'highlight' : ''}`} style={{ '--i': 21 }}>
						<figure className="rouletteBelt">
							<Image src={blackBelt4} alt="Moon-Moo" layout='fixed' width={50} height={50} />
						</figure>
						<span>Moon-Moo</span>
					</div>
				</div>
			</div>
			<div className="resultContainer">
				<p id="resultText" >{winningText}</p>
			</div>
		</div>
	);
};

export default PatternRoulette;
