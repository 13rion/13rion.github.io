import { useState } from 'react';
import SkillsSection from './SkillsSection.tsx';
import WorkSection from './WorkSection.tsx';
import ProjectSection from './ProjectSection.tsx';
import { skillsData } from './../data/skills.ts';
import { workExperienceData } from './../data/work.ts';
import { projectData } from './../data/projects.ts';

export default function Content() {
	const [skills, setSkills] = useState(skillsData);

	const handleTagClick = (title: string, category: string) => {
		// setSkills((prevSkills) => prevSkills.map((skill) => {
			
		// }))
	}

	return (
		<div className="px-8 py-8 flex flex-col gap-8 relative top-[53px] grow overflow-y-auto">
			<ProjectSection 
				projectData={ projectData }
			/>
			<SkillsSection 
				skillsData={ skillsData }
				onSkillClick={handleTagClick}
			/>
			<WorkSection 
				workData={ workExperienceData }
			/>
		</div>
	);
}
