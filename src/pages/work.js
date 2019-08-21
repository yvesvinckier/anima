import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/general/Layout'
import SEO from '../components/general/SEO'

const WorkPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the WorkPage</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default WorkPage
