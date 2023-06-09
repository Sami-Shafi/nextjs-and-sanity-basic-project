import { Project } from "@/types/Project";
import { createClient, groq } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? "";
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "";
const apiVersion = process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? "";

export async function getProjects(): Promise<Project[]> {
	const client = createClient({
		projectId,
		dataset,
		apiVersion,
	});

	return client.fetch(
		groq`*[_type == "project" && !(_id in path("drafts.**"))]{
            _id,
            _createdAt,
            name,
            "slug": slug.current,
            "image": image.asset->url,
            "alt": image.alt,
            url,
            content
        }`
	);
}
