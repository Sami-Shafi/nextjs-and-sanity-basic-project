import { ProjectSchema } from "@/types/Project";

const project: ProjectSchema = {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{
			name: "name",
			title: "Name",
			type: "string",
			validation: (Rule: any) =>
				Rule.required()
					.min(3)
					.max(80)
					.warning("Put something between 1 and 80 characters"),
		},
		// subtitle
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
			validation: (Rule: any) => Rule.required(),
			slugify: (input: string) =>
				input.toLowerCase().replace(/\s+/g, "-"),
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt", type: "string" }],
			validation: (Rule: any) => Rule.required(),
		},
		{ name: "url", title: "URL", type: "url" },
		// this block type will give us a highly customized editor for text
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
			validation: (Rule: any) => Rule.required(),
		},
	],
};

export default project;
