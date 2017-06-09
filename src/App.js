import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import AllArticles from './AllArticles'
import marked from 'marked'

const context = require.context('./articles', true, /\.(md)$/)
const files = []
const fileNames = []

context.keys().forEach((filename)=>{
  files.push(context(filename))
  fileNames.push(filename)
})

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blogTitle: 'Best Blog',
      subTitle: 'This is the very best Best Blog!',
      footerMessage: 'Thanks for stopping by!',
      markdownList: []
    }
  }

  componentWillMount() {
    files.forEach((path) => {
      fetch(path)
        .then(response => {
          return response.text()
        })
        .then(text => {
          const newMarkdownList = this.state.markdownList.map((content) => {return content})
          newMarkdownList.push(marked(text))
          this.setState({
            markdownList: newMarkdownList
          })
          console.log(this.state.markdownList)
        })
      })
  }

  render() {
    return (
      <div>
        <Header
          blogTitle={this.state.blogTitle}
          subTitle={this.state.subTitle}
        />

        <AllArticles
          markdownList={this.state.markdownList}
        />

        <Footer
          footerMessage={this.state.footerMessage}
        />
      </div>
    );
  }
}

export default App;
