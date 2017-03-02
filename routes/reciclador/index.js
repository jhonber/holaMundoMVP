var router = require('express').Router();

router.get('/',require('./all.js'));
router.post('/',require('./new.js'));
router.put('/:id',require('./update.js'));
router.delete('/:id',require('./remove.js'));



module.exports = router;
