import React from 'react';
import AlbumPage from '@components/stickers/AlbumPage';

const AlbumContainer = ({ user, loading }) => {
	return <AlbumPage loading={loading} user={user} />;
};

export default AlbumContainer;
