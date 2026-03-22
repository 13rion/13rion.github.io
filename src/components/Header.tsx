import Logo from './supporting/Logo';
import { Link } from 'react-router';

export default function Header() {
	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<header className="border-b-4 border-black">
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="flex items-center justify-between mb-6">
					<Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
						<div className="logo flex items-center gap-4">
							<div className="logo__image">
								<Logo />
							</div>
						</div>
					</Link>
					<div className="text-sm">{today}</div>
					<div className="text-sm">Portfolio Edition</div>
				</div>

				<div className="mb-6 flex flex-col items-start w-fit mx-auto">
					<Link
						to="/"
						className="uppercase text-center text-6xl w-fit self-center hover:opacity-80 transition-opacity"
						style={{ fontFamily: 'Libre Baskerville' }}
					>
						BRION BASKERVILLE
					</Link>
				</div>

				<nav className="border-t border-b border-black py-2">
					<ul className="flex justify-center gap-8 text-sm uppercase tracking-wider">
						<li>
							<a href="#about" className="font-semibold hover:underline">
								About
							</a>
						</li>
						<li>
							<a href="#projects" className="font-semibold hover:underline">
								Projects
							</a>
						</li>
						<li>
							<a href="#experience" className="font-semibold hover:underline">
								Experience
							</a>
						</li>
						<li>
							<a href="#contact" className="font-semibold hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);

	// 		<div className="menu__item active">Home</div>
	// 		<div className="menu__item">Resume</div>
	// 		<div className="menu__item">About</div>
	// 		<div className="menu__item">Games</div>
	// 		<div className="menu__item">Travel</div>
}
