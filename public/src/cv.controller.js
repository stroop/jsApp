/**
 * Created by jacobstroop on 3/13/16.
 */

app.controller('CVController', function ($scope, dataService) {
    $scope.cv = dataService.getCV();

});

app.service('dataService', function($http) {

     var getCV = function() {

        return $http.get('/api/cv')
            .then(function(response) {
                return response.data[0];
            });
    };

    return {
      getCV: getCV
    };
});
