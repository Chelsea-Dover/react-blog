// 1. Fetch firebase storage
// 2. delete all content from firebase(config&markdown)
// 3. upload config
// 4. iterat through articles
// 5. upload articles articles.json

const fetch = require('node-fetch')
const SERVER_ROOT = 'https://cmsblog-aaa94.firebaseio.com'
const dir = require('node-dir')
const CONTENT = []

fetch(`${SERVER_ROOT}/`)
  .then((response) => {
    console.log('It worked!')
    // console.log(response)
    return response.json()
  })

dir.readFiles('../articles', {
  match: /.md$/,
  exclude: /^\./
}, function (err, content, next) {
  if (err) throw err
  CONTENT.push(content)
  console.log('content:', content)
  next()
},
function (err, files) {
  if (err) throw err
  console.log('finished reading files:', CONTENT)
})
