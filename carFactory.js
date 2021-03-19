const Car = require("./Car");
const InsuredCar = require("./InsuredCar");

const carFactory = (make, model, type, insuranceCompany) => {
  if (type === "insured") {
    return new InsuredCar(make, model, insuranceCompany);
  } else {
    return new Car(make, model);
  }
};

module.exports = carFactory;
