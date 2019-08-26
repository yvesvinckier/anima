import React from 'react'
import styled from 'styled-components'
import BgImg from '../general/Background'

const Wrapper = styled.div`
  text-align: center;
  position: relative;
  width: 100%;
  z-index: -1;
  height: 100vh;
  @media screen and (min-width: ${props => props.theme.responsive.small}) {
    top: 0;
    position: fixed;
  }
  &::before {
    content: '';
    background: rgba(0, 0, 0, 0.2);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    height: 100%;
    width: 100%;
  }
`

const Hero = props => {
  return (
    <Wrapper>
      <h2>{props.herotitle} </h2>
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
