require('dotenv').config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const allproducts = require("./models/productdb");
// const UserModel = require("./models/productdb");
const cors = require("cors");

app.use(express.json());
app.use(cors());

mongoose.connect
    (process.env.REMOTE_CONN)
        .then((res)=>{
          console.log(" We're now connected to remote WinnyzDB mongoDB database!")
            })
        .catch(err=>{console.log(err)})

app.get("/products", (req, res) => {
    allproducts.find({})
    .then(result => {   
            console.log(result[1])
            // res.send(JSON.stringify(result))
            res.json(result)
        })
    .catch( err=>{console.log(err)})
});
  
// app.get("/products/:query", (req, res) => {
//     var para = req.params.query
//     console.log(para);
//     allproducts.findOne({id:para}, (err, result) => {
//         if(!err){
//             // res.json({message:`Successful with params of =  ${para}`})
//             console.log(result)
//             res.json(result)
//         }
        
//     })
// });

app.get("/products/:id", (req, res) => {
    var query = req.params.id
    console.log(`id is ${query}`);
    allproducts.findOne({id:query})
    .then(result => {
        console.log(result)
        res.json(result)     
    })
    .catch(err=>{console.log(err)} )
});

app.get("/app", (req,res)=>{
    res.send('THis should work')
})

app.listen(5080, () => {
  console.log("SERVER FOR WINNYZUI STARTED ON PORT 5080!");
});

