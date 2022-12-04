import React, { useState } from 'react';
import UserInfo from '@components/dashboard/UserInfo';
import Ranking from '@components/challenges/Ranking';
import QuizRanking from '@components/quiz/QuizRanking';

const DashboardContainer = () => {
	const [viewChallengesRanking, setViewChallengesRanking] = useState(false);
	const [viewQuizRanking, setViewQuizRanking] = useState(false);

	return (
		<section className="dashboard-main">
			<UserInfo setViewChallengesRanking={setViewChallengesRanking} setViewQuizRanking={setViewQuizRanking} viewChallengesRanking={viewChallengesRanking} viewQuizRanking={viewQuizRanking} />
			{viewChallengesRanking && <Ranking />}
			{viewQuizRanking && <QuizRanking />}
		</section>
	);
};

export default DashboardContainer;
