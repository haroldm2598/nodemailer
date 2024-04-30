'use client';
import { motion } from 'framer-motion';

const parentVars = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.25
		}
	}
};

const childVars = {
	hidden: { opacity: 0 },
	show: { opacity: 1 }
};

const insideChildVars = {
	hidden: { opacity: 0, y: 1000 },
	show: { opacity: 1, y: 0 }
};
export default function page() {
	return (
		<div className='bg-slate-300 min-h-screen dark:bg-slate-600 overflow-hidden'>
			<motion.section
				variants={parentVars}
				initial='hidden'
				animate='show'
				className='grid grid-cols-2 md:grid-cols-3 gap-10 p-10'
			>
				{[...Array(6)].map((item, index) => (
					<motion.div
						key={index}
						variants={childVars}
						className='flex justify-center items-center bg-slate-800 aspect-square rounded-lg overflow-hidden'
					>
						<motion.div
							variants={insideChildVars}
							transition={{ duration: 1, ease: 'easeOut', delay: 0.2 * index }}
							className='w-20 h-20 bg-stone-100 rounded-lg'
						></motion.div>
					</motion.div>
				))}
			</motion.section>
		</div>
	);
}
