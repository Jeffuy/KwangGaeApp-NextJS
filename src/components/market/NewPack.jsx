import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper';
import { Pagination } from 'swiper';

const NewPack = ({ newPack }) => {
	const [clicked, setClicked] = useState([]);

	useEffect(() => {
		setClicked([]);
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
				scrollbar={{ draggable: true }}
			>
				{newPack.map(sticker => (
					<SwiperSlide key={sticker.number}>
						<div
							className={`${sticker.vertical ? 'new-sticker-vertical' : 'new-sticker'} ${sticker.circular ? 'new-sticker-circular' : ''}`}
							onClick={() => setClicked([...clicked, sticker.number])}
						>
							<div className={clicked.includes(sticker.number) ? 'new-pack-border' : 'new-pack-not-border'}>
								<p className={clicked.includes(sticker.number) ? 'album-sticker-number-clicked' : 'album-sticker-number'}>{clicked.includes(sticker.number) ? sticker.number : '?'}</p>
								<Image alt={sticker.number} className={clicked.includes(sticker.number) ? 'new-sticker-clicked' : 'new-sticker-not-clicked'} layout="fill" src={sticker.url} />
								{sticker.circular && (
									<Image
										priority
										alt={sticker.number}
										className={clicked.includes(sticker.number) ? 'new-sticker-clicked-back' : 'new-sticker-not-clicked-back'}
										layout="fill"
										src="https://i.imgur.com/GDWAqoq.png"
									/>
								)}
								{sticker.isGolden && (
									<Image
										priority
										alt={sticker.number}
										className={clicked.includes(sticker.number) ? 'new-sticker-clicked-back' : 'new-sticker-not-clicked-back'}
										layout="fill"
										src="https://i.imgur.com/cUExjUi.png"
									/>
								)}
								{!sticker.isGolden & !sticker.circular && (
									<Image
										priority
										alt={sticker.number}
										className={clicked.includes(sticker.number) ? 'new-sticker-clicked-back' : 'new-sticker-not-clicked-back'}
										layout="fill"
										src="https://i.imgur.com/rwYWQuA.png"
									/>
								)}
							</div>
						</div>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};
export default NewPack;
