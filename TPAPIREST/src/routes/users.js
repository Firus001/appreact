const express = require('express');
const router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
/*
router.route('/')
.get((req, res) => {})
.post((req, res) => {})
.patch(() => {})
.put(() => {})
*/

router.get('/:id', (req, res, next) => {
  return res.send('El id es ${req.params.id}')
});

router.get('/nashe', (req, res, next) => {
  req,quiereVerSuPerfil = true
  return res.send('nashe')
  next()
});

module.exports = router;
