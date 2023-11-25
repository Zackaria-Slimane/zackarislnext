import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { TypeAnimation } from "react-type-animation";
import { MdSwipeDownAlt } from "react-icons/md";
import Works from "../components/UI/WorkCard";
import AllProjects from "../components/projects/allProjects";
import { ContactCards } from "../components/UI/ContactCards";

import siteData from "../data/siteData";
import SEO from "../data/seo";

const Homepage = () => {
	const [isFeatured, setIsFeatured] = useState(true);
	const currentSEO = SEO.find((item) => item.page === "home");

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{siteData.main.title}</title>
					<meta name='description' content={currentSEO.description} />
					<link rel='canonical' href='https://zackariasl.dev' />
					<meta name='keywords' content={currentSEO.keywords.join(", ")} />
				</Helmet>

				<div className='page-content'>
					<div className='max-w-[800px] mx-auto sm:w-[90dvw]  px-8'>
						<div className='mt-12 w-full sm:max-w-[800px]'>
							<div className='flex justify-center items-center mx-auto'>
								<div className='flex mt-8 sm:mt-24 flex-col items-center p-2 sm:p-4 sm:items-center'>
									<div className='mx-auto text-start sm:text-start text-2xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
										Full stack developer, devOps & Cloud enthousiast crafting seamless
										digital experiences
										<br className='sm:hidden' /> with
										<TypeAnimation
											className='px-2 py-0 ml-2 text-2xl sm:text-3xl rounded-sm bg-cream'
											sequence={[
												"React",
												1500,
												"Next",
												1500,
												"Golang",
												1500,
												"Docker",
												1500,
												"Vue",
												1500,
												"Nuxt",
												1500,
												"Wordpress",
												1500,
											]}
											speed={30}
											wrapper='span'
											repeat={Infinity}
										/>
									</div>
									<motion.div
										className='pt-2 px-0 sm:px-2 sm:my-4 text-base text-start text-navy w-full sm:max-w-[800px]'
										initial={{ opacity: 0, x: -200 }}
										transition={{ duration: 1 }}
										whileInView={{ opacity: 1, x: 0 }}
										viewport={{ once: true }}>
										<br />
										<p className='text-justify'> {siteData.homePage.description}</p>
										<p className='text-justify'> {siteData.homePage.cta}</p>
									</motion.div>
									<ContactCards />
									<div className='mt-12'>
										<a href='#projects'>
											<MdSwipeDownAlt className='text-3xl text-navy animate-bounce hover:text-darkpink hover:scale-110' />
										</a>
									</div>
								</div>
							</div>

							<div className='basis-[300px] pt-4 sm:basis-auto'>
								<AllProjects isFeatured={isFeatured} />
							</div>

							<div className='flex justify-center'>
								<div className='basis-[600px] sm:basis-auto pt-4 mx-auto w-full'>
									<Works />
								</div>
							</div>
						</div>
					</div>
				</div>
			</HelmetProvider>
		</>
	);
};

export default Homepage;
