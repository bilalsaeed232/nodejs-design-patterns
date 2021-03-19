//entry point file...

const Car = require("./Car");
const InsuredCar = require("./InsuredCar");

const car = new Car("Suzuki", "vxr");
const insuredCar = new InsuredCar("Honda", "civic", "ADAC");

console.log("🐭", car);
console.log("🐯", insuredCar);
