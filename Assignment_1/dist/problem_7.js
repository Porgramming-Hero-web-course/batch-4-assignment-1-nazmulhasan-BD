"use strict";
{
    //Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const currentYear = new Date().getFullYear();
            return currentYear - this.year;
        }
    }
    const vehicles = new Car("Honda", "Civic", 2018);
    vehicles.getCarAge();
    // console.log(vehicles.getCarAge());
}
