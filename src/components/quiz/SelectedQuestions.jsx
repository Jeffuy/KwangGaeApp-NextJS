import React, { useContext } from 'react';
import { QuizContext } from '@context/QuizContext';

const SelectedQuestions = () => {
	const { titleChanger, imgList, score, showScore, questions, currentQuestionNumber, handleAnswerOptionClick, back } = useContext(QuizContext);
	if (questions != null) {
		return (
			<div className="container">
				{showScore ? (
					<>
						<div className="app">
							<div className="row">
								<img alt="" className="img-fluid pb-4" src={titleChanger()} />
								<img alt="" className="img-fluid" src={imgList[score]} />
							</div>
						</div>
						<div className="container-fluid mt-4">
							<div className="row">
								<div className="col">
									<div className="text-center fs-2">
										Tu puntaje fue de {score} sobre {questions.length}
									</div>
									<button className="btn btn-dark form-control mt-4 mb-4" onClick={() => back()}>
										Volver
									</button>
								</div>
							</div>
						</div>
					</>
				) : (
					<>
						<div className="app">
							<div className="container">
								<div className="row">
									<div className="col">
										<span className="fs-4">Pregunta {currentQuestionNumber + 1}</span>/{questions.length}
									</div>
									<div className="row">
										<div className="col text-center mt-2 fs-4">{questions[currentQuestionNumber].questionText}</div>
									</div>
								</div>
								<div className="answer-section mt-4">
									{questions[currentQuestionNumber].answerOptions.map(answerOption => (
										<button key={answerOption.answerText} className="btn btn-dark mt-3" onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
											{answerOption.answerText}
										</button>
									))}
								</div>
							</div>
						</div>
					</>
				)}
			</div>
		);
	} else {
		return <div />;
	}
};

export default SelectedQuestions;
