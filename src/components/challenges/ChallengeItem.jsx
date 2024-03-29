import React from 'react';

const ChallengeItem = props => {
	return (
		<>
			<li
				className={`${props.type === 'Counter' ? 'TodoItemCounter' : 'TodoItem'} ${props.type === 'Attack' ? 'TodoItemAttack' : 'TodoItem'} ${
					props.type === 'Strategy' ? 'TodoItemStrat' : 'TodoItem'
				} `}
			>
				<i className={`Icon Icon-check fas fa-check-circle fa-2x ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} />
				<div className="TodoItem-Text-Container">
					<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
						Haz <b>{props.text}</b>.
					</p>
					<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
						Recompensa: <b>{props.points} puntos.</b>
					</p>
				</div>

				<i className="fas fa-trash-alt fa-2x Icon-delete" onClick={props.onDelete} />
				<div className="Icon-type">
					<p>{props.type}</p>
				</div>
			</li>
		</>
	);
};

export default ChallengeItem;
