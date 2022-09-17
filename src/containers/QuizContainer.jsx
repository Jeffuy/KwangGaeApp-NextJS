import React, { useContext } from 'react';
import { QuizContext } from '@context/QuizContext';
import QuizChooser from '@components/quiz/QuizChooser';
import SelectedQuestions from '@components/quiz/SelectedQuestions';

const QuizContainer = () => {
	const { grado, questionsAreSelected, showScore, title } = useContext(QuizContext);

	return (
		<>
			<div className="quiz-container">
				{grado == null && <QuizChooser />}
				<div>
					<h1>{!showScore && title}</h1>
					{questionsAreSelected && <SelectedQuestions />}
				</div>
			</div>
		</>
	);
};

export default QuizContainer;
