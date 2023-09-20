import React, { useContext } from 'react';
import { PatternSelectorContext } from '@context/PatternSelectorContext';
import { Toaster, toast } from 'sonner';

const SelectorChooseButton = () => {
	const { elegirFormas } = useContext(PatternSelectorContext);

	const handleElegirFormas = () => {
		toast(elegirFormas());
	};

	return (
		<div className="pattern-selector__button-container">
			<button className="" type="button" onClick={handleElegirFormas}>
				Elige las formas
			</button>
			<Toaster />
		</div>
	);
};

export default SelectorChooseButton;
