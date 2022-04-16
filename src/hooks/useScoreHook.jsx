import { useState } from 'react';

function useScoreHook(initialValue) {
	const [item, setItem] = useState(initialValue);

	const lastItem = status => {
		if (status && item.last != -1) {
			setItem({ ...item, score: item.score - item.last, last: 0 });
		} else if (status && item.last == -1)
			setItem({
				...item,
				score: item.score + 1,
				last: 0,
				discounts: item.discounts - 1,
			});
	};

	const addPoints = points => {
		if (points == -1) {
			setItem({
				...item,
				score: item.score + points,
				last: points,
				discounts: item.discounts + 1,
			});
		} else {
			setItem({ ...item, score: item.score + points, last: points });
		}
		console.log(item);
	};

	const addWarning = () => {
		setItem({ ...item, warnings: item.warnings + 1 });
	};

	const itemFinalScore = () => {
		let minusPoints = 0;

		for (let i = 0; i <= item.warnings; i++) {
			if (i % 3 == 0 && i != 0) {
				minusPoints += 1;
			}
		}
		addPoints(-minusPoints);
	};

	const restartScore = () => {
		setItem(initialValue);
	};

	return {
		item,
		lastItem,
		addPoints,
		addWarning,
		restartScore,
		itemFinalScore,
	};
}

export default useScoreHook;
