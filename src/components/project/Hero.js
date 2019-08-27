import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useSpring, animated, config } from 'react-spring'

const Wrapper = styled.div`
  position: relative;
  margin: 0 0 2rem;
`

const BgImg = styled(Img)`
  width: 100%;
  z-index: -1;
  height: auto;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    height: ${props => props.height || 'auto'};
  }
  & > img {
    object-fit: ${props => props.fit || 'cover'} !important;
    object-position: ${props => props.position || '50% 50%'} !important;
  }
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    height: 100%;
    width: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.4);
  }
`
const Overflow = styled.div`
  position: absolute;
  bottom: 37%;
  left: 0;
  right: 0;
  overflow: hidden;
  padding: 0.5rem 0;
`

const Title = styled.div`
  width: 72.7%;
  margin-left: 13.6%;
  color: white;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    width: 47.6%;
    margin-left: 11.9%;
  }
  @media screen and (min-width: ${props => props.theme.responsive.large}) {
    font-size: 3em;
    width: 37%;
  }
  h1 {
    line-height: 1.25;
    overflow: hidden;
    padding-bottom: 0.2em;
    font-size: 1rem;
    span {
      display: inline-block;
      width: 180px;
      margin: 0;
    }
  }
  h2 {
    font-size: 8.26vw;
    font-weight: 200;
    line-height: 1.25;
    overflow: hidden;
    display: block;
    padding-bottom: 0.2em;
    margin-top: 20px;
    @media screen and (min-width: ${props => props.theme.responsive.small}) {
      font-size: 3.61vw;
    }
    span {
      display: inline-block;
    }
  }
`

const Hero = props => {
  const LogoAnim = useSpring({
    config: config.slow,
    delay: 400,
    from: { opacity: 0, transform: 'translateY(105%)' },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })
  const TitleAnim = useSpring({
    config: config.slow,
    delay: 450,
    from: { opacity: 0, transform: 'translateY(105%)' },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })
  return (
    <Wrapper>
      <Overflow>
        <Title>
          <h1>
            <animated.span style={LogoAnim}>
              <img src={props.logo.file.url} alt={''} />
            </animated.span>
          </h1>
          <h2>
            <animated.span style={TitleAnim}>{props.herotitle} </animated.span>
          </h2>
        </Title>
      </Overflow>
      <BgImg
        height={'100vh'}
        fluid={props.image.fluid}
        alt={props.image.title}
        title={props.image.title}
        backgroundColor={'#212121'}
      />
    </Wrapper>
  )
}

export default Hero
