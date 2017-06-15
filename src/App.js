import React, { Component } from 'react'
import './styles/css/App.css'
import Header from './Header'
import Footer from './Footer'
import AllArticles from './AllArticles'
import SeparatePost from './SeparatePost'
import marked from 'marked'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import userConfig from './client/config.json'

const context = require.context('./articles/', true, /\.(md)$/)
const files = []
const fileNames = []

context.keys().forEach((filename) => {
  files.push(context(filename))
  fileNames.push(filename)
})

/* global fetch */

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdownList: []
    }
  }
  componentWillMount () {
    files.forEach((path) => {
      fetch(path)
        .then(response => {
          return response.text()
        })
        .then(text => {
          const urlPath = path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.'))
          const newMarkdownList = this.state.markdownList.map((item) => Object.assign({}, item))
          newMarkdownList.push({content: marked(text), path: urlPath})
          this.setState({
            markdownList: newMarkdownList
          })
        })
    })
  }

  render () {
    const SinglePost = ({ match }) => {
      if (match === undefined) {
        return null
      }
      return (
        <SeparatePost
          articleName={match.params.id}
          markdownList={this.state.markdownList}
        />
      )
    }
    const ArticleList = () => (
      <AllArticles
        markdownList={this.state.markdownList}
      />
    )
    return (
      <Router>
        <div className={userConfig.blogTheme}>
          <Header
            blogTitle={userConfig.blogTitle}
            subTitle={userConfig.subTitle}
          />
          <Route path='/post/:id' component={SinglePost} />
          <Route exact path='/' component={ArticleList} />
          <Footer
            footerMessage={userConfig.footerMessage}
          />
        </div>
      </Router>
    )
  }
}

export default App
