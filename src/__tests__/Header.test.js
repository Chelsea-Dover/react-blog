import React from 'react'
import Header from '../Header'
import { shallow } from 'enzyme'

/* global describe it beforeEach expect */

describe('Header tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Header
        blogTitle={'best blog'}
        subTitle={'the vest best best blog'}
      />
    )
  })
  it('renders the correct title', () => {
    expect(wrapper.find('h1').text()).toBe('best blog')
  })
  it('renders the correct subtitle', () => {
    expect(wrapper.find('h2').text()).toBe('the vest best best blog')
  })
})
