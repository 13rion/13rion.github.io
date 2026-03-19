import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsGrid from './components/ProjectsGrid';
import WorkExperience from './components/WorkExperience';
import Footer from './components/Footer';

function App() {
	return (
		<main className="min-h-screen bg-[#f5f1e8]">
			<Header />
			<main className="max-w-7xl mx-auto px-4 py-8">
				<HeroSection />
				<ProjectsGrid />
				<WorkExperience />
			</main>
			<Footer />
		</main>
	);
}

export default App;
