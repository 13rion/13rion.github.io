export interface WorkExperience {
	id: number;
	company: string;
	description: string;
	title: string;
	period: string;
	city: string;
	state: string;
	responsibilities: string[];
	tags: string[];
}

export const experiences: WorkExperience[] = [
	{
		id: 1,
		company: "Entertainment Partners",
		description: "Software & Payroll company providing production finance solutions for the entertainment industry",
		title: "Staff Front End UI Developer/Designer",
		period: "April 2022 – Present",
		city: "Burbank",
		state: "CA",
		responsibilities: [
			"Contributed to an industry leading movie budgeting software to help accountants track the budgets of certain movies, leading to a user survey satisfaction score increase by +20%",
			"Designed a comprehensive style guide and built reusable components establishing a cohesive product branding and visual standards for the Qlik platform enhancing functionality, behavior, and end-user experience",
			"Collaborated with cross-functional teams across the organization in a Agile environment to create interactive prototypes, effectively addressing any UI/UX challenges for respective products resulting in a better user experience",
			"Established icon standards and created custom iconography in alignment with brand guidelines",
			"Designed the visual interface and user experience for an AI Chatbot, ensuring an engaging and intuitive design aligned with brand and industry standards",
			"Revamped Entertainment Partners’ SmartStart product using a mobile-first approach, improving usability for a majority of users accessing via mobile devices",
		],
		tags: [
			'JavaScript',
			'TypeScript',
			'HTML',
			'CSS',
			'AngularJS',
			'ReactJS',
			'jQuery',
		]
	},
	{
		id: 2,
		company: "Dassault Systemes",
		description: "Software company providing manufacturing solutions, 3D CAD software, and consulting services",
		title: "Solution Consultant",
		period: "January 2018 – March 2022",
		city: "Long Beach",
		state: "CA",
		responsibilities: [
			"Contributed to a billion-dollar project for Boeing, collaborating with cross-functional teams in a SAFe Agile environment to deliver a modern manufacturing execution system",
			"Created learning resources and materials about DELMIA Apriso for Amazon, as well as, led learning sessions for their employees",
			"Group-Leader for internal UI/UX team tasked with building out UI/UX standards and code for an project used widely by clients with the company software",
			"Led and developed a standardized library of reusable components, ensuring a cohesive end-user experience across multiple teams, contributing to savings of approximately $1.5M",
			"Implemented real-time data dashboards enabling managers to monitor machine performance metrics and KPIs",
		],
		tags: [
			'JavaScript',
			'HTML',
			'CSS',
			'SQL',
		]
	},
	{
		id: 3,
		company: "California State Polytechnic University, Pomona",
		description: "Department in charge of admitting, enrolling, and outreaching to prospective students",
		title: "Lead Software Developer",
		period: "August 2017 – April 2018",
		city: "Pomona",
		state: "CA",
		responsibilities: [
			"Built an events system that tracked numerous university outreach events conducted during the year, providing counselors with precise event map data and a visual view of events",
			"Created a university campus tour system that allowed prospective students and parents to scheduling tours online while also providing the collection of data analytics",
			"Developed a logistics system for the Campus Test Center to automate managing proctor schedules, and timesheets",
			"Created a form and survey system that managed receiving responses from approximately 20,000 students",
			"Redeveloped the Admissions section of the Cal Poly Pomona website, adding features such as a student eligibility calculator using JavaScript",
		],
		tags: [
			'JavaScript',
			'TypeScript',
			'HTML',
			'CSS',
		]
	},
];
