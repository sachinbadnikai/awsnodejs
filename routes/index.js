const express = require("express");
const createProduct = require("../controllers/Products.js");
 
const router = express.Router();

router.post('/', createProduct);
 
export default router;
