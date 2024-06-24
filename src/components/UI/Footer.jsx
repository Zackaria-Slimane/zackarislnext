import { FaGithub, FaLinkedinIn } from 'react-icons/fa6';
import Link from 'next/link';
import siteData from '../../data/siteData';

const currentYear = new Date().getFullYear();

export function Footer() {
	return (
		<footer className='py-8 w-full max-w-[1000px] m-auto border-t-2 border-sunflower'>
			<div className='flex justify-around gap-6 mx-auto'>
				<div className='flex items-center justify-between gap-6 mt-2'>
					<div>
						<Link href={siteData.socials.github} target='_blank' rel='noreferrer noopener'>
							<FaGithub className='text-xl text-powder hover:text-sunflower hover:scale-110' />
						</Link>
					</div>
					<div>
						<Link href={siteData.socials.linkedin} target='_blank' rel='noreferrer noopener'>
							<FaLinkedinIn className='text-xl text-powder hover:text-sunflower hover:scale-110' />
						</Link>
					</div>
				</div>
				<div className='mt-2 text-sm text-right text-powder'>
					© {currentYear} <span className='text-sunflower mx-1'>Zakaria Slimane</span>
				</div>
			</div>
		</footer>
	);
}
