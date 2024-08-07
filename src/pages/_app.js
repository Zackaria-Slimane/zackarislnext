import '../styles/globals.css';
import Head from 'next/head';
import { useState } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/react';
import { useRouter } from 'next/router';
import { NavBar } from 'src/components/UI/NavBar';
import { ToTop } from 'src/components/UI/ToTop';
import { Footer } from 'src/components/UI/Footer';

export default function App({ Component, pageProps }) {
	const { pathname } = useRouter();
	const [path, setPath] = useState(pathname);

	return (
		<>
			<Head>
				<meta charSet='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='canonical' href='https://zackariasl.dev' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#14274E' />
				<meta name='og:image' content='/zs.png' />
				<meta
					name='og:title'
					content='Zakaria Slimane - Software Developer | JavaScript | Golang | DevOps & Cloud'
				/>
				<meta name='twitter:title' content='Zakaria SLIMANE - Software Developer' />
				<meta
					name='og:description'
					content='Zakaria Slimane - Software Developer | JavaScript | Golang | DevOps & Cloud'
				/>
				<meta
					name='description'
					content='Zakaria Slimane - Software Developer | JavaScript | Golang | DevOps & Cloud'
				/>
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />

				<title>Zakaria Slimane - Software Developer | JavaScript | Golang | DevOps & Cloud</title>
			</Head>

			<main className='h-auto sm:min-h-screen text-white bg-[#1b2c3a] duration-500 ease-in-out'>
				<SpeedInsights />
				<Analytics />
				<ToTop />
				<NavBar active={path} setPath={setPath} />
				<Component {...pageProps} />
				<Footer />
			</main>
		</>
	);
}
