const express = require('express')
const app = express()
const path = require('path')

const indexRoutes = require('./routes/indexRoutes')

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoutes)

app.listen(3000, () => {
  console.log('Server open in http://localhost:3000/')
})