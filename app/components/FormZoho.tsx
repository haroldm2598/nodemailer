'use client';
import { sendZohoForm } from '@/lib/api/apiZoho';
import { useForm } from 'react-hook-form';

interface FormProps {
	name: string;
	email: string;
	message: string;
}

export default function Form() {
	const formValues = useForm<FormProps>({
		defaultValues: { name: '', email: '', message: '' }
	});

	const { register, handleSubmit, formState } = formValues;
	const { errors } = formState;

	const sendMail = async (data: FormProps) => {
		try {
			await sendZohoForm(data);
			alert('success');
		} catch (error) {
			console.log(error);
			alert('failed to send');
		}
	};

	return (
		<form onSubmit={handleSubmit(sendMail)}>
			<div className='mb-2'>
				<label htmlFor='name' className='label-text text-white'>
					name:
				</label>
				<input
					type='text'
					className='input input-bordered w-full max-w-full text-black'
					{...register('name')}
				/>
			</div>

			<div className='mb-2'>
				<label htmlFor='email' className='label-text text-white'>
					email:
				</label>
				<input
					type='text'
					className='input input-bordered w-full max-w-full text-black'
					{...register('email', {
						pattern: {
							value:
								/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
							message: 'Invalid email format'
						}
					})}
				/>
				{errors.email?.message && (
					<p className='text-red-400 text-sm mb-1'>{errors.email?.message}</p>
				)}
			</div>

			<div className='mb-2'>
				<label htmlFor='message' className='label-text text-white'>
					message:
				</label>
				<textarea
					className='textarea textarea-bordered w-full text-black'
					{...register('message', {
						required: {
							value: true,
							message: 'message is required'
						}
					})}
				></textarea>
				{errors.message?.message && (
					<p className='text-red-400 text-sm mb-1'>{errors.message?.message}</p>
				)}
			</div>

			<button className='btn btn-info dark:btn-success text-white'>
				submit
			</button>
		</form>
	);
}
