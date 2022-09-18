import React from 'react';
import { NextSeo } from 'next-seo';
import QuizContainer from '@containers/QuizContainer';
import { QuizProvider } from '@context/QuizContext.js';

function Quiz() {
	return (
		<>
			<NextSeo description="Cuestionario para examenes de cinturones de color en Taekwondo ITF" title="Cuestionarios" />
			<QuizProvider>
				<QuizContainer />
			</QuizProvider>
		</>
	);
}

export default Quiz;
