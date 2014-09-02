var express = require('express');
var router = express.Router();

/* GET about page. */
router.get('/', function(req, res) {
  res.render('about', { title: 'Mike Mases.',
                           js: 'javascripts/about.js',
                       avatar: 'images/avatar.png',
                      subject: 'and this is about me'});
});

module.exports = router;
