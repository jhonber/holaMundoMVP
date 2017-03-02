var Reciclador = require('../../models/reciclador');




var newUser = function (req, res) {

  var reciclador = new Reciclador(req.body);
  reciclador.save(function(err){
    if (err)
      return res.json({'ans':err});
    res.json({'ans' : 'OK'});
  });

  // Reciclador.findOneAndUpdate(
  //   req.body,                     /* query */
  //   req.body,                     /* update */
  //   { upsert: true},  /* create if it doesn't exist */
  //   function(err,doc) {
  //     if (err)
  //       return res.json({'err ': err});
  //     console.log(`usuario guardado con exito ->${doc}`);
  //     res.json({'ans':'OK','doc':doc});
  //   });

};

module.exports = newUser;
