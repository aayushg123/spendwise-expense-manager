const userModel = require('../models/userModel')
const bcrypt = require('bcrypt')

const saltRounds = 5

const loginController = async (req, res) => {
  try {
    const { email, password } = req.body
    const user = await userModel.findOne({ email })
    if (!user) {
      return res.status(404).send('User not found')
    }
    const passwordMatch = await bcrypt.compare(password, user.password);

    if(passwordMatch){
      res.status(200).json({
        success: true,
        user,
      })
    }
    else{
      res.status(400).json({
        success: false,
        message: 'Invalid Credentials',
      })
    }
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    })
  }
}

const registerController = async (req, res) => {
  try {
    const {name,email,password} = req.body;
    const hashedPasswords = await bcrypt.hash(password,saltRounds);

    const newUser = new userModel({name,email,password:hashedPasswords})
    await newUser.save()
    res.status(200).json({
      success: true,
      newUser,
    })
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    })
  }
}

module.exports = { loginController, registerController }
