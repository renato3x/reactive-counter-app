const { request: req, response: res } = require('express')
const path = require('path')

module.exports = class IndexController {
  static index(request = req, response = res) {
    return response.sendFile(path.join(__dirname, '..', 'public', 'views', 'index.html'))
  }
}