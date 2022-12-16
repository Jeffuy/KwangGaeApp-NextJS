import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '@context/AuthContext.js';
//import { GiHamburgerMenu } from 'react-icons/gi';
import Image from 'next/image';
import Link from 'next/link';
import { storage } from '../firebase/firebase.js';
import { ref as storageRef, getDownloadURL } from 'firebase/storage';

const Menu = () => {
	const [show, setShow] = useState(false);
	const { user, userData, logout } = useContext(AuthContext);

	const profilePictureSmall = storageRef(storage, `users/${user?.uid}/profilePictureSmall.jpeg`);
	const [imageURL, setImageURL] = useState('');

	useEffect(() => {
		getDownloadURL(profilePictureSmall).then(url => setImageURL(url));
	}, [userData]);

	// if (loading || userDataLoading) {
	// 	return <div>Loading...</div>;
	// }

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
									<i className="fas fa-home" /> {user ? 'Mi Perfil' : 'Login'}
								</a>
							</Link>
						</div>
						<div className="menu__container__menu--item">
							<Link passHref href="/Album">
								<a href="/">
									<i className="fas fa-book-open" /> Album
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
						{/* <div className="menu__container__menu--item">
							<Link passHref href="/MemoryGame">
								<a href="/">
									<i className="fas fa-brain" /> Memory
								</a>
							</Link>
						</div> */}
						{user && (
							<div className="menu__container__menu--item">
								<Link passHref href="/dashboard">
									<a href="/">
										<i className="fas fa-trophy" /> {userData?.availablePoints} pts.
									</a>
								</Link>
							</div>
						)}
					</div>

					<div className="menu__container__hamburger">
						{user && (
							<div className="menu__container__menu--item">
								<Link passHref href="/dashboard">
									<a href="/">
										<i className="fas fa-trophy" /> {userData?.availablePoints} pts.
									</a>
								</Link>
							</div>
						)}
						<input className="hamburger__checkbox" id="hamburger" type="checkbox" />
						<label htmlFor="hamburger">
							<div className="hamburger__image--container" onClick={() => setShow(!show)}>
								{user ? (
									<Image alt="imagen de perfil" layout="fill" src={imageURL || 'https://i.imgur.com/uBUfUOx.png'} />
								) : (
									<>
										<div className="lds-ripple-small">
											<div />
											<div />
										</div>
									</>
								)}
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
				<div className={`hamburger__menu--item ${show && 'opened'} hamburger__menu--item`}>
					<Link passHref href="/Album">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-book-open" /> Album
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
				{user && (
					<div className={`hamburger__menu--item ${show && 'opened'}`}>
						<Link passHref href="/">
							<a href="/" onClick={logout}>
								<i className="fas fa-sign-out-alt" /> Salir
							</a>
						</Link>
					</div>
				)}
				{/* <div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/MemoryGame">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-brain" /> Memory
						</a>
					</Link>
				</div> */}
			</div>
		</>
	);
};

export default Menu;
