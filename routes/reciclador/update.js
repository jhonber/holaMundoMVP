var Reciclador = require('../../models/reciclador');

var update = function (req, res) {
  console.log('id ', req.params.id);
  console.log('body ', req.body);
  Reciclador.findOneAndUpdate(
    {'id' : req.params.id},
    req.body,
    function(err,doc) {
      if (err)
        return res.json({'ans':err});
      console.log('doc: ',doc);
      res.json({'ans' : 'OK'});
    });
};

module.exports = update;
