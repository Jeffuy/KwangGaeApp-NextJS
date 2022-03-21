import React, { useContext } from 'react';
import { FightContext } from '@context/FightContext';
import FigthButtons from '@components/fight/FigthButtons';
import FightNotStartedError from '@components/fight/FightNotStartedError';
import FightTime from '@components/fight/FightTime';
import FightResults from '@components/fight/FightResults';

const Fight = () => {
	const { showError } = useContext(FightContext);

	return (
		<section>
			<FightResults />
			{showError && <FightNotStartedError />}
			<FigthButtons />
			<FightTime />
		</section>
	);
};

export default Fight;
