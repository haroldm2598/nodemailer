import Form from './Form';

export default function page() {
	return (
		<section className='bg-slate-300 min-h-screen dark:bg-slate-600'>
			<div className='max-w-sm mx-auto text-white'>
				<div className='pt-12 flex flex-row items-center gap-5'>
					<h1 className='text-3xl font-bold dark:text-white'>Zoho Test</h1>
				</div>

				<Form />
			</div>
		</section>
	);
}
