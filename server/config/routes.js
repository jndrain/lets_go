var user = require('./../controllers/users.js');
var poll = require('./../controllers/polls.js');

module.exports = function(app){
	app.post('/create', function(req, res){
		user.createUser(req, res);

	})
	app.post('/poll/:curr_user', function(req, res){
		poll.createPoll(req, res);
	})
	app.get('/allpolls', function(req, res){
		poll.allPolls(req, res);
	})
	app.get('/question/:questid', function(req, res){
		poll.eachQuest(req, res);
	})
}