const Sequelize = require('sequelize')

const database = new Sequelize({
    database: 'teams',
    dialect: 'postgres',
    operatorsAliases: Sequelize.Op
  })

  const teams = database.define('teams', {
    name: { type: Sequelize.STRING, primaryKey: true, allowNull: false },
    T1value : { type: Sequelize.NUMBER, primaryKey: false, allowNull: true},
    T2value : { type: Sequelize.NUMBER, primaryKey: false, allowNull: true},
    T3value : { type: Sequelize.NUMBER, primaryKey: false, allowNull: true},
    T4value : { type: Sequelize.NUMBER, primaryKey: false, allowNull: true},
    T5value : { type: Sequelize.NUMBER, primaryKey: false, allowNull: true},
    T1point: { typ: Sequelize.BIGINT, primaryKey: false, allowNull: true},
    T2point: { typ: Sequelize.BIGINT, primaryKey: false, allowNull: true},
    T3point: { typ: Sequelize.BIGINT, primaryKey: false, allowNull: true},
    T4point: { typ: Sequelize.BIGINT, primaryKey: false, allowNull: true},
    T5point: { typ: Sequelize.BIGINT, primaryKey: false, allowNull: true}
})

module.exports = {
    teams,
    database
  }