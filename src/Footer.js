import React, {Component} from 'react'
import PropTypes from 'prop-types'

const style = {
  // padding: '20px 0px 30px',
  padding: '20px 100px',
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0
}

export default class Footer extends Component {
  render () {
    return (
      <div className={'footerWrapper'} style={style}>
        <h2>{this.props.footerMessage}</h2>
      </div>
    )
  }
}

Footer.propTypes = {
  footerMessage: PropTypes.string
}
