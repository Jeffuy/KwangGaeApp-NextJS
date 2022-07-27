import React, { useState } from 'react';
//import { GiHamburgerMenu } from 'react-icons/gi';

import Link from 'next/link';

const Menu = () => {
	const [show, setShow] = useState(false);

	return (
		// <div className="menu">
		// 	<div className="menu__container">
		// 		<div className="menu__container__logo">
		// 			<Link passHref href="/">
		// 				<a href=""> KwangGae App </a>
		// 			</Link>
		// 		</div>
		// 		<div className="menu__container__menu">
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-home" /> Home
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/PatternSelector" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-random" /> Selector de Formas
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/Fight" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-fist-raised" /> Arbitraje de Lucha
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/Pattern" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-calculator" /> Arbitraje de Forma
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/Challenge" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-trophy" /> Challenges
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/Quiz" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-list-ol" /> Cuestionario
		// 					</a>
		// 				</Link>
		// 			</div>
		// 			<div className="menu__container__menu--item">
		// 				<Link passHref href="/MemoryGame" onClick={() => setShow(!show)}>
		// 					<a className="nav-link" href="/">
		// 						<i className="fas fa-brain" /> Memory
		// 					</a>
		// 				</Link>
		// 			</div>
		// 		</div>
		// 		<div className="menu__container__hamburger">
		// 			<GiHamburgerMenu onClick={() => setShow(!show)} />
		// 		</div>
		// 	</div>
		// </div>
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<div className="container-fluid">
				<a className="navbar-brand" href="/">
					KwangGae App
				</a>
				<button className="navbar-toggler" type="button" onClick={() => setShow(!show)}>
					<span className="navbar-toggler-icon" />
				</button>

				<div className="collapse navbar-collapse" id="navbarNav" style={show ? { display: 'block', animation: 'gainOpacity 1s' } : { display: 'none' }}>
					<ul className="navbar-nav ms-auto">
						<li className="nav-item">
							<Link passHref href="/" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-home" /> Home
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link href="/PatternSelector" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-random" /> Selector de formas
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/Fight" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-fist-raised" /> Arbitraje de Lucha
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/Pattern" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-calculator" />
									Arbitraje de Forma
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/Challenge" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-trophy" />
									Challenges
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/Quiz" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-list-ol" />
									Cuestionario
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/MemoryGame" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-brain" />
									Memory
								</a>
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Menu;
