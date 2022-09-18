import React, { useContext } from 'react';
import { QuizContext } from '@context/QuizContext';

const QuizChooser = () => {
	const { quizChoose } = useContext(QuizContext);
	return (
		<>
			<div className="quiz-tit">
				<h1 className="mt-4">Elige tu Quiz</h1>
			</div>
			<div className="quiz-selection">
				<button className="btn-white" onClick={() => quizChoose('blanco', 0)}>
					Cinturón Blanco
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-yellow-stripe" onClick={() => quizChoose('blanco punta amarilla', 1)}>
					Punta Amarilla
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-yellow" onClick={() => quizChoose('amarillo', 2)}>
					Cinturón Amarillo
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-green-stripe" onClick={() => quizChoose('amarillo punta verde', 3)}>
					Punta Verde
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-green" onClick={() => quizChoose('verde', 4)}>
					Cinturón Verde
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-blue-stripe" onClick={() => quizChoose('verde punta azul', 5)}>
					Punta azul
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-blue" onClick={() => quizChoose('azul', 6)}>
					Cinturón azul
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-red-stripe" onClick={() => quizChoose('azul punta roja', 7)}>
					Punta Roja
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-red" onClick={() => quizChoose('rojo', 8)}>
					Cinturón Rojo
				</button>
			</div>
			<div className="quiz-selection">
				<button disabled className="btn-black-stripe" onClick={() => quizChoose('rojo punta negra', 9)}>
					Punta Negra (próximamente)
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-black" onClick={() => quizChoose('arbitraje', 10)}>
					Arbitraje
				</button>
			</div>
		</>
	);
};

export default QuizChooser;
