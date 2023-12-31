let uid = () => crypto.randomUUID().slice(0, 18);
export const WorkStore = [
	{
		id: uid(),
		name: "Nuitee - Travel api",
		position: "Full stack Developer",
		from: "October 2022",
		to: "January 2024",
		link: "https://nuitee.com",
	},
	{
		id: uid(),
		name: "AD/HOC - Agency",
		position: "Web Developer",
		from: "May 2022",
		to: "October 2023.",
		link: "https://adhocmaroc.com",
	},
	{
		id: uid(),
		name: "OMNIYAT",
		position: "Front-end Developer",
		from: "September 2021",
		to: "May 2022.",
		link: "https://www.omniyat.ma/en/",
	},
];
