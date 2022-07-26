import React, { useContext } from 'react';
import { PatternSelectorContext } from '@context/PatternSelectorContext';

const SelectorChooseButton = () => {
	const { elegirFormas } = useContext(PatternSelectorContext);

	return (
		<div className="pattern-selector__button-container">
			<button className="" type="button" onClick={elegirFormas}>
				Elige las formas
			</button>
		</div>
	);
};

export default SelectorChooseButton;
