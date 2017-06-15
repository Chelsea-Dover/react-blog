import React, {Component} from 'react'
import PropTypes from 'prop-types'

const style = {
  padding: '20px 35px',
  width: '78%',
  margin: '10px auto',
  borderRadius: '3px',
  fontSize: '1.1em'
}

const padding = {
  paddingBottom: '140px'
}

export default class SeparatePost extends Component {
  render () {
    const post = this.props.markdownList.find((x) => {
      return x.path === this.props.articleName
    })
    if (!post) {
      return null
    }
    return (
      <div
        key={this.props.articleName}
        style={padding}
       >
        <article
          style={style}
          className='articleWrapper'
          dangerouslySetInnerHTML={{__html: post.content}}
        />
      </div>
    )
  }
}

SeparatePost.propTypes = {
  articleName: PropTypes.string,
  markdownList: PropTypes.array
}
