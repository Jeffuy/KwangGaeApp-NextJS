import React, { useState } from 'react';
import Link from 'next/link';

const Menu = () => {
	const [show, setShow] = useState(false);

	return (
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
							<Link href="/patternSelector" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-random" /> Selector de formas
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/fight" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-fist-raised" /> Arbitraje de Lucha
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/pattern" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-calculator" />
									Arbitraje de Forma
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/challenge" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-trophy" />
									Challenges
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/quiz" onClick={() => setShow(!show)}>
								<a className="nav-link" href="/">
									<i className="fas fa-list-ol" />
									Cuestionario
								</a>
							</Link>
						</li>
						<li className="nav-item">
							<Link passHref href="/memoryGame" onClick={() => setShow(!show)}>
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
