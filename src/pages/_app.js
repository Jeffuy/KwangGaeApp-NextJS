import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthContextProvider } from '@context/AuthContext';
import * as gtag from '../lib/gtag';
import Layout from '@containers/Layout';
import '@styles/home.css';
import '@styles/footer.css';
import '@styles/style.css';
import '@styles/challenges.css';
import '@styles/quiz.css';
import '@styles/MemoryGame.css';
import '@styles/main.css';
import '@styles/patternSelector.css';
import '@styles/menu.css';
import '@styles/fight.css';
import '@styles/cintos.css';
import '@styles/dojangMenu.css';
import '@styles/formas.css';
import '@styles/register.css';
import '@styles/dashboard.css';
import '@styles/login.css';
import '@styles/quizPoints.css';
import '@styles/albumPage.css';
import '@styles/albumPage2.css';
import '@styles/albumPage3.css';
import '@styles/albumPage4.css';
import '@styles/albumPage5.css';
import '@styles/market.css';
import '@styles/newPack.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

import Head from 'next/head';

function MyApp({ Component, pageProps }) {
	const router = useRouter();
	useEffect(() => {
		const handleRouteChange = url => {
			gtag.pageview(url);
		};
		router.events.on('routeChangeComplete', handleRouteChange);
		return () => {
			router.events.off('routeChangeComplete', handleRouteChange);
		};
	}, [router.events]);

	return (
		<>
			<Head>
				<meta content="width=device-width, initial-scale=1.0" name="viewport" />
				<meta charSet="UTF-8" />
				<meta content="IE=edge" httpEquiv="X-UA-Compatible" />
			</Head>
			<AuthContextProvider>
				<Layout>
					<Component {...pageProps} />
				</Layout>
			</AuthContextProvider>
		</>
	);
}

export default MyApp;
