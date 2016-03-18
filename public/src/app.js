// Declare single global app variable
var app = angular.module('jsApp', ['ngRoute', 'ngAnimate', 'ngResource', 'ngSanitize']);

// App routing and configuration
app.config(function ($routeProvider, $locationProvider) {
		$routeProvider
			.when('/home', {
				controller: 'MainController',
				templateUrl: 'views/home.html'
			})
			.when('/blog', {
				controller: 'BlogController',
				templateUrl: 'views/blog.html',
                resolve: {
                    posts: function($route, dataService) {
                        return dataService.getPosts().$promise;
                    }
                }
			})
			.when('/blog/post/:id', {
                controller: 'PostController',
                templateUrl: 'views/post.html',
                resolve: {
                    post: function($route, dataService) {
                        return dataService.getPostById($route.current.pathParams.id).$promise;
                    }
                }
            })
			.when('/projects', {
				controller: 'ProjectController',
				templateUrl: 'views/projects.html'
			})
			.when('/cv', {
				controller: 'CVController',
				templateUrl: 'views/cv.html',
                resolve: {
                    cv: function($route, dataService) {
                        return dataService.getCV().$promise;
                    }
                }
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
