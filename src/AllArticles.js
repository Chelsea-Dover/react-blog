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
    return (
      <div style={style} className='atricleWrapper'>
        <article
          dangerouslySetInnerHTML={{__html: this.props.markDownTest}}
          />
        </div>
      )
  }
}

AllArticles.propTypes = {
  markDownTest: PropTypes.string
}
