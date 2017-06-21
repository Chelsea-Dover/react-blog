import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { shallow } from 'enzyme'
import fetch from 'jest-fetch-mock'
import {FAKE_CONTENT} from '../test-data'
import {CONFIG_TEST} from '../config-test'

global.fetch = fetch

/* global describe it beforeEach */

setTimeout((done) => {
  fetch.mockResponseOnce(JSON.stringify({ name: FAKE_CONTENT }))
  fetch.mockResponseOnce(JSON.stringify({ name: CONFIG_TEST }))
  done()
}, 5)

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  describe('Intergration tests', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <App
        />
      )
    })
    it('renders the correct number of articles', () => {
      // expect(wrapper.length).toBe()
      console.log(wrapper.html())
    })
  })
})
