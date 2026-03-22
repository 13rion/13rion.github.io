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
		tags: [],
		featured: false,
		imageUrl: ``,
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
		tags: [],
		featured: false,
		imageUrl: ``,
		company: `Entertainment Partners (EP)`,
		year: 2025,
		role: `Visual Designer`,
		problem: `Users are finding it difficult to manage and keep track of up to date schedules. Further complicating the process, schedules are not cloud based and are shared as files via email. `,
		solution: `Allow users to create Cloud schedules, or upload local schedules to the Cloud. Incorporate sharing inside of the application to allow teams to collaborate on a schedule.`,
	},
	{
		id: 3,
		title: `Incentive Realization (AI)`,
		category: `Product Design`,
		date: ``,
		description: ``,
		tags: [],
		featured: true,
		imageUrl: `Entertainment Partners`,
		company: `Entertainment Partners (EP)`,
		year: 2025,
		role: `Visual Designer, Front End UI Engineer`,
		problem: `Productions are heavily incentivized based on locations. The issue is they don’t exactly know how much in incentives they’ll receive, in addition to there being information they need to aggregate and forms they need to fill out about the production. Further, they also have a time limit on when they can submit all of this information.`,
		solution: `Create a new platform for users to view what their projected incentives are for a project as well as what they would be if they were to shoot in other locations. We also have all of their data from payroll so we can use that to help them fill out all of the information they need and have them input the missing data into our system, feeding our data lake, but also making it a much simpler process for them in the end when it comes time to submit their documentation.
		The goal was to have it be built as its own solution and preliminary designs of those are available below. To go to market faster, it was determined to use the EP Analytics platform which uses a mix of react and Qlik. This required providing a completely different design. On that platform we had a slew of Qlik extensions, custom built extensions I made, and custom extensions I recommended through research. Combining all of these extensions we were able to go to market faster and create a viable MVP for go to market.`,
	},
	{
		id: 4,
		title: `EP Analytics Style Guide`,
		category: `Product Design`,
		date: ``,
		description: `Company: Entertainment Partners Year: 2024 Role: Front End UI Engineer. The Problem: `,
		tags: [],
		featured: true,
		imageUrl: ``,
		company: `Entertainment Partners (EP)`,
		year: 2024,
		role: `Visual Designer`,
		problem: `It needed to be the introduction/gateway to the platform. It is where users would select which analytics application they would like to dive into so it also needed to be easily accessible and comprehensible. Not every user had access to every analytics application depending on their license.`,
		solution: ``,
	},
	{
		id: 5,
		title: `SmartStart Redesign`,
		category: `Product Design`,
		date: ``,
		description: `Company: Entertainment Partners Year: 2024 Role: Front End UI Engineer. The Problem: `,
		tags: [],
		featured: false,
		imageUrl: `Entertainment Partners`,
		company: `Entertainment Partners`,
		year: 2024,
		role: ``,
		problem: ``,
		solution: ``,
	},
	{
		id: 6,
		title: `EPA Landing Page`,
		category: ``,
		date: ``,
		description: `Company: Entertainment Partners Year: 2024 Role: Front End UI Engineer. The Problem: `,
		tags: [],
		featured: false,
		imageUrl: `Entertainment Partners`,
		company: `Entertainment Partners`,
		year: 2024,
		role: ``,
		problem: ``,
		solution: ``,
	},
	{
		id: 7,
		title: `Cash Management App`,
		category: ``,
		date: ``,
		description: `A platform agnostic payment application geared specifically towards families.`,
		tags: [],
		featured: false,
		imageUrl: `Entertainment Partners`,
		company: `Entertainment Partners`,
		year: 2024,
		role: ``,
		problem: ``,
		solution: ``,
	},
	{
		id: 8,
		title: `Boeing Design System`,
		category: `Product Design`,
		date: ``,
		description: ``,
		tags: [],
		featured: false,
		imageUrl: ``,
		company: `Entertainment Partners (EP)`,
		year: 2019,
		role: `Front End UI Engineer`,
		problem: ``,
		solution: ``,
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