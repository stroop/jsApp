/**
 * Created by jacobstroop on 3/18/16.
 */

app.directive('postDirective', function($compile) {


    return {
        restrict: 'E',
        replace: true,
        template: '<div>{{html}}</div>'
    }
});