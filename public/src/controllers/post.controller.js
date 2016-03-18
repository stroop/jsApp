'use strict';

app.controller('PostController', function($scope, $route) {

    $scope.post = $route.current.locals.post;

    $scope.htmlbody = '<h1>Here is the html, bitch</h1>';

});