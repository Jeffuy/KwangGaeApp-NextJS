import React, { useContext } from 'react';
import { PatternSelectorContext } from '@context/PatternSelectorContext';

const SelectorResults = () => {
	const { formas } = useContext(PatternSelectorContext);

	return (
		<div className="pattern-selector__result-container">
			<p id="result">{formas}</p>
		</div>
	);
};

export default SelectorResults;
