import me from "./../assets/images/me.jpg";
import pronounciation from "./../assets/sounds/Bree-awn.mp3";
import volumeUp from "./../assets/icons/Volume Up.svg";

export default function Sidebar() {
	return (
		<aside className="sidebar px-8 py-8 w-[22.5rem] border-r h-screen">
			<img src={me} alt="A picture of me in Tokyo, Japan 2023" />
			<div className="sidebar__aboutMe">
				<div className="mb-2">
					<h3 className="text-lg">Brion • noun</h3>
					<div className="flex items-center">
						<p>bri-on (bree-awn)</p>
						<div className="cursor-pointer">
							<audio src={pronounciation}></audio>
							<img className="text-black" src={volumeUp} alt="Volume Up" />
						</div>
					</div>
				</div>
				<nav className="socialLinks mb-2">
					<a
						className="underline underline-offset-3 decoration-1"
						href="https://www.linkedin.com/in/brion-baskerville/"
						target="_blank"
					>
						https://www.linkedin.com/in/brion-baskerville/
					</a>
				</nav>
				<div className="aboutMe__actionButtons flex gap-4 mb-2">
					<button className="primaryButton py-2 px-2 bg-black text-white rounded w-full">
						Download Resume
					</button>
					<a className="w-full" href="mailto:sxbaskerville@gmail.com">
						<button className="secondaryButton py-2 px-2 bg-white text-black rounded border-black border">
							Contact Me
						</button>
					</a>
				</div>
				<p>
					Hey, I’m Brion! A web developer and web designer from Los Angeles, CA.
				</p>
			</div>
		</aside>
	);
}
