/**
 * Created by val on 10/23/15.
 */

// declare a new module, and inject the $compileProvider
angular.module('compile', [], function ($compileProvider) {


    // configure new 'compile' directive by passing a directive
    // factory function. The factory function injects the '$compile'
    $compileProvider.directive('compile', function ($compile) {
        // directive factory creates a link function
        return function (scope, element, attrs) {
            scope.$watch(
                function (scope) {
                    // watch the 'compile' expression for changes
                    return scope.$eval(attrs.compile);
                },
                function (value) {
                    // when the 'compile' expression changes
                    // assign it into the current DOM
                    element.html(value);
                    $compile(element.contents())(scope);
                }
            );
        };
    });


    $compileProvider.directive('scale', function () {
        return {
            restrict: 'A',
            scope: true,
            link: function (scope, element, attrs) {
                element.addClass('anim');
                var abc = setTimeout(function () {
                    element.removeClass('anim')
                }, 1000);
            }
        };
    });


    $compileProvider.directive('tooltip', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {
                $(element)
                    .attr('title', scope.$eval(attrs.tooltip))
                    .tooltip({placement: "right"});
            }
        }
    });

});

