import me from "./../assets/images/me.jpg";
import pronunciation from "./../assets/sounds/Bree-awn.mp3";
import volumeUp from "./../assets/icons/Volume Up.svg";
import '@material-symbols/font-500/rounded.css';

export default function Sidebar() {
	const handlePronunciationClick = () => {
		const snd = new Audio(pronunciation);
		snd.play();
		snd.currentTime = 0;
	}

	return (
		<aside className="sidebar basis-[22rem] grow-0 shrink-0 min-h-screen relative top-[53px] border-r bg-[#fafafa]">
			<div className="px-8 py-8 fixed w-[22rem] border-r border-b bg-[#fff]">
				<img src={me} alt="A picture of me in Tokyo, Japan 2023" />
				<div className="sidebar__aboutMe">
					<div className="mb-2">
						<h3 className="text-lg">Brion • noun</h3>
						<div className="flex items-center">
							<p>bri-on (bree-awn)</p>
							<div className="cursor-pointer">
								<img className="text-black" src={volumeUp} alt="Volume Up" onClick={handlePronunciationClick} />
							</div>
						</div>
					</div>
					<nav className="socialLinks mb-2">
						<a
							className="underline underline-offset-3 decoration-1 text-inherit font-normal hover:mb-1"
							href="https://www.linkedin.com/in/brion-baskerville/"
							target="_blank"
						>
							LinkedIn<span className="material-symbols-rounded font-semibold align-middle text-[length:inherit]">north_east</span>
						</a>
					</nav>
					<div className="aboutMe__actionButtons flex mb-2 gap-2">
						<button className="primaryButton py-2 px-2 bg-black text-white rounded">
							Download Resume
						</button>
						<a href="mailto:sxbaskerville@gmail.com" className="">
							<button className="secondaryButton py-2 px-2 bg-white text-black rounded border-black border">
								Contact Me
							</button>
						</a>
					</div>
					<p>
						Hey, I’m Brion! A web developer and product designer from Los Angeles, CA.
					</p>
				</div>
			</div>
		</aside>
	);
}
