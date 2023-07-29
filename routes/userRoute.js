const express = require('express')
const {
  loginController,
  registerController,
} = require('../controllers/userController')

//route object
const router = express.Router()

//routes
//POST LOGIN routes
router.post('/login', loginController)

router.post('/register', registerController)

module.exports = router
