// import nodemailer from 'nodemailer';
let nodemailer = require('nodemailer');

const email = process.env.EMAIL;
const pass = process.env.PASS;

export const transporter = nodemailer.createTransport({
	host: 'smtp.ethereal.email',
	port: 587,
	// service: 'gmail',
	auth: {
		user: email,
		pass
	}
});

export const mailOptions = {
	from: email,
	to: 'mikedcruz3@gmail.com'
};
