import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default class AllArticles extends Component {
  render () {
    if (this.props.markdownList === undefined) {
      return null
    }
    const articles = this.props.markdownList.map((item, id) => {
      return (
        <div
          className='articleWrapper'
          key={id}
          >
          <article
            dangerouslySetInnerHTML={{__html: item.content}}
            key={item.path}
          />
          <Link to={`/post/${item.path}`}>
              Full page
          </Link>
        </div>
      )
    })

    return (
      <div className={'AllArticleWrapper'}>
        {articles}
      </div>
    )
  }
}

AllArticles.propTypes = {
  markdownList: PropTypes.array
}
