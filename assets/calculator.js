/* JavaScript Document */

// Необходимая информация
// коэффициент для преобразования леменов в ватт для разных ламп
var inc_conversion = .0625,
    hal_conversion = .0450,
    cfl_conversion = .0146,
    led_conversion = .0125;

var current_lumens = 1600;
// пример получения ватт для 1600 люменов для лампы накаливания
inc_wattage = (current_lumens * inc_conversion).toFixed(1); // 100

var hoursPerDay = 1; // часов в день
var cost = 12 / 100; // цена 12 центов э то 0.12 долларов
// пример определения стоимости в год для лампы накаливания
var inc_cost = (((inc_wattage * 365 * hoursPerDay) / 1000) * cost).toFixed(2);
angular.module('CalcApp', []).controller('CalcCtrl', function ($scope) {
    $scope.cost = 12;
    $scope.lumens = "600";
    $scope.usage = 1;
    //CALCULATIONS
    $scope.powerCalc = function (type) {
        var lum = parseInt($scope.lumens);
        switch (type) {
        case 'inc':
            return (lum * 0.0625).toFixed(1);
            break;
        case 'hal':
            return (lum * 0.0450).toFixed(1);
            break;
        case 'cfl':
            return (lum * 0.0146).toFixed(1);
            break;
        case 'led':
            return (lum * 0.0125).toFixed(1);
            break;
        }
    };
    $scope.yearCost = function (type) {
        var lum = parseInt($scope.lumens);
        switch (type) {
        case 'inc':
            return ((((lum * 0.0625).toFixed(1) * 365 * $scope.usage) / 1000) * ($scope.cost / 100)).toFixed(2);
            break;
        case 'hal':
            return ((((lum * 0.0450).toFixed(1) * 365 * $scope.usage) / 1000) * ($scope.cost / 100)).toFixed(2);
            break;
        case 'cfl':
            return ((((lum * 0.0146).toFixed(1) * 365 * $scope.usage) / 1000) * ($scope.cost / 100)).toFixed(2);
            break;
        case 'led':
            return ((((lum * 0.0125).toFixed(1) * 365 * $scope.usage) / 1000) * ($scope.cost / 100)).toFixed(2);
            break;
        }
    }
});