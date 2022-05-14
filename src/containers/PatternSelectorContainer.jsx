import React from 'react';
import SelectorOptionsDegree from '@components/selector/SelectorOptionsDegree';
import SelectorOptionsQuantity from '@components/selector/SelectorOptionsQuantity';
import SelectorChooseButton from '@components/selector/SelectorChooseButton';
import SelectorResults from '@components/selector/SelectorResults';

const PatternSelectorContainer = () => {
	return (
		<>
			<section className="d-flex flex-column min-vh-100">
				<div className="container-fluid mt-5">
					<div className="row">
						<SelectorOptionsDegree />
						<SelectorOptionsQuantity />
					</div>
				</div>

				<SelectorChooseButton />
				<SelectorResults />
			</section>
		</>
	);
};

export default PatternSelectorContainer;
