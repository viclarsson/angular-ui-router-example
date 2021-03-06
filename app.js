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

    // Contact
    var contact = {
        name: 'contact',
        url: '/contact',
        templateUrl: 'views/contact.html'
    };

    /*
    *   Nested views
    */
    // Abstract state => "groups states" (cannot explicitly be active)
    var nested = {
        name: 'nested',
        url: '/nested-views',
        abstract: true,
        // We use a view (layout) with two ui-views
        templateUrl: 'views/nested-layout.html',
    };

    // First state of nested state (empty url makes initial)
    var nestedContent = {
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
    var nestedParams = {
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
    // otherwise: Special route name which takes routes which are not registered.
    var error = {
        name: 'otherwise',
        url: '*path',
        templateUrl: 'views/404.html'
    };

    // Register the states
    $stateProvider.state(home);
    $stateProvider.state(contact);
    $stateProvider.state(nested);
    $stateProvider.state(nestedContent);
    $stateProvider.state(nestedParams);
    $stateProvider.state(error);
}]);

/*
*   Params controller: takes the params from the $state object and makes it
*   available in the view through the $scope.
*/
app.controller('paramsCtrl', ['$state', '$scope', function($state, $scope) {
    // Bind parameters to the scope
    $scope.param1 = $state.params.param1;
    $scope.param2 = $state.params.param2;
}]);

/*
*   Header directive: Custom directive for showing the header.
*/
app.directive('customHeader', [function() {
    return {
        restrict: 'AE',
        scope: true,
        // relative link to a html file
        templateUrl: 'views/partials/header.html'
    };
}]);
