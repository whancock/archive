// app/models/bear.js

var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PhotoSchema   = new Schema({
    title: String,
    url: String,
    date: Date,
    meta: {
    	keywords: [String]
    }
});

module.exports = mongoose.model('Photo', PhotoSchema);