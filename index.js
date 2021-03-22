const Mall = require("./Mall");
const Shopper = require("./Shopper");
const Store = require("./Store");

let shoeStore = new Store("Shoes");
let dogFoodStore = new Store("Dog bites");

let adam = new Shopper("Adam");
let sandy = new Shopper("Sandy");
let david = new Shopper("David");

let mall = new Mall("Gold safa mall");

shoeStore.subscribe(adam);
shoeStore.subscribe(david);

//notice mall is subscribing to both stores
dogFoodStore.subscribe(sandy);
shoeStore.subscribe(mall);
dogFoodStore.subscribe(mall);

//announce the sale to the subscribers
shoeStore.sale(30);
dogFoodStore.sale(10);
