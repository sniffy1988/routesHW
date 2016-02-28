(function () {
    function CalcCtrl() {
        this.cost = 12;
        this.lumens = "600";
        this.usage = 1;
        this.lampTypes = ['inc', 'hal', 'cfl', 'led'];
        //CALCULATIONS
        this.powerCalc = function (type) {
            var lum = parseInt(this.lumens);
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
        this.yearCost = function (type) {
            var lum = parseInt(this.lumens);
            switch (type) {
                case 'inc':
                    return ((((lum * 0.0625).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
                    break;
                case 'hal':
                    return ((((lum * 0.0450).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
                    break;
                case 'cfl':
                    return ((((lum * 0.0146).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
                    break;
                case 'led':
                    return ((((lum * 0.0125).toFixed(1) * 365 * this.usage) / 1000) * (this.cost / 100)).toFixed(2);
                    break;
            }
        }
    }

    angular.module('boardsApp')
        .controller('CalcCtrl', CalcCtrl);
})();