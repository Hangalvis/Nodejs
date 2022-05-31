const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const key = require("./settings/key")

app.set("key",key.key);
app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.get("/",(req,res)=>{
    res.send("hola");
});

app.listen(3000,()=>{
    console.log("servidor puerto 3000");
});

app.post("/login",(requ,res)=>{
    if(requ.body.usuario=="admin" && requ.body.pass =="12345"){
        const payload ={
            check:true
        };
        const token =jwt.sign(payload,app.get("key"),{
            expiresIn:"7d"
        });
        res.json({
            message:"autenticacion exitosa",
            token:token
        });
    }else{
        res.json({
            message:"clave o contraseña incorrectas"
        })
    }
});


const verificacion = express.Router();

verificacion.use((req,res,next)=>{
    let token = req.header["x-access-token"]|| req.headers["authorization"];
    //console.log(token);
    if(!token){
        res.status(401).send({
            error:"es necesario el token de autenticacion"
        })
        return
    }

    if(token.startswith('Bearer ')){
        token = token.slice(7,token.length);
        console.log(token);
    }

    if(token){
        jwt.verify(token,app.get("key"),(error,decode)=>{
            if(error){
                return res.json({
                    message:"el token no valido"
                });
            }else{
                req.decode =decode;
                next();
            }

        })
    }
});

app.get("/info",(req,res)=>{
    res.json("informacion obtenida");
});