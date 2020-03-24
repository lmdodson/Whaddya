module.exports = function (sequelize, DataTypes) {
  var testdb = sequelize.define(
    "movies", {
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      body: {
        type: DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1]
        }
      },
      category: {
        type: DataTypes.STRING
      }
    }, {
      freezeTableName: true,
      timestamps: false
    }
  );
  testdb.sync();
  return testdb;
};