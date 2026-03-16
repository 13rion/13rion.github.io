import Header from './components/header';
import HeroSection from './components/heroSection';
import Footer from './components/footer';
import { WorkExperience } from './components/WorkExperience';

function App() {
	return (
		<main>
			<Header />
			<main className="max-w-7xl mx-auto px-4 py-8">
				<HeroSection />
				<WorkExperience />
			</main>
			<Footer />
		</main>
	);
}

export default App;
