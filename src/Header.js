import React, {Component} from 'react'
import PropTypes from 'prop-types'
import logo from './assets/logo.jpg'
import { Link } from 'react-router-dom'

export default class Header extends Component {
  render () {
    return (
      <div className={'headerWrapper'}>
        <img
          src={logo}
          alt={this.props.blogTitle + ' logo'}
          className={'blogIcon'}
          />
        <div>
          <Link to={`/`}>
            <h1 className={'headerLink'} >{this.props.blogTitle}</h1>
          </Link>
          <h2 className={'subheadStyle'}>{this.props.subTitle}</h2>
        </div>
      </div>
    )
  }
}

Header.propTypes = {
  blogTitle: PropTypes.string,
  subTitle: PropTypes.string
}
