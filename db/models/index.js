const Student = require('./student');
const Campus = require('./campus');
Campus.hasMany(Student, {
  foreignKey: 'campusId',
  onDelete: 'cascade', // remove all associated stories
  hooks: true // makes the cascade actually work. Yay Sequelize!
});
Student.belongsTo(Campus, { as: 'campus' });
module.exports = {
    Campus,
    Student
};
