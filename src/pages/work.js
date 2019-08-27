import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/general/Layout'
import SEO from '../components/general/SEO'

const WorkPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the WorkPage</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default WorkPage

// import { TextureLoader } from 'three'
// import { useSpring, animated, config } from 'react-spring/three'
// import React, { useState, useMemo } from 'react'
// import { Canvas } from 'react-three-fiber'
// import { HoverImageShader } from '../resources/index'
// import { graphql } from 'gatsby'

// import Layout from '../components/general/Layout'
// import SEO from '../components/general/SEO'

// const Image = ({ src, ...props }) => {
//     const [hovered, setHover] = useState(false)

//     const [texture] = useMemo(() => {
//         const loader = new TextureLoader()
//         return [loader.load(src)]
//     }, [src])

//     const { hoverValue } = useSpring({
//         hoverValue: hovered ? 1 : 0,
//         config: config.molasses
//     })

//     return (
//         <animated.mesh onPointerOver={e => setHover(true)} onPointerOut={e => setHover(false)} {...props}>
//             <planeBufferGeometry attach="geometry" args={[5, 7]} />
//             <animated.shaderMaterial attach="material" transparent args={[HoverImageShader]} uniforms-texture-value={texture} uniforms-hover-value={hoverValue} />
//         </animated.mesh>
//     )
// }

// const WorkPage = ({ data }) => {
//     const projects = data.allContentfulGallery.edges
//     const projectsOne = data.allContentfulGallery.edges[0].node
//     console.log(projects, projectsOne);
//     const [props, set] = useSpring(() => ({
//         pos: [0, 0, 0],
//         scale: [1, 1, 1],
//         rotation: [0, 0, 0],
//         config: { mass: 10, tension: 1000, friction: 300, precision: 0.00001 }
//     }))
//     return (
//         <Layout>
//             <SEO title="Page two" />
//             {projects.map(({ node: project }) => (
//                 <div key={project.id}
//                     onMouseMove={({ clientX, clientY }) => {
//                         const x = (clientX / window.innerWidth) * 2 - 1
//                         const y = -(clientY / window.innerHeight) * 2 + 1

//                         set({
//                             pos: [x, 0, 0],
//                             scale: [1 - y * 0.1, 1 - y * 0.1, 1],
//                             rotation: [-y * (Math.PI / 3) * 0.3, x * (Math.PI / 3) * 0.3, 0]
//                         })
//                     }}
//                 >
//                     {/* <div>{project.title}</div>
//                     <img src={project.cover.fluid.src} /> */}

//                     <Canvas pixelRatio={window.devicePixelRatio || 1} style={{ background: '#272727' }} camera={{ fov: 75, position: [0, 0, 7] }}>

//                         <Image src={project.cover.fluid.src} {...props} />

//                     </Canvas>

//                 </div>
//             ))}
//         </Layout>
//     )
// }

// export const query = graphql`
//   query WorkQuery {
//     allContentfulGallery(limit: 10, sort: { fields: index, order: ASC }) {
//       edges {
//         node {
//           title
//           id
//           slug
//           index
//           cover {
//             fluid(maxWidth: 1800) {
//               src
//             }
//         }
//         }
//       }
//     }
//   }
// `

// export default WorkPage
