//import axios from 'axios';
import React, { useContext, useState } from 'react';
import { QuizContext } from '@context/QuizContext';

const SelectedQuestions = () => {
	// PRUEBA MAIL
	const [sent, setSent] = useState(false);
	const [text, setText] = useState('');
	const [help, setHelp] = useState('Escribe tu nombre');

	const handleSend = async e => {
		e.preventDefault();

		if (text.length > 0) {
			setSent(true);

			let data = { text };
			console.log('tiene texto ' + text);
			fetch('/api/mails', {
				method: 'POST',
				headers: {
					Accept: 'application/json, text/plain, */*',
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(data),
			});

			setHelp('Puntaje enviado');
			setText('');
		} else {
			setHelp('Debes escribir un nombre');
			console.log('error ' + text);
		}
		console.log('fin ' + text);
	};

	// FINAL PRUEBA MAIL
	const { titleChanger, imgList, score, showScore, questions, currentQuestionNumber, handleAnswerOptionClick, back, grado } = useContext(QuizContext);
	if (questions != null) {
		return (
			<div className="container">
				{showScore ? (
					<>
						<div className="app">
							<div className="col">
								<div className="row">
									<img alt="" className="result-title pb-4" src={titleChanger()} />
								</div>
								<div className="row">
									<img alt="" className="result" src={imgList[score]} />
								</div>
							</div>
						</div>
						<div className="container-fluid mt-4">
							<div className="row">
								<div className="col">
									<div className="text-center fs-2">
										Tu puntaje fue de {score} sobre {questions.length}
									</div>
									<div className="d-flex text-center flex-col justify-content-around mt-2 mb-2">
										<input
											placeholder="escribe tu nombre"
											type="text"
											onChange={e => setText(`El puntaje de ${e.target.value} fue de ${score} sobre ${questions.length} en el test de ${grado}`)}
										/>

										{!sent && <button onClick={e => handleSend(e)}>Enviar</button>}
									</div>

									<div className="text-center">
										<p>{help}</p>
									</div>
									<div className="container-fluid flex">
										<button
											className="btn btn-dark form-control mt-2"
											onClick={() => {
												back();
												setSent(false);
												setText('');
											}}
										>
											Volver
										</button>
									</div>
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
