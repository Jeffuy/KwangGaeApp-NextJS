import React from 'react';
import RepeatsMain from '@components/Repeats/RepeatsMain';

// import { setStickers } from '@scripts/data/addStickers';

const RepeatsContainer = ({ user, loading, cardList }) => {
	return (
		<div>
			<RepeatsMain cardList={cardList} loading={loading} user={user} />
		</div>
	);
};

export default RepeatsContainer;
