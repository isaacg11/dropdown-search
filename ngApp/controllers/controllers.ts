namespace myapp.Controllers {

    export class HomeController {
      public makes
      public makeId
      public matchingMakes

      public getMatchingMakes() {
        this.matchingMakes = this.carService.getMatchingMakes(this.makeId);
        console.log(this.matchingMakes);

      }

        constructor(private carService) {
          this.makes = this.carService.getAllMakes();
        }
    }


    export class AboutController {
        public message = 'Hello from the about page!';
    }
}
