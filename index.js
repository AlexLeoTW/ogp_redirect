const app_name = 'ogp_redirect'

const express = require('express');
var logger = require('morgan');
const debug = require('debug')(`${app_name}:server`);
const cmdargv = require('./cmdargv')
const app = express();


app.use(express.static('public'));
app.use(logger('dev'));
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index', cmdargv);
});

app.use(function(err, req, res, next){
  console.error(err);
  res.status(500);
  res.end('error');
});

app.listen(cmdargv.port, function () {
  console.log(`${app_name} listening on port ${cmdargv.port}!`);
  debug(`${app_name} listening on port ${cmdargv.port}!`);
});
