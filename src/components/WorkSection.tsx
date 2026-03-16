/* eslint-disable @typescript-eslint/no-explicit-any */

interface WorkProps {
	workData: any
}

export default function WorkSection({ workData }: WorkProps) {
	return (
		<section className="work">
			<h2 className="text-xl">Work Experience</h2>
			{
				workData.map((job: any) => {
					return(
						<section className="mt-4">
							<div className="font-semibold">{job.title}</div>
							<div className="flex justify-between italic">
								<div>{job.startDate} – {job.endDate}</div>
								<div>{job.company} | Remote</div>
							</div>
							<ul className="list-disc list-inside px-2">
								{job.tasks.map((task: any)=> {
									return(
										<li>{task}</li>
									)
								})}
							</ul>
						</section>
					)
				})
			}
		</section>
	);
}
