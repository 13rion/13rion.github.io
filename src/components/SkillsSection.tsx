/* eslint-disable @typescript-eslint/no-explicit-any */
import Tag from './Tag';

interface SkillsProps {
	skillsData: any;
	onSkillClick: (title: string, category: string) => void;
}

export default function SkillsSection({ skillsData, onSkillClick }: SkillsProps) {

	return (
		<section className="skills">
			<h2 className="text-xl">Skills</h2>
					{Object.keys(skillsData).map(key => {
						return (
							<section className="skillTags">
								<h6 className="text-sm capitalize">{key}</h6>
								<div className="flex flex-wrap gap-2">
									{skillsData[key].map((skill: string) => {
										return <Tag 
												title={skill}
												category={skillsData[key]}
												onSkillClick={onSkillClick}
												/>
									})}
								</div>
							</section>
						);
						// return <Tag title={skillsData[key]}  />
					})}
		</section>
	);
}
