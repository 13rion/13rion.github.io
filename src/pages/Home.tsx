import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ProjectsGrid from "../components/ProjectsGrid";
import ProjectModal from "../components/ProjectModal";
import WorkExperience from "../components/WorkExperience";
import Footer from "../components/Footer";
import { useParams } from "react-router";


export default function Home() {
  const { projectId } = useParams();

  return (
    <div className="min-h-screen bg-[#f5f1e8]">
      <Header />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <HeroSection />
        <ProjectsGrid />
        <WorkExperience />
      </main>
      <Footer />

      {/* Show modal when projectId is present in URL */}
      {projectId && <ProjectModal />}
    </div>
  );
}