import { useContext } from 'react';
import whiteBelt from '@images/white-belt.png';
import yellowBelt from '@images/yellow-belt.png';
import greenBelt from '@images/green-belt.png';
import blueBelt from '@images/blue-belt.png';
import redBelt from '@images/red-belt.png';
import blackBelt from '@images/black-belt.png';
import waveWhite from '@images/wave-white.png';
import waveGreen from '@images/wave-green.png';
import waveRed from '@images/wave-red.png';
import Image from 'next/image';
import { NextSeo } from 'next-seo';
import { DojangContext } from '@context/DojangContext';

const Cintos = () => {
	const { selected } = useContext(DojangContext);

	return (
		<>
			<NextSeo description="Significados de los Cinturones de Taekwondo ITF" title="Significado de los cinturones" />
			<div className="cintos">
				<h1>{selected}</h1>
				<div className="cintos-wave-container">
					<Image alt="separator" src={waveWhite} />
				</div>
				<div className="cintos-grid cintos-white">
					<div className="cintos-grid-image-container ">
						<Image alt="white belt" className="cintos-grid-image" src={whiteBelt} />
					</div>
					<div>
						<h2> Cinto Blanco</h2>
						<p> Significa inocencia, en referencia a la del novicio que no tiene conocimientos previos de Taekwon-Do. </p>
					</div>
				</div>
				<div className="cintos-wave-container reverse main cintos-yellow">
					<Image alt="separator" src={waveWhite} />
				</div>
				<div className="cintos-grid cintos-white cintos-yellow">
					<div>
						<h2> Cinto Amarillo</h2>
						<p> Representa el color de la tierra en la que la planta nace y hecha raíces, ejemplificando que los fundamentos del Taekwon-Do están empezando a establecerse.</p>
					</div>
					<div className="cintos-grid-image-container">
						<Image alt="yellow belt" className="cintos-grid-image desktop" src={yellowBelt} />
					</div>
				</div>
				<div className="cintos-wave-container cintos-yellow">
					<Image alt="separator" src={waveGreen} />
				</div>
				<div className="cintos-grid cintos-green">
					<div className="cintos-grid-image-container ">
						<Image alt="green belt" className="cintos-grid-image" src={greenBelt} />
					</div>
					<div>
						<h2> Cinto Verde</h2>
						<p> Es sinónimo de planta que crece, ejemplificando que la destreza del Taekwon-Do comienza a desarrollarse.</p>
					</div>
				</div>
				<div className="cintos-wave-container reverse cintos-blue">
					<Image alt="separator" src={waveGreen} />
				</div>

				<div className="cintos-grid cintos-white cintos-blue">
					<div>
						<h2> Cinto Azul</h2>
						<p> Significa cielo hacia el cual la planta crece y madura, tal como se madura a medida que se progresa en el Taekwon-Do.</p>
					</div>
					<div className="cintos-grid-image-container ">
						<Image alt="blue belt" className="cintos-grid-image" src={blueBelt} />
					</div>
				</div>
				<div className="cintos-wave-container cintos-blue">
					<Image alt="separator" src={waveRed} />
				</div>
				<div className="cintos-grid cintos-red">
					<div className="cintos-grid-image-container ">
						<Image alt="red belt" className="cintos-grid-image" src={redBelt} />
					</div>
					<div>
						<h2> Cinto Rojo</h2>
						<p> Significa peligro, éste es un punto de inflexión en el aprendizaje. Hay que ejercitar el control y prevenir al oponente para que se aleje. </p>
					</div>
				</div>
				<div className="cintos-wave-container reverse">
					<Image alt="separator" src={waveRed} />
				</div>
				<div className="cintos-grid last cintos-black">
					<div>
						<h2> Cinto Negro</h2>
						<p> Opuesto al blanco, significa madurez, perfeccionamiento y responsabilidad. Punto de partida para un camino que comienza más allá de la oscuridad y el miedo.</p>
					</div>
					<div className="cintos-grid-image-container cintos-black">
						<Image alt="black belt" className="cintos-grid-image" src={blackBelt} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cintos;
