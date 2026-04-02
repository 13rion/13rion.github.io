export interface Project {
	id: number;
	title: string;
	category: string;
	date: string;
	description: string;
	tags: string[];
	featured: boolean;
	imageUrl: string;
	company: string;
	year: number;
	role: string;
	problem: string;
	solution: string;
	gallery?: string[];
}

export const projects: Project[] = [
	{
		id: 1,
		title: `AI Virtual Assistant`,
		category: `Product Design`,
		date: ``,
		description: `This AI virtual assistant was the first foray EP was taking into including AI into its’ products. The first product to incorporate it was EPs SmartTime. I was brought in to provide high fidelity mockups of the wires and visual design guidance on the appearance of the assistant.`,
		tags: ['Figma'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/AIVA.png', import.meta.url).href,
		company: `Entertainment Partners (EP)`,

		year: 2024,
		role: `Visual Designer`,
		problem: `The first use case for it was to help users identify exceptions when comparing Timecards to Startcards. Startcards are essentially the users start paperwork for starting on a film or tv production. Sometimes the information sent on a Timecard didn’t align with the Startcards.`,
		solution: `My first step in figuring out the visual design for this virtual assistant was to research other examples of virtual assistants. Seeing what they do, and how they interact with users was helpful in determining how our solution should interact with users, how it should look visually. Using these examples I came up with a solution that was familiar with users. This was important to pull upon this learned behavior so that users would know what to expect and they could focus on how to learn the things that may be out of the norm such as the exceptions tab. This tab was where we expected users to use mainly. It essentially brought in a list of exceptions the AI found and allowed users to take explicit actions upon them. If they wanted to prompt for more information, that's where the users would go to the chat tab. Ideally I would’ve liked this to be more seamless of an interaction but we were limited in our first scope of what we could do in this application and so the AI had to be brought in via a modal. I would’ve liked it to be side by side with the application and not close the user off from it by using a modal.`,
	},
	{
		id: 2,
		title: `Multi-User Collaboration`,
		category: `Product Design`,
		date: ``,
		description: `Movie Magic Scheduling (MMS) is an EP product movie productions use for scheduling (think calendar based scheduling MacOS application).`,
		tags: ['Figma'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/MMS.webp', import.meta.url).href,
		company: `Entertainment Partners (EP)`,
		year: 2025,
		role: `Visual Designer`,
		problem: `Users are finding it difficult to manage and keep track of up to date schedules. Further complicating the process, schedules are not cloud based and are shared as files via email. `,
		solution: `Allow users to create Cloud schedules, or upload local schedules to the Cloud. Incorporate sharing inside of the application to allow teams to collaborate on a schedule.`,
	},
	{
		id: 3,
		title: `Incentive Realization`,
		category: `Product Design`,
		date: ``,
		description: `A Qlik application to help productions understand their projected incentives for shooting in different locations, as well as help them manage the process of applying for and receiving those incentives. The goal was to have it be built as its own solution, however, after further discussion, it was decided to use Qlik to go to market faster. This required providing a completely different design. On that platform we had a slew of Qlik extensions, custom built extensions I made, and custom extensions I recommended through research. Combining all of these extensions we were able to go to market faster and create a viable MVP for go to market.`,
		tags: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'Shadcn', 'Qlik', 'Claude'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/IR.png', import.meta.url).href,
		company: `Entertainment Partners (EP)`,

		year: 2025,
		role: `Design Engineer`,
		problem: `Productions are heavily incentivized based on locations. The issue is they don’t exactly know how much in incentives they’ll receive, in addition to there being information they need to aggregate and forms they need to fill out about the production. Further, they also have a time limit on when they can submit all of this information.`,
		solution: `Create a new platform for users to view what their projected incentives are for a project as well as what they would be if they were to shoot in other locations. We also have all of their data from payroll so we can use that to help them fill out all of the information they need and have them input the missing data into our system, feeding our data lake, but also making it a much simpler process for them in the end when it comes time to submit their documentation.
		The goal was to have it be built as its own solution and preliminary designs of those are available below. To go to market faster, it was determined to use the EP Analytics platform which uses a mix of react and Qlik. This required providing a completely different design. On that platform we had a slew of Qlik extensions, custom built extensions I made, and custom extensions I recommended through research. Combining all of these extensions we were able to go to market faster and create a viable MVP for go to market.`,
	},
	{
		id: 4,
		title: `Analytics Style Guide & Qlik Extensions`,
		category: `Product Design`,
		date: ``,
		description: `A comprehensive style guide and collection of reusable components/Qlik extensions for an Analytics platform. This was a project I worked on to help create synergy across the different analytics applications. EPs Qlik developers had no expertise on creating extensions and interfacing with the Qlik APIs, so I created a slew of extensions that they could utilize across their different applications. In addition to this, I created a style guide for them to follow when creating new applications or updating old ones to help create a more cohesive experience across the different applications.`,
		tags: ['HTML', 'CSS', 'JavaScript', 'jQuery', 'TypeScript', 'React', 'Angular', 'Adobe XD', 'Figma', 'Qlik'],
		featured: true,
		imageUrl: new URL('../assets/images/hero/ep-analytics-style-guide.png', import.meta.url).href,
		company: `Entertainment Partners (EP)`,

		year: 2022,
		role: `Design Engineer`,
		problem: `It needed to be the introduction/gateway to the platform. It is where users would select which analytics application they would like to dive into so it also needed to be easily accessible and comprehensible. Not every user had access to every analytics application depending on their license.`,
		solution: ``,
	},
	{
		id: 5,
		title: `SmartStart v2 Redesign`,
		category: `Product Design`,
		date: ``,
		description: `SmartStart is EP's digital start paperwork solution for onboarding talent and crew for film and television productions. It allows users to verify I-9s, residency, manage start packets, and track all of the moving, onboarding parts when it comes to managing multiple productions. I was brought in to provide the visual design for the redesign of SmartStart v2.`,
		tags: ['Figma', 'Adobe XD'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/SmartStart.png', import.meta.url).href,
		company: `Entertainment Partners`,
		year: 2024,
		role: `Visual Designer`,
		problem: `SmartStart v1 design was a bit outdated and the user experience was not as intuitive as it could be. The goal of the redesign was to modernize the look and feel of the application, as well as improve the user experience by making it more intuitive and easier to navigate.`,
		solution: `While I was brought in to provide the visual design for this project, I was able to provide some input on the user experience as well. While I wish I could have had a much bigger impact on the project as some things didn't feel as intuitive as they could be, it's all about collaboration and working with the team to address the unique user needs that comes with having a production paperwork application.`,
	},
	{
		id: 6,
		title: `Cash Management App`,
		category: `Product Design`,
		date: ``,
		description: `A platform agnostic payment application geared specifically towards families. This was a project I worked on with a dear friend of mine. We wanted to create a simple solution for families to manage allowances and payments when it came to distributing money to children or grandparents via a wristband. We wanted it to be platform agnostic so that it could be used by anyone regardless of their device or operating system.`,
		tags: ['Figma'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/cashband.png', import.meta.url).href,
		company: `Entertainment Partners`,
		year: 2024,
		role: `Visual Designer`,
		problem: `Families, especially parents, give money to their children for lunch or to buy some snacks at the movie theatres when they go out with their friends, or give money to older family members who may easily lose track of their money or have a hard time managing it. The problem is that there isn't a simple solution for families to manage these payments and allowances in a way that is easy to use and understand. Money can get lost, and children especially in this age don't always know the value of money. They know apps and see everything through a digital lens.`,
		solution: `The solution was to create a simple, intuitive interface that would allow families to easily manage their payments and allowances. We focused on making the app easy to use and understand, with clear visual cues and a streamlined workflow. In addition, we wanted there to be a device element, a wristband similar to a fitbit or the microsoft band, that would allow users to easily make payments, provide GPS location so you know where your family members are, and also provide some gamification elements to make it fun for children to use and manage their money.`,
	},
	{
		id: 7,
		title: `Boeing Design System`,
		category: `Product Design`,
		date: ``,
		description: `I was brought in to help Boeing create and develop a design system for their 2nd Century Manufacturing Enterprise System. This was a large scale project that had many different teams working on it. My role was to help provide synergy between the different teams when it came to creating different parts of the system.`,
		tags: ['HTML', 'CSS', 'JavaScript', 'Apriso'],
		featured: false,
		imageUrl: new URL('../assets/images/hero/Boeing.png', import.meta.url).href,
		company: `Entertainment Partners (EP)`,
		year: 2019,
		role: `Front End UI Engineer`,
		problem: `As part of an initiative to modernize their manufacturing systems, Boeing was utilizing software provided by Dassault Systemes. The issue was that the software was being developed in pieces by multiple teams. They were all developing their own components and there was no synergy between the teams. This was leading to a disjointed user experience and a lot of duplicated work across teams.`,
		solution: `The idea was to work with the Boeing UX designers, assist them with what was possible with the software, and implement a design system that all teams could utilize. This would allow for a more cohesive user experience across the different applications and also allow for faster development as teams could utilize the components in the design system instead of having to create their own.`,
	},
];

// export const projectData: Project[] = [
// 	{
// 		id: 1,
// 		title: 'CashBand',
// 		status: 'Ongoing',
// 		description: `CashBand is a collaboration I am working on with one of my friends. A platform agnostic payment application geared specifically towards families.`,
// 		tasks: [
// 			"Designed logo and style guide for the",
// 			"Developed the UI",
// 			"Developed a prototype in Figma"
// 		]
// 	},
// 	{
// 		id: 2,
// 		title: 'SkhyTV',
// 		status: 'Ongoing',
// 		description: `SkhyTV is a media server I created to not only manage my vast tv and movie library, but to also share that with family and friends. It has been through many iterations and showcases my love of tinkering and trying to make my life easier (but also challenging with often new problems to face every`,
// 		tasks: [
// 			'Built a headless server utilizing SSH and/or Wireguard',
// 			'Linux/Ubuntu/Proxmox/Debian',
// 			'Docker',
// 			''
// 		]
// 	},
// 	{
// 		id: 3,
// 		title: 'Swift',
// 		status: 'Ongoing',
// 		description: `This is one big project where I created multiple apps to help me learn SwiftUI. I utilized the 100 days of SwiftUI program.`,
// 		tasks: [
// 			'WeConvert: ',
// 			'WeSplit:',
// 			'WordScramble:',
// 			'GuessTheFlag:',
// 			'Brain Training Game:',
// 			'BetterRest:',
// 		]
// 	},
// 	{
// 		id: 4,
// 		title: 'Portfolio',
// 		status: 'Ongoing',
// 		description: `The website you're currently on ;)`,
// 		tasks: [
// 			'Created my portfolio using the following stack: Vite, React, TypeScript, Tailwind'
// 		]
// 	},
// 	{
// 		id: 5,
// 		title: 'Lux',
// 		status: 'Completed',
// 		description: `Lux is a website I created for my guild. We played a game called Vindictus. This website has been through multiple iterations from Shivtr to a basic template website to Wordpress to finally a custom designed website. All of these iterations represent not only my guilds journey, but my journey as well with learning Web Development while in school.`,
// 		tasks: [

// 		]
// 	}
// ];