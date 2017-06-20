import React from 'react'
import Footer from '../Footer'
import { shallow } from 'enzyme'

/* global describe it beforeEach expect */

describe('Header tests', () => {
  let wrapper
  beforeEach(() => {
    wrapper = shallow(
      <Footer
        footerMessage={'goodbye!'}
      />
    )
  })
  it('renders the correct title', () => {
    expect(wrapper.find('h2').text()).toBe('goodbye!')
  })
})
