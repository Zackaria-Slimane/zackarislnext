import Link from "next/link";
import Image from "next/image";
import { FaLink } from "react-icons/fa6";

export function Project(props) {
	const { logo, title, description, linkText, link, tech } = props;

	return (
		<div className='h-full rounded-lg mix-blend-normal hover:scale-110'>
			<Link className='list-none' target='_blank' rel='noreferrer noopener' href={link}>
				<div className='p-6'>
					{/* image */}
					<div className='w-8'>
						<Image
							className='w-full object-cover max-h-[120px]'
							src={tech}
							alt='technologie logo'
						/>
					</div>
					{/* image */}

					<div className='py-4 text-base font-semibold text-start font-jetBrain text-navy'>
						{title}
					</div>
					<div className='text-darkpink text-start font-heebo text-clip'>{description}</div>
					<div className='my-4'>
						<Image
							width='300'
							height='180'
							srcSet={logo}
							src={logo}
							alt='Preview of the project'
							className='rounded-lg max-h-[180px] object-cover'
						/>
					</div>
					<div className='flex items-center justify-start pt-4 text-sm hover:text-navy hover:scale-105'>
						<div className='pl-4 font-semibold underline text-start text-darkpink hover:decoration-wavy decoration-2 decoration-darkpink'>
							{" "}
							{linkText}{" "}
						</div>
						<div className='pl-2 text-sm'>
							{" "}
							<FaLink />
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
