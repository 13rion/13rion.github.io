export default function Content() {
	return (
		<div className="px-8 py-8">
			<section>
				<h2 className="text-xl">Skills</h2>
				<section className="skillTags">
					<h6 className="text-sm">Languages</h6>
					<div className="flex gap-2">
						<button className="rounded-full border border-black py-1 px-4">JavaScript</button>
						<button className="rounded-full border border-black py-1 px-4">TypeScript</button>
						<button className="rounded-full border border-black py-1 px-4">HTML</button>
						<button className="rounded-full border border-black py-1 px-4">CSS</button>
						<button className="rounded-full border border-black py-1 px-4">Swift</button>
						<button className="rounded-full border border-black py-1 px-4">PHP</button>
						<button className="rounded-full border border-black py-1 px-4">Java</button>
					</div>
				</section>
			</section>
		</div>
	);
}
