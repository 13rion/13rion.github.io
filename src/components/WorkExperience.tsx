import { Briefcase, Download } from 'lucide-react';
import { experiences } from '../data/work.ts';

export default function WorkExperience() {
	return (
		<section id="experience" className="mb-12">
			<div className="flex items-center justify-between mb-6 pb-2 border-b-2 border-black">
				<div className="flex items-center gap-3">
					<Briefcase className="w-6 h-6" />
					<h2
						className="text-3xl uppercase tracking-wider"
						style={{ fontFamily: 'Libre Baskerville' }}
					>
						Work Experience
					</h2>
				</div>
				<a
					href="https://drive.google.com/file/d/1CYWHKDsN6IcHOKMkTbNNYBVPnUrW5q9l/view?usp=sharing"
					className="flex items-center gap-2 text-sm hover:underline"
					target="_blank"
					download
				>
					<Download className="w-4 h-4" />
					Download Resume
				</a>
			</div>

			<div className="space-y-8">
				{experiences.map((exp, index) => (
					<article key={exp.id}>
						<div className="mb-4">
							<h3
								className="text-2xl mb-2"
								style={{ fontFamily: 'serif' }}
							>
								{exp.title}
							</h3>
							<div className="flex items-center justify-between text-sm italic">
								<span>{exp.period}</span>
								<span>
									{exp.company} | {exp.city}, {exp.state}
								</span>
							</div>
						</div>

						<ul className="space-y-2 list-disc pl-6">
							{exp.responsibilities.map((resp, idx) => (
								<li key={idx} className="leading-relaxed">
									{resp}
								</li>
							))}
						</ul>

						{index < experiences.length - 1 && (
							<div className="mt-8 border-b border-gray-400"></div>
						)}
					</article>
				))}
			</div>
		</section>
	);
}
