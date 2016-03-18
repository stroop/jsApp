'use strict';

app.controller('BlogController', function ($scope, $route) {

    $scope.posts = $route.current.locals.posts;

    // debugging message on scope
    $scope.message = "Controller is connected to view."
});