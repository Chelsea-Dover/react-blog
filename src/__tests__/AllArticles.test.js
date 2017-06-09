import React from 'react'
import AllArticles from '../AllArticles'
import {shallow} from 'enzyme'

const finalHtml = '<article style=\"padding:20px 35px;width:78%;margin:10px auto;border-radius:3px;font-size:1.1em;\" class=\"articleWrapper\"><h1>Hello</h1></article>'

describe('All articles tests', () => {
  describe('articles populated with one post', () => {
    let wrapper, articles
    beforeEach(() => {
      articles = ['<h1>Hello</h1>']
      wrapper = shallow(
        <AllArticles
          markdownList={articles}
        />
      )
    })
    it('will render an article with the correct content', () => {
      expect(wrapper.find('article').html()).toBe(finalHtml)
    })
  })

  describe('articles not populated', () => {
    let wrapper, articles
    beforeEach(() => {
      articles = undefined
      wrapper = shallow(
        <AllArticles
          markdownList={articles}
        />
      )
    })
    it('will not render anything in the div', () => {
      expect(wrapper.find('div').length).toBe(0)
    })
  })
})
