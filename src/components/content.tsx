export default function Content() {
	return (
		<div className="px-8 py-8 flex flex-col gap-8">
			<section className="skills">
				<h2 className="text-xl">Skills</h2>
				<section className="skillTags">
					<h6 className="text-sm">Languages</h6>
					<div className="flex gap-2">
						<button className="rounded-full border border-black py-1 px-4">JavaScript</button>
						<button className="rounded-full border border-black py-1 px-4">TypeScript</button>
						<button className="rounded-full border border-black py-1 px-4">HTML</button>
						<button className="rounded-full border border-black py-1 px-4">CSS</button>
						<button className="rounded-full border border-black py-1 px-4">Swift</button>
						<button className="rounded-full border border-black py-1 px-4">PHP</button>
						<button className="rounded-full border border-black py-1 px-4">Java</button>
					</div>
				</section>
			</section>
			<section className="work">
				<h2 className="text-xl">Work Experience</h2>
				<section className="mt-2">
					<div className="font-semibold">Staff Front End UI Developer/Designer</div>
					<div className="flex justify-between italic">
						<div>April 2022 – Present</div>
						<div>Entertainment Partners | Remote</div>
					</div>
					<ul className="list-disc list-inside px-2">
						<li>Developed and documented a style guide for EP Analytics to inform product owners, QA engineers, and developers how various HTML elements should style and behave using AdobeXD</li>
						<li>Developed Qlik extensions to add and extend functionality, behavior, and to create a more tightly controlled end-user experience using AngularJS, jQuery, HTMl, and CSS</li>
						<li>Collaborated with multiple teams in the organization to assist with visual design and UI/UX</li>
						<li>Created mockups, illustrations, and interactive prototypes in AdobeXD and Adobe Illustrator to solve UX challenges</li>
					</ul>
				</section>
				<section className="mt-2">
					<div className="font-semibold">Solution Consultant</div>
					<div className="flex justify-between italic">
						<div>January 2018 – March 2022</div>
						<div> Dassault Systemes | Long Beach, CA</div>
					</div>
					<ul className="list-disc list-inside px-2">
						<li>Utilized Web Socket API, JavaScript, and SQL to update web pages with realtime data, allowing managers and stakeholders to view machine data and performance metrics/KPIs</li>
						<li>Created learning resources and materials about DELMIA Apriso for Amazon, as well as, led learning sessions for their employees</li>
						<li>Group-Leader for internal UI/UX team tasked with building out UI/UX standards and code for an project used widely by clients with the company software</li>
						<li>Worked on a large-scale project for Boeing, collaborating with multiple teams in an SAFe Agile environment</li>
						<li>Developed and documented a common developer library of web components using HTML, CSS, JavaScript, C#, and SQL to help create a more cohesive user interface and experience across several teams working on the same product</li>
					</ul>
				</section>
				<section className="mt-2">
					<div className="font-semibold">Lead Software Developer</div>
					<div className="flex justify-between italic">
						<div>August 2017 – April 2018</div>
						<div>California State Polytechnic University, Pomona | Pomona, CA</div>
					</div>
					<ul className="list-disc list-inside px-2">
						<li>Developed a logistics system for the Campus Test Center to automate managing proctor schedules, and timesheets</li>
						<li>Created a form and survey system that managed receiving responses from approximately 20,000 students</li>
						<li>Redeveloped the Admissions section of the Cal Poly Pomona website, adding features such as a student eligibility calculator using JavaScript</li>
					</ul>
				</section>
			</section>
			<section className="projects">
				<h2 className="text-xl">Projects</h2>
			</section>
		</div>
	);
}
