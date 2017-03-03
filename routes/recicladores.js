var express = require('express');
var router  = express.Router();
var Reciclador = require('../models/reciclador');


module.exports = function (app, mountPoint) {
  router.get('/', function (req, res) {
    Reciclador.find (function (err, ans) {
      if (err)
        return res.json({'err' : err});
      res.json({'recicladores' : ans});
    });
  });

  router.post('/', function (req, res) {
    var reciclador = new Reciclador(req.body);
    reciclador.save(function (err) {
      if (err)
        return res.json({'ans': err});
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

  });

  router.put('/:id', function (req, res) {
    console.log('id ', req.params.id);
    console.log('body ', req.body);
    Reciclador.findOneAndUpdate(
      {'id' : req.params.id},
      req.body,
      function (err,doc) {
        if (err)
          return res.json({'ans': err});
        console.log('doc: ', doc);
        res.json({'ans': 'OK'});
      });
  });

  router.delete('/:id', function (req, res) {
    Reciclador.remove(
      {'id' : req.params.id},
      function (err) {
        if (err)
          return res.json({'ans': err});
        res.json({'ans': 'OK'});
      });
  });

  app.use(mountPoint, router);
};

