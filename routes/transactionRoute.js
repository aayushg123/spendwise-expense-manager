const express = require('express')
const {
  addTransaction,
  getAllTransaction,
  editTransaction,
  deleteTransaction,
} = require('../controllers/transController')

//route object
const router = express.Router()

//routes
//add transaction POST call
router.post('/add-transaction', addTransaction)

//get transaction
router.post('/get-transaction', getAllTransaction)

router.post('/edit-transaction', editTransaction)

router.post('/delete-transaction', deleteTransaction)

module.exports = router
