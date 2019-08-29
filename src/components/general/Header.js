import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

const Header = styled.div`
  z-index: 12;
  position: fixed;
  width: 100%;
  top: 20px;
  left: 20px;
  padding: 30px;
  mix-blend-mode: difference;
  // margin-left: 12%;
  // margin-top: 7.14vw;
  & > a {
    transform-origin: 100% 0%;
    transform: translateX(-100%) rotate(-90deg);
    z-index: 20;
    & > div {
      overflow: hidden;
      height: 26px;
    }
  }
  h2 {
    font-size: 1.1rem;
    font-weight: 700;
    z-index: 1;
    a {
      position: relative;
      &::after {
        content: '';
        width: 3px;
        height: 3px;
        background: #fff;
        position: absolute;
        top: calc(100% + 12px);
        left: 0;
        pointer-events: none;
        opacity: 0;
        transform-origin: 100% 0;
        transform: scaleX(5);
        transition: opacity 0.1s, transform 0.1s;
      }
      &:hover::after {
        opacity: 1;
        transform: scaleX(1);
      }
    }
  }
`

const WhiteHeader = () => (
  <Header>
    <h2>
      <Link to="/">bløwup</Link>
    </h2>
  </Header>
)

export default WhiteHeader
