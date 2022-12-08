import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { Pagination } from 'swiper';

const NewPack = ({ newPack }) => {
	const [clicked, setClicked] = useState([]);

	useEffect(() => {
		setClicked([]);
		console.count('REINICIADO');
		console.log(clicked);
	}, [newPack]);

	return (
		<>
			<Swiper
				className="swiper-container-new-pack mySwiper"
				effect={'cards'}
				grabCursor={true}
				modules={[EffectCards, Pagination]}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
			>
				{newPack.map(sticker => (
					<SwiperSlide key={sticker.number}>
						<div
							className={`${sticker.vertical ? 'new-sticker-vertical' : 'new-sticker'} ${sticker.circular ? 'new-sticker-circular' : ''}`}
							onClick={() => setClicked([...clicked, sticker.number])}
						>
							<p className={clicked.includes(sticker.number) ? 'album-sticker-number-clicked' : 'album-sticker-number'}>{clicked.includes(sticker.number) ? sticker.number : '?'}</p>
							<Image alt={sticker.number} className={clicked.includes(sticker.number) ? 'new-sticker-clicked' : 'new-sticker-not-clicked'} layout="fill" src={sticker.url} />
							<Image
								priority
								alt={sticker.number}
								className={clicked.includes(sticker.number) ? 'new-sticker-clicked-back' : 'new-sticker-not-clicked-back'}
								layout="fill"
								src={`${sticker.circular ? 'https://i.imgur.com/GDWAqoq.png' : 'https://i.imgur.com/rwYWQuA.png'} `}
							/>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
export default NewPack;
