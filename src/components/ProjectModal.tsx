import { useParams, useNavigate } from "react-router";
import { projects } from "../data/projects";
// import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { X } from "lucide-react";
import { useEffect } from "react";

export default function ProjectModal() {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const project = projects.find(p => p.id === Number(projectId));

  useEffect(() => {
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const handleClose = () => {
    // Navigate back to home with the projects hash
    navigate('/#projects');
  };

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!project) {
    handleClose();
    return null;
  }

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={handleOverlayClick}
    >
      <div className="bg-[#f5f1e8] w-full h-full overflow-y-auto rounded-lg shadow-2xl relative">
        {/* Close button */}
        <button
          onClick={handleClose}
          className="fixed top-6 right-6 md:top-10 md:right-10 z-10 bg-black text-white p-2 rounded-full hover:bg-gray-800 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Hero Section with Overlay Title */}
        <div className="relative h-[400px] md:h-[500px] overflow-hidden">
          <div className="absolute inset-0">
            {/* {project.imageUrl && (
              <ImageWithFallback
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-cover opacity-40"
              />
            )} */}
          </div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#f5f1e8]"></div>
          <div className="relative max-w-5xl mx-auto px-4 md:px-8 h-full flex items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl mb-4 leading-tight" style={{ fontFamily: 'serif' }}>
                {project.title}
              </h1>
              <span className="inline-block text-xs uppercase tracking-wider bg-black text-white px-3 py-1.5">
                {project.category}
              </span>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <main className="max-w-5xl mx-auto px-4 md:px-8 py-8 md:py-12">
          {/* Meta Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 pb-8 border-b-2 border-black">
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-2 text-gray-600">Company</h3>
              <p className="text-xl" style={{ fontFamily: 'serif' }}>{project.company}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-2 text-gray-600">Year</h3>
              <p className="text-xl" style={{ fontFamily: 'serif' }}>{project.year}</p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-2 text-gray-600">Role</h3>
              <p className="text-xl" style={{ fontFamily: 'serif' }}>{project.role}</p>
            </div>
          </div>

          {/* Description Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-6 pb-3 border-b border-black uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
              Overview
            </h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'serif' }}>
              {project.description}
            </p>
          </section>

          {/* Problem Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-6 pb-3 border-b border-black uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
              The Problem
            </h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'serif' }}>
              {project.problem}
            </p>
          </section>

          {/* Solution Section */}
          <section className="mb-12">
            <h2 className="text-2xl md:text-3xl mb-6 pb-3 border-b border-black uppercase tracking-wider" style={{ fontFamily: 'serif' }}>
              The Solution
            </h2>
            <p className="text-lg leading-relaxed" style={{ fontFamily: 'serif' }}>
              {project.solution}
            </p>
          </section>

          {/* Tags */}
          <section className="pt-8 border-t-2 border-black pb-8">
            <h3 className="text-sm uppercase tracking-wider mb-4 text-gray-600">Technologies & Skills</h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, index) => (
                <span 
                  key={index}
                  className="text-sm border border-black px-3 py-1.5 hover:bg-black hover:text-white transition-colors"
                >
                  {tag}
                </span>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}