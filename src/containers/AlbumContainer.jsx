import React from 'react';
import AlbumPage1 from '@components/stickers/AlbumPage1';
import AlbumPage2 from '@components/stickers/AlbumPage2';
import AlbumPage3 from '@components/stickers/AlbumPage3';
import AlbumPage4 from '@components/stickers/AlbumPage4';
import AlbumPage5 from '@components/stickers/AlbumPage5';
import AlbumPage6 from '@components/stickers/AlbumPage6';
import AlbumPage7 from '@components/stickers/AlbumPage7';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';

const AlbumContainer = ({ user, loading, cardList }) => {
	return (
		<>
			<Swiper
				// install Swiper modules
				className="swiper-container"
				modules={[Navigation, Pagination]}
				pagination={{
					dynamicBullets: true,
					clickable: true,
				}}
				slidesPerView={1}
				spaceBetween={50}
			>
				<SwiperSlide>
					<AlbumPage1 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage2 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage3 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage4 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage5 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage6 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage7 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
			</Swiper>
			<div className="album-repeats-button">
				<Link passHref href="/Market">
					<button>Ir a comprar sobres</button>
				</Link>
				<Link passHref href="/Trades">
					<button>Ver intercambios</button>
				</Link>
				<Link passHref href="/Repeats">
					<button>Ver mis repetidas</button>
				</Link>
			</div>
		</>
	);
};

export default AlbumContainer;
