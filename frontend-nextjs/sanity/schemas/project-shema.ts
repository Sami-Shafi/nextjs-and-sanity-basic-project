interface iOf {
	type: string;
}

interface iProjectField {
	name: string;
	title: string;
	type: string;
	options?: {
		source?: string;
		hotspot?: boolean;
	};
	fields?: iProjectField[];
	of?: iOf[];
}

interface iProject {
	name: string;
	title: string;
	type: string;
	fields: iProjectField[];
}

const project: iProject = {
	name: "project",
	title: "Projects",
	type: "document",
	fields: [
		{ name: "name", title: "Name", type: "string" },
		// subtitle
		{
			name: "slug",
			title: "Slug",
			type: "slug",
			options: { source: "name" },
		},
		{
			name: "image",
			title: "Image",
			type: "image",
			options: { hotspot: true },
			fields: [{ name: "alt", title: "Alt", type: "string" }],
		},
		{ name: "url", title: "URL", type: "url" },
		// this block type will give us a highly customized editor for text
		{
			name: "content",
			title: "Content",
			type: "array",
			of: [{ type: "block" }],
		},
	],
};

export default project;
