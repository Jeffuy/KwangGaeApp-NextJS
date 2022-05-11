require('dotenv').config();
const nodemailer = require('nodemailer');
const smtpTransport = require('nodemailer-smtp-transport');

// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line import/no-anonymous-default-export
export default async (req, res) => {
	if (req.method === 'POST') {
		const { text } = req.body;

		const transporter = nodemailer.createTransport(
			smtpTransport({
				host: process.env.MAIL_HOST,
				port: process.env.MAIL_PORT,
				auth: {
					user: process.env.MAIL_USER,
					pass: process.env.MAIL_PASS,
				},
			})
		);

		await new Promise((resolve, reject) => {
			// verify connection configuration
			transporter.verify(function (error, success) {
				if (error) {
					console.log(error);
					reject(error);
				} else {
					console.log('Server is ready to take our messages');
					resolve(success);
				}
			});
		});

		const mailOptions = {
			from: process.env.MAIL_FROM,
			to: 'blablabla@gmail.com',

			subject: 'Contacto desde la web',
			html: `<h1>${text}</h1>`,
		};

		// eslint-disable-next-line no-unused-vars
		await new Promise((resolve, reject) => {
			transporter.sendMail(mailOptions, (err, info) => {
				if (err) {
					console.error(err);
					reject(err);
				} else {
					console.log(info);
					resolve(info);
				}
			});
		});
	}

	res.status(200).json({ message: 'Mail sent' });
};
// 	await new Promise((resolve, reject) => {

// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// app.use(cors());

// // eslint-disable-next-line no-unused-vars
// app.post('/send_mail', cors(), async (req, res) => {
// 	let { text } = req.body;

// 	const transport = nodemailer.createTransport({
// 		host: process.env.MAIL_HOST,
// 		port: process.env.MAIL_PORT,
// 		auth: {
// 			user: process.env.MAIL_USER,
// 			pass: process.env.MAIL_PASS,
// 		},
// 	});

// 	await transport.sendMail({
// 		from: process.env.MAIL_FROM,
// 		to: 'blablabla@gmail.com',
// 		subject: 'Contacto desde la web',
// 		html: `<h1>${text}</h1>`,
// 	});
// });

// app.listen(process.env.PORT || 4000, () => {
// 	console.log('Server started on port 4000');
// });
