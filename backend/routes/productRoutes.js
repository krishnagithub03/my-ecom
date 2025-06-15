const express = require('express');
const router = express.Router();

const  {createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct} = require('../controllers/productControllers');

const protect = require('../middlewares/authMiddleware');

//public 
router.get("/", getAllProducts);
router.get("/:id", getProductById);

//protected
router.post("/", protect,createProduct);
router.put("/:id", protect,updateProduct);
router.delete("/:id",protect, deleteProduct);

module.exports = router;