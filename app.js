var app = angular.module("app", ['ui.router']);

/*
*   Routing.
*/
app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

    // Fix ambiguity views root state
    $urlRouterProvider.when('', '/');

    // Home
    var home = {
        name: 'home',
        url: '/',
        templateUrl: 'views/home.html'
    };

    /*
    *   Nested views
    */
    // Abstract state => "groups states" (cannot explicitly be active)
    var views = {
        name: 'nested',
        url: '/nested-views',
        abstract: true,
        // We use a view (layout) with two ui-views
        templateUrl: 'views/nested-layout.html',
    };

    // First state of nested state (empty url makes initial)
    var viewsContent = {
        name: 'nested.content',
        url: '', // this makes it the initial state
        // Use the named ui-views to target the content
        views: {
            "main": {
                templateUrl: 'views/nested/content.html',
            },
            sidebar: {
                templateUrl: 'views/partials/sidebar.html'
            }
        }
    };

    // Parameter view
    var viewsParams = {
        name: 'nested.content.parameter',
        url: '/:param1/:param2',
        views: {
            // Change the ui-view named 'main' in the nested state (the layout)
            'main@nested': {
                templateUrl: 'views/nested/params.html'
            }
        }
    };

    // 404
    var error = {
        name: 'otherwise', // Special route name
        url: '*path',
        templateUrl: 'views/404.html'
    };

    // Register the states
    $stateProvider.state(home);
    $stateProvider.state(views);
    $stateProvider.state(viewsContent);
    $stateProvider.state(viewsParams);
    $stateProvider.state(error);

}]);

/*
*   Params controller
*/
app.controller('paramsCtrl', ['$state', '$scope', function($state, $scope) {
    // Bind parameters to the scope
    $scope.param1 = $state.params.param1;
    $scope.param2 = $state.params.param2;
}]);

/*
*   Header directive
*/
app.directive('customHeader', [function() {
    return {
        restrict: 'AE',
        scope: true,
        // relative link to a html file
        templateUrl: 'views/partials/header.html'
    };
}]);
