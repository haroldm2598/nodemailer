import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { users } from '../data/data';

const zohomail = process.env.ZOHOEMAIL;
const pass = process.env.ZOHOPASS;

export async function POST(request: Request) {
	try {
		const { name, email, message } = await request.json();

		const transporter = nodemailer.createTransport({
			service: 'zoho',
			host: 'smtp.zoho.com',
			port: 465,
			secure: true,
			auth: {
				user: zohomail,
				pass
			}
		});

		const mailOptions = {
			from: zohomail,
			to: 'mikedcruz3@gmail.com',
			subject: 'New message from PORTFOLIO',
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
		};

		await transporter.sendMail(mailOptions);

		return NextResponse.json(
			{ message: 'Sent message succeed.' },
			{ status: 200 }
		);
	} catch (error) {
		return new NextResponse('Failed to send message.', { status: 500 });
	}
}

export async function GET() {
	return Response.json(users);
}
