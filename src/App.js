import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Footer from './Footer'
import AllArticles from './AllArticles'
import marked from 'marked'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
// import { Route, IndexRoute } from 'react-router'

const context = require.context('./articles', true, /\.(md)$/)
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
      blogTitle: 'Best Blog',
      subTitle: 'This is the very best Best Blog!',
      footerMessage: 'Thanks for stopping by!',
      markdownList: [],
      paths: []
    }
  }

  componentWillMount () {
    files.forEach((path) => {
      fetch(path)
        .then(response => {
          return response.text()
        })
        .then(text => {
          const newMarkdownList = this.state.markdownList.map((content) => { return content })
          const newPath = this.state.paths.map((path) => { return path })
          newPath.push(path.substring(path.lastIndexOf('/') + 1, path.lastIndexOf('.')))
          newMarkdownList.push(marked(text))
          this.setState({
            markdownList: newMarkdownList,
            paths: newPath
          })
        })
    })
  }

  render () {
    const Page = ({ match }) => (
      <div>
        <Link to={`/post/test`}>link</Link>
        <div>HEllo!</div>
      </div>
    )
    const ArticleList = () => (
      <AllArticles
        markdownList={this.state.markdownList}
        linkPaths={this.state.paths}
      />
    )
    return (
      <Router>
        <div>
          <Header
            blogTitle={this.state.blogTitle}
            subTitle={this.state.subTitle}
          />
          <Route path='/post/:id' component={Page} />
          <Route exact path='/' component={ArticleList} />
          <Footer
            footerMessage={this.state.footerMessage}
          />
        </div>
      </Router>
    )
  }
}

export default App
