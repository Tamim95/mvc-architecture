const express=require("express");
const { getProducts, saveProduct } = require("../controllers/products.controller");
//importing from controller


const router=express.Router();


router.get("/products",getProducts);////importing from controller

router.post("/products",saveProduct);

module.exports=router;