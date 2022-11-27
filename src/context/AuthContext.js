import { auth, db } from '../firebase/firebase.js';
import { doc, setDoc } from 'firebase/firestore';
import { createContext } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useDocumentData } from 'react-firebase-hooks/firestore';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	// leer la info del usuario de firestore

	const [userData, userDataLoading, userDataError] = useDocumentData(user ? doc(db, 'users', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [userPoints, userPointsLoading, userPointsError] = useDocumentData(user ? doc(db, 'userPoints', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const updateUserPoints = async (points, uid) => {
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
	};

	console.log(userData);

	const logout = () => {
		auth.signOut();
	};

	return (
		<AuthContext.Provider value={{ user, loading, logout, userData, userDataLoading, userDataError, userPoints, userPointsLoading, userPointsError, updateUserPoints }}>
			{children}
		</AuthContext.Provider>
	);
};
