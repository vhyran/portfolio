export default function Projects() {
	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-base">
			<div className="p-8 shadow-lg bg-surface1">
				<h1 className="text-4xl font-extrabold text-text mb-4 text-center">
					Projects
				</h1>
				<p className="text-subtext1 text-lg text-center">
					Here are some of the projects I've worked on.
				</p>
				<div className="grid grid-cols-1 gap-4 mt-6">
					<ProjectCard
						title="Project 1"
						description="This is a project I worked on."
						link=""
					/>
					<ProjectCard
						title="Project 2"
						description="This is another project I worked on."
						link=""
					/>
				</div>
			</div>
		</div>
	);
}
