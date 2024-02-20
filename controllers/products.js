import axios from 'axios'

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

async function categoryShow(req, res) {
  try{
    const products = await axios.get(`https://fakestoreapi.com/products/category/${req.params.category}`)
    res.status(200).json(products.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

async function productShow(req, res) {
  try {
    console.log(req.params)
    const product = await axios.get(`https://fakestoreapi.com/products/${req.params.productId}`)
    console.log(product)
    res.status(200).json(product.data)
  } catch(err) {
    console.log(err)
    res.status(500).json(err)
  }
}

export {
  indexAllProducts as allProducts,
  indexCategories as categoryIndex,
  categoryShow as categoryProductIndex,
  productShow
}

