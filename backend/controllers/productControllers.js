const Product = require("../models/Product");

//get bu id

const getProductById = async (req, res) => {
  const { id } = req.params;
  try {
    const product = await Product.findById({ id });
    if (product) {
      res.status(200).json({ product, message: "Product Found" });
    } else {
      res.status(404).json({ message: "Product Not foumd" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "error finding the product with this id;" });
  }
};

//get all
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find({});
    if (product) {
      res.status(200).json({ product, message: "Products Found" });
    } else {
      res.status(404).json({ message: "Products Not foumd" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "error finding the products" });
  }
};

//create

const createProduct = async (req, res) => {
  const { name, description, images, price, category, brand, stock } = req.body;
  try {
    const product = await Product.create({
      name,
      description,
      images,
      price,
      category,
      brand,
      stock,
    });
    if (product) {
      res.status(200).json({ product, message: "Product Created Successfully!!" });
    } else {
      res.status(404).json({ message: "Product Not Created" });
    }
  } catch (err) {
    res
      .status(500)
      .json({ message: "error creating the product" });
  }
};

//update
const updateProduct = (req,res)=>{
  try{
  const {id} = req.params;

  const updated = Product.findByIdAndUpdate({id}, req.body, {new: true});
  res.status(200).json(updated);
  } catch(err){
    res.status(500).json({message : err.message});
  }
}

//delete
const deleteProduct = (req, res) => {
  try {
    const { id } = req.params;

    const deleted = Product.findByIdAndDelete({id});
    res.status(200).json({message : "Product deleted"});
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
};