var path = require('path');
var webpack = require('webpack');
var subscript = require('markdown-it');
var superscript = require('markdown-it');

module.exports = {
    entry: ['./src/first.jsx'],
    devtool: 'cheap-module-eval-source-map',
    output: { path: __dirname+"/app", filename: 'bundle.js' },
    module: {
        loaders: [
          {
            test: /\.md$/,
            loader: 'babel-loader!react-markdown-component-loader'
          }
        ]
    },
    'markdown-it': {
        preset: 'default',
        typographer: true,
        use: [subscript, superscript]
    }
};
