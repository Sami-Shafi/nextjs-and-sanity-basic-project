"use client";

import { FC, ReactElement } from "react";
import { NextStudio } from "next-sanity/studio";
import config from "@/sanity.config";

const AdminPage: FC = (): ReactElement => {
	return <NextStudio config={config} />;
};

export default AdminPage;
