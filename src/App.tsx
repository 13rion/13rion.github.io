import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';
import Footer from './components/footer';

function App() {
	return (
		<main>
			<Header />
			<div className="flex">
				<Sidebar />
				<Content />
			</div>
			<Footer />
		</main>
	);
}

export default App;
