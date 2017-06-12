import React from 'react'
import ReactDOM from 'react-dom'
import App from '../App'
import {mount} from 'enzyme'

/* global describe it expect beforeEach */

describe('intergration test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
  })
  describe('Rendering', () => {
    let wrapper

    beforeEach((done) => {
      wrapper = mount(<App />)
      setTimeout(() => {
        done()
      }, 50)
    })
    it('', () => {
      expect(wrapper.find('article').length).toBe(3)
    })
  })
})
