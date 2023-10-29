import Image from "next/image";
import { motion } from "framer-motion";
import Section from "./Section";
import stacks from "../../data/stackStore";

const TechStack = () => {
	return (
		<Section id='skills' title='Skill Set' subtitle='My tech stack so far is '>
			<motion.div
				initial={{ x: -200, opacity: 0 }}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				className='grid grid-cols-3 gap-8 md:grid-cols-6 md:py-12'>
				{stacks.map(({ id, image, title }) => (
					<div
						key={id}
						className='flex flex-col items-center justify-center align-middle'>
						<div
							className='flex flex-col items-center justify-center object-cover w-24 h-24 p-5 duration-300 ease-in-out bg-white rounded-lg shadow-mg'
							role='img'>
							<Image
								width='56'
								height='56'
								src={image}
								srcSet={image}
								alt={title}
								className='object-contain w-36 h-36 md:h-44 md:w-44 hover:animate-bounce'
							/>
						</div>
						<p className='mt-2 text-center'>{title}</p>
					</div>
				))}
			</motion.div>
		</Section>
	);
};

export default TechStack;
