const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker/locale/es');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(request, response)=>{
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} {{name.suffix}}"));
    response.status(200).send('Esta es una app faker');
    
});



app.listen(port, ()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});