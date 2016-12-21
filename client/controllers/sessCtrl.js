app.controller('sessionController', function($scope, $cookies, $location, sessFactory){
	$scope.user = $cookies.get('curr_user');
	$scope.createUser = function(){
		sessFactory.createUser($scope.user);
	}
	$scope.logout = function(){
		$cookies.remove('curr_user');
		$location.url('/')
	}
})