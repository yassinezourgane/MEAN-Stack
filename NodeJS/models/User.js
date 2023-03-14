const mongoose = require('mongoose');

var User = mongoose.model('User',
{
    name: { type: String }, 
    position: {type: String},
    office: { type: String }, 
    salary: { type: Number }
});
module.exports= {User};