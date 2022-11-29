import { auth, db, storage } from '../firebase/firebase.js';
import { doc, setDoc, collection, getDoc } from 'firebase/firestore';
import { createContext, useState } from 'react';
import { ref as storageRef } from 'firebase/storage';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useDocumentData, useCollectionData } from 'react-firebase-hooks/firestore';
import { useCollection } from 'react-firebase-hooks/firestore';
import { useUploadFile, useDownloadURL } from 'react-firebase-hooks/storage';

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
	const [user, loading] = useAuthState(auth);

	const [value, valueLoading, valueError] = useCollection(collection(db, 'users'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [downloadUrl, downloadUrlLoading, downloadUrlError] = useDownloadURL(storageRef(storage, `users/${user?.uid}/profilePicture.jpeg`));

	const [photoSmallUrl, photoSmallUrlLoading, photoSmallUrlError] = useDownloadURL(storageRef(storage, `users/${user?.uid}/profilePictureSmall.jpeg`));

	const [results, setResults] = useState([]);

	const [userData, userDataLoading, userDataError] = useDocumentData(user ? doc(db, 'users', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [uploadFile, uploading, snapshot, uploadError] = useUploadFile();

	const [updateProfile, updating, updateProfileError] = useUpdateProfile(auth);

	const [userPoints, userPointsLoading, userPointsError] = useDocumentData(user ? doc(db, 'userPoints', user.uid) : null, {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const [userChallenges, userChallengesLoading, userChallengesError] = useCollectionData(collection(db, 'userPoints'), {
		snapshotListenOptions: { includeMetadataChanges: true },
	});

	const ref = storageRef(storage, `users/${user?.uid}/profilePicture.jpeg`);

	const ref2 = storageRef(storage, `users/${user?.uid}/profilePictureSmall.jpeg`);

	async function getRankings() {
		setResults([]);
		for (let i = 0; i < userChallenges?.length; i++) {
			const userInfo = await getDoc(doc(db, 'users', userChallenges[i].uid));
			setResults(prev => [...prev, { ...userInfo.data(), points: userChallenges[i].points }]);
		}
		sortResults();
	}

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

	async function updateUserInfo(displayName, email, photoURL) {
		await setDoc(doc(db, 'users', user.uid), {
			uid: user.uid,
			displayName,
			email,
			createdAt: userData.createdAt,
			avatarUrl: userData.avatarUrl,
			photoURL: photoURL,
			photoSmall: userData.photoSmall,
		});
	}

	async function updatePhotoSmall(photoURL, photoSmall) {
		await setDoc(doc(db, 'users', user.uid), {
			uid: user.uid,
			displayName: user.displayName,
			email: user.email,
			createdAt: userData.createdAt,
			avatarUrl: userData.avatarUrl,
			photoURL: photoURL,
			photoSmall: photoSmall,
		});
	}

	const logout = () => {
		auth.signOut();
	};

	const upload = async selectedFile => {
		if (selectedFile) {
			const result = await uploadFile(ref, selectedFile, {
				contentType: 'image/jpeg',
			});
			if (result) {
				console.log('DONE');
			}
		}
	};

	const uploadSmall = async selectedFile => {
		if (selectedFile) {
			const result = await uploadFile(ref2, selectedFile, {
				contentType: 'image/jpeg',
			});
			if (result) {
				console.log('DONE2');
			}
		}
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
				value,
				valueLoading,
				valueError,
				upload,
				uploadError,
				downloadUrl,
				downloadUrlLoading,
				downloadUrlError,
				uploading,
				snapshot,
				uploadSmall,
				photoSmallUrl,
				photoSmallUrlLoading,
				photoSmallUrlError,
				updatePhotoSmall,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};
