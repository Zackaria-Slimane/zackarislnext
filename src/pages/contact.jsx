import { useRef } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { TypeAnimation } from 'react-type-animation';
import { FaArrowRightFromBracket } from 'react-icons/fa6';
import { ContactCards } from '../components/UI/ContactCards';

import siteData from '../data/siteData';
import SEO from '../data/seo';

const Contact = () => {
	const nameRef = useRef(null);
	const mailRef = useRef(null);
	const messageRef = useRef(null);

	const notify = () => {
		toast.success('Message sent! Thank you 🙏🏻', {
			duration: 3000,
			position: 'top-right',
			ariaProps: {
				role: 'status',
				'aria-live': 'polite',
			},
		});
	};

	const resetForm = () => {
		nameRef.current.value = '';
		mailRef.current.value = '';
		messageRef.current.value = '';
		notify();
	};

	const formSubmit = (e) => {
		e.preventDefault();
		const formData = new FormData(e.target);
		fetch('https://getform.io/f/6b7547f9-bd94-4d3a-9d96-edbd80e61c89', {
			method: 'POST',
			body: formData,
			headers: {
				Accept: 'application/json',
			},
		})
			.then((response) => console.log('Form submit response', response))
			.catch((error) => console.log('Form submit error', error))
			.finally(() => resetForm());
	};

	const currentSEO = SEO.find((item) => item.page === 'contact');

	return (
		<>
			<HelmetProvider>
				<Helmet>
					<title>{`Contact | ${siteData.main.title}`}</title>
					<meta name='description' content={currentSEO.description} />
					<meta name='keywords' content={currentSEO.keywords.join(', ')} />
				</Helmet>
				<>
					<Toaster />
					<div className='max-w-[800px] mt-[4em] sm:mt-[8em] mx-auto sm:w-[90dvw] px-6 bg-slate-900'>
						<div className='flex items-center justify-center'>
							<div className='flex flex-col items-center p-4 sm:items-start'>
								<div className='text-3xl sm:text-4xl text-powder text-center font-jetBrain font-bold w-full my-6 text-clip'>
									Let&lsquo;s Turn your Ideas into reality with
									<TypeAnimation
										className='px-2 py-0 ml-2 text-3xl rounded-sm bg-navy'
										sequence={['Owrnership.', 1500, 'Collaboration.', 1500]}
										speed={30}
										wrapper='span'
										repeat={Infinity}
									/>
								</div>

								<motion.div
									className='w-full py-2 text-base text-powder text-center'
									initial={{ opacity: 0, x: -200 }}
									transition={{ duration: 1 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}>
									<p>{siteData.contactPage.description}</p>
									<br />
									<p> {siteData.contactPage.cta}</p>
								</motion.div>

								<div className='mx-auto'>
									<ContactCards />
								</div>
							</div>
						</div>

						<div className='bg-slate-900 border-2 border-powder mx-auto my-10 rounded-lg shadow-lg max-w-[500px]'>
							<form
								className='w-full p-6 text-left'
								content='formdata'
								onSubmit={(e) => formSubmit(e)}
								acceptCharset='UTF-8'
								id='contanct-form'
								method='POST'>
								<div className='w-full'>
									<div className='flex flex-col my-2'>
										<label className='py-2 text-sm font-light capitalize text-powder'>name</label>
										<input
											type='text'
											name='name'
											ref={nameRef}
											className='flex p-3 rounded-lg focus:outline-navy bg-cream text-navy'
										/>
									</div>
									<div className='flex flex-col my-2'>
										<label className='py-2 text-sm font-light capitalize text-powder'>email</label>
										<input
											type='text'
											name='email'
											ref={mailRef}
											className='flex p-3 rounded-lg focus:outline-navy bg-cream text-navy'
										/>
									</div>
									<div className='flex flex-col my-2'>
										<label className='py-2 text-sm font-light capitalize text-powder'>
											message
										</label>
										<textarea
											name='message'
											rows='6'
											ref={messageRef}
											className='flex p-3 rounded-lg resize-y focus:outline-navy bg-cream text-navy'></textarea>
									</div>
								</div>
								<div className='flex items-center justify-center'>
									<button className='flex items-center justify-center py-2 mt-8 transition-colors border-2 rounded-lg shadow-lg cursor-pointer group hover:scale-105 hover:border-transparent border-navy bg-navy text-powder'>
										<p className='mx-2 text-sm font-light md:text-lg text-cream'>Send</p>
										<span className='animate-pulse'>
											<FaArrowRightFromBracket className='mx-4 font-semibold text-md' />
										</span>
									</button>
								</div>
							</form>
						</div>
					</div>
				</>
			</HelmetProvider>
		</>
	);
};

export default Contact;
