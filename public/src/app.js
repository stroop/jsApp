angular.module('jsApp', ['ngRoute'])
	.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			// .when('/', {
			// 	controller: 'MainController',
			// 	templateUrl: 'views/home.html'
			// })
			.when('/home', {
				controller: 'MainController',
				templateUrl: 'views/home.html'
			})
			//.when('/blog', {
			//	controller: 'MainController',
			//	templateUrl: 'http://localhost:3000/blog.html'
			//})
			.when('/projects', {
				controller: 'MainController',
				templateUrl: 'views/projects.html'
			})
			.when('/cv', {
				controller: 'MainController',
				templateUrl: 'views/cv.html'
			})
			.when('/about', {
				controller: 'MainController',
				templateUrl: 'views/about.html'
			});
			//.otherwise({
			//	redirectTo: '/home'
			//}); // routeProvider
		$locationProvider.html5Mode(true);
	});