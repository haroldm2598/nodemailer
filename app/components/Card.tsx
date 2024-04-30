'use client';
import Image from 'next/image';
import Link from 'next/link';
import { TbSourceCode } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import { CardBody, CardContainer, CardItem } from './ui/3dCard';
import { ProjectProps } from '@/lib/definition';
import AnimeStaggered from './Animation/Stagger';

interface ThreeDCardProps {
	data: Array<ProjectProps>;
}

export default function Card({ data }: ThreeDCardProps) {
	return (
		<section className=' grid max-w-7xl grid-cols-1 lg:grid-cols-2 lg:gap-10'>
			{data.map((item, index) => {
				return (
					<AnimeStaggered key={index} custom={2 + index}>
						<CardContainer className='inter-var'>
							<CardBody className='group/card relative h-auto w-auto rounded-xl border border-black/[0.1] bg-gray-50 p-6 shadow-lg dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-full lg:w-[26rem] xl:w-[30rem]'>
								<CardItem translateZ='70' className='mt-4 w-full'>
									<Image
										src={item.imageSrc}
										// default h&w = 1500
										height='0'
										width='0'
										className='h-72 w-full rounded-xl object-cover group-hover/card:shadow-xl'
										alt='thumbnail'
									/>
								</CardItem>
								<CardItem
									translateZ='50'
									className='my-4 text-xl font-bold text-neutral-600 dark:text-white'
								>
									{item.title}
								</CardItem>
								<CardItem
									as='p'
									translateZ='60'
									className='mt-2 max-w-sm text-sm text-neutral-500 dark:text-neutral-300'
								>
									{item.desc}
								</CardItem>

								<div className='mt-10 flex items-center justify-between'>
									<CardItem
										translateZ='30'
										as='button'
										className='flex items-center gap-2 rounded-xl border-2 border-darkBlue bg-white px-4 py-2 text-sm font-bold text-black dark:bg-white dark:text-black  [&>*:nth-child(odd)]:duration-200 [&>*:nth-child(odd)]:hover:translate-x-1'
									>
										<Link href={item.githubLink}>source code</Link>
										<TbSourceCode size={16} />
									</CardItem>
									<CardItem
										translateZ='30'
										as='button'
										className='flex items-center gap-2 rounded-xl bg-darkBlue px-4 py-2 text-sm font-bold text-white dark:bg-white dark:text-black [&>*:nth-child(odd)]:duration-200 [&>*:nth-child(odd)]:hover:translate-x-1'
									>
										<Link href={item.livePreviewLink}>live preview</Link>
										<span>
											<CgWebsite size={16} />
										</span>
									</CardItem>
								</div>
							</CardBody>
						</CardContainer>
					</AnimeStaggered>
				);
			})}
		</section>
	);
}
