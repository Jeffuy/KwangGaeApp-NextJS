import React, { useContext } from 'react';
import { MarketContext } from '@context/MarketContext';

const PrizeContainer2 = () => {
	const { messageQuiz, secondQuiz, clicked } = useContext(MarketContext);

	return (
		<div>
			<h1>Felicitaciones!</h1>
			{!clicked && (
				<>
					<button onClick={secondQuiz}>Click para recibir tu premio</button>
				</>
			)}
			<p>{messageQuiz}</p>
		</div>
	);
};

export default PrizeContainer2;
