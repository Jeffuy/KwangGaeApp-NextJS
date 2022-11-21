import { useContext } from 'react';
import Menu from '@components/dojang/Menu';
import Cintos from '@components/dojang/Cintos';
import Formas from '@components/dojang/Formas';

import { DojangContext } from '@context/DojangContext';

const DojangContainer = () => {
	const { selected } = useContext(DojangContext);

	return (
		<>
			<Menu />
			{selected != 'formas' && <Cintos />}
			{selected == 'formas' && <Formas />}
		</>
	);
};

export default DojangContainer;
