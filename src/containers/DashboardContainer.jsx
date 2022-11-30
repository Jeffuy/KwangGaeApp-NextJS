import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';
import UserInfo from '@components/dashboard/UserInfo';
import Ranking from '@components/challenges/Ranking';
import { useDownloadURL } from 'react-firebase-hooks/storage';
import { storage } from '../firebase/firebase.js';
import { ref as storageRef } from 'firebase/storage';

const DashboardContainer = () => {
	const { user, loading, logout, userData, userDataLoading, userPointsLoading } = useContext(AuthContext);

	// eslint-disable-next-line no-unused-vars
	const [downloadUrl, downloadUrlLoading, downloadUrlError] = useDownloadURL(storageRef(storage, `users/${user?.uid}/profilePicture.jpeg`));

	// eslint-disable-next-line no-unused-vars
	const [photoSmallUrl, photoSmallUrlLoading, photoSmallUrlError] = useDownloadURL(storageRef(storage, `users/${user?.uid}/profilePictureSmall.jpeg`));

	const router = useRouter();

	if (loading || userDataLoading || userPointsLoading || userPointsLoading || downloadUrlLoading || photoSmallUrlLoading) {
		return (
			<>
				<div>Loading...</div>
				<button style={{ display: 'block', margin: '15px' }} onClick={logout}>
					Logout
				</button>
			</>
		);
	}

	if (!user || !userData) {
		router.push('/login');
		return <div>Loading...</div>;
	}

	if (user?.uid) {
		return (
			<section className="dashboard-main">
				<UserInfo />
				<Ranking />
			</section>
		);
	}
};

export default DashboardContainer;
