const mongoose = require('mongoose')

const transactionSchema = new mongoose.Schema(
  {
    userid: {
      type: String,
      required: [true, 'UserID is required'],
    },
    amount: {
      type: Number,
      required: [true, 'Amount required'],
    },
    type: {
      type: String,
      required: [true, 'type is req'],
    },
    category: {
      type: String,
      required: [true, 'Category required'],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, 'description required'],
    },
    date: {
      type: Date,
      required: [true, 'Date is required'],
    },
  },
  { timestamps: true }
)

const transactionModel = mongoose.model('transaction', transactionSchema)
module.exports = transactionModel
