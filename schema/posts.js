var mongoose = require('mongoose')
var Schema = mongoose.Schema, 
ObjectId = Schema.ObjectId; 
var Posts = new Schema({
     module: String
}); 
module.exports = mongoose.model('Posts', Posts); 