import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
// import {shallow} from 'enzyme'
import fetch from 'jest-fetch-mock'
// import {FAKE_CONTENT} from '../test-data'
import CONFIG_TEST from '../config-test.json'

global.fetch = require('jest-fetch-mock')

/* global expect describe it  */

// setTimeout((done) => {
  // fetch.mockResponse(JSON.stringify(FAKE_CONTENT))
  // fetch.mockResponse(JSON.stringify(CONFIG_TEST))
// console.log(JSON.stringify({ config: FAKE_CONTENT }))
// const test = CONFIG_TEST
// console.log(test.titles)
fetch.mockResponseOnce(JSON.stringify(CONFIG_TEST))
// fetch.mockResponseOnce(JSON.stringify(FAKE_CONTENT))
// fetch.mockResponseOnce(JSON.stringify({ name: CONFIG_TEST }))
//   done()
// }, 4)

describe('App tests', () => {
  it('does a snapshot check', () => {
    const component = renderer.create(<App />)
    // console.log(component)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
})
