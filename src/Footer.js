import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Footer extends Component {
  render () {
    return (
      <div className={'footerWrapper'}>
        <h2>{this.props.footerMessage}</h2>
      </div>
    )
  }
}

Footer.propTypes = {
  footerMessage: PropTypes.string
}
