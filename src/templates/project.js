import React from 'react'
import { graphql } from 'gatsby'
import SEO from '../components/general/SEO'
import Hero from '../components/project/Hero'
import TabletTwoComp from '../components/project/TabletTwoComp'
import ProjectDetails from '../components/project/ProjectDetails'

const ProjectTemplate = ({ data, pageContext }) => {
  const {
    title,
    cover,
    logo,
    herotitle,
    tabletTwo,
    tabletTwoTitle,
    tabletTwoDesc,
    projectDescription,
    projectParagraph,
  } = data.contentfulGallery
  return (
    <>
      <SEO title={title} image={cover} />
      <Hero image={cover} logo={logo} title={title} herotitle={herotitle} />
      <ProjectDetails
        projectDescription={projectDescription}
        projectParagraph={projectParagraph}
      />
      <TabletTwoComp
        tabletTwo={tabletTwo}
        tabletTwoTitle={tabletTwoTitle}
        tabletTwoDesc={tabletTwoDesc}
      />
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
      tabletTwoTitle
      tabletTwoDesc {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
      tabletTwo {
        fluid(maxWidth: 1920) {
          ...GatsbyContentfulFluid_withWebp_noBase64
        }
      }
      projectDescription {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
      projectParagraph {
        childMarkdownRemark {
          html
          excerpt(format: PLAIN)
        }
      }
    }
  }
`

export default ProjectTemplate
