import useTimerHook from '@hooks/useTimerHook';
import React, { useEffect, useState } from 'react';

function Timer() {
	const { time, setTimerOn, setTime, timerOn } = useTimerHook();

	return (
		<div>
			<div>
				<span>{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
				<span>{('0' + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
				<span>{('0' + ((time / 10) % 100)).slice(-2)}</span>
			</div>
			<div>
				{!timerOn && time === 0 && <button onClick={() => setTimerOn(true)}>Start</button>}
				{timerOn && <button onClick={() => setTimerOn(false)}>Stop</button>}
				{!timerOn && time !== 0 && (
					<>
						<button onClick={() => setTimerOn(true)}>Resume</button>
						<button onClick={() => setTime(0)}>Reset</button>
					</>
				)}
			</div>
		</div>
	);
}

export default Timer;
