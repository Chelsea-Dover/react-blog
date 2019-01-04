import React, { Component } from 'react'
import './styles/css/index.css'
import Header from './Header'
import Footer from './Footer'
import AllArticles from './AllArticles'
import SeparatePost from './SeparatePost'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import marked from 'marked'

const SERVER_ROOT = 'https://cmsblog-aaa94.firebaseio.com'

/* global fetch */

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      markdownList: [],
      config: [],
      contact: [],
      titles: []
    }
  }
  componentWillMount () {
    fetch(`${SERVER_ROOT}/articles.json`)
      .then(response => {
        return response.json()
      })
      .then(text => {
        const newMarkdownList = this.state.markdownList.map((item) => Object.assign({}, item))
        Object.keys(text).forEach(x => {
          newMarkdownList.push({content: marked(text[x].data), path: x})
        })
        this.setState({
          markdownList: newMarkdownList
        })
      })
      .catch((error) => {
        console.log(error)
      })

    fetch(`${SERVER_ROOT}/userConfig/config.json`)
      .then(output => {
        return output.json()
      })
      .then((userConfig) => {
        this.setState({
          config: userConfig.config,
          contact: userConfig.contact,
          titles: userConfig.titles
        })
      })
      .catch((error) => {
        console.log(error)
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
        <div className={this.state.config.blogTheme}>
          <Header
            blogTitle={this.state.titles.blogTitle}
            subTitle={this.state.titles.subTitle}
          />
          <Route path='/post/:id' component={SinglePost} />
          <Route exact path='/' component={ArticleList} />
          <Footer
            footerMessage={this.state.titles.footerMessage}
          />
        </div>
      </Router>
    )
  }
}

export default App
