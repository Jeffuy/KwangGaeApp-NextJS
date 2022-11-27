import { auth, db } from '../firebase/firebase.js';
import { doc } from 'firebase/firestore';
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

	console.log(userData);

	const logout = () => {
		auth.signOut();
	};

	return <AuthContext.Provider value={{ user, loading, logout, userData, userDataLoading, userDataError }}>{children}</AuthContext.Provider>;
};
