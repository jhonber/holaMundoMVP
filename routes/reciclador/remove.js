var Reciclador = require('../../models/reciclador');

var remove = function (req, res) {
  Reciclador.remove(
    {'id' : req.params.id},
    function(err) {
      if (err)
        return res.json({'ans':err});
      res.json({'ans' : 'OK'});
    });
};

module.exports = remove;
