var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  id : {
    type : String,
    required: true,
    unique : true
  },
  name : String,
  lastname: String
});

module.exports = mongoose.model('Reciclador',userSchema);
