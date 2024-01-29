import React, { useContext } from 'react';
import { PatternSelectorContext } from '@context/PatternSelectorContext';
// import { Toaster, toast } from 'sonner';

const SelectorChooseButton = ( {setRuletaDeFormas, ruletaDeFormas} ) => {
	const { elegirFormas } = useContext(PatternSelectorContext);

	// const handleElegirFormas = () => {
	// 	toast(elegirFormas());
	// };

	return (
		<div className="pattern-selector__button-container">
			{!ruletaDeFormas && <button className="" type="button" onClick={elegirFormas}>
				Elige las formas
			</button>}
			<button className="" type="button" onClick={()=> setRuletaDeFormas(!ruletaDeFormas)}>
				{!ruletaDeFormas ? 'NUEVO - Ruleta de Formas (beta)' : 'Desactivar Ruleta de Formas'}
			</button>
			{/* <Toaster /> */}
		</div>
	);
};

export default SelectorChooseButton;
