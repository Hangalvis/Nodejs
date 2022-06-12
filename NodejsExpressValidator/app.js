const express = require("express");
const app = express();


const {body,validationResult}= require("express-validator");

app.use(express.json());
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.render("index")
})

app.post("/registrar",[
    body("name","Ingrese un nombre")
    .exists()
    .isLength({min:3}),
    body("edad","ingrese su edad")
    .exists()
    .isNumeric()
],(rq,res)=>{
    const errors = validationResult(rq);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
})

app.listen(3000,()=>{
    console.log("puerto ok 3000");
})
