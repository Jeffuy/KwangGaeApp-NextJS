/** @type {import('next').NextConfig} */
const nextConfig = {
	//image
	images: {
		domains: ['i.imgur.com'],
	},
	reactStrictMode: true,
	env: {
		//firebase
		FIREBASE_APIKEY: process.env.FIREBASE_APIKEY,
		FIREBASE_AUTHDOMAIN: process.env.FIREBASE_AUTHDOMAIN,
		FIREBASE_PROJECTID: process.env.FIREBASE_PROJECTID,
		FIREBASE_STORAGEBUCKET: process.env.FIREBASE_STORAGEBUCKET,
		FIREBASE_MESSAGINGSENDERID: process.env.FIREBASE_MESSAGINGSENDERID,
		FIREBASE_APPID: process.env.FIREBASE_APPID,
		FIREBASE_MEASUREMENTID: process.env.FIREBASE_MEASUREMENTID,
	},
};

module.exports = nextConfig;
