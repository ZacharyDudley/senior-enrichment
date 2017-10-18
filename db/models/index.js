'use strict';
// const Campus = require('./Campus')
// const Student = require('./Student')

// Campus.hasMany(Student)
// Student.belongsTo(Campus)

// module.exports = {
// 	Student,
// 	Campus,
// }

const Student = require('./Student');
const Campus = require('./Campus');

Campus.hasMany(Student, {
  foreignKey: 'campus_id',
  onDelete: 'cascade', // remove all associated stories
  hooks: true // makes the cascade actually work. Yay Sequelize!
});
Student.belongsTo(Campus);
console.log("WORK")
module.exports = {
    Campus,
    Student
};
