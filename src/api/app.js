const express = require('express');
const bodyParser = require('body-parser');
const faker = require('faker/locale/es');

const User = require('../database/dataBase');

const app = express();

const port = process.env.PORT || 3000;

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',(request, response)=>{
    console.log(faker.fake("{{name.lastName}}, {{name.firstName}} , {{name.suffix}}"));
    response.status(200).send('Esta es una app faker');
    
});


app.get('/fakeuser',(request, response)=>{

    for (i = 0; i < 10; i++) {

        const user = User({
            name: faker.name.findName(),
            last_name_1: faker.name.lastName(),
            last_name_2: faker.name.lastName(),
            email: faker.internet.email()

        });

        user.save( (error, user)=>{
            if (error) {
                response.status(400).send(error.message);
            } else {
               // response.send('Logrado');
              }
            });
    }
});



app.listen(port, ()=>{
    console.log("El servidor esta escuchando en el puerto 3000");
});