import Link from 'next/link';
import { motion } from 'framer-motion';
import { WorkStore } from '../../data/workStore';
import Section from './Section';

export function Work() {
	return (
		<Section id='works' title='Work History' subtitle="Here's what i have been up to so far:">
			<ul role='list' className='w-4/5 mx-auto'>
				{WorkStore.map((work) => (
					<li key={work.id}>
						<motion.div
							initial={{ opacity: 0, x: -200 }}
							transition={{ duration: 1 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							className='flex flex-wrap content-center justify-center gap-2 mt-4 mb-6 align-middle sm:justify-between'>
							<Link
								href={work.link}
								target='_blank'
								rel='noopener noreferrer'
								className='font-medium underline cursor-pointer hover:decoration-wavy text-sunflower dark:text-cream'>
								{work.position}
							</Link>

							<div className='flex flex-col sm:flex-row gap-2 sm:gap-6'>
								<p className='text-sm font-medium text-powder'>{work.name} </p>
								<p className='text-sm text-powder'>
									{work.from} - {work.to}
								</p>
							</div>
						</motion.div>
					</li>
				))}
			</ul>
		</Section>
	);
}
