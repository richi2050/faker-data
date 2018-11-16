const mongoose = require('mongoose');

const URI_DB = 'mongodb://root:root123@ds041177.mlab.com:41177/faker_information';
mongoose.connect(URI_DB,
    { useNewUrlParser: true },
    () => {
    console.log("Conexión exitosa con la BDD");
});

const Schema =  mongoose.Schema;
const ObjectId = mongoose.Schema.ObjectId;

const userSchema = Schema({
    name: {type:String},
    last_name_1: {type:String},
    last_name_2: {type:String},
    email: {type:String},
    id: {type:String}

});

const User = mongoose.model('User', userSchema);
module.exports = User;