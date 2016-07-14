angular.module('contactApp', [])
    .controller('AppCtrl', function($scope) {
        /*$scope.clickHandler = function(){
            // window.alert('Clicked!');
            $scope.isHidden = !$scope.isHidden;
        };*/
        $scope.clickHandler = clickHandler;
        $scope.styleDemo = styleDemo;
        $scope.styleDemo2 = styleDemo2;

        function clickHandler() {
            $scope.isHidden = !$scope.isHidden;
        }

            $scope.contacts = [
            {
                name: 'John Doe',
                phone: '01234567890',
                email: 'john@example.com'
            },
            {
                name: 'Karan Bromwich',
                phone: '09876543210',
                email: 'karan@email.com'
            }
        ];

        /*$scope.styleDemo = function(){
            if(!$scope.styler){
                return;
            }

            return {
                background: 'red',
                fontWeight: 'bold'
            };
        };*/
        function styleDemo() {
            if(!$scope.styler){
                return;
            }

            return {
                background: 'red',
                fontWeight: 'bold'
            };
        }

        function styleDemo2() {
            if(!$scope.styler2){
                return;
            }

            return {
                background: 'blue',
                fontWeight: 'bold'
            };
        }

    })

/*
function AppCtrl($scope){

	$scope.clickHandler = function(){
		// window.alert('Clicked!');
        $scope.isHidden = !$scope.isHidden;
    };

    $scope.contacts = [
        {
            name: 'John Doe',
            phone: '01234567890',
            email: 'john@example.com'
        },
        {
            name: 'Karan Bromwich',
            phone: '09876543210',
            email: 'karan@email.com'
        }
    ];

	$scope.styleDemo = function(){
	    if(!$scope.styler){
	        return;
	    }

	    return {
	        background: 'red',
	        fontWeight: 'bold'
	    };
	};

}
*/
