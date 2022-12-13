//import axios from 'axios';
import React, { useContext, useState } from 'react';
import { imgList } from '@scripts/data/quizImg';
import { QuizContext } from '@context/QuizContext.js';
import { AuthContext } from '@context/AuthContext';
import * as gtag from '../../lib/gtag';
import Image from 'next/future/image';

const SelectedQuestions = () => {
	// PRUEBA MAIL
	const [sent, setSent] = useState(false);
	const [text, setText] = useState('');
	const [help, setHelp] = useState('');

	const { user } = useContext(AuthContext);

	const handleSend = async e => {
		e.preventDefault();

		if (text.length > 0) {
			setSent(true);
			gtag.event({
				action: 'quiz_sent',
				category: 'quiz',
				label: 'quiz sent',
				value: 'Playing cards',
			});

			let data = { text };
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
		}
	};

	const handleBack = () => {
		back();
		setSent(false);
		setText('');
		setHelp('');
	};

	// FINAL PRUEBA MAIL
	const { score, showScore, questions, currentQuestionNumber, handleAnswerOptionClick, back, grado } = useContext(QuizContext);

	if (questions != null) {
		return (
			<div>
				<h1 className="quiz-questions-title">Cinturón {grado}</h1>
				{showScore ? (
					<>
						<div className="quiz-card">
							<p className="quiz-result-text">
								Tu puntaje fue de {score} sobre {questions.length}
							</p>
							<div className="quiz-result-image">
								<Image alt="Resultado" className="result" height={150} src={imgList[score]} width={150} />
							</div>
							<div className="quiz-result-input">
								<input
									placeholder="Escribe tu nombre"
									type="text"
									value={user?.displayName || ''}
									onChange={e => setText(`Nombre: ${e.target.value}. Puntaje: ${score} sobre ${questions.length}. Cinturón: ${grado}`)}
								/>

								{!sent && <button onClick={e => handleSend(e)}>Enviar</button>}
								{help != '' && <p className="quiz-result-help">{help}</p>}
							</div>
						</div>
						<div className="quiz-button-back">
							<button
								onClick={() => {
									handleBack();
								}}
							>
								Volver
							</button>
						</div>
					</>
				) : (
					<div className="quiz-card">
						<span>
							Pregunta <b>{currentQuestionNumber + 1}</b>/{questions.length}
						</span>

						<span>{questions[currentQuestionNumber].questionText}</span>
						<div className="quiz-answer-buttons">
							{questions[currentQuestionNumber].answerOptions.map(answerOption => (
								<button key={answerOption.answerText} onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>
									{answerOption.answerText}
								</button>
							))}
						</div>
					</div>
				)}
			</div>
		);
	} else {
		return <div />;
	}
};

export default SelectedQuestions;
