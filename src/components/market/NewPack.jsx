import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const NewPack = ({ newPack }) => {
	const [clicked, setClicked] = useState([]);

	useEffect(() => {
		setClicked([]);
		console.count('REINICIADO');
		console.log(clicked);
	}, [newPack]);

	return (
		<>
			<div className="album-page new-pack">
				{newPack.map(sticker => (
					<div key={sticker.number} className="album-map-container">
						<div className={`${sticker.vertical ? 'album-sticker-vertical' : 'album-sticker'}`} onClick={() => setClicked([...clicked, sticker.number])}>
							<p className={clicked.includes(sticker.number) ? 'album-sticker-number-clicked' : 'album-sticker-number'}>{clicked.includes(sticker.number) ? sticker.number : '?'}</p>
							<Image alt={sticker.number} className={clicked.includes(sticker.number) ? 'album-image-clicked' : 'album-image-not-clicked'} layout="fill" src={sticker.url} />
							<Image
								priority
								alt={sticker.number}
								className={clicked.includes(sticker.number) ? 'album-image-clicked-back' : 'album-image-not-clicked-back'}
								layout="fill"
								src="https://i.imgur.com/rwYWQuA.png"
							/>
						</div>
					</div>
				))}
			</div>
		</>
	);
};
export default NewPack;
