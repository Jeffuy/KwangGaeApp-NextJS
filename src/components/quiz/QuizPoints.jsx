import React, { useContext, useState, useEffect } from 'react';
import { doc } from 'firebase/firestore';
import { db } from '../../firebase/firebase.js';
import { AuthContext } from '@context/AuthContext.js';
import jp from 'jsonpath';
import { useDocumentData } from 'react-firebase-hooks/firestore';

const QuizPoints = () => {
	const { user, loading } = useContext(AuthContext);

	const [actualUserQuizzes, actualUserQuizzesLoading, actualUserQuizzesError] = useDocumentData(user ? doc(db, 'userQuiz', user.uid) : null);
	const [infoToShow, setInfoToShow] = useState([]);
	const [sum, setSum] = useState(0);
	const [clicked, setClicked] = useState(false);

	const orderData = async actualUserQuizzes => {
		console.log(actualUserQuizzes);
		if (actualUserQuizzes) {
			let pointed = jp.query(actualUserQuizzes, '$[*].points');
			let titles = jp.query(actualUserQuizzes, '$[*].grado');
			let indexed = jp.query(actualUserQuizzes, '$[*].number');

			let pointedTitlesIndexed = titles
				.map((title, key) => {
					return { title, points: pointed[key], number: indexed[key] };
				})
				.sort((a, b) => a.number - b.number);
			setInfoToShow(pointedTitlesIndexed);

			let getSum = 0;
			for (let i = 0; i < pointed.length; i++) {
				getSum += pointed[i];
			}
			setSum(getSum);
		}
	};

	const getQuizzesFromUser = async () => {
		if (user) {
			await orderData(actualUserQuizzes);
		}
	};

	useEffect(() => {
		if (actualUserQuizzes) {
			getQuizzesFromUser();
		}
	}, [actualUserQuizzes]);

	if (loading || actualUserQuizzesLoading) {
		return <div>Loading...</div>;
	}

	if (!user) {
		return <div>No has ingresado. Ingresa para poder guardar tus puntuaciones.</div>;
	}

	if (actualUserQuizzesError) {
		return <div>Error: {actualUserQuizzesError}</div>;
	}

	return (
		<section className="quiz-points">
			<button onClick={() => setClicked(!clicked)}>{clicked ? 'Esconder' : 'Ver mi puntaje'}</button>
			{!actualUserQuizzesLoading && clicked && (
				<>
					<h1>Tus resultados {user?.displayName}</h1>

					<div className="quiz-points-grid quiz-points-grid-title">
						<p>Test</p>
						<p>Puntaje</p>
					</div>

					{infoToShow.map(info => {
						return (
							<div key={info.number} className="quiz-points-grid">
								{info.number === 10 ? (
									<>
										<p>Prueba de {info.title}</p>
										<p>{info.points}</p>
									</>
								) : (
									<>
										<p>Cinturón {info.title}</p>
										<p>{info.points}</p>
									</>
								)}
							</div>
						);
					})}

					<div className="quiz-points-grid quiz-points-grid-title">
						<p>Total</p>
						<p>{sum}</p>
					</div>
				</>
			)}
		</section>
	);
};

export default QuizPoints;
