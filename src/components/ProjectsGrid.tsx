import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

// const projects = [
//   {
//     id: 1,
//     title: "E-Commerce Platform Redesign Increases Conversions by 47%",
//     category: "Product Design",
//     date: "March 2024",
//     description: "Led a comprehensive redesign of a major retail platform, focusing on user experience improvements and modern visual design. Implemented a new design system and component library that streamlined the checkout process and improved mobile responsiveness.",
//     tags: ["UX Design", "Design Systems", "React"],
//     featured: true
//   },
//   {
//     id: 2,
//     title: "Award-Winning Mobile Banking App Launches to Critical Acclaim",
//     category: "Mobile Design",
//     date: "January 2024",
//     description: "Designed and developed the frontend for a revolutionary mobile banking application. The project received the 2024 Digital Design Award for Best Financial Interface.",
//     tags: ["Mobile UI", "React Native", "Animation"],
//     featured: true
//   },
//   {
//     id: 3,
//     title: "Healthcare Dashboard Transforms Patient Data Visualization",
//     category: "Data Visualization",
//     date: "November 2023",
//     description: "Created an intuitive dashboard for healthcare providers to monitor patient metrics in real-time. Developed custom data visualization components that made complex medical data accessible and actionable.",
//     tags: ["Dashboard Design", "D3.js", "TypeScript"],
//     featured: false
//   },
//   {
//     id: 4,
//     title: "Brand Identity System Elevates Tech Startup's Market Presence",
//     category: "Brand Design",
//     date: "September 2023",
//     description: "Developed a complete brand identity system including logo design, color palette, typography guidelines, and marketing materials for an emerging AI startup.",
//     tags: ["Branding", "Visual Identity", "Figma"],
//     featured: false
//   },
//   {
//     id: 5,
//     title: "Interactive Portfolio Site Showcases Creative Coding Skills",
//     category: "Web Development",
//     date: "July 2023",
//     description: "Built a highly interactive portfolio website featuring advanced animations, 3D elements, and creative transitions. The site demonstrates the intersection of design and code.",
//     tags: ["Three.js", "GSAP", "WebGL"],
//     featured: false
//   },
//   {
//     id: 6,
//     title: "Design System Documentation Streamlines Team Workflow",
//     category: "Design Systems",
//     date: "May 2023",
//     description: "Created comprehensive documentation and component library for a growing design team. The system reduced design-to-development handoff time by 60%.",
//     tags: ["Storybook", "Documentation", "Component Library"],
//     featured: false
//   }
// ];

export default function ProjectsGrid() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-b-2 border-black"></div>
        <h2 className="text-4xl uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
          Featured Work
        </h2>
        <div className="flex-1 border-b-2 border-black"></div>
      </div>

      {/* Featured Projects - Large Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        {featuredProjects.map((project, index) => (
          <div 
            key={project.id}
            className={index % 2 === 0 ? "lg:border-r lg:border-gray-400 lg:pr-8" : ""}
          >
            <ProjectCard project={project} featured />
            {index < featuredProjects.length - 1 && (
              <div className="mt-6 border-b border-gray-400 lg:hidden"></div>
            )}
          </div>
        ))}
      </div>

      <div className="border-t-2 border-black pt-8">
        <h3 className="text-3xl uppercase tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
          Recent Projects
        </h3>
        
        {/* Other Projects - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6">
          {otherProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`
                ${index % 3 !== 2 ? 'lg:border-r lg:border-gray-400 lg:pr-6' : ''}
                ${index % 2 === 0 && index % 3 === 2 ? 'md:border-r md:border-gray-400 md:pr-6 lg:border-r-0 lg:pr-0' : ''}
                ${index % 2 === 0 && index % 3 !== 2 ? 'md:border-r md:border-gray-400 md:pr-6' : ''}
              `}
            >
              <ProjectCard project={project} featured={false} />
              {index < otherProjects.length - 1 && (
                <div className="mt-4 mb-6 border-b border-gray-400 md:hidden"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}