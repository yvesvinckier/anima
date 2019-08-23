import React, { Component } from 'react'
import { TimelineLite, Power2 } from 'gsap'
import BgImg from '../general/Background'

class ImageWebGL extends Component {
  constructor(props) {
    super(props)
    this.IMGWebGL = null
    this.imageTween = new TimelineLite({ paused: true })
  }

  componentDidMount() {
    this.imageTween.from(this.IMGWebGL, 1, { opacity: 0, ease: Power2.easeOut })
    this.imageTween.play()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.post.cover.fluid !== this.props.post.cover.fluid) {
      this.imageTween.play()
    }
  }

  render() {
    const { post } = this.props
    return (
      <div ref={div => (this.IMGWebGL = div)}>
        <BgImg
          height={'100vh'}
          fluid={post.cover.fluid}
          alt={post.cover.title}
          title={post.cover.title}
        />
      </div>
    )
  }
}

export default ImageWebGL
