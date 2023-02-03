import { useContext } from 'react';
import Menu from '@components/dojang/Menu';
import Cintos from '@components/dojang/Cintos';
import Formas from '@components/dojang/Formas';
import Historia from '@components/dojang/Historia';
import Principios from '@components/dojang/Principios';
import Significado from '@components/dojang/Significado';

import { DojangContext } from '@context/DojangContext';

const DojangContainer = () => {
	const { selected } = useContext(DojangContext);

	return (
		<>
			<Menu />
			{selected == 'formas' && <Formas />}
			{selected == 'cintos' && <Cintos />}
			{selected == 'historia' && <Historia />}
			{selected == 'principios' && <Principios />}
			{selected == 'significado' && <Significado />}
			</>
	);
};

export default DojangContainer;
