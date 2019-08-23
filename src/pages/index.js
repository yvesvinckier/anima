import React from 'react'
import { graphql } from 'gatsby'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import styled from 'styled-components'
import ImageWebGL from '../components/index/ImageWebGL'

import ColumnOne from '../components/index/ColumnOne'
import ColumnTwo from '../components/index/ColumnTwo'

const InnerCol = styled.section`
  color: #fff;
  font-size: 0;
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`

class IndexPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: this.props.data.allContentfulGallery.edges,
      post: this.props.data.allContentfulGallery.edges[0].node,
    }
  }
  componentDidMount() {
    this.mouseWheelListener = throttle(e => this.handleMouseWheel(e), 2000, {
      leading: true,
      trailing: false,
    })

    window.addEventListener('wheel', this.mouseWheelListener, { passive: true })
  }
  handleMouseWheel({ deltaY }) {
    const index = this.state.post.index
    const activeIndex = deltaY > 0 ? index + 1 : index - 1
    this.handleProjectSwitch(activeIndex)
  }
  handleProjectSwitch = debounce(
    activeIndex => {
      const projectsDataCount = this.state.posts.length - 1
      let index = activeIndex

      if (index > projectsDataCount) {
        index = 0
      } else if (index < 0) {
        index = projectsDataCount
      }

      this.setState({
        post: this.props.data.allContentfulGallery.edges[index].node,
      })
    },
    350,
    { leading: true, trailing: false }
  )
  render() {
    const { post, posts } = this.state

    const goToNextSlide = e => {
      e.preventDefault()

      const projectsDataCount = this.state.posts.length - 1
      const activeIndex = this.state.post.index + 1
      let index = activeIndex
      if (index > projectsDataCount) {
        index = 0
      } else if (index < 0) {
        index = projectsDataCount
      }
      this.setState({
        post: this.props.data.allContentfulGallery.edges[index].node,
      })
    }

    const goToPrevSlide = e => {
      e.preventDefault()

      const projectsDataCount = this.state.posts.length - 1
      const activeIndex = this.state.post.index - 1
      let index = activeIndex
      if (index > projectsDataCount) {
        index = 0
      } else if (index < 0) {
        index = projectsDataCount
      }
      this.setState({
        post: this.props.data.allContentfulGallery.edges[index].node,
      })
    }

    return (
      <>
        {/* <h1>{post.title}</h1> */}
        <InnerCol>
          <ColumnOne posts={posts} post={post} />
          <ColumnTwo
            key={post.id}
            post={post}
            posts={posts}
            goToNextSlide={goToNextSlide}
            goToPrevSlide={goToPrevSlide}
          />
        </InnerCol>
        <ImageWebGL post={post} />
      </>
    )
  }
}
export const query = graphql`
  query HomeQuery {
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

export default IndexPage
