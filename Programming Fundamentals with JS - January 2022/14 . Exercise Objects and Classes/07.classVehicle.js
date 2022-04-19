class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = {
            ...parts,
            quality: (parts.engine * parts.power)
        };
        this.fuel = fuel;
        // console.log(this.parts);
    }
    drive(num) {
        this.fuel -= num;
    }
}

// let bdgfdgfdgfdgf = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', bdgfdgfdgfdgf, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);




class Vehicle {
    constructor(type, model, parts, fuel) {
        this.type = type;
        this.model = model;
        this.parts = parts;
        this.fuel = fuel;
        this.parts.quality = this.parts.engine * this.parts.power;
    }
    drive(num) {
        this.fuel -= num;
    }
}
// let parts = { engine: 6, power: 100 };
// let vehicle = new Vehicle('a', 'b', parts, 200);
// vehicle.drive(100);
// console.log(vehicle.fuel);
// console.log(vehicle.parts.quality);

let parts = { engine: 9, power: 500 };
let vehicle = new Vehicle('l', 'k', parts, 840);
vehicle.drive(20);
console.log(vehicle.fuel);