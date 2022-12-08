import React, { useContext } from 'react';
import AlbumContainer from '@containers/AlbumContainer';
import { AuthContext } from '@context/AuthContext.js';

const Album = () => {
	const { user, loading } = useContext(AuthContext);
	return <AlbumContainer loading={loading} user={user} />;
};

export default Album;
