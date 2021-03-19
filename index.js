//entry point file...

const carFactory = require("./carFactory");

const car = carFactory("Suzuki", "vxr");
const insuredCar = carFactory("Honda", "civic", "insured", "ADAC");

console.log("🐭", car);
console.log("🐯", insuredCar);
