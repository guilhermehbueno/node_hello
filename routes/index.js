var mongo = require('mongodb');
 
var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('simulados', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'simulados' database");
        db.collection('profile', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'profile' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findAll = function(req, res) {
    db.collection('profile', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

/*
 * GET home page.
 */

exports.index = function(req, res){
  profile = null;
  db.collection('profile', function(err, collection) {
        collection.find().toArray(function(err, items) {
            profile=items[0];
			res.render('index', { title: 'Express', name: profile.name });
        });
    });
};