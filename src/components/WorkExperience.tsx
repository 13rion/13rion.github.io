import { Briefcase, Download } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Staff Front End UI Developer/Designer",
    company: "Entertainment Partners",
    location: "Remote",
    period: "April 2022 – Present",
    responsibilities: [
      "Developed and documented a style guide for EP Analytics to inform product owners, QA engineers, and developers how various HTML elements should style and behave using AdobeXD",
      "Developed Qlik extensions to add and extend functionality, behavior, and to create a more tightly controlled end-user experience using AngularJS, jQuery, HTML, and CSS",
      "Collaborated with multiple teams in the organization to assist with visual design and UI/UX",
      "Created mockups, illustrations, and interactive prototypes in AdobeXD and Adobe Illustrator to solve UX challenges"
    ]
  },
  {
    id: 2,
    title: "Solution Consultant",
    company: "Dassault Systemes",
    location: "Long Beach, CA",
    period: "January 2018 – March 2022",
    responsibilities: [
      "Utilized Web Socket API, JavaScript, and SQL to update web pages with realtime data, allowing managers and stakeholders to view machine data and performance metrics/KPIs",
      "Created learning resources and materials about DELMIA Apriso for Amazon, as well as, led learning sessions for their employees",
      "Group-Leader for internal UI/UX team tasked with building out UI/UX standards and code for an project used widely by clients with the company software",
      "Worked on a large-scale project for Boeing, collaborating with multiple teams in an SAFe Agile environment",
      "Developed and documented a common developer library of web components using HTML, CSS, JavaScript, C#, and SQL to help create a more cohesive user interface and experience across several teams working on the same product"
    ]
  },
  {
    id: 3,
    title: "Lead Software Developer",
    company: "California State Polytechnic University, Pomona",
    location: "Pomona, CA",
    period: "August 2017 – April 2018",
    responsibilities: [
      "Developed a logistics system for the Campus Test Center to automate managing proctor schedules, and timesheets",
      "Created a form and survey system that managed receiving responses from approximately 20,000 students",
      "Redeveloped the Admissions section of the Cal Poly Pomona website, adding features such as a student eligibility calculator using JavaScript"
    ]
  }
];

export function WorkExperience() {
  return (
    <section id="experience" className="mb-12">
      <div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-black">
        <div className="flex items-center gap-3">
          <Briefcase className="w-6 h-6" />
          <h2 className="text-3xl uppercase tracking-wider" style={{ fontFamily: 'Libre Baskerville' }}>
            Work Experience
          </h2>
        </div>
        <a 
          href="https://drive.google.com/file/d/1CYWHKDsN6IcHOKMkTbNNYBVPnUrW5q9l/view?usp=sharing" 
          className="flex items-center gap-2 text-sm hover:underline"
          download
        >
          <Download className="w-4 h-4" />
          Download Resume
        </a>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <article key={exp.id}>
            <div className="mb-4">
              <h3 className="text-2xl mb-2" style={{ fontFamily: 'serif' }}>
                {exp.title}
              </h3>
              <div className="flex items-center justify-between text-sm italic">
                <span>{exp.period}</span>
                <span>{exp.company} | {exp.location}</span>
              </div>
            </div>
            
            <ul className="space-y-2 list-disc pl-6">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="leading-relaxed">
                  {resp}
                </li>
              ))}
            </ul>
            
            {index < experiences.length - 1 && (
              <div className="mt-8 border-b border-gray-400"></div>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}