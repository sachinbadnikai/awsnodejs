const Product = require("../models/productModel.js");

 
export const createProduct = async (req, res) => {
    try {
        await Product.create(req.body);
        res.json({
            "message": "Product Created"
        });
    } catch (error) {
        res.json({ message: error.message });
    }  
}
