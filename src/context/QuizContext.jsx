import React, { useState, useEffect, createContext } from 'react';
import { questionList } from '@scripts/data/quizQuestions';
import { imgList, imgTitle } from '@scripts/data/quizImg';

const QuizContext = createContext();

function QuizProvider(props) {
	const [grado, setGrado] = useState(null);
	const [questions, setQuestions] = useState(null);
	const [currentQuestionNumber, setCurrentQuestionNumber] = useState(0);
	const [showScore, setShowScore] = useState(false);
	const [score, setScore] = useState(0);
	const [questionsAreSelected, setQuestionsAreSelected] = useState(false);
	const [title, setTitle] = useState(null);
	const [imgTitleSetter, setImgTitleSetter] = useState(imgTitle);

	const titleChanger = () => {
		return imgTitleSetter;
	};

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
		setImgTitleSetter(imgTitle[index]);
	}

	const back = () => {
		setQuestions(null);
		setGrado(null);
		setScore(0);
		setCurrentQuestionNumber(0);
		setShowScore(false);
		setTitle(null);
	};
	useEffect(() => {
		setQuestionsAreSelected(true);
	}, [questions]);

	return (
		<QuizContext.Provider
			value={{
				grado,
				questions,
				currentQuestionNumber,
				showScore,
				score,
				handleAnswerOptionClick,
				questionsAreSelected,
				title,
				titleChanger,
				imgTitleSetter,
				back,
				quizChoose,
				imgList,
			}}
		>
			{props.children}
		</QuizContext.Provider>
	);
}

export { QuizContext, QuizProvider };
