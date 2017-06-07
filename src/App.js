import React, { Component } from 'react';
import './App.css';
import Header from './Header'
import Footer from './Footer'
import AllArticles from './AllArticles'
import marked from "marked";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      blogTitle: 'Best Blog',
      subTitle: 'This is the very best Best Blog!',
      footerMessage: 'Thanks for stopping by!'
    }
  }

  componentWillMount() {
  const readmePath = require("../articles/test-blog.md");

  fetch(readmePath)
    .then(response => {
      return response.text()
    })
    .then(text => {
      this.setState({
        markdown: marked(text)
      })
    })
  }

  render() {
    const { markdown } = this.state;
    return (
      <div>
        <Header
          blogTitle={this.state.blogTitle}
          subTitle={this.state.subTitle}
        />

        <AllArticles
          markDownTest={markdown}
        />

        <Footer
          footerMessage={this.state.footerMessage}
        />
      </div>
    );
  }
}

export default App;
