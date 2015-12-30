'use strict'

let express = require('express')
let app = express()

require('babel-register')({
  presets: ['es2015', 'react']
})

let React = require('react')
let ReactDOMServer = require('react-dom/server')
let Hello = require('./app/components/Hello').default

app.get('/', (req, res) => {
  let html = ReactDOMServer.renderToString(React.createElement(Hello, null))
  res.send(
`<!DOCTYPE html>
<html>
<head></head>
<body>
  <div id="main">${html}</div>
  <script src="/bundle.js"></script>
</body>
</html>
`)
})

app.use(express.static('public'))

let port = process.env.PORT || 8080

app.listen(port, () => {
  console.log(`--- started server on port ${port} ---`)
})
