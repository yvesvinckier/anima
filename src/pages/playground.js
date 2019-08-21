import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/general/Layout'
import SEO from '../components/general/SEO'

const PlaygroundPage = () => (
    <Layout>
        <SEO title="Page two" />
        <h1>Hi from the PlaygroundPage</h1>
        <Link to="/">Go back to the homepage</Link>
    </Layout>
)

export default PlaygroundPage
