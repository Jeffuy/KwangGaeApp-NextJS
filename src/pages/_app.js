import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { AuthContextProvider } from '@context/AuthContext';
import * as gtag from '../lib/gtag';
import Layout from '@containers/Layout';
import '@styles/global.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import 'swiper/css/grid';

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
