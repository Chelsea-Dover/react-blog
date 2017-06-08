import React, {Component} from 'react'
import PropTypes from 'prop-types'

const style = {
  padding: '20px 35px',
  width: '78%',
  margin: '10px auto',
  borderRadius: '3px',
  fontSize: '1.1em',
}

export default class AllArticles extends Component {
  render () {
    // console.log(this.props.markdownList)
    if (this.props.markdownList === undefined) {
      return null
    }
    const articles = []

    this.props.markdownList.forEach((content) => {
      articles.push(
        <article
          style={style}
          className='atricleWrapper'
          dangerouslySetInnerHTML={{__html: content}}
        />
      )
    })


    // const articles = this.props.markdownList.map((content) => {
    // return
    //   <article
    //     dangerouslySetInnerHTML={{__html: content}}
    //   />
    // })

    console.log(articles)
    return (
      <div>
        {articles}
      </div>
    )
  }
}

AllArticles.propTypes = {
  markdownList: PropTypes.array
}
