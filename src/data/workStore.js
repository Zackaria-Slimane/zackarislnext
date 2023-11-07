let uid = () => crypto.randomUUID().slice(0, 18);
export const WorkStore = [
	{
		id: uid(),
		name: "AD/HOC - Agency",
		position: "Web Developer",
		from: "May 2022",
		to: "October 2023",
		link: "https://adhocmaroc.com",
	},
	{
		id: uid(),
		name: "OMNIYAT - Transport",
		position: "Junior front-end Developer",
		from: "September 2021",
		to: "May 2022.",
		link: "https://www.omniyat.ma/en/",
	},
];
