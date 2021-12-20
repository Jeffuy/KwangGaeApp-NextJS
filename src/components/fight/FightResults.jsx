import React from "react";

const FightResults = ({ isRunning, status, red, blue }) => {
    return (
        <>
            <div className="container">
                <h3 className="mt-2 text-center text-white">{isRunning}</h3>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-6">
					<div
                            className="text-center text-white"
                            style={{ fontSize: 30, backgroundColor: "red" }}
                        >
                            <p>{!status && red.score}</p>
							{!status && red.score > blue.score && (
                            <p
                                style={{
                                    fontSize: 15,
                                    backgroundColor: "red",
									marginTop: "-22px",
                                }}
                            >
                                Winner!
                            </p>
                        )}
                        </div>
                    </div>
                    <div className="col-6">
                        <div
                            className="text-center text-white"
                            style={{ fontSize: 30, backgroundColor: "blue" }}
                        >
                            <p>{!status && blue.score}</p>
							{!status && blue.score > red.score && (
                            <p
                                style={{
                                    fontSize: 15,
                                    backgroundColor: "blue",
									marginTop: "-22px",
                                }}
                            >
                                Winner!
                            </p>
                        )}
                        </div>

                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default FightResults;