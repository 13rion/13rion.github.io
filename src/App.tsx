import Header from './components/header';
import Sidebar from './components/sidebar';
import Content from './components/content';

function App() {
	return (
		<main>
			<Header />
			<div className="flex">
				<Sidebar />
				<Content />
			</div>
		</main>
	);
}

export default App;
