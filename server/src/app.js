const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const bunyan = require('bunyan')
const {sequelize} = require('./models')
const config = require('./config/config')

var logger = bunyan.createLogger({
  name: 'song-tracker-server'
})
console.log('Hello world')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())
var routes = require('./routes.js')

sequelize.sync().then(() => {
  app.use('/', routes)
  app.listen(config.port)
  logger.info('Listening on port %d', config.port)
})
