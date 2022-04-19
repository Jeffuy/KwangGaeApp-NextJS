import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';
import FigthButtons from '@components/fight/FigthButtons';
import FightNotStartedError from '@components/fight/FightNotStartedError';
import FightResults from '@components/fight/FightResults';

const Fight = () => {
	const { showError } = useContext(FightContext);

	return (
		<section>
			<FightResults />
			{showError && <FightNotStartedError />}
			<FigthButtons />
		</section>
	);
};

export default Fight;
