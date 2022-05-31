const express = require("express");
const app = express();

app.get('/',function(peticion,respuesta){
    respuesta.send("estoy funcionando");
});

app.get('/contacto',function(peticion,respuesta){
    respuesta.send("este en el contacto");
});
app.listen(3000,function(){
    console.log("ok");
})