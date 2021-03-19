const student_prototype = require("./student_prototype");

const alex = student_prototype.clone();
alex.name = "Alex";

const wendy = student_prototype.clone();
wendy.name = "Wendy";

console.log(alex);
console.log(wendy);
