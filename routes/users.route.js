const express=require("express");
//importing from controller
const { getUsers, saveUser } = require("../controllers/users.controller");
const router=express.Router();


router.get("/users",getUsers);////importing from controller

router.post("/users",saveUser);

module.exports=router;