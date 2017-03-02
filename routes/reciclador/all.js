var Reciclador = require('../../models/reciclador');

module.exports = function (req, res) {
  Reciclador.find ( function (err, ans) {
    if (err)
      return res.json({'err' : err});
    res.json({'recicladores' : ans});
  });
};
