class Pizza {
  constructor(builder) {
    this.size = builder.size;
    this.pepperoni = builder.pepperoni;
    this.cheese = builder.cheese;
    this.bacon = builder.bacon;
  }
}

class PizzaBuilder {
  constructor(size) {
    this.size = size;
    this.pepperoni = false;
    this.cheese = false;
    this.bacon = false;
  }

  addPepperoni() {
    this.pepperoni = true;
    return this; // because we will be chaining these methods
  }

  addCheese() {
    this.cheese = true;
    return this;
  }

  addBacon() {
    this.bacon = true;
    return this;
  }

  build() {
    const pizza = new Pizza(this);
    return pizza;
  }
}

module.exports = PizzaBuilder;
