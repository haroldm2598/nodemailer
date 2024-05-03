import nodemailer from 'nodemailer';

const email = process.env.ZOHOEMAIL;
const pass = process.env.ZOHOPASS;

export const transporter = nodemailer.createTransport({
	service: 'zoho',
	host: 'smtp.zoho.com',
	port: 465,
	secure: true,
	auth: {
		user: email,
		pass
	}
});

export const mailOptions = {
	from: email,
	to: 'mikedcruz@zohomail.com'
};
