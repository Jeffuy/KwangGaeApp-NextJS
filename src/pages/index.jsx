import React from 'react';
import Image from 'next/image';
import logo from '@logos/logo.png';
import Link from 'next/link';

const Home = () => {
	return (
		<div>
			<div className="container">
				<button className="btn-danger">
					<Link href="login">Login</Link>
				</button>
				<header className="row">
					<div className="col-lg-12 text-center mt-3 mb-3">
						<Image alt="kwang-gae" className="animate__animated animate__bounceIn" height={275} src={logo} width={275} />
					</div>
				</header>
			</div>
			<div className="container-fluid">
				<div className="row bg-dark text-white p-5 text-center">
					<div className="col-sm-6">
						<i className="fas fa-mobile-alt fa-5x" />
					</div>
					<div className="col-sm-6 pt-4">
						<h3>La aplicación de Kwang-Gae</h3>
						<p>La mejor herramienta para mejorar tus clases de Taekwon-Do. Arbitraje, selector de formas, desafíos, información y videos. Desarrollado por profesores y alumnos</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
