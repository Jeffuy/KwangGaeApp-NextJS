import React, { useContext } from 'react';
import { QuizContext } from '@context/QuizContext.js';
import QuizChooser from '@components/quiz/QuizChooser';
import SelectedQuestions from '@components/quiz/SelectedQuestions';
import QuizPoints from '@components/quiz/QuizPoints';

const QuizContainer = () => {
	const { grado, questions } = useContext(QuizContext);

	return (
		<div className="quiz-container">
			{grado == '' && <QuizChooser />}
			<div>{questions.length > 0 && <SelectedQuestions />}</div>
			<QuizPoints />
		</div>
	);
};

export default QuizContainer;
