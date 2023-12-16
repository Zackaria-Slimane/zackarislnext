import Link from "next/link";
import { FaHouse } from "react-icons/fa6";

const NotFound = () => {
	return (
		<div className='grid min-h-fit h-[90dvh] place-items-center bg-powder px-6 py-24 sm:py-32 lg:px-8'>
			<div className='text-center'>
				<p className='text-4xl font-semibold text-darkpink'>Sorry, there's nothing here</p>
				<p className='mt-4 text-3xl font-bold tracking-tight text-navy sm:text-4xl'>
					Looks Like You have Strayed Off the Digital Path!
				</p>

				<div className='flex items-center justify-center mt-24 gap-x-6'>
					<Link
						href='/'
						className='flex items-center justify-center px-6 py-2 transition-colors bg-transparent border-2 rounded-lg shadow-lg hover:border-cream border-navy hover:bg-darkpink hover:text-white hover:scale-110'>
						<span>
							<FaHouse className='mx-2 text-sm font-light md:text-lg' />
						</span>
						<p className='mx-2 text-sm font-light md:text-lg'>Home</p>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default NotFound;
