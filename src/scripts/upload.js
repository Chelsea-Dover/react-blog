const URL = 'https://cmsblog-aaa94.firebaseio.com'

const fs = require('fs')
const fetch = require('node-fetch')

if (process.argv.length <= 3) {
  console.log('Usage: ', __filename, ' path/to/directory')
  process.exit(-1)
}

const path = process.argv[2]
const path2 = process.argv[3]

fetch(`${URL}/articles.json`, {method: 'DELETE'})
  .then((output) => {
    console.log(output.statusText)
    fs.readdir(path, function (err, items) {
      console.log(items)
      items.forEach((filename) => {
        fs.readFile(path + filename, 'utf8', (err, data) => {
          const trimFile = filename.replace(/\.[^/.]+$/, '')
          fetch(`${URL}/articles/${trimFile}.json`, {
            method: 'PUT',
            body: JSON.stringify({data}),
            contentType: 'application/json'
          })
          .then((output) => console.log(output.statusText))
        })
      })
    })
  })

fetch(`${URL}/userConfig.json`, {method: 'DELETE'})
  .then((output) => {
    fs.readFile(path2, 'utf8', (err, configData) => {
      console.log(configData)
      fetch(`${URL}/userConfig/config.json`, {
        method: 'PUT',
        body: configData,
        contentType: 'application/json'
      })
      .then((output) => console.log('config', output.statusText))
    })
  })
