import React from 'react';
import DashboardContainer from '@containers/DashboardContainer';
import { NextSeo } from 'next-seo';

const Dashboard = () => {
	return (
		<>
			<NextSeo description="Sitio web para alumnos, instructores y arbítros de Taekwon-Do I.T.F. Útil para torneos, clases y examenes" title="Perfil" />
			<DashboardContainer />
		</>
	);
};

export default Dashboard;
