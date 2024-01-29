import React, {useState} from 'react';
import SelectorOptionsDegree from '@components/selector/SelectorOptionsDegree';
import SelectorOptionsQuantity from '@components/selector/SelectorOptionsQuantity';
import SelectorChooseButton from '@components/selector/SelectorChooseButton';
import PatternRoulette from '@components/selector/PatternRoulette';
import SelectorResults from '@components/selector/SelectorResults';

const PatternSelectorContainer = () => {

	const [ruletaDeFormas, setRuletaDeFormas] = useState(false);
	return (
		<>
			<section>
				<div className="pattern-selector-container">
					{!ruletaDeFormas && <SelectorOptionsDegree />}
					{!ruletaDeFormas && <SelectorOptionsQuantity />}
				</div>

				<SelectorChooseButton setRuletaDeFormas={setRuletaDeFormas} ruletaDeFormas={ruletaDeFormas} />
				{!ruletaDeFormas && <SelectorResults />}
				{ruletaDeFormas && <PatternRoulette />}
			</section>
		</>
	);
};

export default PatternSelectorContainer;
