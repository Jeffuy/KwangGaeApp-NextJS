require('dotenv').config();
const nodemailer = require('nodemailer');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	if (req.method === 'POST') {
		const { text } = req.body;

		const transporter = nodemailer.createTransport({
			host: process.env.MAIL_HOST,
			port: process.env.MAIL_PORT,
			auth: {
				user: process.env.MAIL_USER,
				pass: process.env.MAIL_PASS,
			},
		});
		await new Promise((resolve, reject) => {
			// verify connection configuration
			transporter.verify(function (error, success) {
				if (error) {
					reject(error);
				} else {
					resolve(success);
				}
			});
		});

		const mailOptions = {
			from: process.env.MAIL_FROM,
			to: process.env.MAIL_TO,

			subject: 'Contacto desde la web',
			html: `<h1>${text}</h1>`,
		};

		// eslint-disable-next-line no-unused-vars
		await new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					reject(err);
				} else {
					resolve(info);
				}
			});
		});
	}

	res.status(200).json({ message: 'Mail sent' });
};
