var scotchApp = angular.module('scotchApp', ['ngRoute']);

// configure our routes
scotchApp.config(function ($routeProvider) {
    $routeProvider
        
          // route for the main page
        .when('/', {
            templateUrl: 'Partials/main.html',
            controller: 'mainController'
        })

        // route for the events page
        .when('/events', {
            templateUrl: 'Partials/events.html',
            controller: 'eventsController'
        })

        // route for the restaurants page
        .when('/restaurants', {
            templateUrl: 'Partials/restaurants.html',
            controller: 'restaurantsController'
        })

        // route for the purchase page
        .when('/purchases', {
            templateUrl: 'Partials/purchases.html',
            controller: 'purchaseController'
        })

    // route for the purchase page
    .when('/contact', {
        templateUrl: 'Partials/contact.html',
        controller: 'contactController'
    });
});

// create the controller and inject Angular's $scope
scotchApp.controller('mainController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'This is the application that is done using Bootstrap and AngularJS';
});

scotchApp.controller('eventsController', function ($scope) {
    // create a message to display in our view
    $scope.message = 'Your visit to Heaven is just a one click away!!!';
});

scotchApp.controller('restaurantsController', function ($scope) {
    $scope.message = 'Delicious Love';
});

scotchApp.controller('purchaseController', function ($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
});

scotchApp.controller('contactController', function ($scope) {
    $scope.message = 'If you want your gifts to be delivered!!';
});