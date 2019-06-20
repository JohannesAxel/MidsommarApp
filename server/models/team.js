'use strict';
module.exports = (sequelize, DataTypes) => {
  const Team = sequelize.define('Team', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    T1value: DataTypes.DECIMAL,
    T1points: DataTypes.INTEGER,
    T2value: DataTypes.DECIMAL,
    T2points: DataTypes.INTEGER,
    T3value: DataTypes.DECIMAL,
    T3points: DataTypes.INTEGER,
    T4value: DataTypes.DECIMAL,
    T4points: DataTypes.INTEGER,
    T5value: DataTypes.DECIMAL,
    T5points: DataTypes.INTEGER,
  }, {});
  Team.associate = function(models) {
    // associations can be defined here
  };
  return Team;
};