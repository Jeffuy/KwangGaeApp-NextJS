import React, { useState, createContext } from 'react';

const DojangContext = createContext();

function DojangProvider(props) {
	const [selected, setSelected] = useState('cintos');

	return (
		<DojangContext.Provider
			value={{
				selected,
				setSelected,
			}}
		>
			{props.children}
		</DojangContext.Provider>
	);
}

export { DojangContext, DojangProvider };
