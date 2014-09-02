var express = require('express');
var router = express.Router();
var fs = require('fs');

/* GET project stub. */
router.get('/:project', function(req, res) {

    var file_path = './views/project_stubs/' + req.params.project + '.jade';

    fs.exists(file_path, function (exists) {
        if (exists) {
            res.render('project_stubs/' + req.params.project);
        }
        else {
            res.send('Project doesn\'t exist...');
        }
    });
});

module.exports = router;
