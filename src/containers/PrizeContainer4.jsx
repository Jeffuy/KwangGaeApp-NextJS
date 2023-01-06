import React, { useContext } from 'react';
import { MarketContext } from '@context/MarketContext';

const PrizeContainer4 = () => {
	const { messageQuiz, fourthQuiz, clicked } = useContext(MarketContext);

	return (
		<div>
			<h1>Felicitaciones!</h1>
			{!clicked && (
				<>
					<button onClick={fourthQuiz}>Click para recibir tu premio</button>
				</>
			)}
			<p>{messageQuiz}</p>
		</div>
	);
};

export default PrizeContainer4;
