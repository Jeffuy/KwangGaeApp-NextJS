import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const [results, setResults] = useState([]);

	// leer la info del usuario de firestore

	const [userData, userDataLoading, userDataError] = useDocumentData(user ? doc(db, 'users', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [userPoints, userPointsLoading, userPointsError] = useDocumentData(user ? doc(db, 'userPoints', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [userChallenges, userChallengesLoading, userChallengesError] = useCollectionData(collection(db, 'userPoints'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const getRankings = async () => {
		setResults([]);
		for (let i = 0; i < userChallenges.length; i++) {
			console.log(results);
			console.log(userChallenges);
			const user = await getDoc(doc(db, 'users', userChallenges[i].uid));
			setResults(prev => [...prev, { ...user.data(), points: userChallenges[i].points }]);
		}
	};

	const sortRankings = async () => {
		await getRankings();
		setResults(prev => prev.sort((a, b) => b.points - a.points));
	};

	async function updateUserPoints(points, uid) {
		if (!userPoints?.points) {
			await setDoc(doc(db, 'userPoints', uid), {
				uid: uid,
				points: points,
			});
		} else {
			points = userPoints.points + points;
			points < 0 ? (points = 0) : null;
			await setDoc(doc(db, 'userPoints', uid), {
				uid: uid,
				points: points,
			});
		}
	}

	console.log(userData);

	const logout = () => {
		auth.signOut();
	};

	return (
		<AuthContext.Provider
			value={{
				user,
				loading,
				logout,
				userData,
				userDataLoading,
				userDataError,
				userPoints,
				userPointsLoading,
				userPointsError,
				updateUserPoints,
				userChallenges,
				results,
				sortRankings,
				userChallengesError,
				userChallengesLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
