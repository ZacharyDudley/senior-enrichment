module.exports = function(sequelize, DataTypes) {
  sequelize.define('campus', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING
    }
  })
}
