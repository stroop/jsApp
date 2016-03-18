/**
 * Created by jacobstroop on 3/12/16.
 */

// project controller
app.controller('ProjectController', function ($scope, $location, $http) {

    $scope.formData = {};

    var projects = [
        {
            name: 'jacobstroop.com',
            type: 'personal',
            status: 'In Progress',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        },
        {
            name: 'project 2',
            type: 'professional',
            status: 'Completed',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        },
        {
            name: 'project 3',
            type: 'personal',
            status: 'Concept',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        },
        {
            name: 'project 4',
            type: 'personal',
            status: 'In Progress',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        },
        {
            name: 'project 5',
            type: 'professional',
            status: 'Completed',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        },
        {
            name: 'project 6',
            type: 'personal',
            status: 'Concept',
            start: '4/1/2015',
            complete: '8/1/2015',
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", tags: ['#jsApp', '#jacobstroop.com'],
            techs: ['HTML5', 'CSS3', 'AngularJS', 'jQuery', 'JavaScript', 'MySQL', 'PHP']
        }
    ];

});
