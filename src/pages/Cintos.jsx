import React from 'react';
import whiteBelt from '@images/white-belt.png';
import yellowBelt from '@images/yellow-belt.png';
import greenBelt from '@images/green-belt.png';
import blueBelt from '@images/blue-belt.png';
import redBelt from '@images/red-belt.png';
import blackBelt from '@images/black-belt.png';
import wave from '@images/wave.png';
import Image from 'next/image';
import { NextSeo } from 'next-seo';

const Cintos = () => {
	return (
		<>
			<NextSeo description="Significados de los Cinturones de Taekwondo ITF" title="Significado de los cinturones" />
			<div className="cintos">
				<h1>CINTOS</h1>
				<div className="cintos-wave-container">
					<Image alt="separator" src={wave} />
				</div>
				<div className="cintos-grid cintos-black">
					<div className="cintos-grid-image-container ">
						<Image alt="white belt" className="cintos-grid-image" src={whiteBelt} />
					</div>
					<div>
						<h2> Cinto Blanco</h2>
						<p> Significa inocencia, en referencia a la del novicio que no tiene conocimientos previos de Taekwon-Do. </p>
					</div>
				</div>
				<div className="cintos-wave-container reverse main">
					<Image alt="separator" src={wave} />
				</div>
				<div className="cintos-grid">
					<div>
						<h2> Cinto Amarillo</h2>
						<p> Representa el color de la tierra en la que la planta nace y hecha raíces, ejemplificando que los fundamentos del Taekwon-Do están empezando a establecerse.</p>
					</div>
					<div className="cintos-grid-image-container ">
						<Image alt="yellow belt" className="cintos-grid-image desktop" src={yellowBelt} />
					</div>
				</div>
				<div className="cintos-wave-container">
					<Image alt="separator" src={wave} />
				</div>
				<div className="cintos-grid cintos-black">
					<div className="cintos-grid-image-container ">
						<Image alt="green belt" className="cintos-grid-image" src={greenBelt} />
					</div>
					<div>
						<h2> Cinto Verde</h2>
						<p> Es sinónimo de planta que crece, ejemplificando que la destreza del Taekwon-Do comienza a desarrollarse.</p>
					</div>
				</div>
				<div className="cintos-wave-container reverse">
					<Image alt="separator" src={wave} />
				</div>

				<div className="cintos-grid">
					<div>
						<h2> Cinto Azul</h2>
						<p> Significa cielo hacia el cual la planta crece y madura, tal como se madura a medida que se progresa en el Taekwon-Do.</p>
					</div>
					<div className="cintos-grid-image-container ">
						<Image alt="blue belt" className="cintos-grid-image" src={blueBelt} />
					</div>
				</div>
				<div className="cintos-wave-container">
					<Image alt="separator" src={wave} />
				</div>
				<div className="cintos-grid cintos-black">
					<div className="cintos-grid-image-container ">
						<Image alt="red belt" className="cintos-grid-image" src={redBelt} />
					</div>
					<div>
						<h2> Cinto Rojo</h2>
						<p> Significa peligro, éste es un punto de inflexión en el aprendizaje. Hay que ejercitar el control y prevenir al oponente para que se aleje. </p>
					</div>
				</div>
				<div className="cintos-wave-container reverse">
					<Image alt="separator" src={wave} />
				</div>
				<div className="cintos-grid last">
					<div>
						<h2> Cinto Negro</h2>
						<p> Opuesto al blanco, significa madurez, perfeccionamiento y responsabilidad. Punto de partida para un camino que comienza más allá de la oscuridad y el miedo.</p>
					</div>
					<div className="cintos-grid-image-container ">
						<Image alt="black belt" className="cintos-grid-image" src={blackBelt} />
					</div>
				</div>
			</div>
		</>
	);
};

export default Cintos;
