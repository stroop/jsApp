/**
 * Created by jacobstroop on 3/12/16.
 */
app.controller('HeadController', function ($scope, $location) {

    // Set activeNav property on page load, displayed in brand parens
    if($location.path()==='/')
        this.activeNav = '/home';
    else
        this.activeNav = $location.path();


    this.setActiveNav = function (navName) {
        this.activeNav = navName;
    }

    this.isActiveNav = function (navName) {
        return this.activeNav === navName;
    }

    // $scope.isActive = function (viewLocation) {
    // return viewLocation === $location.path();
    // };

});
