const Sequelize = require('sequelize')
const path = require('path')
const db = require(path.resolve(__dirname, '../index.js'))

const Campus = db.define('campus', {
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    image: {
      type: Sequelize.STRING
    },
    place: {
      type: Sequelize.STRING
    }
  })

  module.exports = Campus
