import React, {Component} from 'react'
import PropTypes from 'prop-types'

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
        className='AllArticleWrapper'
       >
        <article
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
