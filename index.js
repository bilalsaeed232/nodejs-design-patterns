const User = require("./User");

const alex = new User();
alex.name = "Alex";
alex.occupation = "Student";
alex.taxClass = "1";
alex.allowedWorkingHoursPerWeek = 19;

const wendy = new User();
wendy.name = "Wendy";
wendy.occupation = "Student";
wendy.taxClass = "1";
wendy.allowedWorkingHoursPerWeek = 19;

console.log(alex);
console.log(wendy);
