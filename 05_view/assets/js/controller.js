angular.module('contactApp', ['ngRoute'])

/*-----------------------------------
| Routes
------------------------------------*/

.config(function($routeProvider){

    $routeProvider.when('/', {
        controller: 'indexCtrl',
        templateUrl: 'assets/partials/index.html'
    })

    .when('/add-contact', {
        controller: 'addCtrl',
        templateUrl: 'assets/partials/add.html'
    })

    .when('/contact/:id', {
        controller: 'contactCtrl',
        templateUrl: 'assets/partials/contact.html'
    })

    .otherwise({
        redirectTo: '/'
    });

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
    var vm = {
        'contacts' : [
            {
                name: '가나다',
                phone: '01234567890',
                email: 'john@example.com'
            },
            {
                name: '홍길동',
                phone: '09876543210',
                email: 'karan@email.com'
            }
        ]
    };
    $scope.contacts = vm.contacts;
    /*$scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: '홍길동',
            phone: '09876543210',
            email: 'karan@email.com'
        }
        ];*/
})

/*-----------------------------------
| Add Controller
------------------------------------*/

.controller('addCtrl', function($scope){

})

/*-----------------------------------
| Contact Controller
------------------------------------*/

.controller('contactCtrl', function($scope, $routeParams){

    console.log($routeParams.id);

});