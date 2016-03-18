/**
 * Created by jacobstroop on 3/14/16.
 */
app.factory('dataService', function($http, $resource) {

    var blogResource = $resource('/api/blog/:id', {id: '@id'});
    var cvResource = $resource('/api/cv/:id', {id: '@id'});

    var getCV = function() {
        console.log('getCV called');
        return cvResource.get({id: 1});
    };

    var getPosts = function() {
        console.log('getPosts called');
        return blogResource.query();
    };

    var getPostById = function(id) {
        console.log('getPostById called');
        return blogResource.get({id: id});
    };

    return {
        getCV: getCV,
        getPosts: getPosts,
        getPostById: getPostById
    }
});