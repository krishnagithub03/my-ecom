const Product = require("../models/Product");

//get bu id

const getProductById = async (req,res) => {
    const {id} = req.params;
    try{
        const product = await Product.findById({id});
        if(product){
            res.status(200).json({product, message : "Product Found"});
        } else{
            res.status(404).json({message : "Product Not foumd"});
        }
    } catch(err){
        res.status(400).json({message : "error finding the product with this id;"})
    }
}

//get all 
const getAllProducts = async (req, res) => {
  try {
    const product = await Product.find();
    if (product) {
      res.status(200).json({ product, message: "Product Found" });
    } else {
      res.status(404).json({ message: "Product Not foumd" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: "error finding the product with this id;" });
  }
};

//create 

const createProduct = async (req, res) => {
    const {} = req.body;
  try {
    const product = await Product.create({
        
    });
    if (product) {
      res.status(200).json({ product, message: "Product Found" });
    } else {
      res.status(404).json({ message: "Product Not foumd" });
    }
  } catch (err) {
    res
      .status(400)
      .json({ message: "error finding the product with this id;" });
  }
};

//update


//delete