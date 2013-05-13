
/*
 * GET users listing.
 */

exports.list = function(req, res){
   db.collection('profile', function(err, collection) {
        collection.find().toArray(function(err, items) {
			res.render('users', { title: 'Users', users: items});
        });
    });
};