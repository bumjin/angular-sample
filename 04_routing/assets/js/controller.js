angular.module('contactApp', ['ngRoute'])

/*-----------------------------------
| Routes
------------------------------------*/

.config(function($routeProvider){

    $routeProvider
    .when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/modify-contact', {
        controller: 'modifyCtrl',
        templateUrl: 'assets/partials/modify.html'
    })

    .when('/contact/:id/:name', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

    // This is optional
    //$locationProvider.html5Mode(true);

})

/*-----------------------------------
| Truncate Filter
------------------------------------*/

.filter('truncate', function(){
    return function(input, limit){
        return (input.length > limit) ? input.substr(0, limit)+'…' : input;
    };
})

/*-----------------------------------
| Index Controller
------------------------------------*/

.controller('indexCtrl', function($scope){
    console.log('in the index controller')
})

/*-----------------------------------
| Add Controller
------------------------------------*/

.controller('addCtrl', function($scope){

})

.controller('modifyCtrl', function($scope){
    console.log('in the modify controller')
    $scope.modifyTest = 'hello'
})
/*-----------------------------------
| Contact Controller
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams){
    console.log($routeParams.id)
    console.log($routeParams.name)
});

