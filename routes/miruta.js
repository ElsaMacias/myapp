var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('miruta', { title: 'MiRuta', title2:'con EJS', title3: 'Elsa', title4:'Macías' });
});

module.exports = router;
