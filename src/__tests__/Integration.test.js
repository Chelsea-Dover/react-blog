import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import { shallow } from 'enzyme'
import fetch from 'jest-fetch-mock'
import {FAKE_CONTENT} from '../test-files/test-data'
import {CONFIG_TEST} from '../test-files/config-test'

global.fetch = fetch

/* global describe it beforeEach */

setTimeout((done) => {
  fetch.mockResponseOnce(JSON.stringify({ name: FAKE_CONTENT }))
  fetch.mockResponseOnce(JSON.stringify({ name: CONFIG_TEST }))
  done()
}, 5)

describe.skip('App tests', () => {
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
    it.skip('renders the correct number of articles', () => {
      console.log(wrapper.html())
    })
  })
})
