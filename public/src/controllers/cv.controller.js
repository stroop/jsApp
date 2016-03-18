/**
 * Created by jacobstroop on 3/13/16.
 */

app.controller('CVController', function ($scope, $route) {

    // call made to db from dataService - resolves promise
    // before returning data in route params
    $scope.cv = $route.current.locals.cv;

    //console.log($scope.cv);
    // scope message for debugging purposes
    $scope.message = "Controller is connected to view";
});
