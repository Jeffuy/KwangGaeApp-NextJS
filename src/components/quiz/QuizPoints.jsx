import React, { useContext, useState, useEffect } from 'react';
import { getDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';
import { AuthContext } from '@context/AuthContext.js';
import { QuizContext } from '@context/QuizContext.js';

const QuizPoints = () => {
	const { user, loading } = useContext(AuthContext);
	const { done } = useContext(QuizContext);

	const [actualUser, setActualUser] = useState({});

	useEffect(() => {
		console.log(actualUser);
		if (user) {
			const getUser = async () => {
				const selectedUser = await getDoc(doc(db, 'userQuiz', user?.uid));
				selectedUser && setActualUser(selectedUser.data());
			};
			getUser();
		}
	}, [user, done]);

	console.log(actualUser);

	if (loading || !user) {
		return <div>Loading...</div>;
	}

	return (
		<section className="quiz-points">
			<h1>Tus resultados</h1>
			<div className="quiz-points-grid">
				<p>Test</p>
				<p>Puntaje</p>

				<p>Cinturón blanco</p>
				<p>{actualUser?.quizzes?.white || 0}</p>

				<p> Cinturón blanco punta amarilla: </p>
				<p>{actualUser?.quizzes?.yellowStripe || 0}</p>

				<p> Cinturón amarillo: </p>
				<p>{actualUser?.quizzes?.yellow || 0}</p>

				<p> Cinturón amarillo punta verde: </p>
				<p>{actualUser?.quizzes?.greenStripe || 0}</p>

				<p> Cinturón verde: </p>
				<p>{actualUser?.quizzes?.green || 0}</p>

				<p> Cinturón verde punta azul: </p>
				<p>{actualUser?.quizzes?.blueStripe || 0}</p>

				<p> Cinturón azul: </p>
				<p>{actualUser?.quizzes?.blue || 0}</p>

				<p> Cinturón azul punta roja: </p>
				<p>{actualUser?.quizzes?.redStripe || 0}</p>

				<p> Cinturón rojo: </p>
				<p>{actualUser?.quizzes?.red || 0}</p>

				<p> Cinturón rojo punta negra: </p>
				<p>{actualUser?.quizzes?.blackStripe || 0}</p>
			</div>
		</section>
	);
};

export default QuizPoints;
