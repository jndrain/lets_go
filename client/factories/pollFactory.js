app.factory('pollFactory', function($http, $location, $cookies){
	var factory = {};
	factory.eachQuest = function(questid, cb){
		$http.get('/question/' + questid).then(function(returndata){
			cb(returndata.data);
		})
	}
	factory.createPoll = function(poll, curr_user){
		console.log(poll, 'factorypoll - correct in factory')
		console.log(curr_user, 'curruser')
		$http.post('/poll/' + curr_user, poll).then(function(returndata){
			if(returndata){
				$location.url('/dashboard')
			} else {
				console.log("error saving poll");
			}
		})
	}
	factory.allPolls = function(cb){
		$http.get('/allpolls').then(function(questions){
			console.log(questions.data, 'allpolls')
			cb(questions.data);

		})
	}


	return factory;
})