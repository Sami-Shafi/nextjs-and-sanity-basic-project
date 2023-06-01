import { getProjects } from "@/sanity/sanity-utils";
import Image from "next/image";

export default async function Home() {
	const projects = await getProjects();

	return (
		<div className="max-w-5xl mx-auto py-20">
			<div className="mb-20">
				<h1 className="text-7xl font-extrabold">
					Hello I&apos;m
					<span className="bg-gradient-to-br from-cyan-500 via-cyan-800 to-blue-950 bg-clip-text text-transparent ml-4">
						Sami Ib Shafi!
					</span>
				</h1>

				<p className="my-4 text-xl text-slate-900">
					I am a passionate Full-stack Developer and Designer.
				</p>

				<hr className="w-8 border-cyan-800 border-[2px] rounded-full" />
			</div>

			<h2 className="mb-5 font-bold text-grey-700 text-3xl">
				Check out my cool projects!
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
				{projects.map((project) => (
					<div
						key={project._id}
						className="border border-gray-600 rounded-lg"
					>
						{project.image && (
							<Image
								src={project.image}
								alt={project.alt}
								width={350}
								height={125}
								className="object-cover rounded-lg border border-gray-6"
							/>
						)}
						<p className="font-extrabold bg-gradient-to-br from-cyan-500 via-cyan-800 to-blue-950 bg-clip-text text-transparent">
							{project.name}
						</p>
					</div>
				))}
			</div>
		</div>
	);
}
