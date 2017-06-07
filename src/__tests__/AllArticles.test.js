import React from 'react'
import AllArticles from '../AllArticles'
import {shallow} from 'enzyme'

describe('All articles tests', () => {
  describe('', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <AllArticles/>
      )
    })
    it('Will render all articles and convert them from markdown to html', () => {
      expect(wrapper.length).toBe(2);
    })
  })
})
