import { useContext } from 'react';
import Cintos from '@components/dojang/Cintos';
import Menu from '@components/dojang/Menu';
import { DojangContext } from '@context/DojangContext';

const DojangContainer = () => {
	//const { selected } = useContext(DojangContext);

	return (
		<>
			<Menu />
			<Cintos />
		</>
	);
};

export default DojangContainer;
