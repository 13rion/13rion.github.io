import ProjectCard from "./ProjectCard";
import { projects } from "../data/projects";

export default function ProjectsGrid() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="mb-12">
      <div className="flex items-center gap-4 mb-6">
        <div className="flex-1 border-b-2 border-black"></div>
        <h2 className="text-4xl uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
          Featured Project
        </h2>
        <div className="flex-1 border-b-2 border-black"></div>
      </div>

      {/* Featured Projects - Large Layout */}
      <div className="mb-8">
        {featuredProjects.map((project) => (
          <div key={project.id}>
            <ProjectCard project={project} featured />
          </div>
        ))}
      </div>

      <div className="border-t-2 border-black pt-8">
        <h3 className="text-2xl md:text-3xl uppercase tracking-wider mb-6" style={{ fontFamily: 'serif' }}>
          Recent Projects
        </h3>
        
        {/* Other Projects - Compact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6">
          {otherProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`
                ${index % 2 === 0 ? 'md:border-r md:border-gray-400 md:pr-6' : ''}
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