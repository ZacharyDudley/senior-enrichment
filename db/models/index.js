'use strict';
const Campus = require('./Campus')
const Student = require('./Student')

Campus.hasMany(Student)
Student.belongsTo(Campus)

module.exports = {
	Student,
	Campus,
}

// const Student = require('./student');
// const Campus = require('./campus');

// Campus.hasMany(Student, {
//   foreignKey: 'campusId',
//   onDelete: 'cascade', // remove all associated stories
//   hooks: true // makes the cascade actually work. Yay Sequelize!
// });
// Student.belongsTo(Campus, { as: 'campus' });

// module.exports = {
//     Campus,
//     Student
// };
