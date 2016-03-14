// Declare single global app variable
var app = angular.module('jsApp', ['ngRoute']);

// App routing and configuration
app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				controller: 'MainController',
				templateUrl: 'views/home.html'
			})
			.when('/blog', {
				controller: 'BlogController',
				templateUrl: 'views/blog.html'
			})
			.when('/projects', {
				controller: 'ProjectController',
				templateUrl: 'views/projects.html'
			})
			.when('/cv', {
				controller: 'CVController',
				templateUrl: 'views/cv.html'
			})
			.when('/about', {
				controller: 'AboutController',
				templateUrl: 'views/about.html'
			})
			.otherwise({
				redirectTo: '/home'
			}); // routeProvider

		$locationProvider.html5Mode(true);
	});
