import zs from '../assets/logos/zs.png';
import react from '../assets/techs/reacticon.png';
import golang from '../assets/techs/golang.png';
import wordpress from '../assets/techs/wordpressicon.png';
import terraform from '../assets/techs/terraform.png';
import cvforge from '../assets/featured/cvforge.png';
import bm from '../assets/featured/beautymall.png';
import pennysense from '../assets/featured/pennysense.png';
import echelon from '../assets/featured/echelon.png';
import gittrackr from '../assets/featured/gittrackr.png';
import gosql from '../assets/featured/gosql.png';
import unfetch from '../assets/featured/unfetch.png';
import clitask from '../assets/featured/clitask.png';
import formify from '../assets/featured/formify.png';
import tf from '../assets/featured/tf.jpg';

const uid = () => crypto.randomUUID();

const siteData = {
	main: {
		title: 'Zackaria Slimane - Software Developer | React | Golang | Nodejs | DevOps & Cloud',
		name: 'Zackaria Slimane',
		email: 'slzackaria@gmail.com',
		logo: zs,
	},
	socials: {
		github: 'https://github.com/Zackaria-Slimane',
		linkedin: 'https://www.linkedin.com/in/zackaria-slimane/',
		resume: 'https://drive.google.com/file/d/1qLGLyKX1MzV2b9wDQ93ElsdXXMjOPrpH/view?usp=sharing',
	},

	homePage: {
		title:
			'Passionate Software Developer Fluent in React & Golang, Crafting Seamless Digital Experiences.',
		description: `As a Software Developer, my expertise spans JavaScript ES6, React for the frontend, and the powerful Golang for efficient backend solutions. Beyond code, I'm a perpetual learner, collaborator, and a firm believer in technology's power to shape the future.`,
		cta: `Excited about DevOps, Cloud Engineering, CI/CD automation, and AWS technologies, I bring innovation to life, creating interactive web experiences that surpass expectations.`,
	},

	projectsPage: {
		title: 'Problem Solving, One Line at a Time',
		description: `Behind every project lies a challenge waiting to be conquered. Through meticulous problem-solving and creative thinking, I've transformed complex ideas into elegant solutions. These projects aren't just code; they're the product of determination, collaboration, and a relentless pursuit of excellence.`,
		cta: "Whether you're seeking an innovative React application, a polished WordPress site, or any other web development endeavor, I'm ready to embark on a journey of innovation with you. Together, we'll turn your ideas into projects that not only meet your goals but exceed your expectations. Let's integrate the power of DevOps and AWS to elevate your projects.",
	},

	aboutPage: {
		title: 'Crafting Digital Experiences with Passion and Precision',
		description:
			'With a strong foundation in JavaScript, Golang, and a modern touch with React, I craft user-centric websites that seamlessly blend functionality and aesthetics. My focus on DevOps and Cloud Engineering enhances my ability to create scalable and efficient solutions.',
		why: "From the outset of my web development journey, I've been captivated by the transformative power of technology. Thriving on the thrill of crafting dynamic and user-friendly interfaces, I integrate DevOps practices to ensure seamless deployment and operations.",
		learning:
			"Continuous learning is at the heart of what I do, ensuring that I'm always at the forefront of industry trends and best practices, especially in DevOps, CI/CD automation, and AWS technologies.",
		skills:
			"My toolbox isn't limited to just JavaScript and React & Golang. I'm also well-versed in WordPress, Shopify, Node.js, and adept at integrating these technologies with DevOps and AWS for robust solutions.",
	},

	contactPage: {
		title: "Get in Touch: Let's Turn Ideas into Reality",
		description:
			"Thank you for taking the time to explore my work and learn more about my passion for web development and creating digital experiences. If you're excited about the possibilities, have questions, or are ready to collaborate, I'd love to hear from you!",
		cta: "At the heart of every successful project is a conversation—a meeting of minds, ideas, and aspirations. Whether you're a fellow developer, a business owner seeking a new website, or anyone else with a vision for the digital realm, I'm here to help transform your dreams into reality.",
	},

	articlesPage: {
		title: 'Unveiling the World of Web Development, React, Golang, DevOps, and Cloud Engineering',
		description:
			"Software development is a journey filled with endless opportunities for learning and growth. I'm excited to share my experiences with you.",
		cta: "Dive into the articles, gain new perspectives, and elevate your tech expertise. Sharing your thoughts on an article, seeking advice? I'm just a message away.",
	},

	articles: [
		{
			id: uid(),
			title: 'Jenkins DevOps: EC2 Automated Builds and Docker Deployments',
			link: 'https://www.linkedin.com/pulse/jenkins-devops-ec2-automated-builds-docker-zackaria-slimane--o59re',
		},
		{
			id: uid(),
			title: 'Automating Infrastructure Deployment with Terraform (AWS example)',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_devops-aws-terraform-activity-7141501700237848577-OvyE',
		},
		{
			id: uid(),
			title: 'AWS EC2 Instance Setup and Secure CI/CD Pipeline with Jenkins',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_devops-cicd-jenkins-activity-7132072448983748608--Ikf',
		},
		{
			id: uid(),
			title: 'Building Your First CRUD App in Go: A Hands-On Tutorial',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_go-golang-mysql-activity-7116526295160631296-lHnf',
		},
		{
			id: uid(),
			title: 'Learning Golang , hands on : GitHub Issues Tracker with Go, React, and Docker',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_docker-golang-activity-7113649172439838720-Jd1-',
		},
		{
			id: uid(),
			title: 'React Ecosystem in 2023 - Brief overview',
			link: 'https://www.linkedin.com/posts/zackaria-slimane_reactdeveloper-reactjs-reactjsdeveloper-activity-7108381434226049024-v8aY',
		},
	],

	projects: [
		{
			id: uid(),
			title: 'Go Docker api starter',
			description: 'Basic starter of a Go API microservice dockerized',
			tech: golang,
			logo: gosql,
			linkText: 'View Project',
			link: 'https://github.com/Zackaria-Slimane/go-docker-ms',
			featured: true,
		},
		{
			id: uid(),
			title: 'Terraform AWS starter',
			description: 'Provisioning starter for AWS resources using Terraform',
			tech: terraform,
			logo: tf,
			linkText: 'View Project',
			link: 'https://github.com/Zackaria-Slimane/terraform-ec2',
			featured: true,
		},
		{
			id: uid(),
			title: 'Penny sense - budgeting app',
			description: 'Personal finance and budgeting app',
			tech: react,
			logo: pennysense,
			linkText: 'View Project',
			link: 'https://pennysense.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'unFetch - Search image wrapper',
			description: 'Search image wrapper , list and download high res images',
			tech: react,
			logo: unfetch,
			linkText: 'View Project',
			link: 'https://unfetch.vercel.app/',
			featured: false,
		},
		{
			id: uid(),
			title: 'SaaS product Landing page',
			description: 'Landing page for a SaaS product',
			tech: react,
			logo: formify,
			linkText: 'View Project',
			link: 'https://formifi.vercel.app/',
			featured: false,
		},
		{
			id: uid(),
			title: 'Echelon - Landing Page',
			description: 'Responsive & modern landing page for a Bank',
			tech: react,
			logo: echelon,
			linkText: 'View Project',
			link: 'https://echelonbank.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'Cv forge',
			description: 'A resume maker based on a professionnal template.',
			logo: cvforge,
			tech: react,
			linkText: 'View Project',
			link: 'https://cvforge.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'Go CLI notes app',
			description: 'Golang CLI tasks application',
			tech: golang,
			logo: clitask,
			linkText: 'View Project',
			link: 'https://github.com/Zackaria-Slimane/gotask',
			featured: false,
		},
		{
			id: uid(),
			title: 'Git tracker - open issues tracker',
			description: 'A docker GoLang REST API with React front',
			tech: golang,
			logo: gittrackr,
			linkText: 'View Project',
			link: 'https://gittrackr.vercel.app/',
			featured: true,
		},
		{
			id: uid(),
			title: 'BeautyMall',
			description: 'E-commerce website  - online beauty and drugstore',
			logo: bm,
			tech: wordpress,
			linkText: 'View Project',
			link: 'https://beautymall.ma/',
			featured: false,
		},
	],
};

export default siteData;
