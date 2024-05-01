'use client';
import Image from 'next/image';
import AnimateSection from '../components/Animation/Section';
import AnimateStagger from '../components/Animation/Stagger';
import { cn } from '@/utils/cd';

const expertiseList = [
	{ imgSrc: require('/public/images/html.svg').default },
	{ imgSrc: require('/public/images/css.svg').default },
	{ imgSrc: require('/public/images/javascript.svg').default },
	{ imgSrc: require('/public/images/sass.svg').default },
	{ imgSrc: require('/public/images/tailwindcss.svg').default },
	{ imgSrc: require('/public/images/reactjs.svg').default },
	{ imgSrc: require('/public/images/nextjs.svg').default },
	{ imgSrc: require('/public/images/github.svg').default },
	{ imgSrc: require('/public/images/git.svg').default },
	{ imgSrc: require('/public/images/typescript.svg').default },
	{ imgSrc: require('/public/images/nodejs.svg').default },
	{ imgSrc: require('/public/images/express.svg').default },
	{ imgSrc: require('/public/images/mongodb.svg').default }
];

export default function page() {
	return (
		<div className='dark:bg-slate-600 bg-slate-300'>
			<section
				id='about'
				className='mx-0 min-h-screen py-4 px-10 lg:mx-auto lg:max-w-[85rem] lg:px-0'
			>
				<AnimateSection custom={1}>
					<h1
						className={cn(
							'mb-4 text-[3.5rem] uppercase text-slate-600 dark:text-slate-300 opacity-80 lg:text-[4rem]'
						)}
					>
						About
					</h1>
				</AnimateSection>

				<AnimateSection custom={2}>
					<p className='mt-5 max-w-[70rem] text-lg leading-8 opacity-80 text-black dark:text-white lg:text-2xl lg:leading-10'>
						hey mike here. A dedicated front-end developer creating stunning,
						functional website. A user-friendly web experienced who loves to
						develope a website where analytical and problem solving provide
						solutions to your needs.
					</p>
				</AnimateSection>

				<AnimateSection custom={3}>
					<h1 className='mt-10 text-[2rem] font-semibold leading-10 text-slate-600 dark:text-slate-300'>
						Here are my stacks
					</h1>

					<div className='my-10 flex flex-wrap justify-center gap-3 md:justify-start lg:gap-5'>
						{expertiseList.map((item, index) => (
							<AnimateStagger key={index} custom={index}>
								<div className='my-2 grid h-[100px] w-[100px] place-items-center rounded-lg border-2 border-[#E1E1E1] bg-white shadow-md'>
									<div className='h-[40px] w-[40px] lg:h-[60px] lg:w-[60px]'>
										<Image
											src={item.imgSrc}
											className='h-full w-full object-contain'
											alt='thumbnail'
										/>
									</div>
								</div>
							</AnimateStagger>
						))}
					</div>
				</AnimateSection>
			</section>
		</div>
	);
}
