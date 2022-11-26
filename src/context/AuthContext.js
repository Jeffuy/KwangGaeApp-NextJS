import { onAuthStateChanged, signOut } from 'firebase/auth';
import { auth, db } from '../firebase/firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [currentUser, setCurrentUser] = useState({});
	const [userData, setUserData] = useState({});
	const [isLogged, setIsLogged] = useState(false);

	const getUserData = async () => {
		if (currentUser?.uid) {
			const res = await getDoc(doc(db, 'users', currentUser.uid));
			if (res.exists()) {
				setUserData(res.data());
				setIsLogged(true);
			} else {
				console.log('No such document!');
			}
		}
	};

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => {
			setCurrentUser(user);
			console.log(user);
			getUserData();
		});

		return () => {
			unsub();
		};
	}, [currentUser]);

	const firebaseLogout = () => {
		signOut(auth)
			.then(() => {
				setCurrentUser({});
			})
			.then(() => {
				setIsLogged(false);
			})
			.catch(error => {
				console.log(error);
			});
	};

	return <AuthContext.Provider value={{ currentUser: currentUser, userData: userData, firebaseLogout: firebaseLogout, isLogged }}>{children}</AuthContext.Provider>;
};
