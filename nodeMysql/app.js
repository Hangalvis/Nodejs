const mysql = require("mysql");
var conexion = mysql.createConnection({
    host:'localhost',
    database:'example',
    user:'root',
    password:''
});

conexion.connect(function(error){
    if(error){
        throw error;
    }else{
        console.log("conexion exitosa");
    }
});

conexion.query("select * from users",function(error,resultados,fields){
    if(error){
        throw error;
    }

    resultados.forEach(result => {
        console.log(result);
    });
})

conexion.end();