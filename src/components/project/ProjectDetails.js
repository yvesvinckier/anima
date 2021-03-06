import React from 'react'
import styled from 'styled-components'

const ProjectOuter = styled.div`
  width: 100%;
  position: relative;
  background-color: ${props => props.theme.colors.white};
  z-index: 2;
`

const ProjectInfo = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  padding-bottom: 6vw;
  padding-top: 6vw;
  text-align: left;
  width: 100% - 2em;
  max-width: ${props => props.theme.sizes.maxWidth};
  margin: 0 1em;
  background: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.base};
  position: relative;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    padding: 7em 2em;
    margin: 0 auto;
  }
`

const ProjectDesc = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 45%;
  }
  p {
    font-size: 2rem;
    font-weight: 200;
    line-height: 1.4;
    color: ${props => props.theme.colors.tertiary};
    margin: 0;
  }
`
const ProjectPara = styled.div`
  width: 100%;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    flex: 0 1 45%;
  }
  p {
    color: ${props => props.theme.colors.base};
    line-height: 1.9;
    font-size: 1.3rem;
    font-weight: 200;
    margin: 0;
  }
`

function ProjectDetails({ projectDescription, projectParagraph }) {
  return (
    <>
      <ProjectOuter>
        <ProjectInfo>
          <ProjectDesc
            dangerouslySetInnerHTML={{
              __html: projectDescription.childMarkdownRemark.html,
            }}
          />
          <ProjectPara
            dangerouslySetInnerHTML={{
              __html: projectParagraph.childMarkdownRemark.html,
            }}
          />
        </ProjectInfo>
      </ProjectOuter>
    </>
  )
}
export default ProjectDetails
