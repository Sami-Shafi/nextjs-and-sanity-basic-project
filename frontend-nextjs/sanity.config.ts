import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

const config = defineConfig({
	projectId: "cryqspve",
	dataset: "production",
	title: "Nextjs Basic Website",
	apiVersion: "2023-05-06",
	basePath: "/admin",
	plugins: [deskTool()],
});
export default config;
