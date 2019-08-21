import React from 'react'
import { graphql } from 'gatsby'
import debounce from 'lodash/debounce'
import throttle from 'lodash/throttle'
import BgImg from '../components/general/Background'

class IndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: this.props.data.allContentfulGallery.edges,
      post: this.props.data.allContentfulGallery.edges[0].node,
    };
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
    const { post } = this.state
    return (
      <>
        {/* <h1>{post.title}</h1> */}
        <BgImg
          height={'100vh'}
          fluid={post.cover.fluid}
          alt={post.cover.title}
          title={post.cover.title}
        />
      </>
    )
  }
}
export const query = graphql`
  query HomeQuery {
    allContentfulGallery(limit: 8, sort: { fields: index, order: ASC }) {
      edges {
        node {
          title
          id
          slug
          index
          cover {
            title
            fluid(maxWidth: 1800) {
              ...GatsbyContentfulFluid_withWebp_noBase64
            }
          }
        }
      }
    }
  }
`

export default IndexPage
