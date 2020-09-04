(function () {
    angular.module('LunchCheck', [])
    .controller('LCController', LCController);

    LCController.$inject = ['$scope'];
    function LCController($scope) {
        $scope.name = "";
        $scope.message = "";
        
        $scope.displayMessage = function () {
            if($scope.name === "") {
                $scope.message = "Please enter data first";
            }
            else {
                var $nameArray = $scope.name.split(",");
                var $length = $nameArray.length;
                if ($length <= 3)
                {
                    $scope.message = "Enjoy!";
                }
                else {
                    $scope.message = "Too much!";
                }
            }
        };
    }
}) ();
