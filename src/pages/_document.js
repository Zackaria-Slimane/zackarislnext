import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang='en-US'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='true' />
				<link
					href='https://fonts.googleapis.com/css2?family=Heebo:wght@400;600&family=JetBrains+Mono:wght@400;500;600&display=swap'
					rel='stylesheet'
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
