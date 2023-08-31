const express = require('express')

const Router = express.Router()

const {userController} = require('../controllers')


Router.post('/register', userController.register)


module.exports = Router