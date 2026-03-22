import { Link as LinkIcon } from 'lucide-react';
import { Link } from 'react-router';
import { Project } from '../data/projects';

interface ProjectCardProps {
	project: Project;
	featured: boolean;
}

export default function ProjectCard({ project, featured }: ProjectCardProps) {
	const handleCopyLink = (e: React.MouseEvent) => {
		e.preventDefault();
		e.stopPropagation();
		const url = `${window.location.origin}/project/${project.id}`;
		navigator.clipboard.writeText(url);
		// .then(() => {
		//   toast.success('Link copied to clipboard!');
		// });
	};

	if (featured) {
		return (
			<article className="bg-transparent pb-6">
				<div className="flex items-start justify-between mb-3">
					<span className="text-xs uppercase tracking-wider bg-[#F14138] text-white px-2 py-1">
						{project.category}
					</span>
					<button
						onClick={handleCopyLink}
						className="hover:opacity-70 transition-opacity"
						aria-label="Copy permalink"
						title="Copy link to project"
					>
						<LinkIcon className="w-4 h-4" />
					</button>
				</div>

				<Link to={`/project/${project.id}`} className="block group">
					<h3
						className="text-3xl mb-3 leading-tight group-hover:underline cursor-pointer"
						style={{ fontFamily: 'serif' }}
					>
						{project.title}
					</h3>
				</Link>

				<div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
					<span>{project.date}</span>
				</div>

				<p
					className="text-base leading-relaxed mb-4"
					style={{ fontFamily: 'serif' }}
				>
					{project.description}
				</p>

				<div className="flex flex-wrap gap-2">
					{project.tags.map((tag, index) => (
						<span
							key={index}
							className="text-xs border border-black px-2 py-1 hover:bg-black hover:text-white transition-colors"
						>
							{tag}
						</span>
					))}
				</div>
			</article>
		);
	}

	return (
		<article className="bg-transparent pb-4">
			<div className="flex items-start justify-between mb-2">
				<span className="text-xs uppercase tracking-wider text-[#F14138]">
					{project.category}
				</span>
				<button
					onClick={handleCopyLink}
					className="hover:opacity-70 transition-opacity"
					aria-label="Copy permalink"
					title="Copy link to project"
				>
					<LinkIcon className="w-4 h-4" />
				</button>
			</div>

			<Link to={`/project/${project.id}`} className="block group">
				<h3
					className="text-xl mb-2 leading-tight group-hover:underline cursor-pointer"
					style={{ fontFamily: 'serif' }}
				>
					{project.title}
				</h3>
			</Link>

			<div className="text-xs text-gray-600 mb-3">{project.date}</div>

			<p
				className="text-sm leading-relaxed mb-3"
				style={{ fontFamily: 'serif' }}
			>
				{project.description}
			</p>

			<div className="flex flex-wrap gap-1">
				{project.tags.map((tag, index) => (
					<span
						key={index}
						className="text-xs border border-gray-400 px-2 py-0.5 text-gray-700"
					>
						{tag}
					</span>
				))}
			</div>
		</article>
	);
}
