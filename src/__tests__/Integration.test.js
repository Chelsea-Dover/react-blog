import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
// import { shallow } from 'enzyme'
import fetch from 'jest-fetch-mock'
import {FAKE_CONTENT} from '../test-data'
import {CONFIG_TEST} from '../config-test'
import jsdom from 'jsdom'

global.fetch = fetch

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
global.document = doc
global.window = doc.defaultView
global.window.document = {createElement: function () {}}

/* global describe it */

// setTimeout((done) => {
fetch.mockResponse(JSON.stringify(FAKE_CONTENT))
fetch.mockResponse(JSON.stringify(CONFIG_TEST))
//   done()
// }, 50)

describe('App tests', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  // describe('header', () => {
  //   let wrapper
  //   beforeEach(() => {
  //     wrapper = shallow(
  //       <App
  //       />
  //     )
  //   })
  //   it('renders the correct number of articles', () => {
  //     // console.log(wrapper.props('test'))
  //   })
  // })
})
