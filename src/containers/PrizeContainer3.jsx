import React, { useContext } from 'react';
import { MarketContext } from '@context/MarketContext';

const PrizeContainer3 = () => {
	const { messageQuiz, thirdQuiz, clicked } = useContext(MarketContext);

	return (
		<div>
			<h1>Felicitaciones!</h1>
			{!clicked && (
				<>
					<button onClick={thirdQuiz}>Click para recibir tu premio</button>
				</>
			)}
			<p>{messageQuiz}</p>
		</div>
	);
};

export default PrizeContainer3;
