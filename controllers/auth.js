import jwt from 'jsonwebtoken'

import { User } from '../models/user.js'
import { Profile } from '../models/profile.js'

async function signup(req, res) {
  try {
    if (!process.env.SECRET) throw new Error('no SECRET in back-end .env file')
    if (!process.env.CLOUDINARY_URL) {
      throw new Error('no CLOUDINARY_URL in back-end .env file')
    }

    const user = await User.findOne({ email: req.body.email })
    if (user) throw new Error('Account already exists')

    const newProfile = await Profile.create(req.body)
    req.body.profile = newProfile._id
    const newUser = await User.create(req.body)

    const token = createJWT(newUser)
    res.status(200).json({ token })
  } catch (err) {
    console.log(err)
    try {
      if (req.body.profile) {
        await Profile.findByIdAndDelete(req.body.profile)
      }
    } catch (err) {
      console.log(err) 
      return res.status(500).json({ err: err.message})
    }
    return res.status(500).json({ err: err.message })
  }
}

// Helper Functions

function createJWT(user) {
  // return jwt.sign({ user }, process.env.SECRET, { expiresIn: ''})
  return jwt.sign({ user }, process.env.SECRET)
}

export { signup }