const Sequelize = require('sequelize')
const db = require('../../db')

const Student = db.define('student', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
    }
  })
console.log(Student)
  module.exports = Student
