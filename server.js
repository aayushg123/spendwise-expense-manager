const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const dotenv = require('dotenv')
const colors = require('colors')
const connectDB = require('./config/connectDB.js')
const { route } = require('./routes/transactionRoute.js')
const path = require('path')

dotenv.config()

//database connection
connectDB()
// app init
const app = express()

app.use(morgan('dev'))
app.use(express.json())

//middlewares
app.use(cors())

//routes
//user routes
app.use('/api/v1/users', require('./routes/userRoute'))

//transaction routes
app.use('/api/v1/transactions', require('./routes/transactionRoute'))

//static file
app.use(express.static(path.join(__dirname, './client/build')))
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'))
})

// PORT var

const PORT = 8080 || process.env.PORT

// listen server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
