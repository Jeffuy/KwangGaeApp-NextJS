import React, { useContext } from 'react';
import AlbumContainer from '@containers/AlbumContainer';
import { AuthContext } from '@context/AuthContext.js';
import { NextSeo } from 'next-seo';

const Album = () => {
	const { user, loading } = useContext(AuthContext);
	return (
		<>
			<NextSeo description="Sitio para ver el album de figuritas de Taekwondo" title="Album" />
			<AlbumContainer loading={loading} user={user} />
		</>
	);
};

export default Album;
