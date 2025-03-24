const express= require('express');
const router = express.Router();
const Product =require("../models/product.model.js");
const {getProducts,createProducts,updateProducts,deleteProducts} = require("../controllers/productController.js");
const { model } = require('mongoose');


router.get('/',getProducts);
router.post('/',createProducts)
router.put('/:id',updateProducts)
router.delete('/:id',deleteProducts)




module.exports = router;