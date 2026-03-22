import { ImageWithFallback } from './supporting/ImageWithFallback';
import profileImage from '../assets/images/profile.webp';
import pronunciation from './../assets/sounds/Bree-awn.mp3';
import volumeUp from './../assets/icons/Volume Up.svg';

export default function HeroSection() {
	const handlePronunciationClick = () => {
		const snd = new Audio(pronunciation);
		snd.play();
		snd.currentTime = 0;
	};

	return (
		<section id="about" className="border-b-2 border-black pb-8 mb-8">
			<div className="mx-auto">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="flex-shrink-0">
						<ImageWithFallback
							src={profileImage}
							alt="Brion Baskerville"
							className="w-64 h-64 rounded-full object-cover border-1 border-black"
						/>
					</div>
					<div className="flex-1 text-center md:text-left">
						<h2
							className="text-4xl mb-4"
							style={{ fontFamily: 'Libre Baskerville' }}
						>
							Visual Designer & Frontend Developer
						</h2>
						<div className="h-2 w-24 bg-[#F14138] mx-auto md:mx-0 mb-4"></div>
						<div className="text-left mb-6">
							<span className="text-xs uppercase tracking-wider text-gray-600">
								Noun
							</span>
							<div className="text-xl font-bold">Brion</div>
							<div>
								bri-on (bree-awn)
								<img
									className="text-black cursor-pointer inline-block mr-2"
									src={volumeUp}
									alt="Volume Up"
									onClick={handlePronunciationClick}
								/>
							</div>
						</div>
						<p
							className="text-xl leading-relaxed"
							style={{ fontFamily: 'Source Sans' }}
						>
							Crafting pixel-perfect interfaces and bringing
							designs to life through code. Specializing in visual
							design with a deep understanding of frontend
							development, I bridge the gap between beautiful
							aesthetics and functional implementation. From
							concept to deployment, I create digital experiences
							that are both visually striking and technically
							sound.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
