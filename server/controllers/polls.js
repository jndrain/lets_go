var mongoose = require('mongoose');
var Poll = mongoose.model('Poll');
var User = mongoose.model('User');

module.exports = (function(){
	return {
		createPoll: function(req, res){
			var newPoll = req.body;
			console.log(newPoll.asker)
			User.findOne({name: newPoll.asker}, function(err, user){
				if(err){
					console.log(err, 'error finding user');
				} else {
					newPoll.asker = user;
					var poll = new Poll(newPoll);
					poll.save(function(err){
						if(err){
							console.log(err);
						} else {
							res.json(poll);
						}
					})
				}
			})	
		},
		allPolls: function(req, res){
			var polls = Poll.find({}, function(err, result){
				if(err){
					console.log(err, 'error finding polls');
				} else {
					console.log(result, 'result in backend controller')
					res.json(result);
				}
			})
		},
		eachQuest: function(req, res){
			Poll.findOne({_id: req.params.questid}, function(err, result){
				if(err){
					console.log('could not find it');
				}
				else{
					res.json(result);
				}
			})
		}
	}
	




	




})();