import React from 'react';
import QuizContainer from '@containers/QuizContainer';
import { QuizProvider } from '@context/QuizContext';

function Quiz() {
	return (
		<QuizProvider>
			<QuizContainer />
		</QuizProvider>
	);
}

export default Quiz;
