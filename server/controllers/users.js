var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports = (function(){
	return{
		createUser: function(req, res){
			var user = new User(req.body);
			user.save(function(err){
				if(err){
					console.log('error saving user');
				}
				else{
					res.json(user);
				}
			})
		}

	}
})();