import React from 'react';

import Layout from "../components/layout";
import SEO from "../components/seo"
import ContactComponent from '../components/Contact/Contact';

const Contact = () => {
    return (
        <Layout>
            <SEO title="Contact" />

            <ContactComponent />
	    </Layout>
    )
}

export default Contact;