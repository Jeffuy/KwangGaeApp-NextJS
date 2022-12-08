import React from 'react';
import AlbumPage1 from '@components/stickers/AlbumPage1';
import AlbumPage2 from '@components/stickers/AlbumPage2';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const AlbumContainer = ({ user, loading }) => {
	return (
		<>
			<Swiper
				// install Swiper modules
				className="swiper-container mySwiper"
				modules={[Navigation, Pagination]}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				slidesPerView={1}
				spaceBetween={50}
				onSlideChange={() => console.log('slide change')}
				onSwiper={swiper => console.log(swiper)}
			>
				<SwiperSlide>
					<AlbumPage1 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 loading={loading} user={user} />
				</SwiperSlide>
			</Swiper>
			<div className="album-market-button">
				<Link passHref href="/Market">
					<button className="album-market-button">Ir a comprar sobres</button>
				</Link>
			</div>
		</>
	);
};

export default AlbumContainer;
