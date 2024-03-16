import siteData from '../data/siteData';
import SEO from '../data/seo';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ArticleCard } from '@/components/UI/ArticleCard';

const Articles = () => {
	const currentSEO = SEO.find((item) => item.page === 'articles');

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`Articles | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				</Helmet>
				<>
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] px-6 bg-white'>
						<div className='flex items-center justify-center'>
							<div className='flex flex-col items-center p-4 sm:items-start'>
								<div className='text-3xl sm:text-4xl text-[#27272a] font-jetBrain font-bold w-full my-6 text-clip'>
									{siteData.articlesPage.title}
								</div>

								<motion.div
									className='w-full py-2 text-base text-navy'
									initial={{ opacity: 0, x: -200 }}
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}>
									<p>{siteData.articlesPage.description}</p>
									<br />
									<p> {siteData.articlesPage.cta}</p>
								</motion.div>

								<div className='w-full mt-6'>
									<ArticleCard articles={siteData.articles} />
								</div>
							</div>
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Articles;
