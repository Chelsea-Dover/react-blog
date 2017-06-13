import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  padding: '20px 35px',
  width: '78%',
  margin: '10px auto',
  borderRadius: '3px',
  fontSize: '1.1em'
}

export default class AllArticles extends Component {
  render () {
    if (this.props.markdownList === undefined) {
      return null
    }
    const articles = this.props.markdownList.map((item, id) => {
      return (
        <div
          key={id}
          style={style}
          className='articleWrapper'>
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
      <div>
        {articles}
      </div>
    )
  }
}

AllArticles.propTypes = {
  markdownList: PropTypes.array
}
