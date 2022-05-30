var http= require("http");
var servidor = http.createServer(function(peticion,respuesta){
    respuesta.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    respuesta.write('<h1>Servidor basico nodejs</h1>');
    console.log("peticion web");
    respuesta.end();
});

servidor.listen(3000);
console.log("ejecutando el servidor local");