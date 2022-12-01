import React from 'react';
import { NextSeo } from 'next-seo';
import Image from 'next/future/image';
import logo from '@logos/logo.png';

const Home = () => {
	return (
		<>
			<NextSeo description="Sitio web para alumnos, instructores y arbítros de Taekwon-Do I.T.F. Útil para torneos, clases y examenes" title="KwangGae App" />
			<div className="home">
				<div className="home__logo-container">
					<Image priority alt="kwang-gae" className="home__logo-container--img" height={250} src={logo} width={250} />
				</div>

				<div className="home__description-container">
					<div className="home__description-container--icon">
						<i className="fas fa-mobile-alt fa-5x" />
					</div>
					<div className="home__description-container--text">
						<div className="home__description-container--title">
							<h3>La aplicación de Kwang-Gae</h3>
						</div>

						<div className="home__description-container--description">
							<p>La mejor herramienta para mejorar tus clases de Taekwon-Do. Arbitraje, selector de formas, desafíos, información y videos. Desarrollado por profesores y alumnos</p>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Home;
