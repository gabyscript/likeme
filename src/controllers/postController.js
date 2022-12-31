
const {obtenerPost, agregarPost} = require('../services/postService');
const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: true}));

const controlador = {

    show: async (req, res) => {
        const post = await obtenerPost();
        res.json(post)           
        console.log("Mostrando imagenes")
        
    }, 

    create: async (req, res) => {
       const {titulo, url, descripcion} = req.body;
       await agregarPost(titulo, url, descripcion);
       res.send("Post agregado con exito")
       
    }   

}

module.exports = controlador;