import React from 'react';

const ChallengeItem = props => {
	return (
		<li className="TodoItem ">
			<i className={`Icon Icon-check fas fa-check-circle fa-2x ${props.completed && 'Icon-check--active'}`} onClick={props.onComplete} />
			<p className={`TodoItem-p ${props.completed && 'TodoItem-p--complete'}`}>
				Haz <b>{props.text}</b> para sumar <b>{props.points} puntos.</b>
			</p>

			<i className="fas fa-trash-alt fa-2x Icon-delete" onClick={props.onDelete} />
		</li>
	);
};

export default ChallengeItem;
