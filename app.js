(function () {
    angular.module('LunchCheck', [])
    .controller('LCController', LCController);

    LCController.$inject = ['$scope'];
    function LCController($scope) {
        $scope.name = {};
        
        $scope.displayMessage = function () {
            var totalCount = calculateLengthString("$scope.name")
            if (totalCount == 0)
            {
                return "Please enter data first";
            }
            elseif (totalCount > 0 && totalCount <=3)
            {
                return "Enjoy!";
            }
            elseif (totalCount > 3)
            {
                return "Too much!";
            }
        };
        
        function calculateLengthString(str) {
            var string = str.split(", ");
            var cnt = 0;
            for(i=0; i<string.length; i++)
            {
                cnt = cnt+1;
            }
            return cnt;
        }    
    }
}) ();