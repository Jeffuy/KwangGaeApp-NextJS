import React from 'react';
import DojangContainer from '@containers/DojangContainer';
import { DojangProvider } from '@context/DojangContext';

const Dojang = () => {
	return (
		<>
			<DojangProvider>
				<DojangContainer />
			</DojangProvider>
		</>
	);
};

export default Dojang;
