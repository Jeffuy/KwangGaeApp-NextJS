import React from 'react';
import { NextSeo } from 'next-seo';
import PatternSelectorContainer from '@containers/PatternSelectorContainer';
import { PatternSelectorProvider } from '@context/PatternSelectorContext';

function PatternSelector() {
	return (
		<>
			<NextSeo description="Selección de Formas al azar para torneos de Taekwon-Do ITF" title="Selección de Formas" />
			<PatternSelectorProvider>
				<PatternSelectorContainer />
			</PatternSelectorProvider>
		</>
	);
}

export default PatternSelector;
