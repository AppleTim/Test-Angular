function mainController($scope) {

    $scope.nom = '';
    $scope.num = '';
    $scope.contact=[];
    
    $scope.create = function () {
        $scope.contact.push({nom:$scope.nom, num:$scope.num});
    }
    $scope.remove = function($index){
        $scope.contact.splice($index, 1);
        
    } 
        
}