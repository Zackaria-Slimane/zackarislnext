import { FaTwitter, FaGithub, FaLinkedinIn, FaFileLines } from "react-icons/fa6";
import siteData from "../../data/siteData";
import Link from "next/link";

export function ContactCards() {
	return (
		<div className='flex items-center justify-between gap-6 pt-8'>
			<div>
				<Link
					href='https://drive.google.com/file/d/1-5RS2leyJaOUONzKIdIwZwYuT_QHm4ND/view?usp=drive_link'
					target='_blank'
					rel='noreferrer noopener'
					className='flex items-center justify-center px-6 py-2 transition-colors bg-transparent border-2 rounded-lg shadow-lg hover:border-cream border-navy hover:bg-darkpink hover:text-white hover:scale-110'>
					<span>
						<FaFileLines className='text-sm font-light md:text-lg' />
					</span>
					<p className='mx-2 text-sm font-light md:text-lg'>Resume</p>
				</Link>
			</div>
			<div>
				<Link href={siteData.socials.github} target='_blank' rel='noreferrer noopener'>
					<FaGithub className='text-xl text-navy hover:text-darkpink hover:scale-110' />
				</Link>
			</div>
			<div>
				<Link href={siteData.socials.linkedin} target='_blank' rel='noreferrer noopener'>
					<FaLinkedinIn className='text-xl text-navy hover:text-darkpink hover:scale-110' />
				</Link>
			</div>
		</div>
	);
}
