import { useState, useEffect } from 'react';

const useTimerHook = () => {
	const [time, setTime] = useState(0);
	const [timerOn, setTimerOn] = useState(false);

	useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setTime(prevTime => prevTime + 10);
			}, 10);
		} else {
			clearInterval(interval);
		}
		return () => clearInterval(interval);
	}, [timerOn]);

	return {
		time,
		setTimerOn,
		setTime,
		timerOn,
	};
};

export default useTimerHook;
