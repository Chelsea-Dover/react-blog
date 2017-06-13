import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Link } from 'react-router-dom'

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
    const articles = this.props.markdownList.map((content, id) => {
      return (
        <Router key={id}>
          <div
            style={style}
            className='articleWrapper'>
            <article
              dangerouslySetInnerHTML={{__html: content}}
              key={this.props.linkPaths[id]}
            />
            <Link to={`/post/${this.props.linkPaths[id]}`}>
                Full page
            </Link>
          </div>
        </Router>
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
  markdownList: PropTypes.array,
  linkPaths: PropTypes.array
}
