const express = require("express");
const app = express();
app.set('view engine', 'ejs');

app.use(express.static("Public"));

//tener en cuenta para los archivos estaticos 
app.use("/archivos",express.static(__dirname+"/Public"))
console.log(__dirname);

app.get("/",(req,res)=>{
    res.render("index");
})

app.listen(3000,()=>{
    console.log("ok servicios");
});