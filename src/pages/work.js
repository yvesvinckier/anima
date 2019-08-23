import { TextureLoader } from 'three'
import { useSpring, animated, config } from 'react-spring/three'
import React, { useState, useMemo } from 'react'
import { Canvas } from 'react-three-fiber'
import { HoverImageShader } from '../resources/index'
import { graphql } from 'gatsby'

import Layout from '../components/general/Layout'
import SEO from '../components/general/SEO'

const image = 'https://images.unsplash.com/photo-1517462964-21fdcec3f25b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80'

const Image = ({ url, ...props }) => {
    const [hovered, setHover] = useState(false)

    const [texture] = useMemo(() => {
        const loader = new TextureLoader()
        return [loader.load(url)]
    }, [url])

    const { hoverValue } = useSpring({
        hoverValue: hovered ? 1 : 0,
        config: config.molasses
    })

    return (
        <animated.mesh onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} {...props}>
            <planeBufferGeometry attach="geometry" args={[5, 7]} />
            <animated.shaderMaterial attach="material" transparent args={[HoverImageShader]} uniforms-texture-value={texture} uniforms-hover-value={hoverValue} />
        </animated.mesh>
    )
}

const WorkPage = () => {
    const [props, set] = useSpring(() => ({
        pos: [0, 0, 0],
        scale: [1, 1, 1],
        rotation: [0, 0, 0],
        config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
    }))
    return (
        <Layout>
            <SEO title="Page two" />
            <div
                onMouseMove={({ clientX, clientY }) => {
                    const x = (clientX / window.innerWidth) * 2 - 1
                    const y = -(clientY / window.innerHeight) * 2 + 1

                    set({
                        pos: [x, 0, 0],
                        scale: [1 - y * 0.1, 1 - y * 0.1, 1],
                        rotation: [-y * (Math.PI / 3) * 0.3, x * (Math.PI / 3) * 0.3, 0]
                    })
                }}
            >
                <Canvas pixelRatio={window.devicePixelRatio || 1} style={{ background: '#272727' }} camera={{ fov: 75, position: [0, 0, 7] }}>
                    <Image url={image} {...props} />
                </Canvas>
            </div>
        </Layout>
    )
}

export const query = graphql`
  query WorkQuery {
    allContentfulGallery(limit: 10, sort: { fields: index, order: ASC }) {
      edges {
        node {
          title
          id
          slug
          index
          cover {
            fluid(maxWidth: 1920) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default WorkPage
