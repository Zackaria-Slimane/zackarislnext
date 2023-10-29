import Link from "next/link";
import Image from "next/image";
import siteData from "../../data/siteData";

const Logo = (props) => {
	let { width, link } = props;

	if (link === undefined) {
		link = true;
	}

	const imageElement = (
		<Image
			src={siteData.main.logo}
			alt='logo with initials'
			className='block m-0 p-0 rounded-[50%]'
			width={width}
			height={width}
		/>
	);

	return <>{link ? <Link href='/'>{imageElement}</Link> : imageElement}</>;
};

export default Logo;
