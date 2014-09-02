var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Mike Mases.',
                           js: 'javascripts/index.js',
                       avatar: 'images/avatar.png',
                      subject: ''});
});

module.exports = router;
