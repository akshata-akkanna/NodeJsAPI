// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var productSchema = new mongoose.Schema({
    name: String,
    contact_number: Number,
    occupation: String,
    gender:String
});

// Return model
module.exports = restful.model('Products', productSchema);
