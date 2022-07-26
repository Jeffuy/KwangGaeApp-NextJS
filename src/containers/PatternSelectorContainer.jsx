import React from 'react';
import SelectorOptionsDegree from '@components/selector/SelectorOptionsDegree';
import SelectorOptionsQuantity from '@components/selector/SelectorOptionsQuantity';
import SelectorChooseButton from '@components/selector/SelectorChooseButton';
import SelectorResults from '@components/selector/SelectorResults';

const PatternSelectorContainer = () => {
	return (
		<>
			<section>
				<div className="pattern-selector-container">
					<SelectorOptionsDegree />
					<SelectorOptionsQuantity />
				</div>

				<SelectorChooseButton />
				<SelectorResults />
			</section>
		</>
	);
};

export default PatternSelectorContainer;
