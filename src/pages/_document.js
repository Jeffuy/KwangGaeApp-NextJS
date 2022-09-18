import Document, { Html, Head, Main, NextScript } from 'next/document';
import { GA_TRACKING_ID } from '../lib/gtag';

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
					{/* Global site tag (gtag.js) - Google Analytics */}
					<script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
					<script
						dangerouslySetInnerHTML={{
							__html: `
							window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							gtag('config', '${GA_TRACKING_ID}', {
								page_path: window.location.pathname,
							});
						`,
						}}
					/>
					{/* BOOTSTRAP */}
					{/* <link
						crossOrigin="anonymous"
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
						integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
						rel="stylesheet"
					/>
					<link
						crossOrigin="anonymous"
						href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
						integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
						rel="stylesheet"
					/> */}
					{/* FONT AWESOME */}
					<link href="https://use.fontawesome.com/releases/v5.13.0/css/all.css" rel="stylesheet" />

					{/* GOOGLE FONTS */}

					<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet" />
					{/* ANIMATE CSS */}
					<link href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css" rel="stylesheet" />

					<link href="/apple-touch-icon.png" rel="apple-touch-icon" sizes="180x180" />
					<link href="/favicon-32x32.png" rel="icon" sizes="32x32" type="image/png" />
					<link href="/favicon-16x16.png" rel="icon" sizes="16x16" type="image/png" />
					{/* <link href="/site.webmanifest" rel="manifest" /> */}
					<meta content="#da532c" name="msapplication-TileColor" />
					<meta content="#ffffff" name="theme-color" />
				</Head>

				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

export default MyDocument;
