var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('projects', { title: 'Mike Mases.',
                           js: 'javascripts/projects.js',
                       avatar: 'images/avatar.png',
                      subject: 'and these are my projcets'});
});

module.exports = router;
