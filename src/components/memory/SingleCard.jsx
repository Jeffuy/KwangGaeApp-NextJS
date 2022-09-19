import React from 'react';
import Image from 'next/future/image';
import logo from '@logos/logo.png';

const SingleCard = ({ card, handleChoice, flipped, disabled }) => {
	const handleClick = () => {
		if (!disabled) {
			handleChoice(card);
		}
	};

	return (
		<div className="card">
			<div className={flipped ? 'flipped' : ''}>
				<div className="front card-image">
					<Image alt="card front" height={250} src={card.src} width={250} />
				</div>
				<div className="back card-image">
					<Image alt="card back" height={250} src={logo} width={250} onClick={handleClick} />
				</div>
			</div>
		</div>
	);
};

export default SingleCard;
