import React from 'react'
import SeparatePost from '../SeparatePost'
import {shallow} from 'enzyme'
// import {FAKE_DATA} from '../test-data'

const FAKE_DATA = [
  { content: '<h1>Hello!</h1>', path: 'pathHello' },
  { content: '<h2>Hey!</h2>', path: 'pathHey' },
  { content: '<h2>Howdy!</h2>', path: 'pathHowdy' }]

/* global describe beforeEach it expect */
describe('Separatearticles tests', () => {
  describe('Has content', () => {
    let wrapper
    const expectedArticle = '<article style="padding:20px 35px;width:78%;margin:10px auto;border-radius:3px;font-size:1.1em;" class="articleWrapper"><h1>Hello!</h1></article>'
    beforeEach(() => {
      wrapper = shallow(
        <SeparatePost
          articleName={'pathHello'}
          markdownList={FAKE_DATA}
        />
      )
    })

    it('will render the correct content', () => {
      expect(wrapper.find('article').html()).toBe(expectedArticle)
    })
  })
  describe('Does not have content', () => {
    let wrapper
    beforeEach(() => {
      wrapper = shallow(
        <SeparatePost
          articleName={'notValid'}
          markdownList={FAKE_DATA}
        />
      )
    })

    it('will render the correct content', () => {
      expect(wrapper.html()).toBe(null)
    })
  })
})
