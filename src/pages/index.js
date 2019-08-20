import React from 'react'
import styled from 'styled-components'

import Layout from '../components/general/Layout'
import SEO from '../components/general/SEO'

const Intro = styled.section`
  position: relative;
  height: 86vh;
  z-index: 1;
  background: ${props => props.theme.colors.base};
  color: ${props => props.theme.colors.white};
  display: flex;
  align-items: center;
  h1 {
    width: 40.5%;
    margin-left: 12%;
    font-size: 3.61vw;
    font-weight: 100;
    line-height: 1;
  }
  .c-home-line {
    overflow: hidden;
    display: block;
    padding-bottom: 0.2em;
    &:last-of-type {
      font-weight: 400;
    }
  }
  .c-home-line-inner {
    display: inline-block;
    transition: transform 0.8s cubic-bezier(0.165, 0.84, 0.44, 1) 0.1s;

    /* transform: translateY(110%) translateZ(0); */
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Intro>
      <h1>
        <span className="c-home-line">
          <span className="c-home-line-inner">Creating thoughtful</span>
        </span>
        <span className="c-home-line">
          <span className="c-home-line-inner">experiences</span>
        </span>
        <span className="c-home-line">
          <span className="c-home-line-inner">for your brand.</span>
        </span>
      </h1>
    </Intro>
  </Layout>
)

export default IndexPage
