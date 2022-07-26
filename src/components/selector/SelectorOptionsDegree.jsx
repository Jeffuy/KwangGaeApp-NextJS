import React from 'react';

const SelectorOptionsDegree = () => {
	return (
		<div className="pattern-selector__card">
			<div className="pattern-selector__card--title">
				<h3 className="">Grado</h3>
			</div>
			<div className="pattern-selector__card--options">
				<input defaultChecked className="" defaultValue={1} id="1erDan" name="grado" type="radio" />
				<label className="" htmlFor="1erDan">
					Hasta I Dan
				</label>
			</div>
			<div className="pattern-selector__card--options">
				<input className="" defaultValue={2} id="2doDan" name="grado" type="radio" />
				<label className="" htmlFor="2doDan">
					Hasta II Dan
				</label>
			</div>
			<div className="pattern-selector__card--options">
				<input className="" defaultValue={3} id="3erDan" name="grado" type="radio" />
				<label className="" htmlFor="3erDan">
					Hasta III Dan
				</label>
			</div>

			<div className="pattern-selector__card--options">
				<input className="" defaultValue={4} id="4toDan" name="grado" type="radio" />
				<label className="" htmlFor="4toDan">
					Hasta IV Dan
				</label>
			</div>
		</div>
	);
};

export default SelectorOptionsDegree;
