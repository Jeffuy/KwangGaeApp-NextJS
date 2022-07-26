import React from 'react';

const SelectorOptionsQuantity = () => {
	return (
		<div className="pattern-selector__card">
			<div className="pattern-selector__card--title">
				<h3>Cantidad</h3>
			</div>
			<div className="pattern-selector__card--options">
				<input className="" defaultValue={1} id="1-1formas" name="cantidad" type="radio" />
				<label className="" htmlFor="1-1formas">
					Modo torneo
				</label>
			</div>

			<div className="pattern-selector__card--options">
				<input defaultChecked className="" defaultValue={0} id="1grado" name="cantidad" type="radio" />
				<label className="" htmlFor="1grado">
					Del grado
				</label>
			</div>
			<div className="pattern-selector__card--options">
				<input className="" defaultValue={2} id="1forma" name="cantidad" type="radio" />
				<label className="" htmlFor="1forma">
					Una forma
				</label>
			</div>
			<div className="pattern-selector__card--options">
				<input className="" defaultValue={3} id="2formas" name="cantidad" type="radio" />
				<label className="" htmlFor="2formas">
					Dos formas
				</label>
			</div>
		</div>
	);
};

export default SelectorOptionsQuantity;
