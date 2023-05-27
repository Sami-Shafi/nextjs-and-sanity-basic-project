import { PortableTextBlock } from "sanity";

export interface Project {
	_id: string;
	_createdAt: Date;
	name: string;
	slug: string;
	image: string;
	url: string;
	content: PortableTextBlock[];
};

export interface ProjectSchema {
	name: string;
	title: string;
	type: string;
	fields: any[];
};
