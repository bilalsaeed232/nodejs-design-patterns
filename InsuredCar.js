class InsuredCar {
  constructor(make, model, insuranceCompany, insured = true) {
    this.make = make;
    this.model = model;
    this.insured = insured;
    this.insuranceCompany = insuranceCompany;
  }
}

module.exports = InsuredCar;
