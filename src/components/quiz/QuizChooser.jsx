import React, { useContext } from 'react';
import { QuizContext } from '@context/QuizContext';

const QuizChooser = () => {
	const { quizChoose } = useContext(QuizContext);
	return (
		<div className="container">
			<h1 className="mt-4">Elige tu Quiz</h1>
			<div className="row mt-4">
				<div className="col">
					<button className="btn form-control btn-light fs-3" onClick={() => quizChoose('white', 0)}>
						Cinturón Blanco
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-yellow-stripe fs-3" onClick={() => quizChoose('yellowStripe', 1)}>
						Punta Amarilla
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-warning fs-3" onClick={() => quizChoose('yellow', 2)}>
						Cinturón Amarillo
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-warning btn-green-stripe fs-3" onClick={() => quizChoose('greenStripe', 3)}>
						Punta Verde
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-success fs-3" onClick={() => quizChoose('green', 4)}>
						Cinturón Verde
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-success btn-blue-stripe fs-3" onClick={() => quizChoose('blueStripe', 5)}>
						Punta azul
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-primary fs-3" onClick={() => quizChoose('blue', 6)}>
						Cinturón azul
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-primary btn-red-stripe fs-3" onClick={() => quizChoose('redStripe', 7)}>
						Punta Roja
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-danger fs-3" onClick={() => quizChoose('red', 8)}>
						Cinturón Rojo
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-danger btn-black-stripe fs-3 disabled" onClick={() => quizChoose('white', 9)}>
						Punta Negra (próximamente)
					</button>
				</div>
			</div>
			<div className="row mt-3">
				<div className="col">
					<button className="btn form-control btn-dark text-white fs-3" onClick={() => quizChoose('umpire', 10)}>
						Arbitraje
					</button>
				</div>
			</div>
		</div>
	);
};

export default QuizChooser;
