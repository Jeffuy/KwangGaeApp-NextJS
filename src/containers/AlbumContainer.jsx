import React from 'react';
import AlbumPage1 from '@components/stickers/AlbumPage1';
import AlbumPage2 from '@components/stickers/AlbumPage2';
import AlbumPage3 from '@components/stickers/AlbumPage3';
import AlbumPage4 from '@components/stickers/AlbumPage4';
import AlbumPage5 from '@components/stickers/AlbumPage5';
import AlbumPage6 from '@components/stickers/AlbumPage6';
import AlbumPage7 from '@components/stickers/AlbumPage7';
import AlbumPage8 from '@components/stickers/AlbumPage8';
import AlbumPage9 from '@components/stickers/AlbumPage9';
import AlbumPage10 from '@components/stickers/AlbumPage10';
import AlbumPage11 from '@components/stickers/AlbumPage11';
import AlbumPage12 from '@components/stickers/AlbumPage12';
import AlbumPage13 from '@components/stickers/AlbumPage13';
import AlbumPage14 from '@components/stickers/AlbumPage14';
import AlbumPage15 from '@components/stickers/AlbumPage15';
import AlbumPage16 from '@components/stickers/AlbumPage16';
import AlbumPage17 from '@components/stickers/AlbumPage17';
import AlbumPage18 from '@components/stickers/AlbumPage18';
import AlbumPage19 from '@components/stickers/AlbumPage19';
import AlbumPage20 from '@components/stickers/AlbumPage20';
import AlbumPage21 from '@components/stickers/AlbumPage21';
import AlbumPage22 from '@components/stickers/AlbumPage22';
import AlbumPage23 from '@components/stickers/AlbumPage23';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
//import { Navigation, Pagination } from 'swiper';
import Link from 'next/link';

const AlbumContainer = ({ user, loading, cardList }) => {
	return (
		<>
			<Swiper
				// install Swiper modules
				className="swiper-container"
				modules={[Navigation]}
				// modules={[Navigation, Pagination]}
				// pagination={{
				// 	dynamicBullets: true,
				// 	clickable: true,
				// }}
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
				<SwiperSlide>
					<AlbumPage8 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage9 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage10 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage11 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage12 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage13 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage14 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage15 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage16 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage17 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage18 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage19 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage20 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage21 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage22 cardList={cardList} loading={loading} user={user} />
				</SwiperSlide>
				<SwiperSlide>
					<AlbumPage23 cardList={cardList} loading={loading} user={user} />
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
