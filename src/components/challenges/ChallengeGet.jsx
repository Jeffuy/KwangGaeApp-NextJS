import React from 'react'

const ChallengeGet = ({ getChallenge }) => {
	return (
		<div className="container-fluid">
			<div className="row">
				<div className="col-8 offset-2">
					<p
						className="text-center fs-3 mt-2"
						id="result"
					></p>
				</div>
			</div>
			<div className="container mt-3">
				<div className="row">
					<button
						className="btn btn-primary btn-lg btn-special"
						onClick={getChallenge}
					>
						DAME UN DESAFÍO
					</button>
				</div>
			</div>
		</div>
	)
}

export default ChallengeGet
