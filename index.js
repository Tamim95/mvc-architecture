//->npm init -y
//->npm install express nodemon

const express = require("express");
//importing from users.route.js
const userRouter = require("./routes/users.route");

//importing from users.route.js
const productRouter = require("./routes/products.route");


const app=express();
const PORT=3000;
//we have to find data from request body so this code is needed or use can body parser
app.use(express.urlencoded({extended:true}));

//to access this importing users.route we have to do this code
app.use(userRouter);

app.use(productRouter);

app.use((req,res,next)=>{
    res.status(404).json({
        message:"resource not found",
    });
});

app.listen(PORT,()=>{
    console.log(`server is running http://localhost:${PORT}`);
})