const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')
const bunyan = require('bunyan')

var logger = bunyan.createLogger({
  name: 'song-tracker-server'
})
console.log('Hello world')
const app = express()
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'Hello world'
  })
})
app.listen(process.env.PORT || 8081)
logger.info('Listening on port %d', 8081)
