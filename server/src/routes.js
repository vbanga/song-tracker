var express = require('express')
var router = express.Router()
const AuthenticationControllerPolicy = require('./policies/AuthenticationControllerPolicy')
const AuthenticationController = require('./controller/AuthenticationController')

router.post('/register',
  AuthenticationControllerPolicy.register,
  AuthenticationController.register)

router.get('/hello', (req, res) => { res.send('hello to you too') })

module.exports = router
