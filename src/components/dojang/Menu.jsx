import { useContext } from 'react';
import { DojangContext } from '@context/DojangContext';

const Menu = () => {
	const { selected, setSelected } = useContext(DojangContext);

	return (
		<div className="dojang-menu">
			<ul>
				<li className={selected == 'cintos' ? `dojang-selected` : ''} onClick={() => setSelected('cintos')}>
					Cintos
				</li>
				<li className={selected == 'formas' ? `dojang-selected` : ''} onClick={() => setSelected('formas')}>
					Formas
				</li>
				<li className={selected == 'principios' ? `dojang-selected` : ''} onClick={() => setSelected('principios')}>
					Principios
				</li>
				<li className={selected == 'significado' ? `dojang-selected` : ''} onClick={() => setSelected('significado')}>
					Significado
				</li>
				<li className={selected == 'historia' ? `dojang-selected dojang-last` : `dojang-last`} onClick={() => setSelected('historia')}>
					Historia
				</li>
			</ul>
		</div>
	);
};

export default Menu;
