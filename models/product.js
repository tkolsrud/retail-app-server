import mongoose from 'mongoose'

const Schema = mongoose.Schema

const profileSchema = new Schema ({
    title: String,
    price: Number,
    description: String,
    category: String,
    image: String,
    rating: {
      rate: Number,
      count: Number
    }
  }, {
    timestamps: true,
})