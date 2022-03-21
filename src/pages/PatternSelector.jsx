import React from 'react';
import PatternSelectorContainer from '@containers/PatternSelectorContainer';
import { PatternSelectorProvider } from '@context/PatternSelectorContext';

function PatternSelector() {
	return (
		<PatternSelectorProvider>
			<PatternSelectorContainer />
		</PatternSelectorProvider>
	);
}

export default PatternSelector;
