const express= require('express')
const mongoose = require('mongoose');
const productRoute = require("./routes/product.route.js");
const Product =require("./models/product.model.js");
const app=express()

app.use(express.json());
app.use(express.urlencoded({extended:false}));

//route
app.use('/api/products',productRoute);

app.get('/',(req,res) => {
    res.send("hello world")
});


mongoose.connect("mongodb+srv://Admin:rYxNJgne4uZmA0wM@backenddb.wq9wt.mongodb.net/NODE-API?retryWrites=true&w=majority&appName=Backenddb")
    .then(() => {
        console.log("conected to the Database");
        app.listen(3000,() => {
            console.log("server is runing on port 3000");
        });
    })

    .catch((err) => {
        console.log("Connection failed! ");
    });

//rYxNJgne4uZmA0wM