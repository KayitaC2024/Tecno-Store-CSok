const {
  getAllProducts,
  getProductByName,
} = require("../controllers/getAllProducts");

//Handler que muestra el producto cuando se lo busca por nombre y si no devuelve todos los productos
const getAllProductsHandler = async (req, res) => {
  const { name } = req.query;

  try {
    // si llega un name muestra el producto
    if (name) {
      const product = await getProductByName(name);
      console.log(product);
      return res.status(200).json(product);
    }
    // si no muestra todos los productos
    else {
      const allProducts = await getAllProducts();
      return res.status(200).json(allProducts);
    }
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllProductsHandler };
