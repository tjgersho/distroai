var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'DistroAI' });
});



router.get('/fun', function(req,res,next) { next()
}, function (req, res) {
  res.json({"Hello": "from B!"});
});


module.exports = router;
