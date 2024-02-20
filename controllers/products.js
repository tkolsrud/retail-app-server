import axios from 'axios'


// To Dos:

// Index
  // Index All DONE
  // Index Categories DONE
  // Index electronics
  // Index jewelry
  // Index men's clothing
  // Index women's clothing
// Show

async function indexAllProducts(req, res) {
  try {
    const products = await axios.get('https://fakestoreapi.com/products')
    res.status(200).json(products.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function indexCategories(req, res) {
  try {
    const categories = await axios.get('https://fakestoreapi.com/products/categories')
    res.status(200).json(categories.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function categoryDetail(req, res) {
  try{
    const products = await axios.get(`https://fakestoreapi.com/products/category/${req.params.category}`)
    res.status(200).json(products.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  indexAllProducts as allProducts,
  indexCategories as allCategories,
  categoryDetail
}

