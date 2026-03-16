/* eslint-disable @typescript-eslint/no-explicit-any */
import epa from "./../assets/images/Group30305.png";

interface ProjectProps {
	projectData: any;
}

export default function ProjectSection({ projectData }: ProjectProps) {
	return (
		<section className="projects">
			<div className="flex gap-8 flex-wrap mt-4">
				{projectData.map((project: any) => {
					return (
						<section className="card bg-white border rounded w-[329px] py-4 px-4 shadow-sm shrink-0 grow-1">
							<div className="cardHeader flex justify-between">
								<div className="font-semibold">{project.title}</div>
							</div>
							{/* <div className="cardBody">
								<div>{project.description}</div>
							</div> */}
							<img src={epa} alt="" />
						</section>
					);
				})}
			</div>
		</section>
	);
}
