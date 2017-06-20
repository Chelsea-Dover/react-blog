import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import fetch from 'jest-fetch-mock'
import {FAKE_DATA} from '../test-data'

global.fetch = fetch

/* global expect describe it beforeEach */

fetch.mockResponse(JSON.stringify(FAKE_DATA))

describe('App tests', () => {
  it('does a snapshot check', () => {
    console.log(FAKE_DATA)
    const component = renderer.create(<App />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
  describe('', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <App
        />
      )
    })
    it('', () => {
      console.log(wrapper.props())
    })
  })
})
