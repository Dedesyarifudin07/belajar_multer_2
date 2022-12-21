const express = require('express');
// const multer = require('multer');
const route = express.Router();
// const path = require('path');
const upload = require('../midleware/multer');

route.get('/', (req,res) => {

    res.status(200).json({
        msg:'you get succes and congratulation'
    })
})

route.post('/upload',upload.single('image'),(req,res) => {
    console.log(req.file.filename);
    res.status(200).json({
        succes: 1,
        images_url:`http://localhost:3000/image/${req.file.filename}`
    })
    
})

module.exports =  route;