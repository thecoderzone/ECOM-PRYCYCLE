const { findById, findByIdAndUpdate } = require('../models/product')
const Product = require('../models/product')

//creating new product => /api/v1/product/new
exports.newProduct = async(req, res, next) => {

     const product = await Product.create(req.body)

     res.status(201).json({
          success: true,
          product
     })
}

//get all products => /api/v1/products
exports.getProducts = async(req, res, next) => {

     const products = await Product.find();

          res.status(200).json({
          success : true ,
          count: products.length,
          products
     })
}

// Getting single product = /api/v1/product/:id
exports.getSingleProduct = async (req, res, next)  => {
     const product = await Product.findById(req.params.id);

     if(!product) {
          return res.status(404).json({
               success: false,
               message : "product not found"

          })
     }

     res.status(200).json({
          success: true,
          product
     })
}

// Updating a product => /api/v1/product/id
exports.updateProduct = async (req, res, next) => {
     let product = await Product.findById(req.params.id);

      if(!product) {
          return res.status(404).json({
               success: false,
               message : "product not found"

          })
     }

     product = await Product.findByIdAndUpdate(req.params.id, req.body, {

          new: true,
          runValidators: false,
          UserFindAndModify:false
     });

     res.status(200).json({
          success: true,
          product
     })
}

// Deleting a Product => /api/v1/admin/product/:id
exports.deleteProduct = async (req, res) => {
     const { id } = req.params;
     try {
          const product = await Product.findOneAndDelete({ _id: id });

          if (!product) {
          return res.status(404).json({ 
          message: "Product not found" });
     }
     res.status(200).json({ 
          message: "Product deleted successfully" });

     } catch (error) {
     res.status(500).json({ 
          message: error.message });
     }
};