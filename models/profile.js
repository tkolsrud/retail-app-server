import mongoose from 'mongoose'

const Schema = mongoose.Schema

const productSchema = new Schema ({
  fakestoreId: Number,
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

const profileSchema = new Schema ({
  name: String,
  photo: String,
  cart: [ productSchema ]
}, {
  timestamps: true,
})

const Profile = mongoose.model('Profile', profileSchema)

export { Profile }