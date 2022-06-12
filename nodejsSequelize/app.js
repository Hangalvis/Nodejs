const express= require("express");
const Sequelize = require("sequelize");
const app = express();

const sequelize = new Sequelize("example","root","",{
    host:"localhost",
    dialect:"mysql"
});

const gamesmodel = sequelize.define('games',{
    //"id":{type:Sequelize.INTEGER, PrimaryKey:true},
    //"id":Sequelize.INTEGER,
    "name":Sequelize.STRING
});

sequelize.authenticate()
    .then(()=>{
        console.log("conexion ok");
    })
    .catch(error =>{
        console.log("se presento un error "+ error);
    })

gamesmodel.findAll({attributes:['name']})
    .then(games =>{
        console.log(games);
    })
    .catch(error=>{
        console.log("se presento un error  "+ error);
    })

app.listen(3000,()=>{
    console.log("port 3000");
});