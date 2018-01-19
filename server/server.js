var express = require('express');
var app = express();
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect('mongodb://techart_user:techart_user@ds159235.mlab.com:59235/qa_tracker');
var db = mongoose.connection;
// var db = mongojs('admin', ['user_info', 'data_info']);
var bodyParser = require('body-parser');
var cors = require('cors');
// var jwt = require('jsonwebtoken');
// const saltRounds = 10;
// var config = require('./config.js');
// var cors = require('cors')
var morgan = require('morgan');
// var localStorage = require('localStorage');
// var store = require('store');
app.use(express.static(path.join(__dirname, './../dist')));
app.use(bodyParser.json());
app.use(morgan('dev'));
var cluster = require('cluster');
var numCPUs = require('os').cpus().length;
var test_case_routes = require('./routes/test_cases.routes');
//Comment it later and enable for one endpoint i.e 4200 only
app.use(cors());


    
// app.get('*/', function (req, res) {
//     console.log('.......................');
//     res.sendFile(path.resolve('./../dist/index.html'));
// })
app.use('/testcase_status',test_case_routes);

if (cluster.isMaster) {
  //console.log(`Master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    //console.log(`worker ${worker.process.pid} died`);
  });
} else {
   app.listen(3000);
   console.log('node server running on port number', 3000);
}


process.on('uncaughtException', function (err) {
    console.error(err);
    console.log("Node stopped working...");
});

