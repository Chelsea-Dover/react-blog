import React from 'react'
import SeparatePost from '../SeparatePost'
import {shallow} from 'enzyme'

const FAKE_DATA = [
  { content: '<h1>Hello!</h1>', path: 'pathHello' },
  { content: '<h2>Hey!</h2>', path: 'pathHey' },
  { content: '<h2>Howdy!</h2>', path: 'pathHowdy' }]

/* global describe beforeEach it expect */
describe('Separatearticles tests', () => {
  describe('Has content', () => {
    let wrapper
    const expectedArticle = '<article class="articleWrapper"><h1>Hello!</h1></article>'
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
