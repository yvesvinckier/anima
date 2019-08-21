import React from 'react'
import styled from 'styled-components'
import { useTrail, animated } from 'react-spring'

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
  }
`

const items = ['Creating thoughtful', 'experiences', 'for your brand.']
const config = { mass: 5, tension: 2000, friction: 200 }

const Services = () => {
  const trail = useTrail(items.length, {
    config,
    delay: 200,
    from: {
      opacity: 0,
      x: 110,
    },
    to: {
      opacity: 1,
      x: 0,
    },
  })
  return (
    <Layout>
      <SEO title="Home" />
      <Intro>
        <h1>
          {trail.map(({ x }, index) => (
            <animated.span key={items[index]} className="c-home-line">
              <animated.span
                className="c-home-line-inner"
                style={{
                  transform: x.interpolate(x => `translate3d(0,${x}%,0)`),
                }}
              >
                {items[index]}
              </animated.span>
            </animated.span>
          ))}
        </h1>
      </Intro>
    </Layout>
  )
}

export default Services
