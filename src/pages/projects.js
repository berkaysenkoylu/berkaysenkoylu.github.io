import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ProjectList from '../components/ProjectList/ProjectList';

const Projects = () => (
	<Layout>
		<SEO title="Projects" />
		
		<ProjectList />
	</Layout>
)

export default Projects;