import React from 'react'
import App from '../App'
import {shallow} from 'enzyme'
import fetch from 'jest-fetch-mock'
import ARTICLE_CONTENT from '../test-files/test-data.json'

global.fetch = require('jest-fetch-mock')

/* global expect describe it beforeEach */

describe.skip('App tests', () => {
  let wrapper, app
  beforeEach(() => {
    fetch.mockResponseOnce(JSON.stringify(ARTICLE_CONTENT))
    wrapper = shallow(<App />)
    app = wrapper.instance()
  })
  it('converts to html', () => {
    expect(app.find('.articleWrapper').text).toEqual('<h1>Howdy!</h1>')
  })
})
