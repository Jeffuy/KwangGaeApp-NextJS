/* eslint-disable react-hooks/rules-of-hooks */

import React, { createContext, useContext } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import { AuthContext } from './AuthContext';
import { challengesList } from '@scripts/data/challengeList';

const ChallengesContext = createContext();

function ChallengesProvider(props) {
	const { user, updateUserPoints } = useContext(AuthContext);

	if (typeof window !== 'undefined') {
		const { item: challenges, saveItem: saveChallenges, restartItem: restartChallenges } = useLocalStorage('activeChallenges', []);

		const { item: totalPoints, saveItemPoints: savePoints, restartItem: restartPoints } = useLocalStorage('totalPoints', 0);

		const onCompleteChallenge = text => {
			const challengeIndex = challenges.findIndex(challenge => challenge.text === text);
			const newChallenges = [...challenges];
			newChallenges[challengeIndex].completed = !newChallenges[challengeIndex].completed;

			const points = newChallenges[challengeIndex].points;
			saveChallenges(newChallenges);
			if (newChallenges[challengeIndex].completed) {
				savePoints(points);
				updateUserPoints(points, user.uid);
			} else {
				savePoints(-points);
				updateUserPoints(-points, user.uid);
			}
		};

		const onDeleteChallenge = text => {
			const challengeIndex = challenges.findIndex(challenge => challenge.text === text);
			const newChallenges = [...challenges];
			newChallenges[challengeIndex].completed = false;
			newChallenges.splice(challengeIndex, 1);
			saveChallenges(newChallenges);
		};

		const getChallenge = () => {
			let random = Math.floor(Math.random() * challengesList.length);
			let challenge = challengesList[random];
			while (challenges.some(item => item.text === challenge.text)) {
				random = Math.floor(Math.random() * challengesList.length);
				challenge = challengesList[random];
			}
			const newParsed = [...challenges];
			newParsed.push(challenge);
			saveChallenges(newParsed);
		};

		return (
			<ChallengesContext.Provider
				value={{
					challenges,
					totalPoints,
					onCompleteChallenge,
					onDeleteChallenge,
					getChallenge,
					restartChallenges,
					restartPoints,
					savePoints,
				}}
			>
				{props.children}
			</ChallengesContext.Provider>
		);
	} else {
		return (
			<ChallengesContext.Provider
				value={{
					challenges: [],
				}}
			>
				{props.children}
			</ChallengesContext.Provider>
		);
	}
}

export { ChallengesContext, ChallengesProvider };
