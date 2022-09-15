import { useRouter } from 'next/router';
import { useEffect } from 'react';
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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
