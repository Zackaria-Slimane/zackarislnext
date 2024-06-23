import Link from 'next/link';
import { FaLink } from 'react-icons/fa6';

export function ArticleCard({ articles }) {
	return (
		<section>
			{articles.map((article) => (
				<div
					key={article.id}
					className='my-3 rounded-md border border-sunflower p-4 w-full font-jetBrain grid grid-cols-1 gap-2 hover:scale-105'>
					<div>
						<h2 className='text-powder font-medium'>{article.title}</h2>
					</div>

					<Link
						className='flex items-center justify-start pt-4 text-sm hover:text-navy'
						href={article.link}>
						<div className='underline text-xs text-start text-sunflower hover:decoration-double decoration-2 decoration-sunflower truncate'>
							{' '}
							{article.link}{' '}
						</div>
						<div className='pl-2 text-sm'>
							{' '}
							<FaLink />
						</div>
					</Link>
				</div>
			))}
		</section>
	);
}
