import axios from 'axios';

export const sendZohoForm = async (data: any) =>
	axios.post('/api/zoho', {
		name: data.name,
		email: data.email,
		message: data.message
	});
