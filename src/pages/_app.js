import Layout from '@containers/Layout';
import '@styles/style.css';
import '@styles/challenges.css';
import '@styles/quiz.css';
import '@styles/MemoryGame.css';
import '@styles/main.css';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
