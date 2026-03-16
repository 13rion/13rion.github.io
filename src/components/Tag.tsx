
interface TagProps {
	title: string;
	category: string;
	onSkillClick: (title: string, category: string) => void;
}

export default function Tag({ title, category, onSkillClick }: TagProps) {

	return (
		<button 
			className="rounded-full border border-black py-1 px-4 hover:bg-black hover:text-white whitespace-nowrap"
			onClick={() => onSkillClick(title, category)}>
				{title}
		</button>
	);
}
