const User = require("./User");

const student_prototype = new User();
student_prototype.occupation = "Student";
student_prototype.taxClass = "1";
student_prototype.allowedWorkingHoursPerWeek = 19;

module.exports = student_prototype;
