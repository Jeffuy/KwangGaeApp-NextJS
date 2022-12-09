import React from 'react';
import AlbumPage1 from '@components/stickers/AlbumPage1';
import AlbumPage2 from '@components/stickers/AlbumPage2';
import AlbumPage3 from '@components/stickers/AlbumPage3';
import AlbumPage4 from '@components/stickers/AlbumPage4';
import AlbumPage5 from '@components/stickers/AlbumPage5';
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
					<AlbumPage3 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage4 loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage5 loading={loading} user={user} />
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default AlbumContainer;
