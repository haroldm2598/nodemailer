import Link from 'next/link';
import ThemeSwitch from './ThemeSwitch';

export default function NavLink() {
	return (
		<div className='px-10 py-2 flex justify-between items-center bg-slate-600 dark:bg-slate-300 text-slate-300 dark:text-slate-600'>
			<ul className='flex gap-4 text-lg font-semibold '>
				<li>
					<Link href='/'>NodeMailer</Link>
				</li>
				<li>
					<Link href='/framer'>Framer</Link>
				</li>
				<li>
					<Link href='/threecard'>threecard</Link>
				</li>
				<li>
					<Link href='/about'>about</Link>
				</li>
				<li>
					<Link href='/zoho'>zoho</Link>
				</li>
			</ul>

			<div className='cursor-pointer'>
				<ThemeSwitch />
			</div>
		</div>
	);
}
