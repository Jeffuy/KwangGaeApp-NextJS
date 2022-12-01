import React from 'react';
import UserInfo from '@components/dashboard/UserInfo';
import Ranking from '@components/challenges/Ranking';

const DashboardContainer = () => {
	return (
		<section className="dashboard-main">
			<UserInfo />
			<Ranking />
		</section>
	);
};

export default DashboardContainer;
