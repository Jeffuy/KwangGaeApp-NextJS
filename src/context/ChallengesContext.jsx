import React, { createContext } from 'react';
import useLocalStorage from '@hooks/useLocalStorage';
import { challengesList } from '@scripts/data/challengeList';
import editFunctions from 'scripts/libreryFunctions'

const ChallengesContext = createContext();

function ChallengesProvider(props) {
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
				editFunctions.editPoints(points)
				savePoints(points);
			} else {
				editFunctions.editPoints(-points)
				savePoints(-points);
			}
			// Hacer que se cargue el total sacandolo de la base de datos
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
