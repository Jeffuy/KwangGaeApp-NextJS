import React, { useState, createContext, useContext, useEffect } from 'react';
import { questionList, questionTitles } from '@scripts/data/quizQuestions';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { AuthContext } from '@context/AuthContext';
import { db } from '../firebase/firebase.js';

const QuizContext = createContext();

function QuizProvider(props) {
	const { user } = useContext(AuthContext);

	const [grado, setGrado] = useState('');
	const [questions, setQuestions] = useState([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [done, setDone] = useState(true);
	const [listIndex, setListIndex] = useState(0);

	async function updateUserPoints(points, index) {
		setDone(false);
		let quizTitle = questionTitles[index];
		let isCompleted = false;
		const actualUserQuiz = await getDoc(doc(db, 'userQuiz', user?.uid));
		let oldScore = 0;
		try {
			oldScore = actualUserQuiz.data()[quizTitle].points;
			points || oldScore == 12 ? (isCompleted = true) : (isCompleted = false);
			if (points > oldScore) {
				await setDoc(
					doc(db, 'userQuiz', user.uid),
					{
						[quizTitle]: { points, isCompleted, grado, number: index },
					},
					{ merge: true }
				);
			}
		} catch (error) {
			console.log(score);

			await setDoc(
				doc(db, 'userQuiz', user.uid),
				{
					[quizTitle]: { points, isCompleted, grado, number: index },
				},
				{ merge: true }
			);

			console.log(score);
		}
		setDone(true);
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
