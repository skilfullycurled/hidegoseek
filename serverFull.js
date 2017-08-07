var fs = require('fs');

//LOAD DB
var nedb = require('nedb');
var geodb = new Datastore({ filename: 'db/geodb.db', autoload: true });

//LOAD TEMPLATING ENGINE
var mustache = require(mustacheExpress);
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');


// LOAD SERVER
var https = require('https');
var express = require('express');

var app = express();

var SSLOptions = {
    cert: fs.readFileSync('/home/skilfullycurled/.certs/fullchain.pem'),
    key: fs.readFileSync('/home/skilfullycurled/.certs/privkey.key')
};

var server = https.createServer(SSLOptions, app);

server.listen(8084, function(){
  console.log('bring it on port */8084')
});



app.use(express.static('assets'));



var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

// INITIAL PAGE
app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

// RECEIVING AND STORING DATA
app.post('/upload', jsonParser, function(req, res){
  console.log("Got an incomming requst...");
  var points = req.body;
  console.log(req.body);

  // GET AN INITAL POINT SO THAT WE CAN SUBTRACT IT FOR
  // DRAWING THE MESHLINE
  var initial = points[0].local.lla;
  // SAVE INITAL POINT FOR GEOPOSE LATER
  var points.initial = initial;

  var path = ''

  points.forEach(function(point, initial){

    var local = point.local.lla;
    var meshline = {};

    // MESHLINE X, Y, EQUALS LOCAL MINUS INITIAL
    meshline.x = local.x - initial.x;
    meshline.y = local.y - initial.y;

    // Z, THE HEIGHT EQUALS THE HOUR OF THE DAY THAT THE DATA WAS CREATED
    meshline.z = point.date.getHours();

    // ADD THE MESHLINE DATA TO THE POINT WE RECEIVED ORIGINALLY
    point.meshline = meshline;

    // THE MESHLINE OBJECT WILL TAKE A PATH IN THE FORM OF
    // 'x1, y1, z1 ...xi, yi, zi'
    path = path.concat(point.meshline.x + ',', point.meshline.y + ',', point.meshline.z + ', ' );
  });

  point.path = path;

    // SAVE THE DATA
    db.update(points, { upsert: true }, function (err, numReplaced, upsert) {
      console.log('DATA SAVED')
    });

  res.json('You sent me a list of ${cars.length} cars.');

});

app.get('/goseek/:date', function(req, res){

  var date = req.params.date;

  // GET ALL DOCUMENTS THAT MATCH THE DATE
  geodb.getAll({'points.date': {$eq : date}}, function(err, points){

    res.render('goseek.html', points);

  }

});
