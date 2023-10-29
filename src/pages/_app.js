import "../styles/globals.css";
import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/react";
import { useRouter } from "next/router";
import Head from "next/head";
import Loader from "src/components/UI/Loader";
import NavBar from "src/components/UI/NavBar";
import ToTop from "src/components/UI/ToTop";
import Footer from "src/components/UI/Footer";

export default function App({ Component, pageProps }) {
	const { pathname } = useRouter();
	const [path, setPath] = useState(pathname);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setLoading(false);
		}, 1000);

		return () => clearTimeout(timer);
	}, []);

	return (
		<>
			<Head>
				<meta charset='utf-8' />
				<link rel='icon' href='/favicon.ico' />
				<link rel='canonical' href='https://zackariasl.dev' />
				<link rel='manifest' href='/site.webmanifest' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#14274E' />
				<meta name='og:image' content='/zs.png' />
				<meta
					name='og:title'
					content='Zackaria Slimane - Full Stack Developer | React | Golang | NodeJS | Vue | Nuxt'
				/>
				<meta name='twitter:title' content='Zackaria SLIMANE - Full Stack Developer' />
				<meta
					name='og:description'
					content='Zackaria SLIMANE - Full Stack Developer | React | Golang | Docker | Nodejs | Vue | Nuxt'
				/>
				<meta
					name='description'
					content='Zackaria SLIMANE - Full Stack Developer | React | Golang | Docker | Nodejs | Vue | Nuxt'
				/>
				<link rel='apple-touch-icon' href='/apple-touch-icon.png' />
				<link rel='manifest' href='/manifest.json' />
				<title>
					Zackaria Slimane - Full Stack Developer | React | Golang | Vue & Nuxt
				</title>
			</Head>
			{loading ? (
				<Loader loading={loading} />
			) : (
				<>
					<Analytics />
					<ToTop />
					<NavBar active={path} setPath={setPath} />
					<Component {...pageProps} />
					<Footer />
				</>
			)}
		</>
	);
}
