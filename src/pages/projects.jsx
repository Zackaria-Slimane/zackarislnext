import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TypeAnimation } from 'react-type-animation';
import { ContactCards } from '../components/UI/ContactCards';
import { AllProjects } from '../components/projects/allProjects';
import siteData from '../data/siteData';
import SEO from '../data/seo';

const Projects = () => {
	const currentSEO = SEO.find((item) => item.page === 'projects');

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`Projects | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				</Helmet>

				<>
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] px-6 bg-slate-900'>
						<div className='flex items-center justify-center'>
							<div className='flex flex-col items-center p-4 sm:items-start '>
								<div className='text-center text-3xl sm:text-4xl text-powder font-jetBrain font-bold w-full my-6 text-clip'>
									Problem Solving one
									<TypeAnimation
										className='px-2 py-0 ml-2 text-3xl rounded-sm bg-sunflower text-slate'
										sequence={['Line', 1500, 'Idea', 1500]}
										speed={30}
										wrapper='span'
										repeat={Infinity}
									/>
									<br />
									at a time.
								</div>

								<motion.div
									className='w-full py-2 text-base text-powder text-center'
									initial={{ opacity: 0, x: -200 }}
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}>
									<p>{siteData.projectsPage.description}</p>
									<br />
									<p>{siteData.projectsPage.cta}</p>
								</motion.div>

								<div className='mx-auto'>
									<ContactCards />
								</div>
							</div>
						</div>

						<div className='basis-[300px] pt-4 sm:basis-auto'>
							<AllProjects />
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Projects;
