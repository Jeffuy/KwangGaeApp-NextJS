import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import Link from 'next/link';

const Menu = () => {
	const [show, setShow] = useState(false);

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
							<Link passHref href="/">
								<a href="/">
									<i className="fas fa-home" /> Home
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
									<i className="fas fa-calculator" /> Dojang
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
							<GiHamburgerMenu size={30} onClick={() => setShow(!show)} />
						</label>
					</div>
				</div>
			</div>

			<div className={`hamburger__menu ${show && 'opened'}`}>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-home" /> Home
						</a>
					</Link>
				</div>
				<div className={`hamburger__menu--item ${show && 'opened'}`}>
					<Link passHref href="/Dojang">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-random" /> Dojang
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
					<Link passHref href="/Pattern">
						<a href="/" onClick={() => setShow(false)}>
							<i className="fas fa-calculator" /> Arbitraje de Forma
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
