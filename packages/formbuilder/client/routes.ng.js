/**
 * Created by val on 10/23/15.
 */

angular.module('compile')
    .run(function ($rootScope, $state) {
        $rootScope.$on('$stateChangeError', function (event, toState, toParams, fromState, fromParams, error) {
            // We can catch the error thrown when the $requireUser promise is rejected
            // and redirect the user back to the main page
            if (error === 'AUTH_REQUIRED') {
                $state.go('/');
            }
        });
    })
    .config(function($urlRouterProvider, $stateProvider, $locationProvider){

        $locationProvider.html5Mode(true);

        $stateProvider
            .state('builder', {
                url: '/forms',
                templateUrl: 'client/builder/views/builder.ng.html',
                controller: 'bob_the_builder'
            })
            .state('render', {
                url: '/forms/:formId',
                templateUrl: 'client/builder/forms/views/builder.ng.html',
                controller: 'bob_the_builder',
                resolve: {
                    "currentUser": function ($meteor) {
                        return $meteor.requireUser();
                    }
                }
            });

        $urlRouterProvider.otherwise("/");
    });
