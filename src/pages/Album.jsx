import React, { useContext } from 'react';
import AlbumContainer from '@containers/AlbumContainer';
import { AuthContext } from '@context/AuthContext.js';
import { NextSeo } from 'next-seo';
import { stickers } from '@scripts/data/addStickers';

const Album = () => {
	const { user, loading } = useContext(AuthContext);
	return (
		<>
			<NextSeo description="Sitio para ver el album de figuritas de Taekwondo" title="Album" />
			<AlbumContainer cardList={stickers} loading={loading} user={user} />
		</>
	);
};

export default Album;
