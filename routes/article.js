var mongo = require('mongodb');

var Server = mongo.Server,
    Db = mongo.Db,
    BSON = mongo.BSONPure;
 
var server = new Server('localhost', 27017, {auto_reconnect: true});
db = new Db('blog', server);

db.open(function(err, db) {
    if(!err) {
        console.log("Connected to 'blog' database");
        db.collection('profile', {strict:true}, function(err, collection) {
            if (err) {
                console.log("The 'profile' collection doesn't exist. Creating it with sample data...");
                populateDB();
            }
        });
    }
});

exports.findAll = function(req, res) {
    db.collection('article', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.create = function(req, res) {
    db.collection('article', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.addStep = function(req, res) {
    db.collection('article', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};

exports.edit = function(req, res) {
    db.collection('article', function(err, collection) {
        collection.find().toArray(function(err, items) {
            res.send(items);
        });
    });
};