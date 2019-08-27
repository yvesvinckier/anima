import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/general/SEO'
import Hero from '../components/project/Hero'

const ProjectTemplate = ({ data, pageContext }) => {
  const { title, cover, logo, herotitle } = data.contentfulGallery
  return (
    <>
      <SEO title={title} image={cover} />
      <Hero image={cover} logo={logo} title={title} herotitle={herotitle} />
    </>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulGallery(slug: { eq: $slug }) {
      title
      id
      slug
      herotitle
      logo {
        file {
          url
        }
      }
      cover {
        title
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
        ogimg: resize(width: 1800) {
          src
          width
          height
        }
      }
    }
  }
`

export default ProjectTemplate
