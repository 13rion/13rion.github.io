import Header from './components/header';
import HeroSection from './components/heroSection';
import ProjectsGrid from './components/ProjectsGrid';
import WorkExperience from './components/WorkExperience';
import Footer from './components/footer';

function App() {
	return (
		<main>
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
