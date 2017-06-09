import React, {Component} from 'react'
import PropTypes from 'prop-types'

const style = {
  padding: '20px 35px',
  width: '78%',
  margin: '10px auto',
  borderRadius: '3px',
  fontSize: '1.1em',
}

export default class AllArticles extends Component {
  render () {
    if (this.props.markdownList === undefined) {
      return null
    }
    const articles = this.props.markdownList.map((content) => {
      return (
        <article
          style={style}
          className='articleWrapper'
          dangerouslySetInnerHTML={{__html: content}}
          key={content}
        />
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
