var express = require('express');
var router = express.Router();

/* GET cv page. */
router.get('/', function(req, res) {
  res.render('cv', { title: 'Mike Mases.',
                        js: 'javascripts/index.js',
                    avatar: 'images/avatar.png',
                   subject: 'and this is my CV'});
});

module.exports = router;
