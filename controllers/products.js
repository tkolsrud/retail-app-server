import axios from 'axios'


// To Dos:

// Index
  // Index All DONE
  // Index Categories
  // Index electronics
  // Index jewelry
  // Index men's clothing
  // Index women's clothing
// Show

async function index(req, res) {
  try {
    const products = await axios.get('https://fakestoreapi.com/products')
    res.status(200).json(products.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  index as allProducts,
}
