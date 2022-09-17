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
				<button className="btn-white" onClick={() => quizChoose('white', 0)}>
					Cinturón Blanco
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-yellow-stripe" onClick={() => quizChoose('yellowStripe', 1)}>
					Punta Amarilla
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-yellow" onClick={() => quizChoose('yellow', 2)}>
					Cinturón Amarillo
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-green-stripe" onClick={() => quizChoose('greenStripe', 3)}>
					Punta Verde
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-green" onClick={() => quizChoose('green', 4)}>
					Cinturón Verde
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-blue-stripe" onClick={() => quizChoose('blueStripe', 5)}>
					Punta azul
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-blue" onClick={() => quizChoose('blue', 6)}>
					Cinturón azul
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-red-stripe" onClick={() => quizChoose('redStripe', 7)}>
					Punta Roja
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-red" onClick={() => quizChoose('red', 8)}>
					Cinturón Rojo
				</button>
			</div>
			<div className="quiz-selection">
				<button disabled className="btn-black-stripe" onClick={() => quizChoose('white', 9)}>
					Punta Negra (próximamente)
				</button>
			</div>
			<div className="quiz-selection">
				<button className="btn-black" onClick={() => quizChoose('umpire', 10)}>
					Arbitraje
				</button>
			</div>
		</>
	);
};

export default QuizChooser;
