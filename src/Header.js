import React, {Component} from 'react'
import PropTypes from 'prop-types'
import logo from './assets/logo.jpg'

const style = {
  margin: '20px 0 50px'
}
const subheadStyle = {
  padding: '20px',
  borderTop: 'solid 2px #eee',
  borderBottom: 'solid 2px #eee',
  width: '80%',
  margin: 'auto',
  color: '#a9a9a9'
}
const blogIconStyle = {
  width: '6em',
  height: '6em',
  borderRadius: '50%',
  border: 'solid 2px #eee'
}

export default class Header extends Component {
  render () {
    return (
      <div style={style}>
        <img
          src={logo}
          alt={this.props.blogTitle + ' logo'}
          style={blogIconStyle}
          />
        <h1>{this.props.blogTitle}</h1>
        <h2 style={subheadStyle}>{this.props.subTitle}</h2>
      </div>
    )
  }
}

Header.propTypes = {
  blogTitle: PropTypes.string,
  subTitle: PropTypes.string
}
