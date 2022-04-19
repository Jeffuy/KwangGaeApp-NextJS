import React, { useContext } from 'react';
import { ChallengesContext } from '@context/ChallengesContext';

const ChallengeRestart = () => {
	const { restartChallenges, restartPoints } = useContext(ChallengesContext);
	return (
		<div className="container-fluid mt-5">
			<div className="row">
				<p className="text-center fs-6 text-danger">
					<b>
						<a
							className="badge bg-danger"
							onClick={() => {
								restartChallenges(), restartPoints();
							}}
						>
							REINICIAR TODO
						</a>
					</b>
				</p>
				<div className="row">
					<p className="text-center fs-6 text-danger mb-2">
						<b>(esta opción no se puede deshacer)</b>
					</p>
				</div>
			</div>
		</div>
	);
};

export default ChallengeRestart;
