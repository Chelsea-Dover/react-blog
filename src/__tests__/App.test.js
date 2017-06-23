import React from 'react'
import App from '../App'
import renderer from 'react-test-renderer'
import {shallow} from 'enzyme'
import fetch from 'jest-fetch-mock'
import ARTICLE_CONTENT from '../test-data.json'
// import CONFIG_CONTENT from '../config-test.json'

global.fetch = require('jest-fetch-mock')

/* global expect describe it beforeEach */

describe('App tests', () => {
  let wrapper, app
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify(ARTICLE_CONTENT))
    wrapper = shallow(<App />)
    app = wrapper.instance()
  })
  it('does a snapshot check', () => {
    const component = renderer.create(<App />)
    const json = component.toJSON()
    expect(json).toMatchSnapshot()
  })
  it('converts to html', () => {
    expect(app.find('.articleWrapper').text).toEqual('<h1>Howdy!</h1>')
  })
})
