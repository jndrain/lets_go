app.controller('pollController', function($scope, $cookies, $routeParams, pollFactory, sessFactory){
	$scope.user = $cookies.get('curr_user');
	pollFactory.eachQuest($routeParams.id, function(returndata){
		$scope.eachquest = returndata;
		console.log('eachquest', $scope.eachquest)
	});
	$scope.createPoll = function(){
		var poll = {
			title: $scope.poll.title,
			opone: $scope.poll.opone,
			optwo: $scope.poll.optwo,
			opthree: $scope.poll.opthree,
			opfour: $scope.poll.opfour,
			asker: $cookies.get('curr_user')
		}
		console.log(poll, 'createdpoll - correct in controller')
		pollFactory.createPoll(poll, $cookies.get('curr_user'));
	}
	pollFactory.allPolls(function(returndata){
		$scope.questions = returndata;
	})
	var count = 0;
	$scope.addVote1 = function(){
			count = count + 1;
			console.log(count)
			$scope.votes1 = count;

		}
	var countone = 0;
	$scope.addVote2 = function(){
			countone = countone + 1;
			$scope.votes2 = countone;

		}
	var counttwo = 0;
	$scope.addVote3 = function(){
			counttwo = counttwo + 1;
			$scope.votes3 = counttwo;

		}
	var countthree = 0;
	$scope.addVote4 = function(){
			countthree = countthree + 1;
			$scope.votes4 = countthree;

		}
	$scope.delete = function(){
		pollFactory.delete(eachquest);
	}

	
})