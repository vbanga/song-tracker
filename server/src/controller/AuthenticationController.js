const {User} = require('../models')
module.exports = {
  async register (req, res) {
    try {
      console.log('User object', req.body)
      const user = await User.create(req.body)
      res.status(201).send(user.toJSON())
    } catch (err) {
      res.status(400).send({
        error: 'User is already registered'
      })
    }
  }
}
