var mongoose = require('mongoose');
mongoose.Promise = global.Promise;

var userSchema = mongoose.Schema({
  id : {
    type : String,
    required: true,
    unique : true
  },

  name : String,
  lastname: String
});

module.exports = mongoose.model('Reciclador', userSchema);
