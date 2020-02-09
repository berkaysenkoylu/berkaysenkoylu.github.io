import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo";

import ResumeComponent from '../components/Resume/Resume';

const Resume = () => {
    return (
        <Layout>
            <SEO title="Resume" />
            
            <ResumeComponent />
        </Layout>
    )
}

export default Resume;