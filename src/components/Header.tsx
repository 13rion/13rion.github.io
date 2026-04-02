import Logo from './supporting/Logo';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';
import { Link } from 'react-router';

export default function Header() {
	const today = new Date().toLocaleDateString('en-US', {
		weekday: 'long',
		year: 'numeric',
		month: 'long',
		day: 'numeric',
	});

	return (
		<header className="">
			<div className="max-w-7xl mx-auto px-4 py-6">
				<div className="relative flex items-center justify-between mb-3">
					<Link
						to="/"
						className="flex items-center gap-2 hover:opacity-80 transition-opacity"
					>
						<div className="logo flex items-center gap-4">
							<div className="logo__image">
								<Logo />
							</div>
						</div>
					</Link>
					<div className="absolute left-1/2 transform -translate-x-1/2 text-sm">{today}</div>
					<div className="text-sm">
						<div className="md:ml-auto">
							<div className="flex gap-4">
								<a
									href="https://www.linkedin.com/in/brion-baskerville/"
									className="hover:opacity-70"
									target="_blank"
								>
									<Linkedin className="w-4 h-4 md:w-5 md:h-5" />
								</a>
								<a
									href="https://github.com/13rion"
									className="hover:opacity-70"
									target="_blank"
								>
									<Github className="w-4 h-4 md:w-5 md:h-5" />
								</a>
								<a
									href="https://twitter.com/13rion_"
									className="hover:opacity-70"
									target="_blank"
								>
									<Twitter className="w-4 h-4 md:w-5 md:h-5" />
								</a>
								<a
									href="mailto:sxbaskerville@gmail.com"
									className="hover:opacity-70"
									target="_blank"
								>
									<Mail className="w-4 h-4 md:w-5 md:h-5" />
								</a>
							</div>
						</div>
					</div>
				</div>
				<div className="border-b-2 border-black mb-6"></div>

				<div className="mb-6 flex flex-col items-start w-fit mx-auto">
					<Link
						to="/"
						className="uppercase text-center text-5xl md:text-6xl w-fit self-center hover:opacity-80 transition-opacity"
						style={{ fontFamily: 'Libre Baskerville' }}
					>
						BRION BASKERVILLE
					</Link>
				</div>

				<nav className="border-t-2 border-b-2 border-black py-2">
					<ul className="flex justify-center gap-8 text-sm uppercase tracking-wider">
						<li>
							<a
								href="#about"
								className="font-semibold hover:underline"
							>
								About
							</a>
						</li>
						<li>
							<a
								href="#projects"
								className="font-semibold hover:underline"
							>
								Projects
							</a>
						</li>
						<li>
							<a
								href="#experience"
								className="font-semibold hover:underline"
							>
								Experience
							</a>
						</li>
						<li>
							<a
								href="#contact"
								className="font-semibold hover:underline"
							>
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
