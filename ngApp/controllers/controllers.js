var myapp;
(function (myapp) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(carService) {
                this.carService = carService;
                this.makes = this.carService.getAllMakes();
            }
            HomeController.prototype.getMatchingMakes = function () {
                this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
                console.log(this.matchingMakes);
            };
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        var AboutController = (function () {
            function AboutController() {
                this.message = 'Hello from the about page!';
            }
            return AboutController;
        }());
        Controllers.AboutController = AboutController;
    })(Controllers = myapp.Controllers || (myapp.Controllers = {}));
})(myapp || (myapp = {}));
