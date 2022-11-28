import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import { AuthContext } from '@context/AuthContext';
import UserInfo from '@components/dashboard/UserInfo';
import Ranking from '@components/challenges/Ranking';

const DashboardContainer = () => {
	const { user, loading, logout, userData, userDataLoading, userPointsLoading } = useContext(AuthContext);

	const router = useRouter();

	if (loading || userDataLoading || userPointsLoading || userPointsLoading) {
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
