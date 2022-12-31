
const client = require('../database/conection');
const express = require('express')
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({ extended: true }));

const obtenerPost = async () => {
    
    const {rows} = await client.query("SELECT * FROM posts");
    console.log(rows);
    return rows;
}

const agregarPost = async (titulo, url, descripcion) => {
    
    const consulta = "INSERT INTO posts values (DEFAULT, $1, $2 , $3)";
    const values = [titulo, url, descripcion];
    const result = await client.query(consulta, values);
    console.log("Post agregado correctamente")
}

module.exports = {obtenerPost, agregarPost};