import React from 'react';
import TradesMain from '@components/trades/TradesMain';

// import { setStickers } from '@scripts/data/addStickers';

const TradesContainer = ({ user, loading, cardList }) => {
	return (
		<div>
			<TradesMain cardList={cardList} loading={loading} user={user} />
		</div>
	);
};

export default TradesContainer;
