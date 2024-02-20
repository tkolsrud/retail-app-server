import { Profile } from '../models/profile.js'
import { v2 as cloudinary } from 'cloudinary'


// Profile Controllers

async function index(req, res) {
  try {
    const profiles = await Profile.find({})
    res.json(profiles)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function addPhoto(req, res) {
  try {
    console.log('you hit the route')
    console.log(req)
    const imageFile = req.files.photo.path
    const profile = await Profile.findById(req.params.id)

    const image = await cloudinary.uploader.upload(
      imageFile,
      { tags: `${req.user.email}` }
    )
    profile.photo = image.url

    await profile.save()
    res.status(201).json(profile.photo)
  } catch (err) {
    console.log(err)
    res.status(500).json(err)
  }
}


// Shopping Cart Controllers 

async function addToCart(req, res) {
  try {
    const profile = await Profile.findById(req.params.id)
    profile.cart.push(req.body)
    await profile.save()

    res.status(201).json(profile.cart)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)

  }
}

async function removeFromCart(req, res) {
  try {
    const profile = await Profile.findOneAndUpdate({
      _id: req.params.id
    }, {
      $pull: {
        cart: {
          _id: req.body._id
        }
      }
    })
    profile.save()

    res.status(200).json(profile.cart)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export { 
    index, 
    addPhoto,
    addToCart,
    removeFromCart
   }