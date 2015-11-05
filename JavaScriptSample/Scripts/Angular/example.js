angular.module('ui.bootstrap.demo', ['ngAnimate', 'ui.bootstrap']);
angular.module('ui.bootstrap.demo').controller('AlertDemoCtrl', function ($scope) {
    $scope.alerts = [];
    $scope.statusModel;
    $scope.addAlert = function () {
        $scope.alerts.push({ type: 'info', msg: 'Another alert!' });
    };

    $scope.$watch('statusModel', function () {
        if ($scope.statusModel === "warning") {
            $scope.alerts.push({ type: $scope.statusModel, msg: 'Warning Alert!' });
        } else if ($scope.statusModel === "danger") {
            $scope.alerts.push({ type: $scope.statusModel, msg: 'Danger Alert!' });
        } else if ($scope.statusModel === "info") {
            $scope.alerts.push({ type: $scope.statusModel, msg: 'Info alert!' });
        }


    });

    $scope.closeAlert = function (index) {
        $scope.alerts.splice(index, 1);
    };
});