const Product = require("../models/product");


exports.getAllProductsStatic = async ( req, res) => {
    res.header('Content-Type', 'application/json');
    const products = await Product.find()
    res.status(200).json({msg:"products testing route"})
}

exports.getAllProducts = async ( req, res) => {
    res.header('Content-Type', 'application/json');
    res.status(200).json({msg:'products route'})
}