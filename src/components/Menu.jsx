import React, { useState, useContext } from 'react';
import { AuthContext } from '@context/AuthContext.js';
//import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';

import Link from 'next/link';

const Menu = () => {
	const [show, setShow] = useState(false);

	const { user, userData } = useContext(AuthContext);

	return (
		<>
			<div className="menu">
				<div className="menu__container">
					<div className="menu__container__logo">
						<Link passHref href="/">
							<a href=""> KwangGae App </a>
						</Link>
					</div>
					<div className="menu__container__menu">
						<div className="menu__container__menu--item">
							<Link passHref href="/dashboard">
								<a href="/">
									<i className="fas fa-home" /> {userData?.displayName ? 'Mi Perfil' : 'Login'}
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/PatternSelector">
								<a href="/">
									<i className="fas fa-random" /> Selector de Formas
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/Fight">
								<a href="/">
									<i className="fas fa-fist-raised" /> Arbitraje de Lucha
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/Dojang">
								<a href="/">
									<i className="fas fa-store-alt" /> Dojang
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/Challenge">
								<a href="/">
									<i className="fas fa-trophy" /> Challenges
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/Quiz">
								<a href="/">
									<i className="fas fa-list-ol" /> Cuestionario
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/MemoryGame">
								<a href="/">
									<i className="fas fa-brain" /> Memory
								</a>
							</Link>
						</div>
					</div>
					<div className="menu__container__hamburger">
						<input className="hamburger__checkbox" id="hamburger" type="checkbox" />
						<label htmlFor="hamburger">
							<div className="hamburger__image--container" onClick={() => setShow(!show)}>
								<Image alt="imagen de perfil" layout="fill" src={userData?.photoSmall != null ? userData?.photoSmall : 'https://i.imgur.com/uBUfUOx.png'} />
							</div>
						</label>
					</div>
				</div>
			</div>

			<div className={`hamburger__menu ${show && 'opened'}`}>
				{user ? (
					<div className={`hamburger__menu--item ${show && 'opened'} hamburger__menu--last-item`}>
						<Link passHref href="/dashboard">
							<a href="/dashboard" onClick={() => setShow(false)}>
								<i className="fas fa-home" /> Mi Perfil
							</a>
						</Link>
					</div>
				) : (
					<>
						<div className={`hamburger__menu--item ${show && 'opened'}`}>
							<Link passHref href="/login">
								<a href="/dashboard" onClick={() => setShow(false)}>
									<i className="fas fa-home" /> Login
								</a>
							</Link>
						</div>
						<div className={`hamburger__menu--item ${show && 'opened'} hamburger__menu--last-item`}>
							<Link passHref href="/register">
								<a href="/register" onClick={() => setShow(false)}>
									<i className="fas fa-home" /> Registrate
								</a>
							</Link>
						</div>
					</>
				)}

				<div className={`hamburger__menu--item ${show && 'opened'} hamburger__menu--first-item`}>
					<Link passHref href="/">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-home" /> Home
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/PatternSelector">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-random" /> Selector de Formas
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/Fight">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-fist-raised" /> Arbitraje de Lucha
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/Dojang">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-store-alt" /> Dojang
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/Challenge">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-trophy" /> Challenges
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/Quiz">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-list-ol" /> Cuestionario
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/MemoryGame">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-brain" /> Memory
						</a>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Menu;
