import React, { useState, createContext } from 'react';
import { questionList } from '@scripts/data/quizQuestions';

const QuizContext = createContext();

function QuizProvider(props) {
	const [grado, setGrado] = useState('');
	const [questions, setQuestions] = useState([]);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);

	const handleAnswerOptionClick = isCorrect => {
		if (isCorrect) {
			setScore(score + 1);
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
	}

	const back = () => {
		setQuestions([]);
		setGrado('');
		setScore(0);
		setCurrentQuestionNumber(0);
		setShowScore(false);
	};

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
			}}
		>
			{props.children}
		</QuizContext.Provider>
	);
}

export { QuizContext, QuizProvider };
