const express = require('express')
const app = express()

var html = "<h1>Hello World!</h1>";















app.get('/', function (req, res) {
  res.send(html)
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
