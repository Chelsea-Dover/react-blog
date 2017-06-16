import React from 'react'
import AllArticles from '../AllArticles'
import {shallow} from 'enzyme'
import {FAKE_DATA} from '../test-data'

/* global describe beforeEach it expect */
describe('All articles tests', () => {
  describe('articles not populated', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <AllArticles
          markdownList={FAKE_DATA}
        />
      )
    })

    it('renders the correct amount of articles', () => {
      expect(wrapper.find('.articleWrapper').length).toBe(3)
    })
  })
  describe('articles is undefined', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <AllArticles
          markdownList={undefined}
        />
      )
    })

    it('will not render anything in the main wrapper div', () => {
      expect(wrapper.find('.AllArticleWrapper').length).toBe(0)
    })
  })
})
