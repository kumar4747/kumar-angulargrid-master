var app = angular.module('app', ['ngTouch', 'ui.grid']);
app.controller('MainCtrl', ['$scope',
    function($scope) {
        $scope.gridOptions = {};
        $scope.Delete = function(row) {
            var index = $scope.gridOptions.data.indexOf(row.entity);
            $scope.gridOptions.data.splice(index, 1);
        };
        $scope.gridOptions.columnDefs = [{
            name: 'firstName',
            field: 'firstName'
        }, {
            name: 'lastNamer',
            field: 'firstName'
        }, {
            name: 'ShowScope',
            cellTemplate: '<button class="btn primary" ng-click="grid.appScope.Delete(row)">Delete Me</button>'
        }];
        $scope.gridOptions.data = [{
            "firstName": "Cox",
            "lastName": "Carney",
            "company": "Enormo",
            "employed": true
        }, {
            "firstName": "Lorraine",
            "lastName": "Wise",
            "company": "Comveyer",
            "employed": false
        }, {
            "firstName": "Nancy",
            "lastName": "Waters",
            "company": "Fuelton",
            "employed": false
        }];
    }
]);
