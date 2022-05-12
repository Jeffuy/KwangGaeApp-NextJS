import { useRouter } from 'next/router';
import { useEffect } from 'react';
import * as gtag from '../lib/gtag';
import Layout from '@containers/Layout';
import '@styles/style.css';
import '@styles/challenges.css';
import '@styles/quiz.css';
import '@styles/MemoryGame.css';
import '@styles/main.css';

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
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
