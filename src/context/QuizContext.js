import React, { useState, createContext, useContext, useEffect } from 'react';
import { questionList, questionTitles } from '@scripts/data/quizQuestions';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../firebase/firebase.js';

const QuizContext = createContext();

function QuizProvider(props) {
	const { user, userData } = useContext(AuthContext);

	const [grado, setGrado] = useState('');
	const [questions, setQuestions] = useState([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [done, setDone] = useState(false);
	const [listIndex, setListIndex] = useState(0);

	async function updateUserPoints(points, index) {
		let quizTitle = questionTitles[index];
		const actualUserQuiz = await getDoc(doc(db, 'userQuiz', user?.uid));
		try {
			let oldScore = actualUserQuiz?.data().quizzes[quizTitle];
			console.log(oldScore);
			console.log(score);
			if (points > oldScore || oldScore === undefined) {
				console.log(oldScore);
				await setDoc(
					doc(db, 'userQuiz', user.uid),
					{
						uid: user.uid,
						displayName: userData.displayName,
						quizzes: {
							[quizTitle]: points,
						},
						photoSmall: userData.photoSmall,
					},
					{ merge: true }
				);
			}
		} catch (error) {
			console.log(score);

			await setDoc(
				doc(db, 'userQuiz', user.uid),
				{
					uid: user.uid,
					displayName: userData.displayName,
					quizzes: {
						[quizTitle]: points,
					},
					photoSmall: userData.photoSmall,
				},
				{ merge: true }
			);

			console.log(score);
		}
		setDone(false);
	}

	const handleAnswerOptionClick = async isCorrect => {
		if (isCorrect) {
			setScore(prevScore => prevScore + 1);
		}

		const nextQuestion = currentQuestionNumber + 1;
		if (nextQuestion < questions.length) {
			setCurrentQuestionNumber(nextQuestion);
		} else {
			setShowScore(true);
			setDone(true);
		}
	};

	function quizChoose(choice, index) {
		setGrado(choice);
		setQuestions(questionList[index]);
		setListIndex(index);
	}

	const back = () => {
		setQuestions([]);
		setGrado('');
		setScore(0);
		setCurrentQuestionNumber(0);
		setShowScore(false);
	};

	useEffect(() => {
		if (user && done) {
			updateUserPoints(score, listIndex);
		}
		console.count('Final ');
		console.log();
	}, [showScore]);

	return (
		<QuizContext.Provider
			value={{
				grado,
				questions,
				currentQuestionNumber,
				showScore,
				score,
				handleAnswerOptionClick,
				back,
				quizChoose,
				done,
			}}
		>
			{props.children}
		</QuizContext.Provider>
	);
}

export { QuizContext, QuizProvider };
