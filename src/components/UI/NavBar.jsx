import Link from 'next/link';

export function NavBar({ active, setPath }) {
	return (
		<div className='flex items-center justify-center m-0'>
			<nav className='flex justify-center items-center fixed z-[999] top-6 sm:w-4/5 sm:text-md sm:mx-[25%]'>
				<div className='sm:w-2/5 mx-auto w-[290px] h-10 shadow-[0px_2px_10px_rgba(0,0,0,0.1)] px-[0%] rounded-full bg-powder backdrop-blur-zs'>
					<ul className='flex justify-around items-center mx-auto mt-[11px] list-none'>
						<li
							className={
								active === '/'
									? 'font-[bold] text-xs sm:text-sm text-navy underline underline-offset-4 decoration-navy decoration-2 hover:underline'
									: 'font-[bold] text-xs text-navy sm:text-sm decoration-navy decoration-2 hover:underline'
							}>
							<Link
								onClick={() => setPath('/')}
								href='/'
								className='no-underline transition-colors duration-300 font-heebo'>
								Home
							</Link>
						</li>
						<li
							className={
								active === '/about'
									? 'font-[bold] text-xs sm:text-sm text-navy underline underline-offset-4 decoration-navy decoration-2 hover:underline'
									: 'font-[bold] text-xs text-navy sm:text-sm decoration-navy decoration-2 hover:underline'
							}>
							<Link
								onClick={() => setPath('/about')}
								href='/about'
								className='no-underline transition-colors duration-300 font-heebo'>
								About
							</Link>
						</li>
						<li
							className={
								active === '/projects'
									? 'font-[bold] text-xs sm:text-sm text-navy underline underline-offset-4 decoration-navy decoration-2 hover:underline'
									: 'font-[bold] text-xs text-navy sm:text-sm decoration-navy decoration-2 hover:underline'
							}>
							<Link
								onClick={() => setPath('/projects')}
								className='no-underline transition-colors duration-300 font-heebo'
								href='/projects'>
								Projects
							</Link>
						</li>

						<li
							className={
								active === '/articles'
									? 'font-[bold] text-xs sm:text-sm text-navy underline underline-offset-4 decoration-navy decoration-2 hover:underline'
									: 'font-[bold] text-xs text-navy sm:text-sm decoration-navy decoration-2 hover:underline'
							}>
							<Link
								onClick={() => setPath('/articles')}
								className='no-underline transition-colors duration-300 font-heebo'
								href='/articles'>
								Articles
							</Link>
						</li>

						<li
							className={
								active === '/contact'
									? 'font-[bold] text-xs sm:text-sm text-navy underline underline-offset-4 decoration-navy decoration-2 hover:underline'
									: 'font-[bold] text-xs text-navy sm:text-sm decoration-navy decoration-2 hover:underline'
							}>
							<Link
								onClick={() => setPath('/contact')}
								className='no-underline transition-colors duration-300 font-heebo'
								href='/contact'>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
}
