var app = angular.module('app', ['ngRoute', 'ngCookies'])

app.config(function($routeProvider){
	$routeProvider
	.when('/', {
		templateUrl: "partials/login.html"
	})
	.when('/dashboard', {
		templateUrl: "partials/dash.html"
	})
	.when('/create', {
		templateUrl: "partials/new.html"
	})
	.when('/poll/:id', {
		templateUrl: "partials/question.html"
	})
	.otherwise({
		redirectTo: "/"
	})
})