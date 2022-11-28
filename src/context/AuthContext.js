import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const [results, setResults] = useState([]);

	const [userData, userDataLoading, userDataError] = useDocumentData(user ? doc(db, 'users', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

	const [userPoints, userPointsLoading, userPointsError] = useDocumentData(user ? doc(db, 'userPoints', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [userChallenges, userChallengesLoading, userChallengesError] = useCollectionData(collection(db, 'userPoints'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const getRankings = async () => {
		setResults([]);
		for (let i = 0; i < userChallenges?.length; i++) {
			const userInfo = await getDoc(doc(db, 'users', userChallenges[i].uid));
			setResults(prev => [...prev, { ...userInfo.data(), points: userChallenges[i].points }]);
		}
		sortResults();
	};

	const sortResults = async () => {
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

	async function updateUserInfo(displayName, email) {
		await setDoc(doc(db, 'users', user.uid), {
			uid: user.uid,
			displayName,
			email,
			createdAt: userData.createdAt,
			avatarUrl: userData.avatarUrl,
		});
	}

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
				getRankings,
				results,
				userChallengesError,
				userChallengesLoading,
				updateProfile,
				updating,
				updateProfileError,
				updateUserInfo,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
