import React, {Component} from 'react'
import PropTypes from 'prop-types'

const style = {
  padding: '20px 0px 30px'
}

export default class Footer extends Component {
  render () {
    return (
      <div style={style}>
        <h2>{this.props.footerMessage}</h2>
      </div>
    )
  }
}

Footer.propTypes = {
  footerMessage: PropTypes.string
}
