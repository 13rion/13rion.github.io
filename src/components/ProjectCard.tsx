import { Share2 } from "lucide-react";

interface Project {
  id: number;
  title: string;
  category: string;
  date: string;
  description: string;
  tags: string[];
  featured: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
  if (featured) {
    return (
      <article className="bg-transparent pb-6">
        <div className="flex items-start justify-between mb-3">
          <span className="text-xs uppercase tracking-wider bg-black text-white px-2 py-1">
            {project.category}
          </span>
          <button className="hover:opacity-70">
            <Share2 className="w-4 h-4" />
          </button>
        </div>
        
        <h3 className="text-3xl mb-3 leading-tight" style={{ fontFamily: 'serif' }}>
          {project.title}
        </h3>
        
        <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
          <span>{project.date}</span>
        </div>
        
        <p className="text-base leading-relaxed mb-4" style={{ fontFamily: 'serif' }}>
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </article>
    );
  }

  return (
    <article className="bg-transparent pb-4">
      <div className="flex items-start justify-between mb-2">
        <span className="text-xs uppercase tracking-wider text-gray-600">
          {project.category}
        </span>
        <button className="hover:opacity-70">
          <Share2 className="w-3 h-3" />
        </button>
      </div>
      
      <h3 className="text-xl mb-2 leading-tight" style={{ fontFamily: 'serif' }}>
        {project.title}
      </h3>
      
      <div className="text-xs text-gray-600 mb-3">
        {project.date}
      </div>
      
      <p className="text-sm leading-relaxed mb-3" style={{ fontFamily: 'serif' }}>
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-1">
        {project.tags.map((tag, index) => (
          <span 
            key={index}
            className="text-xs border border-gray-400 px-2 py-0.5 text-gray-700"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}