const express = require('express');
const app = express();

require('dotenv').config();

const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

// eslint-disable-next-line no-unused-vars
app.post('/send_mail', cors(), async (req, res) => {
	let { text } = req.body;

	const transport = nodemailer.createTransport({
		host: process.env.MAIL_HOST,
		port: process.env.MAIL_PORT,
		auth: {
			user: process.env.MAIL_USER,
			pass: process.env.MAIL_PASS,
		},
	});

	await transport.sendMail({
		from: process.env.MAIL_FROM,
		to: 'blablabla@gmail.com',
		subject: 'Contacto desde la web',
		html: `<h1>${text}</h1>`,
	});
});

app.listen(process.env.PORT || 4000, () => {
	console.log('Server started on port 4000');
});
